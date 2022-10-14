import React from "react";

export default function Button({ text }) {
  return (
    <div className='border-2 bg-purple rounded-[60px] hover:scale-105 flex items-center justify-center py-2 w-fit px-4 transition-all duration-500 hover:bg-purple-2 text-white cursor-pointer'>
      {text}
    </div>
  );
}
