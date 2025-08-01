"use client";
import { ChatContext } from "@/context";
import { chatintialState, chatReducers } from "@/reducer/ChatReducer";
import { useReducer, useState } from "react";

const ChatProvider = ({ children }) => {
  const [chat, setChat] = useState("");
  const [state, dispatch] = useReducer(chatReducers, chatintialState);
  return (
    <ChatContext.Provider value={{ chat, setChat, state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
export default ChatProvider;
