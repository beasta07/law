import React, { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import {
  IoLocationOutline,
  IoChevronDown,
  IoHomeOutline,
  IoStorefrontOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [offScreenHeader, setoffScreenHeader] = useState(false);

  const toggleHeader = () => {
    setoffScreenHeader(!offScreenHeader);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePromo = () => {
    setIsPromoOpen(!isPromoOpen);
  };

  return (
    <>
      {offScreenHeader && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleHeader}
        ></div>
      )}

      {/* Offscreen Header */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: offScreenHeader ? "0%" : "-100%" }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 h-full bg-white w-full sm:w-[60%] md:w-[40%] lg:w-[20%] border border-gray-200 p-5 z-50`}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Offscreen Header</h1>
          <RxCross2 className="cursor-pointer text-xl" onClick={toggleHeader} />
        </div>
        <ul className="mt-4">
          <li className="mb-4">
            <Link onClick={toggleHeader} to="/">
              Home
            </Link>
          </li>
          <li className="mb-4">
            <Link onClick={toggleHeader} to="/shop">
              Shop
            </Link>
          </li>
          <li className="mb-4">
            <Link onClick={toggleHeader} to="/aboutus">
              About Us
            </Link>
          </li>
          <li className="mb-4">
            <Link onClick={toggleHeader} to="/">
              Contact
            </Link>
          </li>
        </ul>
      </motion.div>

      <div className="bg-black text-white px-4 lg:px-0">
        <div className="container py-2 flex justify-between items-center">
          <div className="text-sm">
            <button onClick={togglePromo} className="flex items-center gap-2">
              30% OFF SALE <IoChevronDown className="text-lg" />
            </button>
          </div>

          <div className="hidden lg:block text-sm">
            <ul className="flex gap-5">
              <li className="flex items-center gap-2">
                <BsTelephone />
                +980124567
              </li>
              <li className="flex items-center gap-2">
                <GoMail />
                info@example.com
              </li>
              <li className="flex items-center gap-2">
                <IoLocationOutline />
                Kathmandu, Nepal
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex gap-6 text-lg ">
              <Link to="/signin">
                <button className="text-sm">SignUp / SignIn</button>
              </Link>
              <button onClick={toggleMenu} className="hidden lg:block">
                <RiMenu3Fill />
              </button>
            </ul>
          </div>
        </div>
      </div>

      {/* Promo div with sliding animation */}
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{
          y: isPromoOpen ? 0 : "-100%",
          opacity: isPromoOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="bg-gray-50 text-black p-4 fixed top-0 left-0 w-full border shadow z-40"
      >
        <div className="container flex justify-between items-center relative">
          <div className="flex flex-col-reverse md:flex-row justify-between py-14 gap-10 lg:gap-40 items-center">
            <div className="flex-1">
              <h2 className="text-lg font-semibold uppercase">
                Get 30% off on all products!
              </h2>
              <p className="py-4">
                Save on tons of crowd favorites just in time for the school year
                and beyond. No code needed, ends 8/22.
              </p>
              <Link onClick={togglePromo} to="/shop">
              <button className="uppercase underline underline-offset-4">
                Shop now
              </button>
              </Link>
            </div>
            <div className="flex-1 class">
              <img
                src="/images/promo.jpg"
                alt="promotion"
                className="w-full md:w-[90%] rounded-xl"
              />
            </div>
          </div>
          <button
            onClick={togglePromo}
            className="text-xl font-semibold absolute top-1 right-0"
          >
            <RxCross2 />
          </button>
        </div>
      </motion.div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full bg-white w-full sm:w-[60%] md:w-[40%] lg:w-[20%] border border-gray-200 p-5 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } duration-300 z-50`}
      >
        <ul>
          <div className="flex justify-between">
            <Link to="/">
              <h1 className="text-xl font-semibold">PHM</h1>
            </Link>
            <RxCross2 className="cursor-pointer text-xl" onClick={toggleMenu} />
          </div>
          <hr className="border border-gray-200 my-4" />
          <li className="mb-4">
            <Link onClick={toggleMenu} className="flex items-center gap-2" to="/">
              <IoHomeOutline />
              Home
            </Link>
          </li>
          <li className="mb-4">
            <Link onClick={toggleMenu} className="flex items-center gap-2" to="/shop">
              <IoStorefrontOutline />
              Shop
            </Link>
          </li>
          <li className="mb-4">
            <Link onClick={toggleMenu} className="flex items-center gap-2" to="/aboutus">
            <IoInformationCircleOutline className="text-lg" />
              About Us
            </Link>
          </li>
          <li className="mb-6">
            <Link onClick={toggleMenu} className="flex items-center gap-2" to="/">
              <BsTelephone />
              Contact
            </Link>
          </li>
          <hr className="border border-gray-200 my-4" />
        </ul>

        <div className="border-b border-gray-300 pb-4 mb-5">
          <h2 className="text-xl font-medium pb-3">More Links</h2>
          <ul className="leading-9">
            <Link onClick={toggleMenu} to="/privacy-policy"><li>Privacy Policy</li></Link>
            <Link onClick={toggleMenu} to="/faq"><li>FAQ</li></Link>
            <Link onClick={toggleMenu} to="/"><li>Help Center</li></Link>
          </ul>
        </div>

        <div className="border-b border-gray-300 pb-4 mb-6">
          <ul className="leading-10">
            <li className="flex items-center gap-2">
              <BsTelephone />
              +980124567
            </li>
            <li className="flex items-center gap-2">
              <GoMail />
              info@example.com
            </li>
            <li className="flex items-center gap-2">
              <IoLocationOutline />
              Kathmandu, Nepal
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-medium pb-4">Social</h2>
          <ul className="flex gap-3 text-2xl ">
            <a href="https://www.facebook.com/" target="blank"><li><CiFacebook /></li></a>
            <a href="https://x.com/" target="blank"><li><CiTwitter /></li></a>
            <a href="https://www.instagram.com/" target="blank"><li><CiInstagram /></li></a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
