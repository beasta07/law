import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

const FeatureProduct = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("64 GB");
  const [selectedColor, setSelectedColor] = useState("image1");
  const [quantity, setQuantity] = useState(1);
  const [count, setCount] = useState(1);

  const positiveCount = () => {
    setCount(count + 1);
  };

  const negativeCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const toggleProduct = (product) => {
    setSelectedProduct(product);
    setSelectedColor("image1"); // Reset to default image when a new product is selected
    setQuantity(1); // Reset quantity
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    const productToAdd = {
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price,
      image: selectedProduct[selectedColor],
      size: selectedSize,
      color: selectedColor,
      quantity: count,
    };

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex(
      (item) =>
        item.id === selectedProduct.id &&
        item.size === selectedSize &&
        item.color === selectedColor
    );

    if (existingProductIndex > -1) {
      cart[existingProductIndex].quantity += count; // Update quantity if the product is already in the cart
    } else {
      cart.push(productToAdd); // Add new product to cart
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setSelectedProduct(null); // Close the product details modal

    // Reload the page to reflect the changes
    window.location.reload();
  };

  const newProducts = [
    {
      id: 4,
      image1: "images/LandingPage/featuredProduct4-1.jpg",
      image2: "images/LandingPage/featuredProduct4-2.jpg",
      image3: "images/LandingPage/featuredProduct4-3.jpg",
      image4: "images/LandingPage/featuredProduct4-4.jpg",
      price: "8000",
      name: "IPhone 15 case",
      category: "Cover",
    },
    {
      id: 2,
      image1: "images/LandingPage/featuredProduct2-1.jpg",
      image2: "images/LandingPage/featuredProduct2-2.jpg",
      price: "28000",
      newPrice: "16000",
      name: "Smart Band Carbon",
      category: "Watch",
    },
    {
      id: 1,
      image1: "images/LandingPage/featuredProduct-1.jpg",
      image2: "images/LandingPage/featuredProduct-2.jpg",
      price: "180000",
      name: "IPhone 15",
      category: "Mobile",
    },
    {
      id: 3,
      image1: "images/LandingPage/featuredProduct3-1.jpg",
      image2: "images/LandingPage/featuredProduct3-2.jpg",
      price: "40000",
      name: "Wireless Loud H7i",
      category: "Music",
    },
  ];

  return (
    <>
      {selectedProduct && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-30"
            onClick={() => setSelectedProduct(null)}
          ></div>
          <div className="fixed top-0 container inset-x-0 md:w-[65%] md:h-auto h-screen w lg:top-36 bg-[#F1F1F0] border-b border-gray-200 p-4 transition-transform transform translate-y-0 duration-300 z-50">
            <div className="lg:flex gap-12 p-4 relative">
              <div className="md:w-1/2 w-[50%] mx-auto">
                <img
                  src={selectedProduct[selectedColor]}
                  alt={selectedProduct.name}
                  className="aspect-[4/4]"
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
                    onClick={() => handleColorClick("image1")}
                  ></span>
                  <span
                    className="my-4 hover:border-black bg-yellow-400 rounded-full cursor-pointer px-3 py-[0.1rem] border border-gray-100 hover:ring-2 ring-blue-500 ring-offset-2"
                    onClick={() => handleColorClick("image2")}
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

                <button
                  type="submit"
                  onClick={handleAddToCart}
                  className="bg-[#0D4C90] text-white px-4 py-2 rounded-lg transition duration-300"
                >
                  Add to Cart
                </button>
                <Link to="/productDetails">
                  <button
                    type="submit"
                    className="border border-gray-600 px-4 py-2 ml-4 hover:bg-black hover:text-white rounded-lg transition duration-300"
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
      <div className="container 3xl:px-32 md:mx-auto mt-24">
        <h1 className="font-bold lg:text-center text-xl my-7">Feature Products</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {newProducts.map((product) => (
            <div className="" key={product.id}>
              <div className="bg-white hover:shadow-xl shadow-md py-4 rounded-md relative group">
                <img
                  src={product.image1}
                  className="transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
                  alt={product.name}
                />
                <img
                  src={product.image2}
                  className="transition-opacity duration-500 ease-in-out opacity-0 absolute top-0 left-0 mt-4 group-hover:opacity-100"
                  alt={product.name}
                />
                <div className="flex justify-between px-4 mt-2">
                  <div>
                    <p className="line-clamp-1">{product.name}</p>
                    <p className="font-semibold">Rs. {product.price}</p>
                  </div>
                  <div
                    onClick={() => toggleProduct(product)}
                    className="mt-2 text-xl cursor-pointer border border-black p-2 rounded-full my-auto"
                  >
                    <CiShoppingCart />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
