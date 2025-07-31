import React from 'react';
import AiChatbox from './AiChatbox';
import HChatBox from './HChatBox';

const Conversation = ({chats}) => {
    return (
<div className="flex-1 flex flex-col p-8 overflow-y-auto space-y-6">
 {
  chats?.map((chat)=> <div key={chat._id}>
    {
      chat.role == "user" ? <HChatBox chat={chat}/>:<AiChatbox chat={chat}/>
  
    }
  </div> )
 }
  
</div>

    );
};

export default Conversation;