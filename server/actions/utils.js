export const asyncFetch = async (callback) => {
  try {
    const result = await callback();
    return result;
  } catch (er) {
    return console.log(er);
  }
};
