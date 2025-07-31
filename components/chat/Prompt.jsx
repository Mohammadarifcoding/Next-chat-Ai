import React from 'react';
import Spark from './../icon/Spark';

const Prompt = () => {
    return (
<div className="space-y-3 w-full max-w-2xl">
  <button className="w-full flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer text-left">
    <Spark/>
    <span className="text-gray-700">It looks like you&apos;re writing an email, would you like help drafting it?</span>
  </button>
  <button className="w-full flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer text-left">
   <Spark/>
    <span className="text-gray-700">Generate a report on customer feedback for the last 3 months.</span>
  </button>
  <button className="w-full flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer text-left">
    <Spark/>
    <span className="text-gray-700">Analyze this month&apos;s sales performance</span>
  </button>
</div>

    );
};

export default Prompt;