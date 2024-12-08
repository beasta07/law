import React from "react";
import { LuPlus } from "react-icons/lu";
import { BiCurrentLocation } from "react-icons/bi";
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[url('/images/footerbg.png')] bg-center text-white">
      <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-20 py-20 px-4 md:px-0">
        <div className="">
          <h1 className="font-semibold">
        Prudential Cooperate & Legal Services

          </h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam libero error odio repellendus? Adipisci.
          </p>
        </div>

        <div className="">
          <h2 className="text-xl font-bold pb-5">Useful Links</h2>
          <ul className="leading-9">
            <li className="flex items-center gap-2 group"><LuPlus className="group-hover:rotate-180 duration-500" />Home</li>
            <li className="flex items-center gap-2 group"><LuPlus className="group-hover:rotate-180 duration-500" />About</li>
            <li className="flex items-center gap-2 group"><LuPlus className="group-hover:rotate-180 duration-500" />Service</li>
            <li className="flex items-center gap-2 group"><LuPlus className="group-hover:rotate-180 duration-500" />Our Team</li>
            <li className="flex items-center gap-2 group"><LuPlus className="group-hover:rotate-180 duration-500" />Contact</li>
          </ul>
        </div>

        <div className="">
          <h2 className="text-xl font-bold pb-5">Our Services</h2>
          <ul className="leading-9">
            <li className="flex items-center gap-2 group"><LuPlus className="group-hover:rotate-180 duration-500" />Legal Services</li>
            <li className="flex items-center gap-2 group"><LuPlus className="group-hover:rotate-180 duration-500" />Acconting Services</li>
            <li className="flex items-center gap-2 group"><LuPlus className="group-hover:rotate-180 duration-500" />Personnel Services
            </li>
            <li className="flex items-center gap-2 group"><LuPlus className="group-hover:rotate-180 duration-500" />Financial Consulting            </li>

            <li className="flex items-center gap-2 group"><LuPlus className="group-hover:rotate-180 duration-500" />Corporate Compliance

            </li>
          </ul>
        </div>

        <div className="">
          <h2 className="text-xl font-bold pb-5">Contact Us</h2>
          <ul className="leading-9">
            <li className="flex items-center gap-2"><BiCurrentLocation className="text-xl" />kathmandu, Nepal</li>
            <li className="flex items-center gap-2"><MdOutlineMail className="text-xl" />info@example.com</li>
            <li className="flex items-center gap-2"><MdOutlinePhone className="text-xl" />9840254404</li>
          </ul>
        </div>
      </div> <hr className="border border-gray-500" />

      <div className="md:flex justify-center   container py-5 text-center">
        <p className="pb-4 md:pb-0 text-center"> Prudential Cooperate & Legal Services
        copyright © 2024. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
