import React from 'react'
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { MdLock } from "react-icons/md";
import { IoHome } from "react-icons/io5";

function NavBar() {
  return (
    <header className='flex flex-row item shadow-md p-2'>
     <div className='flex flex-row items-center justify-between w-1/2'>
     <h2 className='text-semibold text-xl'>welcome onboard</h2>
      <div className='bg-blue-400 p-1 rounded-sm'>
       <FaRegStarHalfStroke size={32}/>
      </div>
      <div className='bg-blue-400 p-1 rounded-sm hover:cursor-pointer hover:px-5 transition-all duration-200 ease-in-out hover:bg-green-500'>personal</div>
       <div className='bg-blue-400 p-1 rounded-sm hover:cursor-pointer hover:px-5 transition-all duration-200 ease-in-out hover:bg-green-500 flex flex-row items-center gap-2'>
       <MdLock />
       <span>Private</span>
       
       </div>

     </div>
     <div className='flex flex-row items-center justify-end w-1/2 gap-3'>
     <div className='bg-blue-400 p-1 flex flex-row items-center rounded-sm gap-2 hover:cursor-pointer hover:px-5 transition-all duration-200 ease-in-out hover:bg-green-500'><IoHome />Home</div>
     <div className='bg-blue-400 p-1 rounded-sm'>Show menu</div>

     </div>
    </header>
  )
}

export default NavBar
