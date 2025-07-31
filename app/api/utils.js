export const generateCustomContents = (data) => {
  const newData = data.previousMessage.map((item) => {
    return {
      role: item.role,
      parts: [{ text: item.content }],
    };
  });

  const finalData = [
    ...newData,
    {
      role: data.currentMessage.role,
      parts: [{ text: data.currentMessage.content }],
    },
  ];
  return finalData;
};
