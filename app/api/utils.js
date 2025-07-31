import { GoogleGenAI } from "@google/genai";

export const generateCustomContents = (data) => {
  const newData = data.previousMessage.map((item) => {
    return {
      role: item.role,
      parts: [{ text: item.content }],
    };
  });

  const finalData = [
    {
      role: "user",
      parts: [
        {
          text: "You are an AI chatbot. your name is Chat Ai. Your task is to answer users question in a concise way and easy to understand. So understand the context and answer users message",
        },
      ],
    },
    ...newData,
  ];
  console.log(JSON.stringify(finalData));
  return finalData;
};

export const asyncOperation = async (callback) => {
  try {
    const result = await callback();
    return Response.json({
      status: "success",
      data: result,
    });
  } catch (er) {
    return Response.json({ error: er.message });
  }
};

export const getGeminiResultFromChat = async (chats, currentMessage) => {
  const chatData = {
    previousMessage: chats,
    currentMessage: currentMessage,
  };
  console.log("This is the data", chatData);
  const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY,
  });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: generateCustomContents(chatData),
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
  return response;
};
