
import React from 'react';
import Spark from './../icon/Spark';

const Prompt = ({setChat}) => {
  const sampleQuestions = [
    "It looks like you're writing an email, would you like help drafting it?",
    "Generate a report on customer feedback for the last 3 months.",
    "Analyze this month's sales performance",
  ]
    return (
<div className="space-y-3 w-full max-w-2xl">

  {
    sampleQuestions.map((question,i) => (
      <button onClick={()=> {setChat(question)}} key={i} className="w-full flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer text-left">
    <Spark/>
    <span className="text-gray-700">{question}</span>
  </button>
    ))
  }
  
  
</div>

    );
};

export default Prompt;