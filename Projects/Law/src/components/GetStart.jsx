import React from 'react'

const GetStart = () => {
  return (
    <>
     <div className='flex gap-5 items-center py-12 justify-between border-t border-gray-300'>
          <div><img src="/images/getstartleft.png" alt="" className='hidden md:block' /></div>

          <div className='text-center text-lg'>
               <h3 className='text-[#1F3745]'>Let's Start Someting</h3>
               <h2 className='text-4xl md:text-5xl py-4 pb-5'>Ready to Get Started</h2>
               <p className='md:w-[75%] mx-auto pb-9'>Qui in ea voluptate velitautem vel rum esse auam nihil molestiae consequatur vel illum rui eum fugiat auo voluptas nulla pariatur.</p>
               <button className='bg-[#1F3745] text-white p-3 px-7 rounded-lg'>Get Started</button>
          </div>

          <div><img src="/images/getstartright.png" alt="" className='hidden md:block' /></div>
     </div>
    </>
  )
}

export default GetStart