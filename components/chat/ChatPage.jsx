'use client';
import React, { useContext, useReducer, useState } from 'react';
import Chatintro from './Chatintro';
import Prompt from './Prompt';
import Chat from './Chat';
import { ChatContext } from '@/context';

const ChatPage = () => {
    const { chat, setChat } = useContext(ChatContext)
    return (
         <div className="flex-1 flex flex-col bg-white justify-between">
      <div className=" flex flex-col items-center justify-center p-8 overflow-y-auto">
        <Chatintro />

        <Prompt setChat={setChat}/>
      </div>

      <Chat />
    </div>
    );
};

export default ChatPage;