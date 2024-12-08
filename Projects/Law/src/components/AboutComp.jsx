import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Fact from './ForLanding/Fact';

const AboutComp = () => {
  return (
    <>
     <div className='container flex md:flex-row flex-col  gap-5 items-center px-4 md:px-0'>

          <div className='flex-1 md:ml-12 mt-12 md:mt-0'>
               <h3 className='font-bold text-sm uppercase'>about us</h3>
               <h2 className='text-4xl font-bold py-5 pb-10'>Empowering Businesses with Legal and Financial Expertise.</h2>
               <ul className='md:w-[80%]'>
                    <div className='flex gap-5'>
                         <div>
                              <i><IoMdCheckmarkCircleOutline className='text-2xl mt-px' /></i>                              
                         </div>
                         <div>
                         <h2 className='text-lg font-bold'>Certified Legal Professionals</h2>
                         <p>Providing trusted legal solutions, including commercial litigation and intellectual property registration, tailored to your business needs.</p>
                         </div>
                    </div>
                    <div className='flex gap-5 my-6'>
                         <div>
                              <i><IoMdCheckmarkCircleOutline className='text-2xl mt-px' /></i>                              
                         </div>
                         <div>
                         <h2 className='text-lg font-bold'>Collaborative Financial Expertise</h2>
                         <p>Our team of seasoned auditors and consultants ensures seamless financial compliance and strategic growth for your business.</p>
                         </div>
                    </div>
                    <div className='flex gap-5'>
                         <div>
                              <i><IoMdCheckmarkCircleOutline className='text-2xl mt-px' /></i>                              
                         </div>
                         <div>
                         <h2 className='text-lg font-bold'>Innovative Corporate Advisory</h2>
                         <p>Specializing in mergers, acquisitions, and labor law compliance to drive business efficiency and success.</p>
                         </div>
                    </div>
               </ul>
          </div>

          <div className='flex-1'>
               <div className='flex gap-5 mt-10 md:mt-0'>
               <img src="/public/images/about2.jpg" alt="Team Working" className='rounded-md' />
               </div>
          </div>
     </div>
     <Fact />
    </>
  )
}

export default AboutComp
