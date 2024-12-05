import { ChefHat, Heart, Search, User } from "lucide-react"
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isVisible , setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <80)
    }
    window.addEventListener("scroll" , handleScroll)
  })

  return (
    <>
    <div className={`fixed top-5 z-50 container left-0 right-0 px-8 p-6 rounded-full hidden md:block bg-white transition-transform duration-500  text-black ${
      isVisible ? "translate-y-0" : "-translate-y-32"} `} >
        <div className="flex items-center justify-between">
            <div className=" text-red-800 items-center flex gap-2">
          <ChefHat strokeWidth={1} />
           <h1 className="font-semibold text-lg">Chef&apos;s Bakery</h1>
            </div>

<div className="">
<ul className="flex gap-8 font-medium">
    <li>Home</li>
    <li>Products</li>
    <li>Custom Cakes</li>
    <li>Offers</li>
    <li>Deals</li>

</ul>
</div>
<div className="flex gap-4">
<Search  strokeWidth={1} />
<User strokeWidth={1} />
<Heart  strokeWidth={1} />

</div>
        </div>

    </div>
   
    </>

  )
}

export default Navbar
