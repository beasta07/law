import React from 'react'
// import { FaArrowRightLong } from "react-icons/fa6";
// import FeaturedProducts from './FeaturedProducts';

const Banner = () => {


  return (
    <div className='lg:container 3xl:px-32  mt-32'>
      {/* FIRST BANNER */}
       <div className='md:flex gap-5'>

        <div className=' bg-[#EFE3E3] relative lg:flex  rounded-lg lg:w-[65%] w-full'>
            <div className='py-20 pl-12 flex-1 p-4 lg:text-center md:text-left  '>
                <p className='text-red-600 mb-4'>USE CODE: <span className='font-semibold'>SALE35%</span></p>
                <h1 className='font-bold lg:text-4xl text-3xl   mb-4  '>Heavy on Features Light on Prices</h1>
                <p className='mb-8 text-sm md:text-base'>AMAZING DISCOUNTS AND DEALS</p>
            <button className='px-5 py-3 font-semibold bg-[#0068C8] text-sm rounded-md text-white '>
                  SHOP NOW
                </button>
            </div>
            <div className='flex-1 '>
                <img src='images/LandingPage/banner-1.jpg' className='h-[100%]  object-contain' />
            </div>
        </div>

        <div className='bg-[#D8D8EA] rounded-lg px-auto md:w-[35%] '>
            <div className='text-center mt-16 pt-8 md:pt-0'>
            <span className='bg-[red] rounded-r-md rounded-bl-md text-white px-4 text-center'>New Product</span>
            <h2 className='text-3xl text-center  w-[20rem] mx-auto my-8'>Controller like Never before</h2>
            <span className='text-blue-600 text-lg font-semibold'>RELEASE DATE & PRICE</span>
            <img src='images/LandingPage/banner-1,2.jpg' className='mx-auto rounded-lg  lg:h-[10.5rem]' />
            </div>


        </div>
       </div>
       









         {/* <div className=''>
    <div className='bg-[black] h-[25rem] mt-[5rem] rounded-lg text-white'>
        <div className='flex gap-8 '>
          <div className='mt-[4rem] mx-16'>
           <p className='text-5xl font-semibold mb-8  '>Get 20% off on Summer  </p>  
           <p className='text-xl text-gray mt-3 leading-8 w-[50rem]'>Sign Up to our weekly Newsletter. So you can get all the updates about your newly clothes as well as special discounts upto 40% especially for you  </p>
           <div className='flex'>

           </div>
           <button className='px-16 py-3 my-[3rem] rounded-md bg-white text-black font-semibold'><div className='flex gap-2'>SIGN UP            <FaArrowRightLong className='text-black mt-1' /> </div>
           </button>
           </div>
           <div className=''>
          <img src='images/LandingPage/SummerSale.jpg' className=' mt-16 h-[20rem] rounded-lg hidden lg:block ' />
          </div>
        </div>
      </div>
    </div> */}
{/* <div className='flex gap-12 px-16 '>
  <div className='bg-[#F7F1F1] flex justify  gap-16 px-8 items-center w-1/2    '>
    <div className=''>
      <img src='images/LandingPage/2ndBanner.png' className='w-full  h-full' />
    </div>
    <div className=' text-4xl mt-44 text-right font-bold'>
      <h2>Get 30% Off</h2>
      <h2>On Console</h2>

      <button className=' text-base font-normal text-right mt-4  underline '>SHOP NOW </button>
    </div>
  </div>
  <div className='bg-[#F7F1F1] flex justify-between px-8 items-center w-1/2   '>

    <div className=' text-4xl mt-48  font-bold'>
      <h2>Get 15% Off</h2>
      <h2>On Iphones</h2>

      <button className=' text-base text-left font-normal  mt-4  underline '>SHOP NOW </button>
    </div>
    <div className=''>
      <img src='images/LandingPage/slide1-iphone.png ' className='w-72 h-full' />
    </div>
  </div>
</div> */}
{/* <div className='absolute top-[235rem] left-[42rem] z-50 w-[20rem] mx-auto'>
  <div className=' border-[4px] border-white '>
    <div className='bg-transparent '>
      <div className='bg-white  p-4 m-4 text-center'>

      <h1 className='text-6xl font-bold mb-2'>SALE !</h1>
      <p className='text-gray-700 font-semibold'>HEAVY DISCOUNT</p>
      </div>
    </div>
  </div>
</div> */}


    </div>
  )
}

export default Banner
