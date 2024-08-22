import React from 'react'
import { Link } from 'react-router-dom'

const OrderSuccess = () => {
  return (
    <>
     <div className='container text-center pt-14'>
          <img src="/images/ordersuccess.webp" alt="ordre successfull" className='md:w-[80%] lg:w-[40%] mx-auto' />
          <h2 className='pb-5'>Product Order Successfully!</h2>
          <Link to="/">
          <button className='uppercase p-3 px-6 bg-[#0D4C90] text-white rounded'>Back to Home</button>
          </Link>
     </div>
    </>
  )
}

export default OrderSuccess;