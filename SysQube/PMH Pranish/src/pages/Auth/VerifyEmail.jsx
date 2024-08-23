import React from 'react';
import {Link} from 'react-router-dom'
const VerifyEmail = () => {
  return (
    <div>
      <div className='min-h-screen flex flex-col '>
        <div className='mt-16'>
          <img src='/images/Auth/email.jpg' className='w-72 mx-auto' alt='Verify Email' />
        </div>
        <div className='bg-white text-center w-full sm:w-[30rem] mb-8 mx-auto px-4 sm:px-10'>
          <p className='text-center text-2xl font-medium text-gray-800 mt-6'>Verify your email address</p>
          <p className='text-center text-gray-500 my-2'>
            Please check your email and click the verify button or link to verify your account.
          </p>
          <div className='flex justify-center w-full sm:flex-row gap-2 my-10'>
            <div className='text-center mt-2 sm:mt-0'>
              <Link to ='/confirmPassword'>
              <button className='p-2 px-3 border border-gray-300 rounded-md lg:w-full sm:w-32 bg-[#506FD9] hover:bg-blue-600 text-white'>
                Resend Verification
              </button>
              </Link>
            </div>
            <div className='text-center mt-2 sm:mt-0'>
              <button className='p-2 px-3 border border-gray-300 rounded-md lg:w-full sm:w-32 bg-[#6E7985] hover:bg-blue-600 text-white'>
                Contact Support
              </button>
            </div>
          </div>
        </div>
        {/* <div className='bg-gray-800 px-4 lg:px-[2rem] text-white text-center lg:text-left'>
          <div className='container mx-auto py-8'>
            <div className='lg:flex lg:justify-between'>
              <div className='hidden lg:block'>
                @2024 Ecommerce Collection. All Rights Reserved
                <br />
                Privacy Policy | Terms & Conditions
              </div>
              <div className='mt-4 lg:mt-0'>
                Designed & Developed By <span className='font-semibold'>SysQube Technologies</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default VerifyEmail;
