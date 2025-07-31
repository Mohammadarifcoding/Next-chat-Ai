"use client"
import React, { useState } from 'react';
import Spark from './../icon/Spark';
import { usePathname, useRouter } from 'next/navigation';
import { useAxios } from '@/hooks/axios';
import { revalidatePath } from 'next/cache';

const Chat = ({ chat, setChat }) => {
  const axios = useAxios()
  const pathName = usePathname()
  const navigate = useRouter()
  const [loading, setLoading] = useState(false)
  const handleSend = async(e)=> {
   
    e.preventDefault()
     console.log("I am here")
    const message = chat.trim()
    if(!message) return
    setLoading(true)
    const data = {
      role: "model",
      content: message
    }
    if(pathName.includes("/chat/")){
      data.conversationId = pathName.split("/")[2]
    }
    const send = await axios.post(`/chat`, data)
    console.log(send)
     if(!pathName.includes("/chat/")){
       navigate.push(`/chat/${send.data.data.data?.conversationId}`)
     }
     setLoading(false)
     setChat("")
  }
  return (
    <form onSubmit={handleSend} className="p-6 border-t border-gray-200 flex w-full gap-2">
      <div className="relative w-[calc(100%-100px)]">
        <input
          type="text"
          value={chat}
          onChange={(e) => setChat(e.target.value)}
          placeholder="Ask me Anything"
          className="w-full p-4 pr-20 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
          <Spark />
        </div>
      </div>
      <button type='submit' className="bg-black w-[100px] text-center justify-center hover:bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors cursor-pointer">
        <span className="text-sm">{loading ? "Sending..." : "Send"}</span>
      </button>
    </form>
  );
};

export default Chat;
