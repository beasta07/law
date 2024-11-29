import  '../../Styles.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation,Autoplay, Pagination } from 'swiper/modules';
import { GoArrowRight } from 'react-icons/go';
import { useRef } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';

const Hero = () => {
  const swiperRef = useRef(null);  

  return (
    <div className=''>

     <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}      
          pagination={{
          clickable: true,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Store the Swiper instance
        }}
        modules={[EffectFade,Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className=" h-[100vh] pt-52 md:pb-0  bg-[#69beb8]  px-4 md:px-0 ">
      <div className="md:flex justify-between container">
        <div className="md:w-[25%] text-white">
          <h1 className="text-6xl text-white font-cyrene uppercase">The taste of <span className="text-black">your celebrations</span></h1>
          <p className="my-6 text-gray-200">Individual and custom-made cake. <br />
            Guests of your holiday will be delighted</p>
          <div className="flex gap-4">
            <button className="rounded-full text-black px-12 font-semibold text-sm py-2 bg-gray-100 shadow-md"> BUY</button>
            <button className="rounded-full  px-10  text-sm py-2 bg-transparent border border-white "> View all</button>

          </div>
        </div>
        <div>
          <img src="images/Hero/WeddingCake_nobg.png" className="md:-mt-20" alt="" />
        </div>
        <div className='md:w-[20%] my-12 md:my-0 md:text-right'>
          <div className="mb-9">
            <h2 className="font-xs text-gray-300 mb-2">
              Cake descriptions
            </h2>
            <p className="text-sm text-gray-200">Sponge cake with cocoa in combinatinon with cappuccino cream and blueberries</p>

          </div>
          <div className="my-9">
            <h2 className="font-xs text-gray-300 mb-2">
              Cake weight
            </h2>
            <p className="text-4xl text-white font-cyrene ">2.4 KG</p>

          </div>
          <div className="my-9">
            <h2 className="font-xs text-gray-300 mb-2">
              Production time
            </h2>
            <p className="text-4xl text-white font-cyrene ">72 H</p>

          </div>

        </div>
      </div>
    </div>
</SwiperSlide>
<SwiperSlide>
{/* <div className=" h-[100vh]  md:pt-52 bg-[#69beb8]    px-4 md:px-0 ">
      <div className="md:flex justify-between container">
        <div className="md:w-[25%] text-white">
          <h1 className="text-6xl text-white font-cyrene uppercase">The taste of <span className="text-black">your celebrations</span></h1>
          <p className="my-6 text-gray-200">Individual and custom-made cake. <br />
            Guests of your holiday will be delighted</p>
          <div className="flex gap-4">
            <button className="rounded-full text-black px-12 font-semibold text-sm py-2 bg-gray-100 shadow-md"> BUY</button>
            <button className="rounded-full  px-10  text-sm py-2 bg-transparent border border-white "> View all</button>

          </div>
        </div>
        <div>
          <img src="images/Hero/WeddingCake_nobg.png" className="md:-mt-20" alt="" />
        </div>
        <div className='md:w-[20%] my-12 md:my-0 md:text-right'>
          <div className="mb-9">
            <h2 className="font-xs text-gray-300 mb-2">
              Cake descriptions
            </h2>
            <p className="text-sm text-gray-200">Sponge cake with cocoa in combinatinon with cappuccino cream and blueberries</p>

          </div>
          <div className="my-9">
            <h2 className="font-xs text-gray-300 mb-2">
              Cake weight
            </h2>
            <p className="text-4xl text-white font-cyrene ">2.4 KG</p>

          </div>
          <div className="my-9">
            <h2 className="font-xs text-gray-300 mb-2">
              Production time
            </h2>
            <p className="text-4xl text-white font-cyrene ">72 H</p>

          </div>
        </div>
      </div>
    </div> */}
     <div className=" h-[100vh]  md:pt-52 bg-[#f3b2c8]    px-4 md:px-0 ">
      <div className="md:flex justify-between container">
        <div className="md:w-[25%] text-white">
          <h1 className="text-6xl text-white font-cyrene uppercase">The color of <span className="text-black">your choice</span></h1>
          <p className="my-6 text-gray-100">Individual and custom-made cake. <br />
            Guests of your holiday will be delighted</p>
          <div className="flex gap-4">
            <button className="rounded-full text-black px-12 font-semibold text-sm py-2 bg-gray-100 shadow-md"> BUY</button>
            <button className="rounded-full  px-10  text-sm py-2 bg-transparent border border-white "> View all</button>

          </div>
        </div>
        <div>
          <img src="/images/Hero/donuts.png" className="md:-mt-20" alt="" />
        </div>
        <div className='md:w-[20%] my-12 md:my-0 md:text-right'>
          <div className="mb-9">
            <h2 className="font-xs text-gray-100 mb-2">
              Cake descriptions
            </h2>
            <p className="text-sm text-gray-50">Sponge cake with cocoa in combinatinon with cappuccino cream and blueberries</p>

          </div>
          <div className="my-9">
            <h2 className="font-xs text-gray-100 mb-2">
              Cake weight
            </h2>
            <p className="text-4xl text-white font-cyrene ">2.4 KG</p>

          </div>
          <div className="my-9">
            <h2 className="font-xs text-gray-100 mb-2">
              Production time
            </h2>
            <p className="text-4xl text-white font-cyrene ">72 H</p>

          </div>
        </div>
      </div>
    </div>
</SwiperSlide>
<SwiperSlide>
<div className=" h-[100vh]  md:pt-52 bg-[#f2b989]    px-4 md:px-0 ">
      <div className="md:flex justify-between container">
        <div className="md:w-[25%] text-white">
          <h1 className="text-6xl text-black font-cyrene uppercase">100% Natural  <span className="text-white">Composition</span></h1>
          <p className="my-6 text-gray-100">Individual and custom-made cake. <br />
            Guests of your holiday will be delighted</p>
          <div className="flex gap-4">
            <button className="rounded-full text-black px-12 font-semibold text-sm py-2 bg-gray-100 shadow-md"> BUY</button>
            <button className="rounded-full  px-10  text-sm py-2 bg-transparent border border-white "> View all</button>

          </div>
        </div>
        <div>
          <img src="/images/Hero/Macaron.png" className="md:-mt-20" alt="" />
        </div>
        <div className='md:w-[20%] my-12 md:my-0 md:text-right'>
          <div className="mb-9">
            <h2 className="font-xs text-gray-100 mb-2">
              Cake descriptions
            </h2>
            <p className="text-sm text-gray-50">Sponge cake with cocoa in combinatinon with cappuccino cream and blueberries</p>

          </div>
          <div className="my-9">
            <h2 className="font-xs text-gray-100 mb-2">
              Cake weight
            </h2>
            <p className="text-4xl text-white font-cyrene ">2.4 KG</p>

          </div>
          <div className="my-9">
            <h2 className="font-xs text-gray-100 mb-2">
              Production time
            </h2>
            <p className="text-4xl text-white font-cyrene ">72 H</p>

          </div>
        </div>
      </div>
    </div>
</SwiperSlide>
<SwiperSlide>
<div className=" h-[100vh]  md:pt-52 bg-[#9dc06f]    px-4 md:px-0 ">
      <div className="md:flex justify-between container">
        <div className="md:w-[25%] text-white">
          <h1 className="text-6xl text-white font-cyrene uppercase">Birthday <span className="text-black">Should be Special</span></h1>
          <p className="my-6 text-gray-100">Individual and custom-made cake. <br />
            Guests of your holiday will be delighted</p>
          <div className="flex gap-4">
            <button className="rounded-full text-black px-12 font-semibold text-sm py-2 bg-gray-100 shadow-md"> BUY</button>
            <button className="rounded-full  px-10  text-sm py-2 bg-transparent border border-white "> View all</button>

          </div>
        </div>
        <div>
          <img src="images/Hero/Hero-removebg.png" className="md:-mt-20" alt="" />
        </div>
        <div className='md:w-[20%] my-12 md:my-0 md:text-right'>
          <div className="mb-9">
            <h2 className="font-xs text-gray-100 mb-2">
              Cake descriptions
            </h2>
            <p className="text-sm text-gray-50">Sponge cake with cocoa in combinatinon with cappuccino cream and blueberries</p>

          </div>
          <div className="my-9">
            <h2 className="font-xs text-gray-100 mb-2">
              Cake weight
            </h2>
            <p className="text-4xl text-white font-cyrene ">2.4 KG</p>

          </div>
          <div className="my-9">
            <h2 className="font-xs text-gray-100 mb-2">
              Production time
            </h2>
            <p className="text-4xl text-white font-cyrene ">72 H</p>

          </div>
        </div>
      </div>
    </div>
</SwiperSlide>
<div className="my-4 w-full absolute bottom-0 right-0 border border-red-400 flex justify-end  text-right text-black   rounded-lg"                     
          >
            <div className='backdrop-blur-sm opacity-50 p-4 w-15  text-right justify-end bg-gray-50 text-gray-300 rounded-lg '>
              <div className='border p-1  w-9 border-gray-700  rounded-full'>
              <button onClick={() => swiperRef.current.slideNext()}><MdKeyboardArrowUp className="text-4xl" /></button> 

              </div>
            
            </div>

          </div>
      </Swiper>
    {/* <div className=" h-[100vh]  md:pt-52 bg-[#69beb8]    px-4 md:px-0 ">
      <div className="md:flex justify-between container">
        <div className="md:w-[25%] text-white">
          <h1 className="text-6xl text-white font-cyrene uppercase">The taste of <span className="text-black">your celebrations</span></h1>
          <p className="my-6 text-gray-200">Individual and custom-made cake. <br />
            Guests of your holiday will be delighted</p>
          <div className="flex gap-4">
            <button className="rounded-full text-black px-12 font-semibold text-sm py-2 bg-gray-100 shadow-md"> BUY</button>
            <button className="rounded-full  px-10  text-sm py-2 bg-transparent border border-white "> View all</button>

          </div>
        </div>
        <div>
          <img src="images/Hero/WeddingCake_nobg.png" className="md:-mt-20" alt="" />
        </div>
        <div className='md:w-[20%] my-12 md:my-0 md:text-right'>
          <div className="mb-9">
            <h2 className="font-xs text-gray-300 mb-2">
              Cake descriptions
            </h2>
            <p className="text-sm text-gray-200">Sponge cake with cocoa in combinatinon with cappuccino cream and blueberries</p>

          </div>
          <div className="my-9">
            <h2 className="font-xs text-gray-300 mb-2">
              Cake weight
            </h2>
            <p className="text-4xl text-white font-cyrene ">2.4 KG</p>

          </div>
          <div className="my-9">
            <h2 className="font-xs text-gray-300 mb-2">
              Production time
            </h2>
            <p className="text-4xl text-white font-cyrene ">72 H</p>

          </div>
        </div>
      </div>
    </div>
    <div className=" h-[100vh]  md:pt-52 bg-[#f3b2c8]    px-4 md:px-0 ">
      <div className="md:flex justify-between container">
        <div className="md:w-[25%] text-white">
          <h1 className="text-6xl text-white font-cyrene uppercase">The color of <span className="text-black">your choice</span></h1>
          <p className="my-6 text-gray-100">Individual and custom-made cake. <br />
            Guests of your holiday will be delighted</p>
          <div className="flex gap-4">
            <button className="rounded-full text-black px-12 font-semibold text-sm py-2 bg-gray-100 shadow-md"> BUY</button>
            <button className="rounded-full  px-10  text-sm py-2 bg-transparent border border-white "> View all</button>

          </div>
        </div>
        <div>
          <img src="/images/Hero/donuts.png" className="md:-mt-20" alt="" />
        </div>
        <div className='md:w-[20%] my-12 md:my-0 md:text-right'>
          <div className="mb-9">
            <h2 className="font-xs text-gray-100 mb-2">
              Cake descriptions
            </h2>
            <p className="text-sm text-gray-50">Sponge cake with cocoa in combinatinon with cappuccino cream and blueberries</p>

          </div>
          <div className="my-9">
            <h2 className="font-xs text-gray-100 mb-2">
              Cake weight
            </h2>
            <p className="text-4xl text-white font-cyrene ">2.4 KG</p>

          </div>
          <div className="my-9">
            <h2 className="font-xs text-gray-100 mb-2">
              Production time
            </h2>
            <p className="text-4xl text-white font-cyrene ">72 H</p>

          </div>
        </div>
      </div>
    </div>
    <div className=" h-[100vh]  md:pt-52 bg-[#f2b989]    px-4 md:px-0 ">
      <div className="md:flex justify-between container">
        <div className="md:w-[25%] text-white">
          <h1 className="text-6xl text-black font-cyrene uppercase">100% Natural  <span className="text-white">Composition</span></h1>
          <p className="my-6 text-gray-100">Individual and custom-made cake. <br />
            Guests of your holiday will be delighted</p>
          <div className="flex gap-4">
            <button className="rounded-full text-black px-12 font-semibold text-sm py-2 bg-gray-100 shadow-md"> BUY</button>
            <button className="rounded-full  px-10  text-sm py-2 bg-transparent border border-white "> View all</button>

          </div>
        </div>
        <div>
          <img src="/images/Hero/Macaron.png" className="md:-mt-20" alt="" />
        </div>
        <div className='md:w-[20%] my-12 md:my-0 md:text-right'>
          <div className="mb-9">
            <h2 className="font-xs text-gray-100 mb-2">
              Cake descriptions
            </h2>
            <p className="text-sm text-gray-50">Sponge cake with cocoa in combinatinon with cappuccino cream and blueberries</p>

          </div>
          <div className="my-9">
            <h2 className="font-xs text-gray-100 mb-2">
              Cake weight
            </h2>
            <p className="text-4xl text-white font-cyrene ">2.4 KG</p>

          </div>
          <div className="my-9">
            <h2 className="font-xs text-gray-100 mb-2">
              Production time
            </h2>
            <p className="text-4xl text-white font-cyrene ">72 H</p>

          </div>
        </div>
      </div>
    </div>
    <div className=" h-[100vh]  md:pt-52 bg-[#9dc06f]    px-4 md:px-0 ">
      <div className="md:flex justify-between container">
        <div className="md:w-[25%] text-white">
          <h1 className="text-6xl text-white font-cyrene uppercase">Birthday <span className="text-black">Should be Special</span></h1>
          <p className="my-6 text-gray-100">Individual and custom-made cake. <br />
            Guests of your holiday will be delighted</p>
          <div className="flex gap-4">
            <button className="rounded-full text-black px-12 font-semibold text-sm py-2 bg-gray-100 shadow-md"> BUY</button>
            <button className="rounded-full  px-10  text-sm py-2 bg-transparent border border-white "> View all</button>

          </div>
        </div>
        <div>
          <img src="images/Hero/Hero-removebg.png" className="md:-mt-20" alt="" />
        </div>
        <div className='md:w-[20%] my-12 md:my-0 md:text-right'>
          <div className="mb-9">
            <h2 className="font-xs text-gray-100 mb-2">
              Cake descriptions
            </h2>
            <p className="text-sm text-gray-50">Sponge cake with cocoa in combinatinon with cappuccino cream and blueberries</p>

          </div>
          <div className="my-9">
            <h2 className="font-xs text-gray-100 mb-2">
              Cake weight
            </h2>
            <p className="text-4xl text-white font-cyrene ">2.4 KG</p>

          </div>
          <div className="my-9">
            <h2 className="font-xs text-gray-100 mb-2">
              Production time
            </h2>
            <p className="text-4xl text-white font-cyrene ">72 H</p>

          </div>
        </div>
      </div>
    </div> */}
    </div>
  )
}

export default Hero
