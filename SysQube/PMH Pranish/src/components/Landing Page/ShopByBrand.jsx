
const ShopByBrand = () => {
  return (
    <div>
            <div className="lg:container 3xl:px-32">
          <div className="flex justify-center mt-24 ">
            <hr className="w-1/4 mt-3" />
            <span className="mx-2">SHOP BY BRAND</span>
            <hr className="w-1/4 mt-3" />
          </div>

          <div className="container">
            <div className="mt-8 flex overflow-scroll lg:overflow-hidden lg:justify-between gap-12">
                <img  className="w-20 lg:w-28 object-contain" src="images/LandingPage/carousel1.png" alt="Carousel 1"/>
                {/* <img  className="w-20 lg:w-28 object-contain" src="images/LandingPage/carousel2.png" alt="Carousel 2"/> */}
                <img  className="w-20 lg:w-28 object-contain" src="images/LandingPage/carousel3.jpg" alt="Carousel 3"/>
                <img  className="w-20 lg:w-28 object-contain" src="images/LandingPage/carousel4.jpg" alt="Carousel 4"/>
                <img  className="w-20 lg:w-28 object-contain" src="images/LandingPage/carousel5.jpg" alt="Carousel 5"/>
                <img  className="w-20 lg:w-28 object-contain" src="images/LandingPage/carousel6.jpg" alt="Carousel 6"/>
                <img  className="w-20 lg:w-28 object-contain" src="images/LandingPage/carousel7.jpg" alt="Carousel 7"/>
                {/*
                <img  className="w-20 lg:w-28 object-contain" src="images/LandingPage/carousel7.jpg" alt="Carousel 7"/>
                <img  className="w-20 lg:w-28 object-contain" src="images/LandingPage/carousel7.jpg" alt="Carousel 7"/>
                <img  className="w-20 lg:w-28 object-contain" src="images/LandingPage/carousel7.jpg" alt="Carousel 7"/>
                <img  className="w-20 lg:w-28 object-contain" src="images/LandingPage/carousel7.jpg" alt="Carousel 7"/> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default ShopByBrand
