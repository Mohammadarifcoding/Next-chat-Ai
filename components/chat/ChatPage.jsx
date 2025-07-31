'use client';
import React, { useState } from 'react';
import Chatintro from './Chatintro';
import Prompt from './Prompt';
import Chat from './Chat';

const ChatPage = () => {
    const [chat, setChat] = useState("")
    return (
           <div className=" w-full   bg-white h-full flex flex-col justify-between">
      <div className=" flex flex-col items-center justify-center p-8 overflow-y-auto">
        <Chatintro />

        <Prompt setChat={setChat}/>
      </div>

      <Chat chat={chat} setChat={setChat} />
    </div>
    );
};

export default ChatPage;