import { GoArrowUpRight } from "react-icons/go";

const SecondBanner = () => {
  return (
    <>
    <div className="my-32">

      <div className='bg-[url("/images/SecondBanner/BannerImage.jpg")] md:bg-center bg-no-repeat bg-cover bg-top bg-fixed'>
        <div className="bg-black bg-opacity-50 text-center uppercase text-white py-16 bg-fixed">
          <p className="text-xs font-semibold">ends tomorrow</p>
          <h2 className="text-4xl md:text-4xl  font-semibold py-5">Mother's Day sale <br /> upto 50% off</h2>
          <p className="pb-12">Use code <span className="text-red-500 font-semibold">MothersDay</span> on select sale styles</p>
          <button className="group uppercase p-3 px-7 border border-white flex items-center gap-2 mx-auto font-medium text-sm rounded-md">shop now <GoArrowUpRight className="text-xl group-hover:rotate-45 duration-300" /></button>
        </div>
      </div>
    </div>
    </>
  );
};

export default SecondBanner;