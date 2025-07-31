import { GoogleGenAI } from "@google/genai";
import { generateCustomContents } from "../utils";

export async function GET() {
  return Response.json({ message: "Hello World" });
}

export async function POST(request) {
  const data = await request.json();
  console.log(data);
  const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY,
  });
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: generateCustomContents(data),
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
