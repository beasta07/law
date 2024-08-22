import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="mt-24">
        <div className=" bg-gradient-to-r px-0 from-[#131E24] to-[#2B201E] ">
          <div className="text-white container px-4 lg:px-0">
            <div className="md:flex items-center gap-20 py-20">
              <div className="w-full">
                <h1 className="font-bold lg:text-5xl text-3xl">
                  Subscribe our Newsletter and get all of our update
                </h1>
              </div>
              <div className="relative md:w-3/4 flex border bg-transparent lg:mt-0 mt-8 border-gray-400 rounded-full">
                <input
                  className="rounded-full outline-none  px-5 bg-transparent py-4 lg:pr-16 w-full"
                  placeholder="Enter your Email"
                />
                <button className="absolute right-1 top-1  my-1  mr-1 bg-white rounded-full text-black px-4 py-2">
                  Submit
                </button>
              </div>
            </div>
            <hr className="border border-gray-700" />

            <div className="lg:flex md:flex md:flex-wrap justify-between pt-10 pb-10 md:gap-6">
              <div className="mb-9 lg:mb-0">
                <h1 className="font-semibold text-xl">Quick Links </h1>
                <p className="text-white  mt-5 cursor-pointer">Search</p>
                <p className="text-white  mt-2 cursor-pointer">Reviews</p>
                <Link to="/aboutus"><p className="text-white  mt-2 cursor-pointer">About Us</p></Link>
                <p className="text-white  mt-2 cursor-pointer">Privacy Policy</p>
              </div>
              <div className="mb-9 lg:mb-0">
                <h1 className="font-semibold text-xl">Info </h1>
                <p className="text-white  mt-5 cursor-pointer">
                  Terms of Service
                </p>
                <p className="text-white  mt-2 cursor-pointer">
                  Accessibility Statement
                </p>
                <p className="text-white  mt-2 cursor-pointer">Cookie Policy</p>
                <p className="text-white  mt-2 cursor-pointer">
                  Contact Information
                </p>
              </div>
              <div className="mb-9 lg:mb-0">
                <h1 className="font-semibold text-xl">About Policies </h1>
                <Link to="aboutus"><p className="text-white  mt-5 cursor-pointer">About Us</p></Link>
                <Link to="faq"><p className="text-white  mt-2 cursor-pointer">FAQ</p></Link>
                <p className="text-white  mt-2 cursor-pointer">
                  Shipping Information
                </p>
                <p className="text-white  mt-2 cursor-pointer">
                  Customer Support
                </p>
                <p className="text-white  mt-2 cursor-pointer">Contact Us</p>
                <p className="text-white  mt-2 cursor-pointer">
                  Private Policy
                </p>
              </div>
              <div className="mb-9 lg:mb-0">
                <h1 className="font-semibold text-xl">New Arrivals </h1>
                <p className="text-white  mt-5 cursor-pointer">Best Sellers</p>
                <p className="text-white  mt-2 cursor-pointer">Sale Items</p>
                <p className="text-white  mt-2 cursor-pointer">Size Guide</p>
                <p className="text-white  mt-2 cursor-pointer">Store Locator</p>
              </div>
              <div>
                <h1 className="font-semibold text-xl">Contact Info </h1>

                <p className="text-sm mt-2">
                  {" "}
                  70 Washington South Square, New <br /> Delhi 44600, Kathmandu
                </p>
                <p className="mt-4">+12345 678 910</p>
                <p>+12345 678 109</p>
                <div className="flex my-5 text-4xl gap-6">
                  <FaFacebookF className="cursor-pointer  p-2 border  border-gray-400 rounded-full" />
                  <FaInstagram className="cursor-pointer p-2 border border-gray-400 rounded-full" />
                  <FaXTwitter className="cursor-pointer p-2 border border-gray-400 rounded-full" />
                  <FaLinkedin className="cursor-pointer p-2 border border-gray-400 rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:container px-[2rem]  text-white justify-between py-8 text-center">
            <div className="pb-3 lg:pb-0">
              @2024. All Rights Reserved Privacy Policy
            </div>
            <div className="">
              Designed & Developed By{" "}
              <span className="font-semibold lg:font-normal">
                SysQube Technology
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
