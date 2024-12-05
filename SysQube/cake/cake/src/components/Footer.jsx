import { FaInstagram } from "react-icons/fa"
import { GoArrowUpRight } from "react-icons/go"
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti"

const Footer = () => {
  return (
    <div className="bg-[#FEF2F5] pt-10 px-4 md:px-0   ">
   <div className='container md:flex  justify-between py-16'>
          <div className='mb-8 md:mb-0'> 
               <h2 className='font-bold text-3xl pb-5 font-cyrene text-[#A55668]'>Chef&apos;s Bakery</h2>
               <ul className='leading-8 pb-5'>
                    <li>Address: Kathmandu, Nepal</li>
                    <li>Email: <span className='font-medium'>info@example.com</span></li>
                    <li>Phone: <span className='font-medium'>9801234567</span></li>
               </ul>
               <a href="https://www.google.com/maps/dir//Chefs+Bakery+%26+Confectionery+Lokanthali+factory+%23best+cake+in+nepal%23,+Dibyashwori+Marg,+Madhyapur+Thimi+44700/@27.6729959,85.3570603,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x39eb1a1c98686e81:0xfc60ffd36b72593!2m2!1d85.3596352!2d27.6729959!3e0?entry=ttu&g_ep=EgoyMDI0MTIwMi4wIKXMDSoASAFQAw%3D%3D" target='blank'>
               <button className='flex items-center gap-2 border-b pb-1 hover:text-orange-500 hover:border-orange-500 duration-300'>Get direction<GoArrowUpRight /></button>
               </a>

               <ul className='flex gap-3 mt-6'>
                    <li className="cursor-pointer"><a href="https://www.instagram.com/chefsbakerynepal/" target="_blank"><FaInstagram className='text-4xl rounded-full border border-white p-2' /></a></li>
                    <li><TiSocialFacebook className='text-4xl rounded-full border border-white p-1' /></li>
                    <li><TiSocialTwitter className='text-4xl rounded-full border border-white p-1' /></li>
               </ul>
          </div>

          <div className='mb-8 md:mb-0'> 
               <h3 className='text-xl font-medium pb-5'>Quick links</h3>
               <ul className='leading-8'>
                    <li to="/"><li>Home</li></li>
                    <li to="/shop"><li>Shop</li></li>
                    <li to="/about"><li>About</li></li>
   
               </ul>
          </div>

          <div className='mb-8 md:mb-0'> 
               <h3 className='text-xl font-medium pb-5'>Help</h3>
               <ul className='leading-8'>
                    <li to="/faq"><li>FAQ's</li></li>
                    <li to="/wishlist"><li>Wishlist</li></li>
                    <li to="/register"><li>Register</li></li>
               </ul>
          </div>

          <div className='md:w-[31%]'>
               <h3 className='text-xl font-medium'>Sign Up for Email</h3>
               <p className='py-4'>Sign up to get first dibs on new arrivals, sales, exclusive content, events and more!</p>
               <div className='border border-gray-500 rounded-full flex justify-between p-1'>
               <input type="email" className='p-2 w-full bg-transparent focus:outline-none' placeholder='Enter your email...'  />
               <button className="rounded-full bg-[#ED6A77] text-white p-2 px-8">
               Subscribe</button>
               </div>
          </div>

     </div>

     <div className='container md:flex border-t py-5 justify-between text-center'>
          <p className='mb-2 md:mb-0'>© 2024 <span className="text-[#A55668] font-semibold">Chef's Bakery </span> . All Rights Reserved</p>
          <p>Design and develop by SysQube Technology</p>
     </div>
    </div>
  )
}

export default Footer
