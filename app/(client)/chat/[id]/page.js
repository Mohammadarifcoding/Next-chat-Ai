import ChatPage from "@/components/chat/ChatPage";
import SingleChatPage from "@/components/chat/SingleChatPage";
import Conversation from "@/components/conversation/Conversation";
import ConversationHeader from "@/components/conversation/ConversationHeader";
import { getChats } from "@/server/actions/chat";
import React from "react";

const Chat = async ({ params }) => {
  const data = await getChats(params.id);
  return (
    <div className="flex-1 flex flex-col bg-white">
      <ConversationHeader id={params.id} />
      <Conversation chats={data} />
      <SingleChatPage />
    </div>
  );
};

export default Chat;
