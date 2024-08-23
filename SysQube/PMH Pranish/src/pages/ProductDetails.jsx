import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { CiHeart, CiCirclePlus, CiDeliveryTruck } from "react-icons/ci";
import { PiKeyReturnLight } from "react-icons/pi";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { SiTicktick } from "react-icons/si";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const [currentImage, setCurrentImage] = useState("/images/ProductDetails/ProductDetails.jpg");
  const [description, setDescription] = useState(false);
  const [systemSpecifications, setSystemSpecifications] = useState(false);
  const [selectedSize, setSelectedSize] = useState("64 GB");
  const [count, setCount] = useState(1);
  const [showFixedDiv, setShowFixedDiv] = useState(false);
  const [currentColor, setCurrentColor] = useState("black");

  const positiveCount = () => {
    setCount(count + 1);
  };
  const negativeCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const descriptionToggle = () => {
    setDescription(!description);
  };

  const specificationsToggle = () => {
    setSystemSpecifications(!systemSpecifications);
  };

  const images = {
    black: "/images/ProductDetails/ProductDetails.jpg",
    blue: "/images/ProductDetails/ProductDetails2.jpg",
    yellow: "/images/ProductDetails/ProductDetails4.jpg",
  };

  const imageDescriptions = [
    "/images/ProductDetails/ProductDetails.jpg",
    "/images/ProductDetails/PixelProDescription1.jpg",
    "/images/ProductDetails/PixelProDescription2.jpg",
    "/images/ProductDetails/PixelProDescription3.jpg",
  ];

  const handleColorChange = (color) => {
    setCurrentImage(images[color]);
    setCurrentColor(color);
  };

  const handleDescriptionClick = (index) => {
    setCurrentImage(imageDescriptions[index]);
  };

  const addToCart = () => {
    const productDetails = {
      name: "Google Pixel 8 Pro", // Replace with your product name
      size: selectedSize,
      quantity: count,
      color: currentColor,
      price: 80000, // Replace with your product price
      image: currentImage,
    };
  
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Check if the product with the same size and color already exists in the cart
    const existingProductIndex = cart.findIndex(
      (item) =>
        item.name === productDetails.name &&
        item.size === productDetails.size &&
        item.color === productDetails.color
    );
  
    if (existingProductIndex >= 0) {
      // If the product exists, update the quantity
      cart[existingProductIndex].quantity += productDetails.quantity;
    } else {
      // If the product doesn't exist, add it to the cart
      cart.push(productDetails);
    }
  
    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
    
    // Reload the page to reflect the changes
    window.location.reload();
  };
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 750) {
        // Adjust the scroll position as needed
        setShowFixedDiv(true);
      } else {
        setShowFixedDiv(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="page-container container transition-opacity mt-16 duration-500 px-4 lg:px-0 ">
      <div className="container">
        <div className="container md:flex justify-between gap-12">
          <div className="lg:flex hidden flex-col gap-3">
            {imageDescriptions.map((description, index) => (
              <div key={index} className="description-container">
                <img
                  src={description}
                  className="w-16 h-16 mt-6 cursor-pointer rounded-xl transition duration-300 transform hover:scale-105"
                  onClick={() => handleDescriptionClick(index)}
                  alt={`Description ${index}`}
                />
              </div>
            ))}
          </div>
      
          <div className="flex-1 w-full md:w-1/2 flex-col justify-center mb-4 md:mb-0">
            <div className="relative w-full aspect-[5/5]">
              {/* <Magnifier
                src={currentImage}
                // width="100%"
                // zoomImgSrc={currentImage}
                zoomFactor={1.2}
                mgShape="square"
                mgShow={true}
                // mgBorderWidth={1}
                // mgMouseOffsetX={0}
                // mgMouseOffsetY={0}
                className="w-full object-cover object-top mb-4 rounded-xl"
                alt="Product Display"
              /> */}
            </div>
            <div className="flex lg:hidden gap-3">
              {imageDescriptions.map((description, index) => (
                <div key={index} className="description-container">
                  <img
                    src={description}
                    className="w-16 h-16 mt-6 cursor-pointer rounded-xl transition duration-300 transform hover:scale-105"
                    onClick={() => handleDescriptionClick(index)}
                    alt={`Description ${index}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 md:pl-8 flex flex-col gap-2 lg:w-[30rem] px-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400 pb-2">
                  SKU: sm2112103773394955
                </p>
              </div>
              <div>
                <button>
                  <CiHeart className="text-2xl" />
                </button>
              </div>
            </div>
            <h1 className="text-xl">
              Google Pixel 8 Pro - Unlocked Android Smartphone with Telephoto
              Lens and Super Actua Display - 24-Hour Battery - Porcelain
            </h1>
            <div className="flex items-center gap-6">
              <p className="text-xl font-medium pb-[1.5rem] line-through pt-2">
                Rs 80,399
              </p>
              <p className="text-3xl font-medium pb-[1.5rem] text-red-600 pt-2">
                Rs 80,399
              </p>
            </div>
            <hr className="text-gray-400" />
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold text-xl mt-[0.85rem]">Color</h3>
                <div className="flex gap-3 my-4">
                  <div
                    className={`w-6 h-6 rounded-full border hover:border-black bg-black cursor-pointer ${
                      currentImage === images.black
                        ? "ring-2 ring-blue-500 ring-offset-2"
                        : ""
                    }`}
                    onClick={() => handleColorChange("black")}
                  />
                  <div
                    className={`w-6 h-6 rounded-full bg-blue-500 hover:border-blue-500 border cursor-pointer ${
                      currentImage === images.blue
                        ? "ring-2 ring-blue-500 ring-offset-2"
                        : ""
                    }`}
                    onClick={() => handleColorChange("blue")}
                  />
                  <div
                    className={`w-6 h-6 rounded-full bg-yellow-400 hover:border-yellow-400 border cursor-pointer ${
                      currentImage === images.yellow
                        ? "ring-2 ring-blue-500 ring-offset-2"
                        : ""
                    }`}
                    onClick={() => handleColorChange("yellow")}
                  />
                </div>
              </div>
            </div>
            <span className="mr-[3rem] text-[1.2rem] font-semibold text-xl mt-[0.85rem]">
              Sizes
            </span>
            <div className="flex pb-5">
              {["64 GB", "128 GB", "256 GB", "512 GB"].map((size) => (
                <div
                  key={size}
                  className={`cursor-pointer font-semibold border-gray-300 border rounded-lg md:px-5 p-1 bg-white text-center ${
                    selectedSize === size
                      ? "border-2 border-double border-blue-600 text-black"
                      : "border hover:bg-gray-100 border-blue-600 text-gray-400 hover:text-black "
                  } mr-2 transition duration-300`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </div>
              ))}
            </div>

            <div className="">
              <h2 className="font-semibold text-xl mb-4">Qty:</h2>
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

            <div className="flex my-8 gap-5">
              <div>
                <button
                  onClick={addToCart}
                  className="bg-[#0D4C90] w-full text-white rounded px-8 py-2 font-semibold text-lg"
                >
                  Add to Cart
                </button>
              </div>
              <div>
                <Link to="/cart">
                <button
                  className="bg-[#048754] w-full text-white rounded px-8 py-2 font-semibold text-lg"
                >
                  Buy Now
                </button>
                </Link>
              </div>
            </div>
            <hr />
          </div>
        </div>

        <div className="lg:flex lg:flex-row flex-col-reverse gap-12 justify-between">
          <div className="flex-1 mt-8 lg:ml-8">
            <h2 className="font-semibold text-2xl mb-4">Customer Reviews</h2>

            <div className="my-8 ">
              <h3 className="text-lg font-semibold">All Reviews</h3>
              <hr className="my-4" />
              <div className="flex justify-between mb-8">
                <div className="w-full">
                  <div className="flex gap-4">
                    <h4 className="font-semibold text-sm">User1</h4>
                    <span className="text-sm text-gray-500">29 Jun, 2024</span>
                  </div>
                  <div className="flex text-base gap-1 my-2 text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className="lg:flex gap-8 my-4">
                    <div className="flex gap-2">
                      <span className="font-semibold text-gray-500">
                        Overall Fit:
                      </span>
                      <span className="text-gray-500"> True to size</span>
                    </div>
                    <div className="flex gap-2">
                      <p className="font-semibold text-gray-500">Color:</p>
                      <p className="text-gray-500"> Multicolor</p>
                    </div>
                    <div className="flex gap-2">
                      <p className="font-semibold text-gray-500">Size:</p>
                      <p className="text-gray-500"> M</p>
                    </div>
                  </div>
                  <span className="my-8">
                    The T-Shirt is very good quality, I am impressed by your
                    product
                  </span>
                </div>
                <div className="hidden md:block">
                  <img
                    src="/images/LandingPage/productDetails.webp"
                    className="w-24 h-24 object-cover mt-8"
                    alt="User Review"
                  />
                </div>
              </div>
              <hr className="my-12" />
              <div className="flex justify-between">
                <div className="w-full">
                  <div className="flex gap-4">
                    <h4 className="font-semibold text-sm">User2</h4>
                    <span className="text-sm text-gray-500">29 Jun, 2024</span>
                  </div>
                  <div className="flex text-base gap-1 my-2 text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className="lg:flex gap-8 my-4">
                    <div className="flex gap-2">
                      <span className="font-semibold text-gray-500">
                        Overall Fit:
                      </span>
                      <span className="text-gray-500"> True to size</span>
                    </div>
                    <div className="flex gap-2">
                      <p className="font-semibold text-gray-500">Color:</p>
                      <p className="text-gray-500"> Multicolor</p>
                    </div>
                    <div className="flex gap-2">
                      <p className="font-semibold text-gray-500">Size:</p>
                      <p className="text-gray-500"> M</p>
                    </div>
                  </div>
                  <span className="my-8">
                    The T-Shirt is very good quality, I am impressed by your
                    product
                  </span>
                </div>
                <div className="hidden md:block">
                  <img
                    src="/images/LandingPage/productDetails.webp"
                    className="w-24 h-24 object-cover mt-8"
                    alt="User Review"
                  />
                </div>
              </div>
            </div>
            <div className=" flex justify-center">
              <button className="border my-8 px-4 py-2  border-black hover:ring-1 hover:ring-blue-600">
                View all Reviews
              </button>
            </div>
          </div>
          <div className="flex-1 sticky top-0">
            <div
              className="my-8 mt-8 flex justify-between cursor-pointer"
              onClick={descriptionToggle}
            >
              <h2 className={`cursor-pointer text-lg`}>Description</h2>
              <CiCirclePlus className="text-2xl" />
            </div>
            {description && (
              <div>
                <div>
                  <ol className="list-disc ml-6">
                    <li className="mb-4">
                      7.7-inch vibrant and crisp display.
                    </li>
                    <li className="mb-4">
                      12 GB RAM with Android 13.0 for seamless multitasking.
                    </li>
                    <li className="mb-4">
                      Advanced AI-enhanced photography with Night Sight and
                      Portrait Mode.
                    </li>
                    <li className="mb-4">
                      Supports 5G for ultra-fast internet speeds.
                    </li>
                    <li className="mb-4">
                      Latest security updates, Google Assistant, and intelligent
                      features.
                    </li>
                  </ol>
                </div>
              </div>
            )}
            <div
              className="my-4 flex justify-between cursor-pointer mt-8"
              onClick={specificationsToggle}
            >
              <h2 className={`cursor-pointer text-lg `}>Specifications</h2>
              <CiCirclePlus className="text-2xl" />
            </div>
            {systemSpecifications && (
              <div>
                <div className="flex gap-32 my-4  ">
                  <ul className="font-semibold">
                    <li className="mb-4">Brand</li>
                    <li className="mb-4">Operating System</li>
                    <li className="mb-4">Memory</li>
                    <li className="mb-4">Screen Size</li>
                    <li className="mb-4">Resolution</li>
                    <li className="mb-4">Cellular Technology</li>
                  </ul>
                  <ul>
                    <li className="mb-4">Google</li>
                    <li className="mb-4">Android 13.0</li>
                    <li className="mb-4">12 GB</li>
                    <li className="mb-4">7.7 inches</li>
                    <li className="mb-4">1344 x 2992</li>
                    <li className="mb-4">5G</li>
                  </ul>
                </div>
              </div>
            )}
            <div className="bg-[#F7F9FB] lg:p-9 p-5 border ">
              <div className="grid md:grid-cols-2 lg:grid-cols-1 ">
                <div className="flex gap-3">
                  <CiDeliveryTruck className="text-xl text-green-800 mt-1" />
                  <div>
                    <span className="font-semibold">Free Shipping</span>
                    <p className="text-gray-600 text-xs">
                      Free Express Shipping on orders over Rs 1200
                    </p>
                    <p className="text-gray-600 text-xs">
                      Estimated to be delivered in 1 week
                    </p>
                  </div>
                </div>
                <div className="flex my-4 gap-3">
                  <PiKeyReturnLight className="text-xl text-green-800 mt-1" />
                  <div>
                    <span className="font-semibold">Returns</span>
                    <p className="text-gray-600 text-xs">
                      Items received within 30 days from the delivered date.
                    </p>
                    <p className="text-gray-600 text-xs">
                      Items received unused, undamaged, and in original package.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <AiOutlineSecurityScan className="text-xl text-green-800 mt-1" />
                  <div>
                    <span className="font-semibold">Security Payment</span>
                    <p className="text-gray-600 text-xs">
                      Your payment information is processed securely.
                    </p>
                    <p className="text-gray-600 text-xs">
                      We do not store credit card details nor have access to
                      your credit card information.
                    </p>
                  </div>
                </div>
                <div className="flex mt-4 ml-1 gap-3">
                  <SiTicktick className="text-sm text-green-800 mt-1" />
                  <div>
                    <span className="font-semibold">Guarantee</span>
                    <p className="text-gray-600 text-xs">
                      One Year limited warranty.
                    </p>
                    <p className="text-gray-600 text-xs">
                      One Year limited warranty.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        
          </div>
        </div>

        <h1 className="text-center text-3xl mt-20 mb-8 font-semibold">
          Recomended Products
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-8 gap-x-5">
          <div className="my-4 cursor-pointer bg-white hover:shadow-xl shadow-md rounded-md">
            <div>
              <img
                src="images/ProductDetails/RecomenededProducts1.webp"
                className="w-full rounded-t-md"
              />
            </div>
            <div className="p-4">
              <h1 className="font-semibold">IPhone 12</h1>
              <p className="text-gray-700">Rs. 60000</p>
            </div>
          </div>
          <div className="my-4 bg-white hover:shadow-xl shadow-md rounded-md relative">
            <div>
              <img
                src="images/ProductDetails/RecomenededProducts2.webp"
                className="w-full rounded-t-md"
              />
            </div>
            <div className="p-4">
              <h1 className="font-semibold">IdeaPad 3</h1>
              <p className="text-gray-700">Rs. 90000</p>
              <span className="absolute bg-[white] text-gray-700  px-3 py-1 top-5 right-0 rounded-l-md">
                SALE
              </span>
            </div>
          </div>
          <div className="my-4 cursor-pointer  bg-white hover:shadow-xl shadow-md rounded-md">
            <div>
              <img
                src="images/ProductDetails/RecomenededProducts3.webp"
                className="w-full rounded-t-md"
              />
            </div>
            <div className="p-4">
              <h1 className="font-semibold">IPhone 13</h1>
              <p className="text-gray-700">Rs. 85000</p>
            </div>
          </div>
          <div className="my-4 cursor-pointer  bg-white hover:shadow-xl shadow-md rounded-md relative">
            <div>
              <img
                src="images/ProductDetails/RecomenededProducts4.webp"
                className="w-full rounded-t-md"
              />
            </div>
            <div className="p-4 ">
              <h1 className="font-semibold">Xonic CC Camera</h1>
              <p className="text-gray-700">Rs. 15000</p>
              <span className="absolute bg-[white] text-gray-700  px-3 py-1 top-5 right-0 rounded-l-md">
                SALE
              </span>
            </div>
          </div>
        </div>
      </div>{" "}
      {showFixedDiv && (
        <div className="fixed bottom-0 left-0 right-0 z-40 md:w-full bg-gray-100 shadow-lg p-4 flex  ">
          <div className="container flex justify-between items-center gap-5">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-5">
                <div>
                  <img src={currentImage} alt="" className="size-24" />
                </div>

                <div>
                  <h2 className="font-medium line-clamp-1 md:line-clamp-none">
                    {" "}
                    Google Pixel 8 Pro - Unlocked Android Smartphone with
                    Telephoto Lens
                  </h2>
                  <div className="flex gap-8 pt-2">
                    <p className="text-red-600">Rs 80,000</p>
                    <button className="underline capitalize md:hidden">
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
            <button className="bg-black hidden text-white p-3 px-5 rounded-xl md:flex items-center justify-center gap-3 transition duration-300 transform hover:scale-105">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
