import React from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  return (
    <div className="flex">
      {/* Left Section */}
      <div className="flex-1 bg-[#1B1B22] text-white relative">
        <div className="p-14 lg:p-28 h-full flex flex-col justify-center items-start">
          <h3 className="font-bold uppercase text-sm pb-4">Why Choose Us</h3>
          <h2 className="text-4xl md:text-5xl">
            Leading Corporate Consultancy & Legal Services
          </h2>
          <p className="py-10">
            We provide expert legal, financial, and corporate services tailored
            to your needs. From commercial litigation to financial consulting
            and corporate compliance, our dedicated team ensures excellence at
            every step.
          </p>
          <Link to="/about">
            <button className="border-b pb-1 flex items-center gap-2">
              About Us <HiOutlineArrowUpRight />
            </button>
          </Link>
        </div>
        <img
          src="/images/ribbon.png"
          alt="Ribbon"
          className="w-14 absolute -top-[7px] right-0"
        />
      </div>

      {/* Right Section */}
      <div className="flex-1 hidden md:block">
        <img
          src="/images/leading.jpg"
          alt="Leading Services"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
