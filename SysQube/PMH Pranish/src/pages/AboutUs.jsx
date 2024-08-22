import React from "react";
import { IoHomeOutline } from "react-icons/io5";
// import { LiaShippingFastSolid } from "react-icons/lia";
// import { GoGift } from "react-icons/go";
// import { IoWalletOutline } from "react-icons/io5";
// import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import CheckoutFeatures from "../components/CheckoutFeatures";

const AboutUs = () => {
  return (
    <div>
      <div className="bg-[#F0F4F9]">
        <div className="items-center py-28">
          <h1 className="font-bold text-3xl text-center">About Us</h1>
          <div className="flex items-center mt-4 gap-2 justify-center">
            <IoHomeOutline />
            <span className="text-gray-700">Home - About Us</span>
          </div>
        </div>
      </div>

      <div className="container mt-32">
        <div className='bg-[url("/images/AboutMe/aboutMe.jpg")] bg-fixed w-full rounded-2xl text-white flex-col justify-center text-center h-full items-center  '>
          <div className="py-24 bg-opacity-60 bg-black">
            <span className="pt-16 font-semibold lg:text-xl">
              START FROM SINCE 1990
            </span>
            <h1 className="font-bold lg:text-5xl text-2xl my-8">
              We Help Everyone <br /> Enjoy Amazing Products
            </h1>
            <div className="flex justify-center gap-10">
              <div>
                <h1 className="font-bold lg:text-6xl  text-2xl ">6M+</h1>
                <p className="text-left">Happy Clients</p>
              </div>
              <div>
                <h1 className="font-bold lg:text-6xl  text-2xl ">8M+</h1>
                <p className="text-left">Great Products</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 px-4 lg:px-0">
          <div className="md:flex justify-between gap-5">
            <div className="flex-1 border border-gray-200 shadow-lg hover:shadow duration-300 text-center rounded-md p-5">
              <h1 className="font-semibold text-2xl">Who we Are</h1>
              <p className="font-light mt-3 text-[15px] text-justify ">
                From the first day of our start, our vision was to change the
                mentality of our consumers. We had started this business when
                there were clients who use to pay very less or almost nothing to
                protect the device they own.{" "}
              </p>
            </div>
            <div className="flex-1 border border-gray-200 shadow-lg hover:shadow duration-300 text-center rounded-md p-5 my-8 md:my-0">
              <h1 className="font-semibold text-2xl">Our History</h1>
              <p className="font-light mt-3 text-[15px]  text-justify  ">
                We beleive that we are just taking our baby steps in being one
                of the tech giants in Nepal. Our mission is to establish
                ourselves as the biggest onestop store in Nepal, where the tech
                enthusiast and shoppers find everything they wish for.{" "}
              </p>
            </div>
            <div className="flex-1 border border-gray-200 shadow-lg hover:shadow duration-300 text-center rounded-md p-5">
              <h1 className="font-semibold text-2xl">Our Mission</h1>
              <p className="font-light mt-3 text-[15px]  text-justify  ">
                Since the start of our journey, we have been able. to establish
                ourseleves as a genuine and distinguished arena for the
                Mid-range tech customers. From 2016, this mindset of always
                serving the best products and in a very best value has driven us
                this far.
              </p>
            </div>
          </div>
        </div>
        </div>

        <div className="bg-[#F5F4F4] mt-32">
         <div className="container px-4 lg:px-0 py-16">
            <div className="md:flex gap-14 ">
                <div className="flex-1">
                    <h1 className="capitalize font-bold text-3xl">BEST ELECTRONICS COLLECTION</h1>
                    <p className="text-gray-500 my-6">Senectus provident sodales tellus magna cillum ullam purus. Magna aute, aspernatur, officiis, molestias quisquam? Magnam aspernat.</p>
                    <div className="grid grid-cols-2 mt-6  gap-6 ">
                     <div className="bg-white justify-center text-center p-4  py-8  ">
                        <h1 className="text-3xl text-center font-bold">125+</h1>
                        <span className="capitalize font-semibold text-gray-700">unique Products</span>
                        </div>   
                     <div className="bg-white justify-center text-center p-4 px-8 py-8  ">
                        <h1 className="text-3xl text-center font-bold">10K+</h1>
                        <span className="capitalize font-semibold text-gray-700">Happy Customers</span>
                        </div>   
                     <div className="bg-white justify-center text-center p-4 px-8 py-8  ">
                        <h1 className="text-3xl text-center font-bold">50+</h1>
                        <span className="capitalize font-semibold text-gray-700">Product dealers</span>
                        </div>   
                     <div className="bg-white justify-center text-center p-4 px-8 py-8 ">
                        <h1 className="text-3xl text-center font-bold">125+</h1>
                        <span className="capitalize font-semibold text-gray-700">unique Products</span>
                        </div>   
                    </div>
                </div>
                <div className="flex-1 mt-10 lg:mt-0">
                    <img src="/images/AboutMe/banner.webp" className="h-full" />
                </div>
            </div>
            
            </div>   

        </div>
 <div className="lg:mt-16">

  <CheckoutFeatures/>
 </div>
    </div>
  );
};

export default AboutUs;