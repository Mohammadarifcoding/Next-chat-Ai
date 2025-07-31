import mongoose, { Schema } from "mongoose";

const ConversationSchema = new Schema({
  title: { type: String, default: "New chat" },
  createdAt: { type: Date, default: Date.now },
});

export const conversationModel =
  mongoose.models.conversation ??
  mongoose.model("conversation", ConversationSchema);
