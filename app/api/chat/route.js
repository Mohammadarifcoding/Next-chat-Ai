import r from "rype";
import { asyncOperation, getGeminiResultFromChat } from "../utils";
import { conversationModel } from "@/server/models/conversation-model";
import { chatModel } from "@/server/models/chat-model";
import mongoose from "mongoose";
import { revalidatePath } from "next/cache";
const schema = r.object({
  conversationId: r.string().optional(),
  role: r.string().required(),
  content: r.string().required(),
});
export async function POST(request) {
  return asyncOperation(async () => {
    const raw = await request.json();
    const parsed = schema.parse(raw);

    let conversationId = parsed.conversationId;
    if (!conversationId) {
      const conversation = await conversationModel.create({
        title: "New conversation",
      });
      conversationId = conversation._id.toString();
    }
    const chat = await chatModel.create({
      conversationId: new mongoose.Types.ObjectId(conversationId),
      role: parsed.role,
      content: parsed.content,
    });
    const previousessage = await chatModel
      .find({ conversationId: new mongoose.Types.ObjectId(conversationId) })
      .sort({ createdAt: 1 });

    const resultGemini = await getGeminiResultFromChat(previousessage, {
      role: parsed.role,
      content: parsed.content,
    });
    const response = resultGemini.candidates[0].content.parts[0].text;
    await chatModel.create({
      conversationId: new mongoose.Types.ObjectId(conversationId),
      role: "model",
      content: response,
    });
    revalidatePath(`/chat/${conversationId}`);
    return { success: true, data: response, status: 201 };
  });
}
