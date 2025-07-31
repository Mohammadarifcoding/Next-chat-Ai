import { getTimeJs } from '@/utils/getTime';
import React from 'react';

const AiChatbox = ({chat}) => {
    return (
         <div className="flex items-start space-x-3">
    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
      AI
    </div>
    <div className="flex-1">
      <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 max-w-3xl">
        <p className="text-gray-800">{chat.content}</p>
      </div>
      <span className="text-xs text-gray-500 mt-1 block">{getTimeJs(chat.createdAt)}</span>
    </div>
  </div>
    );
};

export default AiChatbox;