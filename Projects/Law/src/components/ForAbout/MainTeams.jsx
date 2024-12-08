import React from 'react'
import { HiOutlineArrowUpRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const MainTeams = () => {
  return (
    <>
      <div className="bg-[#EEF8FC]">
      </div>

      <div className="">
      <div className="container md:flex pt-32 pb-8 items-center px-4 md:px-0">
        <div className="flex-1 pb-14">
          <h3 className="uppercase text-sm font-bold">our Teams</h3>
          <h2 className="font-bold text-5xl w-[90%] py-6 pb-8">A Task Approached With Great Commitment</h2>
          <p className="w-[80%] pb-10">
            Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde
            omnis iste perspiciatis ut perspiciatis unde omnis iste.
          </p>
          <Link to="/teams">
          <button className="p-3 px-8 bg-[#1F3745] text-white rounded-lg">
            View Teams
          </button>
          </Link>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-2 gap-3 md:gap-6">

            <div className="relative group">
              <img
                src="/images/ForTeams/teams3.jpg"
                alt=""
                className="rounded h-full w-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#1F3745] bg-opacity-60 overflow-hidden w-full h-0 transition-all duration-700 ease-in-out group-hover:h-full">
                <div className="text-white text-lg absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <h2 className="font-bold text-xl mb-2">Teams 3</h2>
                  <p className="text-sm flex items-center gap-2 justify-center group">View More <HiOutlineArrowUpRight /></p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <img
                src="/images/ForTeams/teams4.jpg"
                alt=""
                className="rounded h-full w-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#1F3745] bg-opacity-60 overflow-hidden w-full h-0 transition-all duration-700 ease-in-out group-hover:h-full">
                <div className="text-white text-lg absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <h2 className="font-bold text-xl mb-2">Teams 4</h2>
                  <p className="text-sm flex items-center gap-2 justify-center group">View More <HiOutlineArrowUpRight /></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default MainTeams