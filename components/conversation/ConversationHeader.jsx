
import React from 'react';
import DropDown from './DropDown';
import { getSingleConversation } from '@/server/actions/conversation';
const ConversationHeader = async({id}) => {
  const data = await getSingleConversation(id)
    return (
<div className="px-8 py-4 border-b border-gray-200 bg-white sticky top-0 z-10">
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-3">
      <div className="w-3 h-3 bg-green-500 rounded-full" />
      <h1 className="text-lg font-semibold text-gray-800">{data.title}</h1>
    </div>
    <DropDown/>
  </div>
</div>

    );
};

export default ConversationHeader;