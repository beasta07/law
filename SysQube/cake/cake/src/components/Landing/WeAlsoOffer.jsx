import Rating from '@mui/material/Rating';

import React from 'react';
const WeAlsoOffer = () => {
    const [value, setValue] = React.useState(4);
    const products = [
        {
            title: "Fresh Donut",
            price: "Rs 200",
            value: 5,
            description: "No added Sugar",
            src:"/images/WeAlsoOffer/Donut.png",
            tag:"New",
            tagColor:"green"
        },
        {
            title: "Macaron",
            price: "Rs 150",
            value: 3,
            description: "Gluten Free",
            src:"/images/WeAlsoOffer/Macaron.png",
                tag:"-17% ",
            tagColor:"red"

        },
        {
            title: "Cookies",
            price: "Rs 120",
            value: 4,
            description: "Rich in Chocolate",
            src:"/images/WeAlsoOffer/Cookie.png"

        },
        {
            title: "Cupcakes",
            price: "Rs 180",
            value: 5,
            description: "Cream Topping",
            src:"/images/WeAlsoOffer/cupCake.png"

        }
    ];
    

  return (
    <div className="container mt-32">
        <h1 className="text-center text-8xl font-danymeka text-[#A55668]">We Also Offer</h1>
        <div className="md:flex gap-8 mt-4 px-4 md:px-0">
            { products.map((product,index) => 
            <div key={index} className="relative border md:w-1/4 p-1  border-gray-300 rounded-lg">
        <img src={product.src} alt="" className="" />
        <div className='px-4'>
  <h3 className='font-medium text-sm'>{product.price}</h3>
  <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
  <Rating name="read-only" size="small" value={product.value} readOnly />
<p className='text-gray-600'>{product.description}</p>
<div className='w-full text-center'>

<button className='rounded-full border w-[70%] font-semibold my-4 py-1  border-gray-800'>Buy Now</button>
</div>
        </div>
        <div className={`absolute right-2 top-2 p-2 rounded-lg bg-[${product.tagColor}] text-xs text-white`}>
{product.tag}
                 </div>
            </div>
            
            )}

      </div>
    </div>
  )
}

export default WeAlsoOffer
