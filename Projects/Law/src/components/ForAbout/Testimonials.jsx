import React, { useRef } from "react";
import { ImQuotesRight } from "react-icons/im";
import Client from "../../data/client.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay  } from "swiper/modules";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Testimonials = () => {
  const swiperRef = useRef(null);

  return (
    <>
      <div className="container pb-20 px-4 md:px-0">
        <div className="text-center py-20 pb-16">
          <h3 className="font-bold text-sm uppercase pb-3">Our Clients</h3>
          <h2 className="text-4xl font-bold">What People Says About Us</h2>
        </div>

<div className="lg:flex gap-8 lg:h-[85vh] items-center">
          <div className="hidden lg:block lg:w-[50%] h-full">
               <img src="/images/ForClients/clientmainimg.jpg" alt="" className="h-full object-cover object-right rounded-lg" />
          </div>
     <div className="lg:w-[50%] relative">
        <Swiper
          ref={swiperRef} // Attach the ref to Swiper
          modules={[Navigation, Pagination, Autoplay ]}
          autoplay={{ delay: 3000 }}
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
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
        >
            {Client.map((items, index) => (
              <SwiperSlide key={index} className="p-12 mb-2">
                <i>
                  <ImQuotesRight className="text-3xl text-[#1F3745]" />
                </i>
                <p className="leading-8 text-lg py-12">{items?.words}</p>

                <div className="flex gap-5 items-center">
                    <div><img src={items?.image} alt="" className="rounded-full w-20" /></div>
                    <div>
                         <h2 className="font-bold text-lg text-[#1F3745]">{items?.name}</h2>
                         <p>Kathmandu, Nepal</p>
                    </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>

        <div className="flex justify-center gap-3 text-4xl text-[#1F3745]">
        <button onClick={() => swiperRef.current.swiper.slidePrev()}>
              <SlArrowLeft className="rounded-full text-white bg-[#1F3745] p-2 border border-gray-300" />
            </button>
            <button onClick={() => swiperRef.current.swiper.slideNext()}>
              <SlArrowRight className="rounded-full text-white bg-[#1F3745] p-2 border border-gray-300" />
            </button>
        </div>
     </div>

</div>
      </div>
    </>
  );
};

export default Testimonials;
