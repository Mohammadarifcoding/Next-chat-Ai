import { GoogleGenAI } from "@google/genai";
import { generateCustomContents } from "../utils";
import { chatModel } from "@/models/chat-model";

export async function GET() {
  return Response.json({ message: "Hello World" });
}

export async function POST(request) {
  const data = await request.json();
  const getChats = await chatModel.find({}).sort({ id: -1 });
  const chats = {
    previousMessage: getChats,
    currentMessage: data.currentMessage,
  };

  const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY,
  });
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: generateCustomContents(chats),
    config: {
      responseMimeType: "text/x.enum",
      responseJsonSchema: {
        type: "object",
        properties: {
          response: {
            type: "string",
          },
        },
      },
    },
  });
  return Response.json(
    { result: response },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
