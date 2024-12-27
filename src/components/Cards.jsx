import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'
const Cards = () => {
    return (
        <div className='bg-white py-[8rem] px-6 w-full'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 '>
            <div className=' flex flex-col border w-full p-3 my-4 shadow-xl rounded-lg hover:scale-105 duration-500 mt-20 '>
                    <img src={single} className='w-20 mt-[-3rem] mx-auto bg-white  ' alt="/" />
                    <h1 className='font-bold md:text-4xl sm:text-2xl text-xl text-center py-2'>Single User</h1>
                    <p className='font-bold md:text-4xl sm:text-2xl text-xl text-center py-2'>$149</p>
                <div className='text-center'>
                    <p className='border-b font-bold py-1  mx-8'>500GB Storage</p>
                    <p className='border-b font-bold py-1  mx-8'>1 Granted User</p>
                    <p className='border-b font-bold py-1  mx-8'>Send up to 2 GB</p>
                    <button  className='bg-[#00df9a] text-black py-3 w-[200px]  mx-auto rounded-md my-6 font-bold'>Start Trial</button>
                </div>
                </div>
                <div className=' flex flex-col border w-full p-3 my-8 shadow-xl rounded-lg md:my-6 hover:scale-105 duration-500  bg-gray-100'>
                    <img src={double} className='w-20 mt-[-3rem] mx-auto bg-white  ' alt="/" />
                    <h1 className='font-bold md:text-4xl sm:text-2xl text-xl text-center py-2'>Single User</h1>
                    <p className='font-bold md:text-4xl sm:text-2xl text-xl text-center py-2'>$149</p>
                <div className='text-center'>
                    <p className='border-b font-bold py-1  mx-8'>500GB Storage</p>
                    <p className='border-b font-bold py-1  mx-8'>1 Granted User</p>
                    <p className='border-b font-bold py-1  mx-8'>Send up to 2 GB</p>
                    <button  className='bg-[#00df9a] text-black py-3 w-[200px]  mx-auto rounded-md my-6 font-bold'>Start Trial</button>
                </div>
                </div>
                <div className=' flex flex-col border w-full p-3 my-4  shadow-xl rounded-lg hover:scale-105 duration-500 mt-20 '>
                    <img src={triple} className='w-20 mt-[-3rem] mx-auto bg-white  ' alt="/" />
                    <h1 className='font-bold md:text-4xl sm:text-2xl text-xl text-center py-2'>Single User</h1>
                    <p className='font-bold md:text-4xl sm:text-2xl text-xl text-center py-2'>$149</p>
                <div className='text-center'>
                    <p className='border-b font-bold py-1  mx-8'>500GB Storage</p>
                    <p className='border-b font-bold py-1  mx-8'>1 Granted User</p>
                    <p className='border-b font-bold py-1  mx-8'>Send up to 2 GB</p>
                    <button  className='bg-[#00df9a] text-black py-3 w-[200px]  mx-auto rounded-md my-6 font-bold'>Start Trial</button>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Cards