import Image from 'next/image';
import React from 'react';

const Sidebar = () => {
    return (
   <div className="w-64  bg-gray-900 text-white flex flex-col h-full">
  {/* Header */}
  <div className="p-4 border-b border-gray-700">
    <div className="flex items-center space-x-2">
      <div className="w-2 h-2 bg-white rounded-full" />
      <div className="w-2 h-2 bg-white rounded-full" />
      <span className="font-semibold text-sm">CognitionX</span>
    </div>
  </div>
  {/* Navigation Menu */}
  <nav className="flex-1 p-4 space-y-2  overflow-y-auto">
    <div className="space-y-1">
      <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" /> </g></svg>

        <span className="text-sm">Create Chat</span>
      </a>
    </div>
    {/* Conversations */}
    <div className="pt-4 ">
      <span className="text-gray-500 text-xs uppercase font-semibold">Conversations</span>
      <div className="space-y-1  mt-3">
        <a href="#" className="flex items-center space-x-3 px-2 py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer ">
          <span className="text-sm text-zinc-300">Learning NLP vs LLM</span>
        </a>
        <a href="#" className="flex items-center space-x-3 px-2 py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer ">
          <span className="text-sm text-zinc-300">Microservice Data Orchestration</span>
        </a>
        <a href="#" className="flex items-center space-x-3 px-2 py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer ">
          <span className="text-sm text-zinc-300">Deep Cloning Alternatives</span>
        </a>
        <a href="#" className="flex items-center space-x-3 px-2 py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer ">
          <span className="text-sm text-zinc-300">AI Database Diagram Generation</span>
        </a>
      </div>
    </div>
  </nav>
  {/* Footer */}
  <div className="p-4 border-t border-gray-700 mt-auto">
    <div className="text-center space-y-2">
      <span className="text-xs text-gray-400">Powered by</span>
      <div className="flex items-center justify-center space-x-2">
        <Image src="/logo.svg" alt="Logo" className="h-10" width={100} height={100} />
      </div>
      <p className="text-xs text-gray-500">
        © 2025 All rights reserved
      </p>
    </div>
  </div>
</div>

    );
};

export default Sidebar;