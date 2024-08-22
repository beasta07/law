import { HiArrowSmRight } from "react-icons/hi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { GoGift } from "react-icons/go";
import BestSelling from "../components/Landing Page/BestSelling";
import FeaturedProducts from "../components/Landing Page/FeaturedProducts";
// import SecondBanner from "../components/Landing Page/SecondBanner";
import "../Carousel.css"; // Adjust the path as needed
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import Hero from "../components/Hero";
import Promotion from "../components/Landing Page/Promotion";
import OurBrands from "../components/Landing Page/OurBrands";
import NewArrival from "../components/Landing Page/NewArrival";
import { Link } from "react-router-dom";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer p-2 bg-gray-700 text-white rounded-full"
      onClick={onClick}
    >
      <SlArrowLeft className="text-2xl bg-transparent" />
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer p-2 bg-gray-700 text-white rounded-full"
      onClick={onClick}
    >
      <SlArrowRight className="text-2xl bg-transparent" />
    </div>
  );
};

const LandingPage = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    speed: 700,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1535,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 903,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  return (
    <>
      <div className="">
        <Hero />

        <div className=" lg:px-20 md:px-4 px-4 py-14">
          <div className="container mx-auto grid grid-cols-2 gap-8 md:flex lg:justify-around md:justify-between ">
            <div className="lg:flex  items-center text-center gap-4">
              <div className="lg:border border-gray-300 rounded-full p-2">
                <LiaShippingFastSolid className="text-3xl mx-auto" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-left">
                  Free Shipping
                </h1>
                <p>Standard shipping for orders</p>
              </div>
            </div>
            <div className="lg:flex text-center  items-center lg:text-left gap-4">
              <div className="lg:border border-gray-300    rounded-full p-2">
                <GoGift className="text-3xl mx-auto " />
              </div>
              <div>
                <h1 className="lg:text-xl text-lg font-semibold">
                  Support Gifts
                </h1>
                <p>The perfect gift idea</p>
              </div>
            </div>
            <div className="lg:flex items-center text-center lg:text-left gap-4">
              <div className="lg:border  border-gray-300 rounded-full p-2">
                <IoWalletOutline className="text-3xl mx-auto" />
              </div>
              <div>
                <h1 className="lg:text-xl text-lg font-semibold">
                  Money Guarantee
                </h1>
                <p>Within 30 days</p>
              </div>
            </div>

            {/* <div className='lg:flex text-center lg:text-left items-center gap-4'>
            <div className='lg:border border-gray-300 rounded-full p-2'>
              <MdOutlineSupportAgent className='text-3xl mx-auto' />
            </div>
            <div>
              <h1 className='lg:text-xl text-lg font-semibold'>Online Support</h1>
              <p>24 hours a day, 7 days a week</p>
            </div>
          </div> */}
            <div className="lg:flex text-center lg:text-left items-center gap-4">
              <div className="lg:border border-gray-300 rounded-full p-2">
                <RiMoneyRupeeCircleLine className="text-3xl mx-auto" />
              </div>
              <div>
                <h1 className="lg:text-xl text-lg font-semibold">
                  Flexible Payment
                </h1>
                <p>Multiple Credit Cards</p>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="px-4 lg:px-0">
          <div className=" container  mt-24">
            <div className="md:grid grid-cols-3 grid-rows-2 gap-4">
              <div className="col-span-1 row-span-2 pt-8 bg-[#F7F1F1]">
                <div className="p-8">
                  <span className="text-[#4B1338] text-xl">
                    20% Off on Sale!
                  </span>
                  <h2 className="font-bold text-[#4B1338] text-[1.5rem] my-3">
                    Digital Watch
                  </h2>
                  <Link to="/shop">
                    <button className="text-red-800 text-xs font-semibold flex gap-1">
                      <HiArrowSmRight className="mt-[0.1rem]" /> SHOP NOW
                    </button>
                  </Link>
                </div>
                <img
                  src="images/LandingPage//sub-banner-01.jpg"
                  className="-mt-8"
                  title="SubBanner1"
                  alt="SubBanner1"
                />
              </div>
              <div className="col-span-1 row-span-1 mt-5 md:mt-0">
                <div className="bg-[#EAEFF5] py-8 flex justify-between overflow-hidden">
                  <div className="p-8 w-full">
                    <span className="text-xl">Get 5% Discount</span>
                    <h2 className="font-bold text-[1.5rem] my-3 w-48">
                      Wireless Airbuds
                    </h2>
                    <Link to="/shop">
                      <button className="text-red-800 text-xs font-semibold flex gap-1">
                        <HiArrowSmRight className="mt-[0.1rem]" /> VIEW MORE
                      </button>
                    </Link>
                  </div>
                  <img
                    src="images/LandingPage/sub-banner-02.jpg"
                    className="hidden lg:block"
                    title="SubBanner2"
                    alt="SubBanner2"
                  />
                </div>
              </div>
              <div className="col-span-1 row-span-2  bg-[#EEF4F4]">
                <div className="p-8 text-center mt-5 ">
                  <span className="text-[#4B1338] text-xl">New Launches</span>
                  <h2 className="font-bold text-[#4B1338] text-[1.5rem] my-3">
                    Pocket Camera
                  </h2>
                  <Link to="/shop">
                    <button className="text-red-800 text-xs font-semibold flex justify-center mx-auto">
                      <HiArrowSmRight className="mt-[0.1rem]" /> SHOP NOW
                    </button>
                  </Link>
                </div>
                <img
                  src="images/LandingPage/sub-banner-03.jpg"
                  className="mt-4"
                  title="SubBanner3"
                  alt="SubBanner3"
                />
              </div>
              <div
                className="w-full h-full mt-5 md:mt-0  bg-cover bg-center"
                style={{
                  backgroundImage: "url(images/LandingPage/sub-banner-04.jpg)",
                }}
                title="SubBanner4"
              >
                <div className="p-8  text-right md:ml-3  w-full">
                  <span className="text-xl">Get 15% Discount</span>
                  <h2 className="font-bold text-[1.5rem] my-3">Head Phones</h2>
                  <div className="flex justify-end text-right ">
                    <Link to="/shop">
                      <button className="text-red-800 text-xs flex font-semibold gap-1">
                        <HiArrowSmRight className="mt-[0.1rem]" /> SHOP NOW
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 lg:px-0">
          <NewArrival />
          <Promotion />
          <BestSelling />
          <OurBrands />
          <FeaturedProducts />
          {/* <SecondBanner /> */}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
