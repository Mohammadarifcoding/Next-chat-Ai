"use client"
import React, { useState } from 'react';
import Chat from './Chat';

const SingleChatPage = () => {
  const [chat, setChat] = useState("")
    return (
           <div className=" w-full   bg-white h-full flex flex-col justify-between">

      <Chat chat={chat} setChat={setChat}/>
    </div>
    );
};

export default SingleChatPage;