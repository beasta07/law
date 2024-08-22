import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

const BestSelling = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedRam, setSelectedRam] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [count, setCount] = useState(1);

  const toggleProduct = (product) => {
    setSelectedProduct(product);
    setSelectedColor(product.image); // Set the default color to the product image
    setSelectedSize(null); // Reset the size selection when switching products
  };

  // const handleColorClick = (color) => {
  //   setSelectedColor(color);
  // };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const positiveCount = () => {
    setCount(count + 1);
  };

  const negativeCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const products = [
    {
      id: 1,
      image: "images/LandingPage/product1.webp",
      price: "Rs 113,000.00",
      name: "Samsung Z1",
      category: "Mobile",
    },
    {
      id: 2,
      image: "images/LandingPage/product2.webp",
      price: "Rs 63,000.00",
      name: "Air Buds",
      category: "Music",
    },
    {
      id: 3,
      image: "images/LandingPage/product3.webp",
      price: "Rs 100,000.00",
      name: "Samsung A4",
      category: "Mobile",
    },
    {
      id: 4,
      image: "images/LandingPage/product4.webp",
      price: "Rs 10,000.00",
      name: "X-box controller",
      category: "Video Games",
    },
    {
      id: 5,
      image: "images/LandingPage/product5.webp",
      price: "Rs 10,000.00",
      name: "G-Shock",
      category: "Shoes",
    },
    {
      id: 6,
      image: "images/LandingPage/product6.webp",
      price: "Rs 120,000.00",
      name: "Acer Nitro",
      category: "Laptop",
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1535,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 903,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  return (
    <div>
     {selectedProduct && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-30"
            onClick={() => setSelectedProduct(null)}
          ></div>
          <div className="fixed top-0 container inset-x-0 md:w-[65%] md:h-auto h-screen w  lg:top-36 bg-[#F1F1F0] border-b border-gray-200 p-4 transition-transform transform translate-y-0 duration-300 z-50">
          <div className="lg:flex gap-12   p-4 relative">
              <div className="md:w-1/2 w-[50%] mx-auto">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className=" aspect-[4/4] "
                />
              </div>
              <div className="lg:mx-auto lg:w-[50%]">
                <h1>{selectedProduct.name}</h1>
                <span className="text-gray-700 text-sm lg:my-8">
                  {selectedProduct.category}
                </span>
                <h3 className="font-semibold text-2xl my-4">
                  {selectedProduct.price}
                </h3>
                <hr className="border-gray-300 my-4" />

                <h3 className="font-semibold text-xl">Color</h3>
                <div className="flex gap-4 mb-4">
                  <span
                    className="my-4 hover:border-black bg-[RED] rounded-full cursor-pointer px-3 py-3 border border-gray-100 hover:ring-2 ring-blue-500 ring-offset-2"
                    
                  ></span>
                  <span
                    className="my-4 hover:border-black bg-yellow-400 rounded-full cursor-pointer px-3 py-[0.1rem] border border-gray-100 hover:ring-2 ring-blue-500 ring-offset-2"
                  ></span>
                </div>

                {selectedProduct.category === "Mobile" ? (
  <div className="mb-5">
    <span className="mr-[3rem] text-[1.2rem] font-semibold text-xl mt-[0.85rem]">
      SIZES
    </span>
    <div className="flex pb-5">
      {["64 GB", "128 GB", "256 GB", "512 GB"].map((size) => (
        <div
          key={size}
          className={`cursor-pointer font-semibold border rounded-lg px-2 mt-2 py-1 text-center ${
            selectedSize === size
              ? "border-2 border-blue-600"
              : "hover:border hover:border-blue-500 border-gray-500 text-gray-600 hover:text-black"
          } mr-2 transition duration-300`}
          onClick={() => handleSizeClick(size)}
        >
          {size}
        </div>
      ))}
    </div>
  </div>
) : selectedProduct.category === "Laptop" ? (
  <div className="mb-5">
    <span className="mr-[3rem] text-[1.2rem] font-semibold text-xl mt-[0.85rem]">
      RAM
    </span>
    <div className="flex pb-5">
      {["4 GB", "8 GB", "16 GB", "32 GB"].map((ram) => (
        <div
          key={ram}
          className={`cursor-pointer font-semibold border rounded-lg px-2 mt-2 py-1 text-center ${
            selectedRam === ram
              ? "border-2 border-blue-600"
              : "hover:border hover:border-blue-500 border-gray-500 text-gray-600 hover:text-black"
          } mr-2 transition duration-300`}
          onClick={() => handleRamClick(ram)}
        >
          {ram}
        </div>
      ))}
    </div>
  </div>
) : (
  <div className="mb-8">
    <h2 className="font-semibold text-xl mb-4">Quantity:</h2>
    <button className="flex items-center border border-black gap-5 p-1 px-2 rounded w-auto">
      <button onClick={negativeCount} className="text-xl">
        -
      </button>
      <p className="w-5 text-center">{count}</p>
      <button onClick={positiveCount} className="text-xl">
        +
      </button>
    </button>
  </div>
)}

                <button type="submit"
                  className="bg-[#0D4C90] text-white px-4 py-2 rounded-lg transition duration-300"
                >
                  Add to Cart
                </button>
                  <Link to="/productDetails">
                    <button
                      type="submit"
                      className=" border border-gray-600 px-4 py-2 ml-4 hover:bg-black hover:text-white rounded-lg transition duration-300"
                    >
                      View full details
                    </button>
                  </Link>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 text-xl"
              >
                <IoCloseSharp />
              </button>
            </div>
          </div>
        </>
      )}

      <div className="lg:container 3xl:px-32 mt-24">
        <h2 className="uppercase text-2xl text-center">Best Selling Product</h2>
        <hr className="w-[30%] lg:w-[10%] mt-1 border border-gray-400 mx-auto" />
        <div className="mt-16 lg:w-full px-[0rem]">
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="px-2">
                <div className="hover:border-gray-300 border-white hover:shadow-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="lg:h-[20rem] py-8 mx-auto"
                  />
                  <div className="lg:flex px-4 justify-between">
                    <div className="bg-white py-4">
                      <p className="lg:mx-5 py-1 bg-white">{product.price}</p>
                      <p className="lg:px-5">{product.name}</p>
                      <p className="text-gray-400 hidden lg:block px-5">
                        {product.category}
                      </p>
                    </div>
                    <div
                      onClick={() => toggleProduct(product)}
                      className="cursor-pointer hidden md:block border border-black p-2 rounded-full my-auto"
                    >
                      <CiShoppingCart className="text-xl mx-auto" />
                    </div>
                    <div
                      onClick={() => toggleProduct(product)}
                      className="cursor-pointer border text-center md:hidden text-sm border-blue-700 p-2 mt-2 rounded-3xl"
                    >
                      VIEW DETAILS
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;