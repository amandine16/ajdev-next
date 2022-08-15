import React from 'react'

export default function Button({ text }) {
    return (
        <div className='border-2 border-purple rounded-[60px] text-black flex items-center justify-center py-2 w-fit px-4 transition-all duration-500 hover:bg-purple hover:text-white cursor-pointer'>{text}</div>
    )
}
