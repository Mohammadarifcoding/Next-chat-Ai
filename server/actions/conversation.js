"use server";

import axios from "axios";

const { asyncFetch } = require("./utils");

const getConversation = async () => {
  return asyncFetch(async () => {
    const res = await axios.get("http://localhost:3000/api/conversation");
    return res.data;
  });
};

const createNewConversation = async () => {
  return asyncFetch(async () => {
    const res = await axios.post("http://localhost:3000/api/conversation", {
      title: "New conversation",
    });
    return res.data;
  });
};

const getSingleConversation = async (id) => {
  return asyncFetch(async () => {
    const res = await axios.get(`http://localhost:3000/api/conversation/${id}`);
    return res.data?.data;
  });
};

export { getConversation, createNewConversation, getSingleConversation };
