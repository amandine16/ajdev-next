import React from 'react'

export default function Title({ title, subtitle, right, left, center }) {
    return (
        <div className={`z-20 flex flex-col ${right ? "items-end" : "items-start"} ${center && "items-center"}`}>
            <p className={`z-20 text-green text-lg drop-shadow-[0_35px_35px_rgb(250,250,250)]  ${right ? 'text-right' : 'text-left'} ${center && "text-center"}`}>{subtitle}</p>
            <p p className={`z-20 text-black text-xl font-bold leading-[45px] pt-1 ${right ? 'text-right' : 'text-left'} ${center && "text-center"}`}>{title}</p>
        </div>
    )
}
