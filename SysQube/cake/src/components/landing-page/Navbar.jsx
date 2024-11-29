import { useState,useEffect } from "react"
const Navbar = () => {
  const [isVisible , setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <80)
    }
    window.addEventListener("scroll" , handleScroll)
  })
  return (
    <div className={`fixed top-2 z-50 container left-0 right-0 font-poppins  transition-transform duration-500  text-gray-50 ${
      isVisible ? "translate-y-0" : "-translate-y-full"} `} >
        <div className='container hidden md:block'
        > 
        <div className='flex gap-32  pt-4'>

          <div className='text-black flex font-cyrene text-2xl items-center font-bold'>
            <h1>Chef's</h1>
            <img src="/public/images/Logo/logojpg-removebg-preview.png" className='text-white w-20' alt="" />
            <h2>Bakery</h2>
          </div>

        <div className="w-full">

<ul className='flex w-full  mb-2 pt-9 justify-between'>
   <li>Home</li>   
   <li>Catalog</li>   
   <li>Our Products</li>   
   <li>Contact Us</li>   
             <li>About Us</li>   
             <li>Our Location</li>   

  </ul>
              <hr className='border-t-1 border-white my-4 ' />
</div>
          {/* <div className="w-full ">

          <ul className='flex w-full  mb-2 pt-9 justify-between'>
         
            </ul>
                        <hr className='border-t-1 border-white my-4 -ml-20' />
          </div> */}

        </div>
        </div>

    </div>
  )
}

export default Navbar
