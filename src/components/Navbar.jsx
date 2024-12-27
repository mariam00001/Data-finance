import React, { useState } from 'react'
import { AiOutlineMenu} from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [nav,setNav] =useState(false)
  const handelNav =()=>{
    setNav(!nav)
  }
  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4  '>
      <h1 className='w-full text-3xl  text-[#00df9a] font-bold '>React.</h1>
      <ul className='hidden md:flex '>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Home</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handelNav}  className='block md:hidden' >
     {nav ?  <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} /> }
      </div>
      <ul className={nav ? ' fixed top-0 left-0 w-[60%] border-r h-full bg-[#000300]  border-gray-600 ease-in-out duration-500  ' : 'fixed left-[-100%] ease-in-out duration-500'}>
      <h1 className='w-full text-3xl fw-bold text-[#00df9a] m-4 '>React.</h1>
        <li className='p-4 border-b border-gray-600'>Home</li>
        <li className='p-4 border-b border-gray-600'>Company</li>
        <li className='p-4 border-b border-gray-600'>Home</li>
        <li className='p-4 border-b border-gray-600'>About</li>
        <li className='p-4 border-b border-gray-600'>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar