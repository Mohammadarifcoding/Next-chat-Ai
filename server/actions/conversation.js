"use server";

const { asyncFetch } = require("./utils");

const getConversation = async () => {
  return asyncFetch(async () => {
    const res = await fetch("http://localhost:3000/api/conversation");
    const json = await res.json();
    return json;
  });
};

export { getConversation };
