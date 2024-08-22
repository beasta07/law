import React from 'react'
import { FaEnvelopeOpenText } from "react-icons/fa";

const JoinUs = () => {
  return (
    <div className='lg:container  border   border-gray-300 mt-24'>
        <div className='lg:flex px-8   my-8  '>
            <div className='lg:flex justify-between'>
                <div className='lg:flex gap-8 py-8 '>
                    
                <div className=' md:block rounded-full w-[6.3rem] px-5 py-4 h-24 bg-[#EA5A3F]'>
                    <FaEnvelopeOpenText className='text-white text-6xl'/>
                </div>
                <div>
                    <h2 className='font-semibold lg:text-3xl text-xl mt-5'>
                     JOIN NOW AND GET 10% OFF YOUR NEXT PURCHASE    
                    </h2>
                </div>
                </div>
            <div className='w-[20%] flex justify-center'>

                <div className='w-px h-full bg-gray-300' ></div>
            </div>
                <div className='lg:w-[40%] my-8 md:my-8   '>
                    <p className='text-gray-600 text-lg'> Subscribe to the weekly newsletter for all the latest updates!</p>
                    <div className='lg:flex gap-2'>

                    <input className='border w-full border-gray-300  px-4 py-3  my-3' placeholder="Your Email Address" />
                    <button className='bg-black font-semibold text-white  px-4 py-1 my-3 '>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default JoinUs
