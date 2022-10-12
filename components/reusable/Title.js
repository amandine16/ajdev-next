import React from "react";

export default function Title({ title, subtitle, center }) {
  return (
    <div className={"z-20 flex flex-col"}>
      <p
        className={`text-green text-[20px] drop-shadow-[0_35px_35px_rgb(250,250,250)] break-words ${
          center && "text-center"
        }`}>
        {subtitle}
      </p>
      <p
        className={`text-black text-xl font-bold leading-[45px] pt-1 ${
          center && "text-center"
        }`}>
        {title}
      </p>
    </div>
  );
}
