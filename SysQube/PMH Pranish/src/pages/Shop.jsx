import { CiFilter, CiSearch, CiHeart } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { PiEyeLight } from "react-icons/pi";
import { useState, useEffect, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "../App.css";
// import { GoArrowRight } from "react-icons/go";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import "./pagination.css";

const Shop = () => {
  const [FilterSelect, setFilterSelect] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(8);
  const totalPages = 3;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Sort By");
  const [selectedValue, setSelectedValue] = useState(12);
  const [selectedRam, setSelectedRam] = useState(null);
  const [value, setValue] = useState([0, 100]);
  const [show, setShow] = useState(false);

  const toggleProduct = (product) => {
    setSelectedProduct(product);
    setSelectedRam(product.rams ? product.rams[0] : null);
  };

  const CloseProduct = () => {
    setSelectedProduct(!selectedProduct);
  };

  function valuetext(value) {
    return `${value}°C`;
  }
  const handleSelect = (value) => {
    setSelectedValue(value);
    setShow(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const filterRef = useRef(null);

  const handleClickOutside = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setOffScreenNav(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleFilter = () => {
    setFilterSelect(!FilterSelect);
  };

  const shop = [
    {
      id: 1,
      image1: "images/Shop/Product1.jpg",
      image2: "images/Shop/Product1-2.jpg",
      price: "Rs 1,80000",
      newPrice: "Rs 1,00,000",
      name: "IPhone 15",
      category: "Mobile",
      rams: ["8GB", "16GB", "32GB"],
      tag: "50%",
    },
    {
      id: 2,
      image1: "images/Shop/Product2.jpg",
      image2: "images/Shop/Product2-2.jpg",
      price: "Rs 28,000",
      newPrice: "Rs 24,000",
      name: "Smart Band Carbon",
      category: "Watch",
      tag: "30%",
    },
    {
      id: 3,
      image1: "images/Shop/Product3.jpg",
      image2: "images/Shop/Product3-2.jpg",
      price: "",
      newPrice: "Rs 16,000",
      name: "Wireless Loud H7i",
      category: "Music",
    },
    {
      id: 4,
      image1: "images/Shop/Product4.jpg",
      image2: "images/Shop/Product4-2.jpg",
      price: "Rs 5000",
      newPrice: "Rs 4500",
      name: "IPhone 15 case",
      category: "Cover",
      tag: "50%",
    },
    {
      id: 5,
      image1: "images/Shop/Product5.jpg",
      image2: "images/Shop/Product5.jpg",
      price: "",
      newPrice: "Rs 1,00,000",
      name: "IPhone 15 case",
      category: "Cover",
    },
    {
      id: 6,
      image1: "images/Shop/Product6.jpg",
      image2: "images/Shop/Product6.jpg",
      price: "Rs 4000",
      newPrice: "Rs 1500",
      name: "Mouse 15 ",
      category: "Computer Hardware",
      tag: "30%",
    },
  ];

  return (
    <>
      <div className="px-4 lg:px-0">
        {selectedProduct && (
          <>
            <div
              className="fixed inset-0 bg-black opacity-50 z-30"
              onClick={CloseProduct}
            ></div>
            <div className="fixed top-0 container inset-x-0 md:w-[50%] h-full md:h-auto lg:top-36 md:top-52 bg-white border-b border-gray-200 p-4 transition-transform transform translate-y-0 duration-300 z-[100]">
              <div
                className="fixed top-5 cursor-pointer container"
                onClick={CloseProduct}
              >
                <RxCross2 />
              </div>
              <div className="lg:flex p-4">
                <div className="md:w-1/2 w-[58%] mx-auto flex justify-between">
                  <img src={selectedProduct.image1} alt={selectedProduct.name} />
                </div>
                <div className="mx-auto">
                  <h1>{selectedProduct.name}</h1>
                  <span className="text-gray-700 text-sm">
                    {selectedProduct.category}
                  </span>
                  <h3 className="font-semibold text-2xl ">
                    {selectedProduct.price}
                  </h3>
                  <hr className="border-gray-300 my-4" />
                  <h3 className="font-semibold text-xl my-2">Color</h3>
                  <div className="flex gap-4">
                    <span className="my-4 hover:border-black bg-green-500 rounded-full cursor-pointer px-3 py-3 border border-gray-100 hover:ring-2 ring-blue-500 ring-offset-2"></span>
                    <span className="my-4 hover:border-black bg-cyan-400 rounded-full cursor-pointer px-3 py-[0.1rem] border border-gray-100 hover:ring-2 ring-blue-500 ring-offset-2"></span>
                    {/* <span className="my-4 hover:border-black bg-red-300 rounded-full cursor-pointer px-3 py-[0.1rem] border border-gray-100 hover:ring-2 ring-blue-500 ring-offset-2"></span>
                    <span className="my-4 hover:border-black bg-green-500 rounded-full cursor-pointer px-3 py-[0.1rem] border border-gray-100 hover:ring-2 ring-blue-500 ring-offset-2"></span> */}
                  </div>

                  <div>
                  {selectedProduct.rams && (
                <>
                  <h3 className="font-semibold text-xl my-2">RAM</h3>
                  <div className="flex gap-4">
                    {selectedProduct.rams.map((ram, index) => (
                      <span
                        key={index}
                        className={`my-4 cursor-pointer px-3 py-[0.1rem] border rounded-md ${selectedRam === ram ? 'border-blue-500 border' : 'border-gray-100'}`}
                        onClick={() => setSelectedRam(ram)}
                      >
                        {ram}
                      </span>
                    ))}
                  </div>
                </>
              )}
                    
                  </div>

                  <div className="flex gap-5 items-center mt-5">
                    <button
                      type="submit"
                      className="bg-black text-white p-1 px-4 text-lg rounded-md transition duration-300"
                    >
                      Add to Cart
                    </button>
                    <Link to="/productDetails">
                      <button className="text-blue-700 border border-blue-700 px-4 p-1 rounded-md">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {FilterSelect && (
          <>
            <div
              className=" inset-0 bg-black opacity-50 "
              onClick={() => setFilterSelect(null)}
            ></div>
            <div className=" h-full fixed bottom-0 overflow-hidden  z-[100]  container inset-x-0 bg-white border-b border-gray-200 p-4 transition-transform transform translate-y-0 duration-300 ">
              <div className=" lg:w-[30%] lg:px-0  ">
                <div className="  ">
                  <div className="flex justify-between">
                    <div className="lg:flex justify-center lg:mx-2 ">
                      <span className=" font-semibold  md:font-normal">
                        FILTER BY PRICE{" "}
                      </span>
                    </div>
                    <div onClick={toggleFilter}>
                      <RxCross2 className="cursor-pointer" />
                    </div>
                  </div>
                  <div className="lg:mx-auto  flex-col justify-center">
                    <Box sx={{ width: 330 }} className="lg:mx-auto ">
                      <Slider
                        getAriaLabel={() => "Temperature range"}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                      />
                    </Box>
                  </div>
                </div>

                <div className="lg:mx-9 mb-8 ">
                  <div className="   ">
                    <span className="  font-semibold  md:font-normal">
                      CATEGORIES{" "}
                    </span>
                  </div>
                  <input
                    className="border border-gray-300 rounded-md w-[95%] outline-none my-2 px-3 py-2"
                    placeholder="Search Categories"
                  />
                  <div className="h-[8rem] overflow-y-scroll custom-scrollbar">
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">Phone Case</label>
                      <hr className="my-2" />
                    </div>
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">Screen protector</label>
                      <hr className="my-2" />
                    </div>
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">Lens protector</label>
                      <hr className="my-2" />
                    </div>
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">Tablet case</label>
                      <hr className="my-2" />
                    </div>
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">Tempered Glass</label>
                      <hr className="my-2" />
                    </div>
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">Screen Guard</label>
                      <hr className="my-2" />
                    </div>
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">Airpods case</label>
                      <hr className="my-2" />
                    </div>
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">Powerbank</label>
                      <hr className="my-2" />
                    </div>
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">Pendrive</label>
                      <hr className="my-2" />
                    </div>
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">Speakers</label>
                      <hr className="my-2" />
                    </div>
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">Samsung</label>
                      <hr className="my-2" />
                    </div>
                  </div>
                </div>

                <div className="lg:mx-9">
                  <span className="  font-semibold  md:font-normal uppercase">
                    Brands{" "}
                  </span>
                  <input
                    className="border border-gray-300 rounded-md w-[95%] outline-none my-2 px-3 py-2"
                    placeholder="Search Brands"
                  />
                  <div className="h-[8rem] overflow-y-scroll custom-scrollbar">
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">Samsung</label>
                      <hr className="my-2" />
                    </div>
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">One plus</label>
                      <hr className="my-2" />
                    </div>
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">Apple</label>
                      <hr className="my-2" />
                    </div>
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">MI</label>
                      <hr className="my-2" />
                    </div>
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">Oppo</label>
                      <hr className="my-2" />
                    </div>
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">Vivo</label>
                      <hr className="my-2" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-5">
                <div className="mt-3 text-center">
                  <button className="bg-black text-white  rounded-md px-4 py-1">
                    Filter
                  </button>
                </div>
                <div className="mt-3 text-center">
                  <button className="bg-white border border-black rounded-md px-4 py-1">
                    Reset Filter
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="container">
          <section className="md:flex">
            <div className="md:w-[70%]">
              <div className="flex justify-between my-4 mt-16 ">
                <div className="flex items-center lg:gap-4 gap-1">
                  <div className="font-medium">Show: </div>
                  <div
                    className="relative border cursor-pointer border-gray-400 rounded-lg items-center p-1 px-2 flex lg:gap-1"
                    onClick={() => setShow(!show)}
                  >
                    <span className="">{selectedValue}</span>
                    <MdOutlineKeyboardArrowDown className="text-xl" />

                    {show && (
                      <ul className="absolute top-14 left-0  z-10 bg-white border border-gray-400 rounded-lg w-full">
                        {[6, 9, 12, 18, 21].map((option) => (
                          <li
                            key={option}
                            className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => handleSelect(option)}
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div className="md:hidden block">
                  <div
                    className="  border cursor-pointer border-gray-400 rounded-full  p-3 flex gap-1"
                    onClick={toggleFilter}
                  >
                    <span className="lg:text-lg font-semibold">
                      <CiFilter />
                    </span>
                  </div>
                </div>
                <div className="flex gap-4">
                  {/* <span className='text-gray-500 mt-3'>Showing the single result</span> */}
                  <div className="relative">
                    <div
                      className="border border-gray-400 flex lg:gap-2 gap-1 p-2 pl-3 rounded-full lg:font-semibold cursor-pointer "
                      onClick={toggleDropdown}
                    >
                      {selectedOption}{" "}
                      <MdOutlineKeyboardArrowDown className="p-1 text-2xl rounded-full border border-gray-300" />
                    </div>
                    {isOpen && (
                      <div className="absolute top-full right-0 mt-2 w-60 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                        <ul className="list-none p-2">
                          <li
                            className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                            onClick={() => handleOptionClick("Sort by Price")}
                          >
                            Sort by Price : High to low
                          </li>
                          <li
                            className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                            onClick={() => handleOptionClick("Sort by Price")}
                          >
                            Sort by Price : Low to high
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-2 lg:grid-cols-3  gap-4 ">
                {shop.map((product) => (
                  <div className="" key={product.id}>
                    {/* <div className="md:block hidden">
                      <CiSearch className="text-gray-600 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <CiHeart className="text-gray-600 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div> */}

                    <div className=" duration-300 hover:scale-105  lg:py-4 rounded-md relative group mb-[2rem]">
                      <Link to="/productDetails">
                        <div className="bg-white  border border-gray-300 shadow rounded-md">
                          <img
                            src={product.image1}
                            className="transition-opacity aspect-[4/4] duration-500 bg-gray-400 ease-in-out opacity-100 group-hover:opacity-0 rounded-md"
                            alt="Product1"
                          />
                          <img
                            src={product.image2}
                            className="transition-opacity aspect-[4/4] duration-500 ease-in-out opacity-0 absolute top-0 left-0 mt-4 group-hover:opacity-100 rounded-md"
                            alt="Product1"
                          />
                          <span
                            className={`absolute ${
                              product.tag === "50%"
                                ? "bg-[red] border text-white left-0 hidden md:block  px-3 lg:top-8 md:top-3 rounded-r-md"
                                : product.tag === "30%"
                                ? "border bg-blue-700 text-white left-0  px-3 lg:top-8 md:top-3  hidden md:block rounded-r-md"
                                : ""
                            }  `}
                          >
                            {product.tag}
                          </span>
                        </div>
                      </Link>

                      <div className="absolute top-8 right-5 flex flex-col items-center space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="border p-1 bg-white shadow-md curs border-gray-200 rounded-full">
                          <CiHeart className=" rounded-full  text-2xl text-gray-500 cursor-pointer" />
                        </div>
                        <div className="border p-1 bg-white shadow-md border-gray-200 rounded-full">
                          <PiEyeLight
                            className="rounded-full cursor-pointer text-2xl text-gray-500"
                            onClick={() => toggleProduct(product)}
                          />
                        </div>
                      </div>

                      <Link to="/productDetails">
                        <div className="flex justify-center mt-2 text-center">
                          <div className="">
                            <span className="text-gray-400 text-sm line-clamp-1">
                              {product.category}
                            </span>
                            <h1 className="font-medium my-2 md:text-lg line-clamp-1">
                              {product.name}
                            </h1>
                            <p className="line-through">{product.price}</p>
                            <p className="text-red-500 text-xl">
                              {product.newPrice}
                            </p>
                            {/* <button className="group flex items-center mx-auto gap-1 cursor-pointer my-2 text-center md:text-sm text-xs uppercase border-b  border-black pb-1">
                              view details
                              <GoArrowRight className="group-hover:-rotate-45 duration-300" />
                            </button> */}
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="container w-full mx-auto">
                <ResponsivePagination
                  current={currentPage}
                  total={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            </div>

            <div className="mx-auto md:w-[30%] lg:px-0 px-4 md:block hidden  ">
              <div className="sticky top-8">
                <div className=" mb-8 ">
                  <div className="lg:flex justify-center lg:mx-2 mt-16">
                    <hr className="w-16 mt-3 hidden lg:block" />
                    <span className="mx-3  font-semibold  md:font-normal">
                      FILTER BY PRICE
                    </span>
                    <hr className="w-16 mt-3 hidden lg:block" />
                  </div>
                  <div className="lg:mx-auto mt-4 flex-col justify-center">
                    <Box
                      sx={{ width: 280 }}
                      className="lg:mx-auto px-4 md:pr-24 lg:pr-2"
                    >
                      <Slider
                        getAriaLabel={() => "Temperature range"}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                      />
                      {/* <div>{value}</div> */}
                    </Box>
                  </div>
                </div>

                <div className="lg:mx-9 mb-8 ">
                  <div className="   ">
                    <span className="  font-semibold  md:font-normal">
                      CATEGORIES{" "}
                    </span>
                  </div>
                  <input
                    className="border border-gray-300 rounded-md w-[95%] outline-none my-2 px-3 py-2"
                    placeholder="Search Categories"
                  />
                  <div className="h-[11rem] overflow-y-scroll custom-scrollbar">
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">Phone Case</label>
                      <hr className="my-2" />
                    </div>
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">Screen protector</label>
                      <hr className="my-2" />
                    </div>
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">Lens protector</label>
                      <hr className="my-2" />
                    </div>
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">Tablet case</label>
                      <hr className="my-2" />
                    </div>
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">Tempered Glass</label>
                      <hr className="my-2" />
                    </div>
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">Screen Guard</label>
                      <hr className="my-2" />
                    </div>
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">Airpods case</label>
                      <hr className="my-2" />
                    </div>
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">Powerbank</label>
                      <hr className="my-2" />
                    </div>
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">Pendrive</label>
                      <hr className="my-2" />
                    </div>
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">Speakers</label>
                      <hr className="my-2" />
                    </div>
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">Samsung</label>
                      <hr className="my-2" />
                    </div>
                  </div>
                </div>

                <div className="lg:mx-9">
                  <span className="  font-semibold  md:font-normal uppercase">
                    Brands{" "}
                  </span>
                  <input
                    className="border border-gray-300 rounded-md w-[95%] outline-none my-2 px-3 py-2"
                    placeholder="Search Brands"
                  />
                  <div className="h-[11rem] overflow-y-scroll custom-scrollbar">
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">Samsung</label>
                      <hr className="my-2" />
                    </div>
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">One plus</label>
                      <hr className="my-2" />
                    </div>
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">Apple</label>
                      <hr className="my-2" />
                    </div>
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">MI</label>
                      <hr className="my-2" />
                    </div>
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">Oppo</label>
                      <hr className="my-2" />
                    </div>
                    <div className="my-2">
                      <input type="checkbox" className="mr-2 mt-1  " />
                      <label className="text-gray-700 ">Vivo</label>
                      <hr className="my-2" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-8 gap-5">
                  <div className=" text-center">
                    <button className="bg-black text-white  rounded-md px-4 py-1">
                      Filter
                    </button>
                  </div>
                  <div className=" text-center">
                    <button className="bg-white border border-black   rounded-md px-4 py-1">
                      Reset Filter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Shop;
