import React from 'react'

const SecondBanner = () => {
   
  return (

    <div className='lg:container 3xl:px-32 mt-24'>
          
      <div className='lg:flex  gap-4'>
      <div
                className="w-full  px-8 text-white rounded-lg  bg-cover bg-center size-80 bg-[url('/images/LandingPage/2ndBanner.webp')]"
                title="SecondBanner1"
              >
                <p className='mt-16 text-[red] w-36 px-1'>SECURITY CAMERA</p>
                <h1 className='font-bold w-52 text-[1.75rem] my-8 text-gray-50'>Upto 72@ Off mega Offer</h1>
                <button className='font-bold underline'>Buy Now</button>
      </div>
      <div
                className="w-full  px-6 text-white rounded-lg  bg-cover bg-center size-80 bg-[url('/images/LandingPage/2ndBanner2.webp')]"
                title="SecondBanner2"
              >
                 <p className='mt-16 bg-red-600 rounded- w-40  px-1'>GET UP TO 75% OFF</p>
                <h1 className='font-bold w-52 text-[1.75rem] my-8 text-gray-50'>Limited time Edition...</h1>
                <button className='font-bold underline'>Buy Now</button>
      </div>
      <div
                className="w-full  px-6 text-white rounded-lg  bg-cover bg-center size-80 bg-[url('/images/LandingPage/2ndBanner3.webp')]"
                // style={{ backgroundImage:  }}
                title="SecondBanner3"
              >
                 <p className='mt-16 bg-red-600 rounded- w-36 px-1'>MEGA DISCOUNT</p>
                <h1 className='font-bold w-52 text-[1.75rem] my-8 text-gray-50'>65% Off for new Laptop</h1>
                <button className='font-bold underline'>Buy Now</button>      </div>
      </div>
      
    </div>
  )
}

export default SecondBanner
