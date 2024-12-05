
const Subscribe = () => {
  return (
    <div className="container w-full h-full mt-32">

    <div className="bg-[url('/images/Subscribe/background.jpg')] p-10 rounded-lg w-full h-full">
      <div className=" p-10">
        <h1 className="text-center text-4xl font-cyrene font-semibold">Let&apos;s Keep in touch</h1>
        <p className="text-center my-4 font-poppins">Subcribe to keep up with fresh news and exciting updates.</p>

        <div className="flex justify-between mx-auto w-[40%]   p-1.5 border border-gray-300 rounded-lg bg-white">
            <input type="text"placeholder="Enter your Email" className=" w-full focus:outline-none  " />
            <button className=" py-1.5 px-8 bg-[#9A3324] text-white rounded-md">
  Send
</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Subscribe
