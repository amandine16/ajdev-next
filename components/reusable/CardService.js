import React from "react";
import Image from "next/image";
import Button from "../reusable/Button";


export default function CardService({ data }) {
  return (
    <div
      className={`bg-white px-10 drop-shadow-xl rounded-[30px] pt-8 pb-10 flex justify-center items-center flex-col container transition duration-500 hover:scale-[1.02] `}>
      <Image
        src={`/images/${data.logoUrl}`}
        alt='création et refonte de site web'
        width='120'
        height='120'
      />
      <p className='text-md text-center leading-[30px] text-black font-semibold pb-5'>
        {data.title}
      </p>
      <ul className="mb-4">
        {data.list.map((item, index) => {
          return (
            <li
              key={index}
              className='text-black text-center font-light py-2 text-base'>
              {item}
            </li>
          );
        })}
      </ul>
      <Button text={data.buttonText}></Button>
      {/* <p
        className={`mt-8 bg-green text-lg cursor-pointer transition duration-500 hover:scale-[1.02] drop-shadow-[0_35px_35px_rgb(250,250,250)]  `}>
        {data.buttonText}
      </p> */}
    </div>
  );
}
