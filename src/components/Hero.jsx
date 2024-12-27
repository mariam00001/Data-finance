import React from 'react'
import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[1240px] mt-[-96] w-full h-screen mx-auto flex flex-col justify-center text-center  '>
        <p className='font-bold text-[#00df9a] p-2'>GROWING WITH DATA ANALYTICS</p>
        <h1 className=' font-bold md:text-7xl sm:text-6xl text-4xl md:py-6'>Grow With Data</h1>
        <div className='flex items-center  justify-center'>
          <p className='md:text-4xl sm:text-2xl text-xl py-4 font-bold mr-1'>Fast,Flexible,Financing for</p>
          <ReactTyped
            className='md:text-4xl sm:text-2xl text-xl py-4 font-bold'
            typeSpeed={120}
            backSpeed={140}
            loop
            strings={[
              "BTC",
              "BTB",
              "SASS",]} />
        </div>
        <p className='text-gray-500 md:text-2xl text-xl'>Monitor your data analytics to increase revenue for BTB,BTC,SASS platform. </p>
        <button className='bg-[#00df9a] text-white py-3 w-[200px]  mx-auto rounded-md my-6 font-bold'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero