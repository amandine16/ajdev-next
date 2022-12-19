import Link from "next/link";
import React from "react";

export default function CallWe() {
  return (
    <div className='bg-green md:w-fit w-full fixed py-3  transition duration-500 hover:scale-[1.02] cursor-pointer rounded px-4 items-center flex text-center md:rotate-90 justify-center left-1/2 transform -translate-x-1/2 md:-translate-x-0 bottom-0 md:bottom-40 md:-left-24 z-50'>

      <Link href="#contact" >
        Je veux être recontacter !
      </Link>
    </div>
  );
}
