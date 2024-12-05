import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade,  Autoplay, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../../src/styles.css';

const Hero = () => {
  const cakeData = [
    {
      image: "/images/Category/wedding.png",
      title: "Where Taste Meets Art",
      subtitle: "Wedding Cakes to Remember Forever",
      description:
        "Celebrate your love story with a cake that’s as beautiful and unique as your special day. Handcrafted with love, our wedding cakes are designed to impress.",
    },
    {
      image: "/images/Landing/BirthdayCake-removebg.png",
      title: "A Slice of Happiness",
      subtitle: "Custom Cakes for Birthday Magic",
      description:
        "Brighten someone’s birthday with a cake tailored to their favorite flavors and styles. From kids' parties to milestone celebrations, we’ve got you covered!",
    },
  ];

  return (
    <div className='bg-[#FEF2F5]'>
    <Swiper
        effect={'fade'}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectFade, Autoplay, Pagination]}
        className="mySwiper"
      >
        {cakeData.map((landing, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#FEF2F5] px-4 md:px-0 md:pt-28 md:h-[60vh] lg:h-[120vh]">
            <div className="container md:flex flex-col-reverse gap-10  text-[#333333] py-14 md:flex-row md:gap-32">
              <div className="md:w-[50%] md:pt-40 w-full">
                <h1 className="font-medium text-6xl  text-[#A55668] font-cyrene  ">
                  {landing.title}
                </h1>
                <h2 className="py-4 font-medium text-sm md:text-lg">
                  {landing.subtitle}
                </h2>
                <p className="pb-8 text-sm font-poppins md:text-base">
                  {landing.description}
                </p>
                <button className="rounded-full bg-[#ED6A77] text-white p-2 px-8">
                  Order Now
                </button>
              </div>
              <div className="md:flex-1 pt-16 ">
                <img
                  src={landing.image}
                  className="w-full h-[60vh] object-cover"
                  alt=""
                />
              </div>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper></div>
  );
};

export default Hero;
