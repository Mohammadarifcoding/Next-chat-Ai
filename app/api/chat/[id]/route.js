import mongoose from "mongoose";
import { asyncOperation } from "../../utils";
import { chatModel } from "@/server/models/chat-model";

export async function GET(req, { params }) {
  const id = params.id;
  return asyncOperation(async () => {
    const chats = await chatModel
      .find({ conversationId: new mongoose.Types.ObjectId(id) })
      .sort({ createdAt: 1 });
    return chats;
  });
}
