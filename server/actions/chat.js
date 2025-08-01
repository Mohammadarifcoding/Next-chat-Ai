import axios from "axios";
import { asyncFetch } from "./utils";

const getChats = async (id) => {
  return await asyncFetch(async () => {
    const data = await axios.get(`http://localhost:3000/api/chat/${id}`);
    return data.data.data;
  });
};
const refetchChats = async (conversationId, dispatch) => {
  const chatData = await getChats(conversationId);
  dispatch({ type: "FETCH_SUCCESS", payload: chatData });
};
export { getChats, refetchChats };
