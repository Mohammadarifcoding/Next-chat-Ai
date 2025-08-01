"use client"


import React, { useContext, useEffect } from 'react';
import AiChatbox from './AiChatbox';
import HChatBox from './HChatBox';
import { ChatContext } from '@/context';

const Conversation = ({chats}) => {
    const { chat, setChat, state, dispatch } = useContext(ChatContext);
   useEffect(() => {
    if (chats?.length) {
      dispatch({ type: "FETCH_SUCCESS", payload: chats });
    }
    return ()=> dispatch({type:"CLEAR_CHATS"})
  }, [chats, dispatch]);
    return (
<div className="flex-1 flex flex-col p-8 overflow-y-auto space-y-6">
 {
  state.chats?.map((chat)=> <div key={chat._id}>
    {
      chat.role == "user" ? <HChatBox chat={chat}/>:<AiChatbox chat={chat}/>
  
    }
  </div> )
 }
  {
    state?. messageSending && <HChatBox chat={{content: chat, createdAt: new Date(), sending:true}}/>
  }
</div>

    );
};

export default Conversation;