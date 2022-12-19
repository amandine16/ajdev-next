import Link from "next/link";
import React from "react";

export default function Button({ text, link }) {
  return (
    <div className=' mx-auto md:mx-0  bg-purple rounded-[60px] hover:scale-105 flex items-center justify-center py-2 w-fit px-4 transition-all duration-500 hover:bg-purple-2 text-white cursor-pointer'>

      <Link href={link} >
        {text}
      </Link>
    </div>
  );
}
