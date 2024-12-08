import React from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const OurProjects = () => {
  return (
    <>
      <div className="bg-[#EEF8FC]">
        {/* <div className='container'>
     <div className='flex justify-between items-center py-16 pt-20'>
          <div>
               <h2 className='text-4xl font-bold mb-2'>Meet our export team</h2>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div>
               <button className='p-2 px-6 bg-[#1F3745] text-white rounded-lg'>View All</button>
          </div>
     </div>

     <div className='grid grid-cols-2 gap-7 pb-24'>
          <div className='flex bg-white p-5 rounded-lg gap-8 items-center border border-gray-200 shadow-md'>
               <div><img src="/images/ForTeams/teams1.jpg" alt="team image" className='w-64 rounded-lg' /></div>
               <div>
                    <h2 className='text-xl font-bold'>John Andreson, CPA</h2>
                    <p className='pb-8'>Founder & CEO</p>
                         <div><button className='p-1 px-5 mb-3 rounded-xl bg-gray-200 text-gray-600'>Financial strategy</button></div>
                         <div><button className='p-1 px-5 mb-3 rounded-xl bg-gray-200 text-gray-600'>Industry leadership</button></div>
                         <div><button className='p-1 px-5 rounded-xl bg-gray-200 text-gray-600'>Business development</button></div>
               </div>
          </div>
          <div className='flex bg-white p-5 rounded-lg gap-8 items-center border border-gray-200 shadow-md'>
               <div><img src="/images/ForTeams/teams2.jpg" alt="team image" className='w-64 rounded-lg' /></div>
               <div>
                    <h2 className='text-xl font-bold'>Sarah Mitchell, MBA</h2>
                    <p className='pb-8'>Chief Financial Officer</p>
                         <div><button className='p-1 px-5 mb-3 rounded-xl bg-gray-200 text-gray-600'>Financial analysis</button></div>
                         <div><button className='p-1 px-5 mb-3 rounded-xl bg-gray-200 text-gray-600'>Strategic planning</button></div>
                         <div><button className='p-1 px-5 rounded-xl bg-gray-200 text-gray-600'>Operational optimization</button></div>
               </div>
          </div>
     </div>

    </div> */}
      </div>

      <div className="bg-[url('/images/projectbg.png')]">
      <div className="container md:flex py-16 md:py-28 px-4 md:px-0">
        <div className="flex-1 pb-14 md:pb-0">
          <div className="sticky top-52 md:mt-20">
          <h3 className="uppercase text-sm font-bold">our projects</h3>
          <h2 className="font-bold text-5xl w-[90%] py-6 pb-8">A Task Approached With Great Commitment</h2>
          <p className="w-[80%] pb-10">
            Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde
            omnis iste perspiciatis ut perspiciatis unde omnis iste.
          </p>
          <Link to="/portfolio">
          <button className="p-3 px-8 bg-[#1F3745] text-white rounded-lg">
            More Projects
          </button>
          </Link>
          </div>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-1 gap-6">

            <div className="relative group">
              <img
                src="/images/ForService/service1.jpg"
                alt=""
                className="rounded h-full w-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#1F3745] bg-opacity-60 overflow-hidden w-full h-0 transition-all duration-700 ease-in-out group-hover:h-full">
                <div className="text-white text-lg absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <h2 className="font-bold text-xl mb-2">Project 1</h2>
                  <p className="text-sm flex items-center gap-2 justify-center group">View More <HiOutlineArrowUpRight /></p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <img
                src="/images/ForService/service2.jpg"
                alt=""
                className="rounded h-full w-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#1F3745] bg-opacity-60 overflow-hidden w-full h-0 transition-all duration-700 ease-in-out group-hover:h-full">
                <div className="text-white text-lg absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <h2 className="font-bold text-xl mb-2">Project 2</h2>
                  <p className="text-sm flex items-center gap-2 justify-center group">View More <HiOutlineArrowUpRight /></p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <img
                src="/images/ForService/service3.jpg"
                alt=""
                className="rounded h-full w-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#1F3745] bg-opacity-60 overflow-hidden w-full h-0 transition-all duration-700 ease-in-out group-hover:h-full">
                <div className="text-white text-lg absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <h2 className="font-bold text-xl mb-2">Project 3</h2>
                  <p className="text-sm flex items-center gap-2 justify-center group">View More <HiOutlineArrowUpRight /></p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <img
                src="/images/ForService/service4.jpg"
                alt=""
                className="rounded h-full w-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#1F3745] bg-opacity-60 overflow-hidden w-full h-0 transition-all duration-700 ease-in-out group-hover:h-full">
                <div className="text-white text-lg absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <h2 className="font-bold text-xl mb-2">Project 4</h2>
                  <p className="text-sm flex items-center gap-2 justify-center group">View More <HiOutlineArrowUpRight /></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default OurProjects;