import React from 'react';
import { CiShoppingCart } from "react-icons/ci";

const Wishlist = () => {
  const [products, setProducts] = React.useState([
    { id: 1, name: 'Product 1', price: '$100', stock: 'In Stock', image: 'images/WishList/product1.jpg' },
    { id: 2, name: 'Product 2', price: '$150', stock: 'In Stock', image: 'images/WishList/product2.jpg' },
    { id: 3, name: 'Product 3', price: '$200', stock: 'Out of Stock', image: 'images/WishList/product3.jpg' }
  ]);

  const handleRemove = (id) => {
    setProducts(products.filter(product => product.id !== id));
    console.log(`Removed product with id: ${id}`);
  };

  return (
    <div className="container flex justify-center  mt-12">
      <div className="bg-white p-8 rounded-lg shadow-md w-full border">
        <h1 className="text-3xl font-medium text-gray-800 mb-12 text-center">My Wishlist</h1>
        <hr className="border-gray-200 my-2" />

        <div className="overflow-x-auto">
          <table className="w-full hidden md:block">
            <thead>
              <tr className="text-left font-normal text-gray-600 hidden md:table-row">
                <th className="p-4 w-1/4 font-normal"></th> {/* Empty cell above the image */}
                <th className="p-4 w-1/4 font-normal">Product Name</th>
                <th className="p-4 w-1/4 font-normal">Price</th>
                <th className="p-4 w-1/4 font-normal">Stock</th>
                <th className="p-4 w-1/4 ml-4 font-normal">Actions</th>
              </tr>
              <tr className="hidden md:table-row">
                <td colSpan="5">
                  <hr className="border-gray-200 my-2" />
                </td>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b last:border-none hover:bg-gray-50 transition-colors duration-200 flex flex-col md:table-row">
                  <td className="p-4 flex items-center">
                    <button
                      onClick={() => handleRemove(product.id)}
                      className="text-black text-xl hover:text-red-600 transition-colors duration-200 mr-4"
                    >
                      &times;
                    </button>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-lg sm:w-24 sm:h-24"
                    />
                  </td>
                  <td className="p-4 text-gray-700 md:table-cell">{product.name}</td>
                  <td className="p-4 text-lg text-gray-600 md:table-cell">{product.price}</td>
                  <td className={`p-4 md:table-cell ${product.stock === 'In Stock' ? 'text-green-600' : 'text-red-600'}`}>
                    {product.stock}
                  </td>
                  <td className="p-4 text-center md:table-cell">
                    <button
                      onClick={() => console.log('Add to Cart')}
                      className="border border-gray-400 rounded-full p-3"
                    >
                      <CiShoppingCart />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='block md:hidden' >
        {products.map((product) => ( 
          <div key={product.id} className=' border border-gray-200 my-4 p-4 '>
            <div className='flex gap-5'>
              <div className=' w-24'>
                <img src={product.image} className='h-full object-contain' />
              </div>
              <div>
                <h1 className='font-semibold text-xl '>{product.name}</h1>
                <h2 className='my-2'>{product.price}</h2>
                <h3 className='text-gray-600 text-xs'>{product.stock}</h3>
            <div className='flex items-center py-2 justify-center gap-6 '>
              <div>
                <button className='border-b text-sm  border-black pb-1 py-0 bg-transparent rounded-sm'>View Details</button>
              </div>
              <div>
                <button className='border-b  text-sm border-black pb-1    bg-transparent rounded-sm'>Add to Cart</button>
              </div>
            </div>
              </div>
            </div>
          </div>
        ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;