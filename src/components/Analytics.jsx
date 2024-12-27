import React from 'react'
import laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='bg-white w-full py-16 px-4 '>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img src={laptop} className='w-[500px] my-4 mx-auto' alt="" />
        <div className="flex flex-col justify-center">
        <p className='md:text-2xl sm:text-2xl text-xl font-bold text-[#00df9a] pl-2 '>DATA ANALYTICS DASHBOARD</p>
        <h1 className=' font-bold md:text-4xl sm:text-2xl text-xl py-1 pl-2'>Manage Data Analytics Centrally</h1>
        <p className='pl-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam exercitationem, repellendus, quaerat omnis repudiandae, eius ipsum ad ullam magnam sequi totam dolore iste eos sint dolorem. Blanditiis fuga eum rem.</p>
        <button className='bg-[#000300] text-[#00df9a] py-3 w-[200px]  mx-auto rounded-md my-6 font-bold ml-2'>Get Started</button>
        </div>
        
    </div>
    </div>
  )
}

export default Analytics