import { useState } from "react";
// import { IoHomeOutline } from "react-icons/io5";
// import { Link, Element, scroller } from "react-scroll";
// import { useState } from "react";
import { MdVerified } from "react-icons/md";
import { FaDiamond } from "react-icons/fa6";
import UserSettings from "./UserSettings";
import Shipping from "../components/Cart Page/Shipping";
import Wishlist from "./Wishlist";
import { useFormik } from "formik";
import * as Yup from "yup";
import MyAddress from "../components/MyAddress";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const UserAccount = () => {
  // const [activeTab, setActiveTab] = useState('tab1');

  // // Function to handle the setting of the active tab
  // const handleSetActive = (tab) => {
  //   setActiveTab(tab);
  // };
  const [showForm, setShowForm] = useState("userSettings");
  const handleButtonClick = (formType) => {
    setShowForm(formType);
  };

  const fadeVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <div>
      {/* <div className="bg-[#F0F4F9]">
        <div className="items-center py-20">
          <h1 className="font-bold text-3xl text-center capitalize">My Account</h1>
          <div className="flex items-center mt-4 gap-2 justify-center">
            <IoHomeOutline />
            <span className="text-gray-700">Home - My Account</span>
          </div>
        </div>
      </div> */}
      <div className="mt-16">
        <div className="flex ">
          <div className="hidden md:block font-semibold ">
            {/* <div className="p-12 sticky top-10   border-gray-700">
              <ul className="cursor-pointer">
                {['Dashboard', 'Orders', 'Address', 'Edit Profile', 'My Reviews', 'Wish List',].map((tab) => (
                  <li
                    key={tab}
                    className={`mb-6 cursor-pointer ${activeTab === tab ? ' font-semibold' : 'text-gray-600'}`}
                  >
                    <Link
                      to={tab}
                      smooth={true}
                      duration={500}
                      onSetActive={() => handleSetActive(tab)}
                      onClick={() => handleSetActive(tab)}
                    >
                      {` ${tab}`}
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
          <div>
            <div className="px-48">
              <img src="images/Dashboard.jpg" className="rounded-xl" />
              <div className=" flex justify-center">
                <img
                  src="images/UserDashboard.jpg"
                  className="rounded-full w-28 -mt-16 border-[0.3rem] border-white"
                />
              </div>
              <div className="flex justify-center items-center gap-1">
                <h1 className="text-center text-2xl font-semibold">
                  Ella Solis
                </h1>
                <MdVerified className=" text-blue-500 text-2xl" />
              </div>
              <div className="flex mt-3 items-center gap-2   text-gray-700 justify-center">
                <span className="">0 WishList</span>
                <FaDiamond className="items-center text-[0.5rem] text-gray-500" />

                <span className="">0 Voucher</span>
              </div>

              <div className="mt-8">
                <div className="flex justify-between">
                  <div className="flex   gap-12 text-lg">
                    <h1
                      className={` ${showForm === "userSettings"
                        ? "border-b-2 border-[#0D4C90]"
                        : ""
                        }`}
                      onClick={() => handleButtonClick("userSettings")}
                    >
                      Profile
                    </h1>
                    <button
                      className={` ${showForm === "shippingInformation"
                        ? "border-b-2 border-[#0D4C90]"
                        : ""
                        }`}
                      onClick={() => handleButtonClick("shippingInformation")}
                    >
                      Shipping Information
                    </button>
                    <button
                      className={` ${showForm === "orderHistory"
                        ? "border-b-2 border-[#0D4C90]"
                        : ""
                        }`}
                      onClick={() => handleButtonClick("orderHistory")}
                    >
                      Order History
                    </button>
                    <button
                      className={` ${showForm === "wishlist"
                        ? "border-b-2 border-[#0D4C90]"
                        : ""
                        }`}
                      onClick={() => handleButtonClick("wishlist")}
                    >
                      Wishlist
                    </button>
                    {/* <button
            className={` ${
              showForm === "register" ? "border-b-2 border-[#0D4C90]" : ""
            }`}
            onClick={() => handleButtonClick("register")}
          >
            Register
          </button> */}
                  </div>
                </div>
              </div>
              {showForm === "userSettings" && (
                <div>
                  <UserSettings />
                </div>
              )}
              {showForm === "shippingInformation" && (

                <div className="grid grid-cols-2 h-full gap-8 rounded-lg mt-8 p-8 bg-[#F7F7F7]" >
                  <div className="relative p-2   rounded-lg z-[333]" >
                    <div className="p-5 border bg-white border-black rounded-lg">
                      <h1 className="font-semibold">Pranish Bista</h1>
                      <p className="py-4">79 North Nobel Avenue <br />
                        Ut dolorem veniam dolore quia do, IN, 64494, US <br />
                        +16244897649</p>
                      <div className="flex gap-2">
                        <button className="underline underline-offset-2">Edit</button>
                        <button className="underline underline-offset-2">Remove</button>
                      </div>
                      <button className="absolute top-0 right-0 ">< FaCircleCheck className="text-2xl bg-white"/> </button>
                    </div>
                  </div>

                  <div className=" p-2 h-auto rounded-lg " >
                    <div className="p-5 border bg-white border-gray-200 hover:border-black rounded-lg h-full">
                      <h1 className="">New Address</h1>
                     <Link to='/myAddress'>
                      <div className="flex gap-2 pt-20 cursor-pointer">
                        <button className="text-5xl text-gray-700">+</button>
                      </div>
                     
                     </Link>
                    </div>
                  </div>

                  




                </div>
              )}
              {showForm === "wishlist" && (
                <div>
                  <Wishlist />
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
