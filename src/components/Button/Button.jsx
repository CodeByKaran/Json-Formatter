import React from 'react'

export default function Button({text,click}) {
   
   
  return (
    <button className="rounded bg-slate-950 p-2 text-[14px] font-normal text-gray-100 my-2 mx-3 w-[100px] active:ring active:ring-offset-2 active:ring-gray-900 transition-[ring] duration-300 ease-in-out" onClick={click}>
    {text}
    </button>
  )
}