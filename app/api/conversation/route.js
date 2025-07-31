import { conversationModel } from "@/models/conversation-model";
import r from "rype";
import { asyncOperation } from "../utils";
const schema = r.object({
  title: r.string(),
  createdAt: r.string().optional(),
});
export async function POST(request) {
  return await asyncOperation(async () => {
    const data = await request.json();
    console.log(data);
    const check = schema.parse(data);
    const conversation = await conversationModel.create(check);
    return conversation;
  });
}

export async function GET() {
  return await asyncOperation(async () => {
    const conversation = await conversationModel.find({}).sort({ id: -1 });
    return conversation;
  });
}
