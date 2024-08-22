import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-1 md:left-8 top-1/2 transform -translate-y-1/2  p-2 rounded-full"
      style={{ zIndex: 1 }}
    >
      <SlArrowLeft className="text-4xl p-2 rounded-full bg-white shadow" />
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-1 md:right-8 top-1/2 transform -translate-y-1/2  p-2 rounded-full"
      style={{ zIndex: 1 }}
    >
      <SlArrowRight className="text-4xl p-2 rounded-full bg-white shadow" />
    </button>
  );
};

const Hero = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="bg-[#FBF8F9]">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={4000}
        infinite={true}
        showDots={true}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        <div className="bg-[#192D56]">
          <div className="container flex flex-col md:flex-row items-center gap-12 lg:h-[35rem] px-4 lg:px-0 mt-8 lg:mt-0">
            <div className="flex-1 order-1 md:order-none text-white">
              <p className="uppercase ">Summer sale</p>
              <h2 className="font-semibold uppercase text-3xl lg:text-5xl py-4">
                Best phone Deals At a Glance <span>upto 30% off</span>
              </h2>
              <p className="pb-4 w-[90%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt debitis totam vero fuga voluptates dolorum.
              </p>
              <Link to="/shop">
              <button className="p-3 px-6 bg-orange-600 text-white rounded mb-8 lg:mb-0">
                Explore More
              </button>
              </Link>
            </div>
            <div className="flex-1">
              <img
                src="/images/LandingPage/slide1-iphone.png"
                alt="Hero Image"
                className="bg-transparent object-top size-72 lg:size-auto"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#192D56]">
          <div className="container flex flex-col md:flex-row items-center gap-12 lg:h-[33rem] px-4 lg:px-0 mt-8 lg:mt-0">
            <div className="flex-1 order-1 md:order-none text-white">
              <p className="uppercase ">Summer sale</p>
              <h2 className="font-semibold uppercase text-3xl lg:text-5xl py-4">
                Best iPad Deals At a Glance <span>upto 30% off</span>
              </h2>
              <p className="pb-4 w-[90%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt debitis totam vero fuga voluptates dolorum.
              </p>
              <Link to="/shop">
              <button className="p-3 px-6 bg-orange-600 text-white rounded mb-8 lg:mb-0">
                Explore More
              </button>
              </Link>
            </div>
            <div className="flex-1">
              <img
                src="/images/LandingPage/slide1-ipad.png"
                alt="Hero Image"
                className="bg-transparent object-top size-72 lg:size-auto"
              />
            </div>
          </div>
        </div>

        <div className="container flex flex-col md:flex-row items-center gap-12 lg:h-[33rem] px-4 lg:px-0 mt-8 lg:mt-0">
          <div className="flex-1 order-1 md:order-none">
            <p className="uppercase ">Summer sale</p>
            <h2 className="font-semibold uppercase text-3xl lg:text-5xl py-4">
              Clearance sale off <span>upto 50%</span>
            </h2>
            <p className="pb-4 w-[90%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              debitis totam vero fuga voluptates dolorum.
            </p>
            <Link to="/shop">
            <button className="p-3 px-6 bg-[#0D4C90] text-white rounded mb-8 lg:mb-0">
              Explore More
            </button>
            </Link>
          </div>
          <div className="flex-1">
            <img
              src="/images/hero.jpg"
              alt="Hero Image"
              className="bg-transparent"
            />
          </div>
        </div>

        <div className="container flex flex-col md:flex-row items-center gap-12 lg:h-[33rem] px-4 lg:px-0 mt-8 lg:mt-0">
          <div className="flex-1 order-1 md:order-none">
            <p className="uppercase ">Summer sale</p>
            <h2 className="font-semibold uppercase text-3xl lg:text-5xl py-4">
              Smart Watch sale <span>upto 30% off</span>
            </h2>
            <p className="pb-4 w-[90%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              debitis totam vero fuga voluptates dolorum.
            </p>
            <Link to="/shop">
            <button className="p-3 px-6 bg-[#0D4C90] text-white rounded mb-8 lg:mb-0">
              Explore More
            </button>
            </Link>
          </div>
          <div className="flex-1">
            <img
              src="/images/hero4.jpg"
              alt="Hero Image"
              className="bg-transparent "
            />
          </div>
        </div>

      </Carousel>
    </div>
  );
};

export default Hero;
