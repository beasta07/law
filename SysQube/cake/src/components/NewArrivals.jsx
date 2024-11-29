import { useState } from "react"

const NewArrivals = () => {
  const [selectedProducts, setSelectedProducts] = useState("WeddingCake")
  const handleButtonClick = (formType) => {
    setSelectedProducts(formType);
  };
  const cakeData = [
    {
      title: "Cake",
      name: "BlackForest cake",
      price: "Rs 1200/pound",
      background: "/images/New-Arrivals/blackforest.png"
    },
    {
      title: "Cake",
      name: "Vanilla cake",
      price: "Rs 1200/pound",
      background: "/public/images/New Arrivals/vanillaSponge.png"
    },
    {
      title: "Cake",
      name: "Orange cake",
      price: "Rs 1200/pound",
      background: "/public/images/New Arrivals/carrotCake.png"
    },
    {
      title: "Cake",
      name: "Blueberry cake",
      price: "Rs 1200/pound",
      background: "/images/Products/First.jpg"
    }, {
      title: "Cake",
      name: "Coffee cake",
      price: "Rs 1200/pound",
      background: "/images/Products/First.jpg"
    }, {
      title: "Cake",
      name: "Vanilla cake",
      price: "Rs 1200/pound",
      background: "/images/Products/First.jpg"
    }, {
      title: "Cake",
      name: "Carrot cake",
      price: "Rs 1200/pound",
      background: "/images/Products/First.jpg"
    }, {
      title: "Cake",
      name: "Lemon  cake",
      price: "Rs 1200/pound",
      background: "/images/Products/First.jpg"
    }
  ];
  
  

  return (
    <div className="container font-poppins pb-32 px-4  ">
      <div className="mb-20 text-center ">
        <h1 className="font-cyrene text-5xl ">Try Our </h1>
        <h2 className="text-lg text-[#9A3324]">Latest Products</h2>
      </div>
      <div className="md:flex justify-center  text-sm text-center font-light  bg-gray-100   text-gray-700  md:mx-64 rounded-lg  overflow-bg-opacity-100  ">
        <h1
          className={`p-2.5 w-full cursor-pointer ${selectedProducts === "WeddingCake"
            ? "bg-[#9A3324]    rounded-l-lg text-white"
            : ""
            }`}
          onClick={() => handleButtonClick("WeddingCake")}
        >
          Wedding Cake
        </h1>
        <h1
          className={` p-2.5 w-full cursor-pointer ${selectedProducts === "BirthdayCake"
            ? "bg-[#9A3324]   text-white"
            : ""
            }`}
          onClick={() => handleButtonClick("BirthdayCake")}
        >
          Birthday Cake
        </h1>
        <button
          className={`p-2.5 w-full cursor-pointer ${selectedProducts === "NumberCake"
            ? "bg-[#9A3324]   text-white"
            : ""
            }`}
          onClick={() => handleButtonClick("NumberCake")}
        >
          Number Cake
        </button>
        <button
          className={`p-2.5 w-full cursor-pointer ${selectedProducts === "EventCake"
            ? "bg-[#9A3324]   text-white rounded-r-lg"
            : ""
            }`}
          onClick={() => handleButtonClick("EventCake")}
        >
          Event Cake
        </button>

      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 w-full mt-8 text-white">
        {/* {cakeData.map((cake,index)=> (
                 <div key={index}
                 className={`relative group rounded-lg bg-cover bg-center h-96 bg-[url('${cake.background}')]`}>
                    <img src="/public/images/New Arrivals/carrotCake.png" alt="" />
                 <div className="h-full w-full flex rounded-lg  flex-col justify-center items-center text-center absolute bg-transparent backdrop-blur-sm opacity-0 group-hover:bg-black group-hover:bg-opacity-25  group-hover:flex group-hover:opacity-100 duration-1000  ">
                   <h1 className="text-sm mb-6">{cake.title}</h1>
                   <h2 className="font-semibold mb-4">{cake.name}</h2>
                   <h3 className="mb-6">{cake.price}</h3>
                   <p className="text-xs mb-4 text-gray-200">More Information</p>
                   <button className="rounded-full text-black px-12 font-semibold text-sm py-2 bg-gray-100 shadow-md"> BUY</button>
                 </div>
                 <div className="w-full absolute bottom-0 text-center p-4 text-sm flex justify-between  bg-opacity-10 bg-black backdrop-blur-sm">
                   <h1 className="font-semibold">{cake.name}</h1>
                   <h2>{cake.price}</h2>
                 </div>
               </div>
        ))} */}
        <div className="relative group rounded-lg bg-cover bg-center h-96 bg-[url('/public/images/New-Arrivals/blackforest.png')]">
          <div className="h-full w-full flex rounded-lg  flex-col justify-center items-center text-center absolute bg-transparent backdrop-blur-sm opacity-0 group-hover:bg-black group-hover:bg-opacity-25  group-hover:flex group-hover:opacity-100 duration-1000  ">
            <h1 className="text-sm mb-6">Cake</h1>
            <img src="/public/images/New Arrivals/blackforest.png" alt="" />
            <h2 className="font-semibold mb-4">Icecream cake</h2>
            <h3 className="mb-6">Rs 1200/pound</h3>
            <p className="text-xs mb-4 text-gray-200">More Information</p>
            <button className="rounded-full text-black px-12 font-semibold text-sm py-2 bg-gray-100 shadow-md"> BUY</button>
          </div>
          <div className="w-full absolute bottom-0 text-center p-4 text-sm flex justify-between  bg-opacity-10 bg-black backdrop-blur-sm">
            <h1 className="font-semibold">Chocolate Cake</h1>
            <h2>Rs 850/kg</h2>
          </div>
        </div>
        <div className="relative group rounded-lg ohject-cover  bg-center  bg-cover h-96 bg-[url('/public/images/New-Arrivals/stawberryCake.png')]">
          <div className="h-full w-full flex rounded-lg  flex-col justify-center items-center text-center absolute bg-transparent backdrop-blur-sm opacity-0 group-hover:bg-black group-hover:bg-opacity-25  group-hover:flex group-hover:opacity-100 duration-300  ">
            <h1 className="text-sm mb-6">Cake</h1>
            <h2 className="font-semibold mb-4">Choclate cake</h2>
            <h3 className="mb-6">Rs 1200/pound</h3>
            <p className="text-xs mb-4 text-gray-200">More Information</p>
            <button className="rounded-full text-black px-12 font-semibold text-sm py-2 bg-gray-100 shadow-md"> BUY</button>
          </div>
          <div className="w-full absolute bottom-0 text-center p-4 text-sm flex justify-between  bg-opacity-10 bg-black backdrop-blur-sm">
            <h1 className="font-semibold">Ice Cream Cake</h1>
            <h2>Rs 1200/kg</h2>
          </div>
        </div>
        <div className="relative group rounded-lg bg-center  bg-cover h-96 bg-[url('/public/images/New-Arrivals/chocolateCake.png')]">
          <div className="h-full w-full flex rounded-lg  flex-col justify-center items-center text-center absolute bg-transparent backdrop-blur-sm opacity-0 group-hover:bg-black group-hover:bg-opacity-25  group-hover:flex group-hover:opacity-100 duration-300  ">
            <h1 className="text-sm mb-6">Cake</h1>
            <h2 className="font-semibold mb-4">Orange cake</h2>
            <h3 className="mb-6">Rs 1200/pound</h3>
            <p className="text-xs mb-4 text-gray-200">More Information</p>
            <button className="rounded-full text-black px-12 font-semibold text-sm py-2 bg-gray-100 shadow-md"> BUY</button>
          </div>
          <div className="w-full absolute bottom-0 text-center p-4 text-sm flex justify-between  bg-opacity-10 bg-black backdrop-blur-sm">
            <h1 className="font-semibold">Orange Cake</h1>
            <h2>Rs 950/kg</h2>
          </div>
        </div>
        <div className="relative group rounded-lg bg-cover bg-center h-96 bg-[url('/public/images/New-Arrivals/coffee.png')]">
          <div className="h-full w-full flex rounded-lg  flex-col justify-center items-center text-center absolute bg-transparent backdrop-blur-sm opacity-0 group-hover:bg-black group-hover:bg-opacity-25  group-hover:flex group-hover:opacity-100 duration-300  ">
            <h1 className="text-sm mb-6">Cake</h1>
            <h2 className="font-semibold mb-4">Blueberry cake</h2>
            <h3 className="mb-6">Rs 1200/pound</h3>
            <p className="text-xs mb-4 text-gray-200">More Information</p>
            <button className="rounded-full text-black px-12 font-semibold text-sm py-2 bg-gray-100 shadow-md"> BUY</button>
          </div>
          <div className="w-full absolute bottom-0 text-center p-4 text-sm flex justify-between  bg-opacity-10 bg-black backdrop-blur-sm">
            <h1 className="font-semibold">Blueberry Cake</h1>
            <h2>Rs 950/kg</h2>
          </div>
        </div>
        <div className="relative group rounded-lg bg-cover bg-center h-96 bg-[url('/public/images/New-Arrivals/lemon.png')]">
          <div className="h-full w-full flex rounded-lg  flex-col justify-center items-center text-center absolute bg-transparent backdrop-blur-sm opacity-0 group-hover:bg-black group-hover:bg-opacity-25  group-hover:flex group-hover:opacity-100 duration-300  ">
            <h1 className="text-sm mb-6">Cake</h1>
            <h2 className="font-semibold mb-4">Blueberry cake</h2>
            <h3 className="mb-6">Rs 1200/pound</h3>
            <p className="text-xs mb-4 text-gray-200">More Information</p>
            <button className="rounded-full text-black px-12 font-semibold text-sm py-2 bg-gray-100 shadow-md"> BUY</button>
          </div>
          <div className="w-full absolute bottom-0 text-center p-4 text-sm flex justify-between  bg-opacity-10 bg-black backdrop-blur-sm">
            <h1 className="font-semibold">Blueberry Cake</h1>
            <h2>Rs 950/kg</h2>
          </div>
        </div>
        <div className="relative group rounded-lg bg-cover bg-center h-96 bg-[url('/public/images/New-Arrivals/carrotCake.png')]">
          <div className="h-full w-full flex rounded-lg  flex-col justify-center items-center text-center absolute bg-transparent backdrop-blur-sm opacity-0 group-hover:bg-black group-hover:bg-opacity-25  group-hover:flex group-hover:opacity-100 duration-300  ">
            <h1 className="text-sm mb-6">Cake</h1>
            <h3 className="mb-6">Rs 1200/pound</h3>
            <p className="text-xs mb-4 text-gray-200">More Information</p>
            <button className="rounded-full text-black px-12 font-semibold text-sm py-2 bg-gray-100 shadow-md"> BUY</button>
          </div>
          <div className="w-full absolute bottom-0 text-center p-4 text-sm flex justify-between  bg-opacity-10 bg-black backdrop-blur-sm">
            <h1 className="font-semibold">Blueberry Cake</h1>
            <h2>Rs 950/kg</h2>
          </div>
        </div>
        <div className="relative group rounded-lg bg-cover bg-center h-96 bg-[url('/public/images/New-Arrivals/redVelvet.png')]">
          <div className="h-full w-full flex rounded-lg  flex-col justify-center items-center text-center absolute bg-transparent backdrop-blur-sm opacity-0 group-hover:bg-black group-hover:bg-opacity-25  group-hover:flex group-hover:opacity-100 duration-300  ">
            <h1 className="text-sm mb-6">Cake</h1>
            <h2 className="font-semibold mb-4">Blueberry cake</h2>
            <h3 className="mb-6">Rs 1200/pound</h3>
            <p className="text-xs mb-4 text-gray-200">More Information</p>
            <button className="rounded-full text-black px-12 font-semibold text-sm py-2 bg-gray-100 shadow-md"> BUY</button>
          </div>
          <div className="w-full absolute bottom-0 text-center p-4 text-sm flex justify-between  bg-opacity-10 bg-black backdrop-blur-sm">
            <h1 className="font-semibold">Blueberry Cake</h1>
            <h2>Rs 950/kg</h2>
          </div>
        </div>
        <div className="relative group rounded-lg bg-cover bg-center h-96 bg-[url('/public/images/New-Arrivals/cheeseCake.png')]">
          <div className="h-full w-full flex rounded-lg  flex-col justify-center items-center text-center absolute bg-transparent backdrop-blur-sm opacity-0 group-hover:bg-black group-hover:bg-opacity-25  group-hover:flex group-hover:opacity-100 duration-300  ">
            <h1 className="text-sm mb-6">Cake</h1>
            <h2 className="font-semibold mb-4">Blueberry cake</h2>
            <h3 className="mb-6">Rs 1200/pound</h3>
            <p className="text-xs mb-4 text-gray-200">More Information</p>
            <button className="rounded-full text-black px-12 font-semibold text-sm py-2 bg-gray-100 shadow-md"> BUY</button>
          </div>
          <div className="w-full absolute bottom-0 text-center p-4 text-sm flex justify-between  bg-opacity-10 bg-black backdrop-blur-sm">
            <h1 className="font-semibold">Blueberry Cake</h1>
            <h2>Rs 950/kg</h2>
          </div>
        </div>

      </div>

    </div>
  )
}

export default NewArrivals
