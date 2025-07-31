import r from "rype";
import { asyncOperation } from "../utils";
import { conversationModel } from "@/server/models/conversation-model";
const schema = r.object({
  title: r.string(),
  createdAt: r.string().optional(),
});
export async function POST(request) {
  return await asyncOperation(async () => {
    const data = await request.json();
    const check = schema.parse(data);
    const conversation = await conversationModel.create(check);
    return conversation;
  });
}

export async function GET() {
  return await asyncOperation(async () => {
    const conversation = await conversationModel.find({});
    return conversation;
  });
}
