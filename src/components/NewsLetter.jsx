import React from 'react'

const NewsLetter = () => {
  return (
    <div className='text-white py-16 px-6'>
      <div className='max-w-[1240px] grid lg:grid-cols-3 mx-auto '>
        <div className="lg:col-span-2">
          <h1 className=' font-bold md:text-4xl sm:text-3xl text-2xl py-1 pl-2'>Want tips & tricks to optimize your flow?</h1>
          <p className='pl-2 font-bold '>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className='mt-2'>
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input type="email" className='w-full py-2 rounded-sm md:mr-2 p-2' placeholder='Enter Email ' />
            <button className='bg-[#00df9a] text-white py-3 w-[200px]   md:mx-0 rounded-md my-6 font-bold ml-2'>Notify Me</button>
          </div>
          <p className='pl-2'>We care about the protection of your data.<span className='text-[#00df9a]'> Read our Privacy Policy</span></p>
        </div>
      </div>
    </div>


  )
}

export default NewsLetter