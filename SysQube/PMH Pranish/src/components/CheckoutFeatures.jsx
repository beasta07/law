import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GoGift } from "react-icons/go";
import { IoWalletOutline } from "react-icons/io5";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
const CheckoutFeatures = () => {
  return (
    <div>
      <div className=" lg:px-20 md:px-4 px-4 pt-20">
        <div className="container mx-auto grid grid-cols-2 gap-8 md:flex lg:justify-around md:justify-between ">
          <div className="lg:flex  items-center text-center gap-4">
            <div className="lg:border border-gray-300 rounded-full p-2">
              <LiaShippingFastSolid className="text-3xl mx-auto" />
            </div>
            <div>
              <h1 className="text-xl font-semibold">Free Shipping</h1>
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
    </div>
  );
};

export default CheckoutFeatures;
