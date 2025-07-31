export const generateCustomContents = (data) => {
  const newData = data.previousMessage.map((item) => {
    return {
      role: item.role,
      parts: [{ text: item.content }],
    };
  });

  const finalData = [
    {
      role: "system",
      parts: [
        {
          text: "You are an AI chatbot. your name is Chat Ai. Your task is to answer users question in a concise way and easy to understand. So understand the context and answer users message",
        },
      ],
    },
    ...newData,
    {
      role: data.currentMessage.role,
      parts: [{ text: data.currentMessage.content }],
    },
  ];
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
