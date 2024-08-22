import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa6";
import { SiSamsung, SiSony, SiXiaomi, SiPanasonic, SiOneplus } from "react-icons/si";

const OurBrands = () => {
  return (
    <>
      <div  className="container pt-24">
        <h2 className="uppercase font-medium text-2xl text-center">
          our famous brands
        </h2>
        <hr className="w-[10%] mt-1 border border-gray-400 mx-auto" />
        <div className="flex justify-between pt-10 overflow-scroll lg:overflow-hidden">
          <ul className="flex justify-between gap-[18.4px]">
            <li className="w-44 border border-gray-300 rounded p-4 h-full text-4xl flex items-center  text-slate-600"><FaApple className="mx-auto" /></li>
            <li className="w-44 border border-gray-300 rounded p-4 h-full text-6xl flex items-center text-slate-600"><SiSamsung className="mx-auto" /></li>
            <li className="w-44 border border-gray-300 rounded p-4 h-full text-6xl flex items-center text-slate-600"><SiSony className="mx-auto" /></li>
            <li className="w-44 border border-gray-300 rounded p-4 h-full text-4xl flex items-center  text-slate-600"><SiXiaomi className="mx-auto" /></li>
            <li className="w-44 border border-gray-300 rounded p-4 h-full text-6xl flex items-center text-slate-600"><SiPanasonic className="mx-auto" /></li>
            <li className="w-44 border border-gray-300 rounded p-4 h-full text-4xl flex items-center  text-slate-600"><SiOneplus className="mx-auto" /></li>
          </ul>
          {/* <img
            src="/images/brand_img1.png"
            alt=""
            className="w-44 border border-gray-300 rounded p-4"
          />
          <img
            src="/images/brand_img2.png"
            alt=""
            className="w-44 border border-gray-300 rounded p-4"
          />
          <img
            src="/images/brand_img3.png"
            alt=""
            className="w-44 border border-gray-300 rounded p-4"
          />
          <img
            src="/images/brand_img4.png"
            alt=""
            className="w-44 border border-gray-300 rounded p-4"
          />
          <img
            src="/images/brand_img5.png"
            alt=""
            className="w-44 border border-gray-300 rounded p-4"
          />
          <img
            src="/images/brand_img6.png"
            alt=""
            className="w-44 border border-gray-300 rounded p-4"
          /> */}
        </div>

        <Link to="/shop">
        <div name="sale" className='uppercase bg-[url("/images/banner2.jpeg")]  bg-cover bg-center mt-5'>
          <div className="lg:flex justify-between">
            <div className="hidden lg:block"></div>
            <div className=" pr-4 lg:px-32 py-16 text-right">
              <h1 className="text-8xl font-bold text-gray-400">30% off</h1>
              <h2 className="text-4xl -mt-5 font-semibold text-white">
                Summer sale begins !
              </h2>
              <p className="py-3 text-lg text-gray-300">
                start 30 march - end 05 jube
              </p>
              <div className="flex justify-end">
              <button className="flex  items-center gap-1 p-2 px-4 bg-white rounded">
                shop now <BsArrowRightShort />
              </button>
              </div>
            </div>
          </div>
        </div>
        </Link>

      </div>
    </>
  );
};

export default OurBrands;
