import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import ServiceItem from "../../data/service.json";
import { TfiArrowTopRight } from "react-icons/tfi";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

const Service = () => {
  const swiperRef = useRef(null);

  return (
    <>
      <div className='bg-[url("/public/images/reference/backgroundElement.png")] bg-fit'>
        <div className="text-center py-20 bg-white bg-opacity-50 px-4 md:px-0">
          <h3 className="text-lg lg:w-[8%] w-[35%] md:w-[20%] border-l-2 border-[#1F3745] mx-auto text-[#1F3745] mb-5">
            What We Do
          </h3>
          <h2 className="text-4xl">Services That Help You Grow.</h2>
        </div>

        <div className="bg-white bg-opacity-50 pb-20">
          <div className="container relative px-4 md:px-0">
            <Swiper
              ref={swiperRef} // Attach the ref to Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              loop={true}
              slidesPerView={3} // Adjust this number based on the number of visible slides
              breakpoints={{
                // Adjust the number of slides for different screen sizes
                390: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {ServiceItem.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="border border-gray-300 shadow-sm rounded-xl overflow-hidden"
                >
                  <div
                    className="relative"
                    style={{
                      background: `url(${item.image})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="aspect-[3/2] bg-black bg-opacity-10 rounded-t-xl" />
                    {/* <div className=''></div> */}
                  </div>
                  <div className="bg-white text-center rounded-b-xl p-6 px-7 flex flex-col items-center relative">
                    <h2 className="text-xl font-bold">{item?.name}</h2>
                    <p className="text-sm mt-3 line-clamp-2 z-10">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Repellat, libero.
                    </p>
                    <button className="mt-5 flex items-center gap-2 border-b border-black">
                      Learn More <TfiArrowTopRight />
                    </button>

                    <div className="h-32 w-20 bg-[#F7F7F7] absolute bottom-0 right-0"></div>
                    <div className="h-20 w-10 bg-[#EFEFEF] absolute bottom-0 right-0"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="hidden md:block" onClick={() => swiperRef.current.swiper.slidePrev()}>
              <SlArrowLeft className="rounded-full text-3xl text-gray-500 absolute top-1/2 -left-16 z-30" />
            </button>
            <button className="hidden md:block" onClick={() => swiperRef.current.swiper.slideNext()}>
              <SlArrowRight className="rounded-full text-3xl text-gray-500 absolute top-1/2 -right-16" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
