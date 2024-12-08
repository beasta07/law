import  { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import HeroBanner from "../../data/HeroBanner.json";
import { Link } from "react-router-dom";

const Hero = () => {
  const swiperRef = useRef(null);

  return (
    <>
      {/* <div className="flex items-center bg-[#F3F0EE] text-gray-200 pb-8 relative font-vastago">
        <div className="text-7xl flex-1 ml-[95px] mb-8 font-bold z-20">
          <h2>Innovation & Disruption for a</h2>
          <h2 className="text-9xl absolute font-light tracking-tight">
            <span className="text-[#897968]">Positive</span> Impact
          </h2>
          <button className="text-lg mt-48 text-[#897968] border p-2 px-6 border-[#897968]">Find Out More</button>
        </div>
        <div className="flex-1 relative">
          <div className="flex gap-">
          <img
            src="/images/herobg.jpg"
            alt="hero bg"
            className="rounded-l-full w-full object-cover h-[95vh]"
          />
          <img src="/images/herobg3.png" alt="" />
          </div>
          <div className="h-[95vh] w-full absolute z-10 bg-[#F3F0EE] top-0 bg-opacity-40"></div>
        </div>
      </div> */}

      <div className="relative">
      <Swiper
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        pagination={false}
        modules={[Pagination, Autoplay, EffectFade]}
        className="mySwiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Store the Swiper instance
        }}
      >
        {HeroBanner.map((items, index) => (
        <SwiperSlide key={index}>
        <div style={{backgroundImage : `url(${items?.image})`}} className="pb-16 pt-6 h-[90vh]  md:h-[100vh] bg-cover bg-center  flex ">
          <div className="w-full h-[100vh] bg-black bg-opacity-30 absolute z-10 top-0"></div>
          <div className="container flex gap-16 items-center mt-28 md:mt-20 text-white z-20">
            <div className="lg:w-[50%] p-6 rounded-xl">
              <div className="md:text-[75px] text-4xl md:leading-[5rem]">
                <h2>{items?.title}</h2>
                <Link to="/service">
                <button className="text-lg mt-8 md:mt-12 border p-2 px-6 border- rounded-lg">
                  Find Out More
                </button>
                </Link>
              </div>
            </div>

            <div className=""></div>
          </div>
        </div>
        </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </>
  );
};

export default Hero;
