import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({title ="Get Started"}) {
  return (
    <div className='max-w-40 h-10 py-2 px-4 bg-zinc-100 text-black rounded-full flex items-center'>
        <span className='text-sm font-medium'>{title}</span>
        <IoIosReturnRight className='ml-5 '/>
        </div>
  )
}

export default Button