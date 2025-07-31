"use client"
import React, { useState } from 'react';
import Chat from './Chat';

const SingleChatPage = () => {
  const [chat, setChat] = useState("")
    return (
    <Chat chat={chat} setChat={setChat}/>
    );
};

export default SingleChatPage;