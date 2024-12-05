const Banner = () => {
    return (
      <div className="relative w-full mt-32  h-[65vh] bg-fixed overflow-hidden">
        <video
          className="absolute top-0 left-0 bg bg-black bg-opacity-95 w-full h-full bg-fixed object-cover"
          src="/images/Banner/banner.mp4"
          autoPlay
          loop
          muted
        />
        <div className="bg-black w-full flex flex-col justify-center items-center  z-50  absolute top-0 h-full bg-opacity-30">
        <h1 className="text-gray-200 text-5xl font-cyrene md:text-6xl font-bold">
  Mother&apos;s Day Sale 2024
</h1>
<p className="text-white text-xl mt-4">
 Get Up to 30% off on Cakes. Limited time offer!
</p>
<button className="block mt-6 px-8 py-3 bg-[#9A3324] text-white rounded-lg">
  Learn More
</button>

        </div>
      </div>
    );
  };
  
  export default Banner;
  