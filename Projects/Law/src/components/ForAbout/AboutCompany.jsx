import React from 'react'
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const AboutCompany = () => {
  return (
    <>
     <div className='container py-24 pb-28 md:flex gap-16 items-center px-4 md:px-0'>
          <div className='flex-1 pb-14 md:pb-0'><img src="/images/ForAbout/about1.png" alt="" /></div>
          <div className='flex-1'>
               <h3 className='font-bold text-sm uppercase'>about our company</h3>
               <h2 className='text-4xl font-bold pt-3 w-[90%] tracking-wide'>Expert Legal Solutions & Corporate Services</h2>
               <h2 className='py-6 text-3xl flex items-center gap-3'><span className=' font-bold'>Multiple</span> Years of Experiences</h2>
               <p className='pb-8'>Prudential Corporate and Legal Services Pvt. Ltd. (PCLS), established in 2021, is a premier corporate consultancy and law firm specializing in commercial litigation and consultancy services. With a focus on delivering excellence, we provide a comprehensive range of solutions, including legal advisory, accounting, and auditing services. Our mission is to empower businesses with expert legal and financial support, ensuring their compliance and success in a competitive environment.</p>
               <ul className='grid md:grid-cols-2 gap-4'>
                    <li className='flex items-center gap-3'><IoCheckmarkDoneOutline className='text-xl' />Established in 2021 
                    </li>
                    <li className='flex items-center gap-3'><IoCheckmarkDoneOutline className='text-xl' />Commercial litigation Specialists
                    </li>
                    <li className='flex items-center gap-3'><IoCheckmarkDoneOutline className='text-xl' />Accounting and auditing 
                    </li>
                    <li className='flex items-center gap-3'><IoCheckmarkDoneOutline className='text-xl' />Legal and financial support










</li>
               </ul>
          </div>
     </div>
    </>
  )
}

export default AboutCompany