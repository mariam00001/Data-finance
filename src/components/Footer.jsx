import React from 'react'
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='py-16 mx-8 text-gray-300 '>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8   '>
                <div>
                    <h1 className='w-full text-3xl font-bold text-[#00df9a] pb-4 '>React.</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti doloremque, obcaecati molestias deserunt, molestiae commodi quo cum hic magni suscipit quis nostrum, amet quasi adipisci labore expedita provident sed saepe!</p>
                    <div className='flex justify-between pt-6 md:w-[75%]'>
                        <FaFacebookF size={20} className='hover:text-[#00df9a] transition-all ' />
                        <FaGithub size={20} className='hover:text-[#00df9a] transition-all ' />
                        <FaInstagram size={20} className='hover:text-[#00df9a] transition-all ' />
                        <FaTwitter size={20} className='hover:text-[#00df9a] transition-all ' />
                    </div>
                </div>
                <div className=' lg:col-span-2 flex justify-between  '>
                    <div>
                        <h6 className='pb-2'>Solutions</h6>
                        <ul>

                            <li className='pb-2'>Analytics</li>
                            <li className='pb-2'>Marketing</li>
                            <li className='pb-2'>Commerce</li>
                            <li className='pb-2'>Insights</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='pb-2'>Support</h6>
                        <ul>
                            <li className='pb-2'>Pricing</li>
                            <li className='pb-2'>Documentation</li>
                            <li className='pb-2'>Guides</li>
                            <li className='pb-2'>API Status</li>
                        </ul>

                    </div>
                    <div>
                        <h6>Company</h6>
                        <ul>
                            <li className='pb-2'>About</li>
                            <li className='pb-2'>Blog</li>
                            <li className='pb-2'>Jobs</li>
                            <li className='pb-2'>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h6>Legal</h6>
                        <ul>
                        <li className='pb-2'>Claim</li>
                        <li className='pb-2'>Policy</li>
                        <li className='pb-2'>Terms</li>
                    </ul>
                    </div>

                   
                </div>
            </div>
        </div>
    )
}

export default Footer