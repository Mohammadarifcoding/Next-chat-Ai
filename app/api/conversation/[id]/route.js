import { chatModel } from "@/server/models/chat-model";
import { asyncOperation } from "../../utils";
import mongoose from "mongoose";
import { conversationModel } from "@/server/models/conversation-model";

export async function GET(req, { params }) {
  const id = params.id;
  return asyncOperation(async () => {
    const chats = await conversationModel.findById(id);
    return chats;
  });
}
