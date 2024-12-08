import React from 'react'

const Feature = () => {
  return (
    <>
     <div className='hidden container md:flex justify-between gap-20 py-20'>
          <div className='flex gap-6'>
               <div><img src="/images/ForFeature/feature2.png" alt="" className='w-40' /></div>
               <div>
                    <h2 className='font-bold text-2xl pb-4'>Comprehensive Legal Services</h2>
                    <p className='text-sm leading-6'>Expertise in commercial litigation, corporate compliance, and intellectual property registration. Safeguard your business with trusted legal solutions.</p>
               </div>
          </div>

          <div className='flex gap-6'>
               <div><img src="/images/ForFeature/feature3.png" alt="" className='w-40' /></div>
               <div>
                    <h2 className='font-bold text-2xl pb-4'>Tailored Financial Consulting</h2>
                    <p className='text-sm leading-6'>From statutory audits to tax consulting, we help businesses thrive with strategic financial planning and risk advisory services.</p>
               </div>
          </div>

          <div className='flex gap-6'>
               <div><img src="/images/ForFeature/feature4.png" alt="" className='w-40' /></div>
               <div>
                    <h2 className='font-bold text-2xl pb-4'>Corporate Advisory</h2>
                    <p className='text-sm leading-6'>Guiding businesses through mergers, acquisitions, foreign investments, and labor law compliance for smooth corporate operations.</p>
               </div>
          </div>
     </div>
    </>
  )
}

export default Feature
