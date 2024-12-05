import Banner from "../components/Landing/Banner"
import Category from "../components/Landing/Category"
import Features from "../components/Landing/Features"
import Flavor from "../components/Landing/Flavor"
import Hero from "../components/Landing/Hero"
import Payment from "../components/Landing/Payment"
import Products from "../components/Landing/Products"
import Review from "../components/Landing/Review"
import Subscribe from "../components/Landing/Subscribe"
import WeAlsoOffer from "../components/Landing/WeAlsoOffer"
import Navbar from "../components/Navbar"


const Landing = () => {
  return (
    <div>
      <Hero/>
      <Features/>
      <Category/>
      <Products/>
      <Banner/>
      <Flavor/>
      <Subscribe/>
      <WeAlsoOffer/>
      <Review/>
      <Payment/>
    </div>
  )
}

export default Landing
