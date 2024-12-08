import React from 'react'
import ServiceItems from "../../data/service.json";
import { GoArrowUpRight } from "react-icons/go";

const Services = () => {
  return (
    <div>
     <div className='container py-20 md:py-28 px-4 md:px-0'>

          <div className=' grid md:grid-cols-3 gap-6 '>
          <div className='border border-gray-300 shadow-lg rounded-xl flex flex-col justify-center p-12'>
               <h3 className='font-bold text-sm uppercase'>Our export services</h3>
               <h2 className='text-3xl lg:text-4xl font-bold py-1 pb-4'>We are Exports In</h2>
               <p className='md:hidden lg:block'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem reprehenderit eos maxime veniam placeat id culpa animi repudiandae, voluptatibus deserunt.</p>
          </div>
               {ServiceItems.slice(0, 2).map((items, index) => (
                    <div key={index} className='border border-gray-300 shadow-lg rounded-xl overflow-hidden relative'>
                         <img src={items?.image} alt="" className='aspect-[1/1]' />
                         <div className='flex items-center justify-between p-4 absolute bottom-0 backdrop-blur-sm bg-black bg-opacity-35 w-full text-white rounded-b-xl'>
                              <h2 className='p-1 bg-gray-200 rounded-full px-4 text-black'>{items?.name}</h2>
                              <button className='flex items-center gap-2'>View More <GoArrowUpRight /></button>
                         </div>
                    </div>
               ))}
          </div>

          <div className=' grid md:grid-cols-3 gap-6 mt-6 md:mt-12'>
               {ServiceItems.slice(2, 5).map((items, index) => (
                    <div key={index} className='border border-gray-300 shadow-lg rounded-xl overflow-hidden relative'>
                         <img src={items?.image} alt="" className='aspect-[1/1]' />
                         <div className='flex items-center justify-between p-4 absolute bottom-0 backdrop-blur-sm bg-black bg-opacity-35 w-full text-white rounded-b-xl'>
                              <h2 className='p-1 bg-gray-200 rounded-full px-4 text-black'>{items?.name}</h2>
                              <button className='flex items-center gap-2'>View More <GoArrowUpRight /></button>
                         </div>
                    </div>
               ))}

          </div>
     </div>
    </div>
  )
}

export default Services