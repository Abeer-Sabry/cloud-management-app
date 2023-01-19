import React from "react";

const PercentBox = ({ percent, category }) => {
  return (
    <div
      className="flex flex-col justify-center items-center bg-white p-8 shadow-md 
     shadow-zinc-300/50 mx-3 my-6 md:mb-0 rounded-lg"
    >
      <p className="text-4xl text-indigo-600 font-bold mb-2">{percent}</p>
      <p className="text-zinc-400 capitalize text-xs">{category}</p>
    </div>
  );
};

export default PercentBox;
