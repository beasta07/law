import React from 'react'

const CEOMessage = () => {
  return (
    <>
     <div className='container flex flex-col md:flex-row gap-12 items-center pt-6 pb-28 px-4 md:px-0'>

          <div className='flex-1 '>
               <img src="/images/ceoimg.jpg" alt="" className="rounded-lg" />
          </div>

          <div className='flex-1 '>
               <h3 className='text-sm uppercase font-bold'>CEO Message</h3>
               <h2 className='text-4xl w-[80%] py-4 pb-8'>Leading the Way in Global Energy and Renewal Services</h2>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque enim ipsam consectetur numquam provident delectus voluptatum, deserunt voluptatibus molestias saepe officia rerum eveniet culpa expedita id placeat quo dolorum. Beatae!</p>
               <div className='flex items-center gap-8 pt-12'>
                    <div>
                         <h2 className='font-bold text-lg'>Warren Buffett</h2>
                         <p>CEO</p>
                    </div>
                    <div>
                         <img src="/images/ceosign.png" alt="" className='invert' />
                    </div>
               </div>
          </div>

     </div>
    </>
  )
}

export default CEOMessage