import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Promotion = () => {
  return (
    <>
      <div className="container pt-24">
        <Link to="/shop">
          <div className='bg-[url("/images/banner1.jpg")] py-14 bg-center rounded-xl shadow border hover:scale-105 duration-200'>
            <h2 className="mx-auto text-center uppercase text-3xl font-light">
              trade your phone <br /> and receive upto{" "}
              <span className="font-semibold">
                40% discount <br /> for new device
              </span>
            </h2>
          </div>
        </Link>

        <div className="md:flex mt-8 gap-8">
          <Link to="/shop">
            <div className="flex-1 rounded-xl border shadow mb-8 md:mb-0">
              <div className="flex items-center hover:scale-105 duration-200 bg-[#F9F9FB]">
                <div className="flex-1">
                  <img
                    src="/images/banner3.png"
                    alt=""
                    className="rounded-xl"
                  />
                </div>
                <div className="flex-1 pl-5">
                  <h2 className="text-2xl uppercase font-light pb-2">
                    tablets & <br /> smartphone cover
                  </h2>
                  <button className="text-3xl uppercase font-semibold flex gap-3">
                    upto 79%
                    <MdKeyboardArrowRight className="bg-[#0D4C90] text-white rounded-full " />
                  </button>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/shop">
            <div className="flex-1 rounded-xl border shadow  h-full">
              <div className="flex items-center hover:scale-105 duration-200 bg-[#F9F9FB]  h-full">
                <div className="flex-1 pl-5">
                  <h2 className="text-2xl uppercase font-semibold">
                    Audio studio
                  </h2>
                  <p className="text-2xl uppercase font-light pb-3">wireless</p>
                  <button className="p-2 bg-[#0D4C90] rounded-3xl px-8 uppercase text-white">
                    buy now
                  </button>
                </div>
                <div className="flex-1">
                  <img
                    src="/images/banner4.png"
                    alt=""
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Promotion;
