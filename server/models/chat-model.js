import mongoose, { Schema } from "mongoose";

const chatSchema = new Schema({
  conversationId: {
    type: Schema.Types.ObjectId,
    ref: "Conversation",
    required: true,
  },
  role: { type: String, enum: ["user", "assistant", "system"], required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const chatModel =
  mongoose.models.chat ?? mongoose.model("chat", chatSchema);
