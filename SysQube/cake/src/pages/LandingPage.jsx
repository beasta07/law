import Banner from "../components/landing-page/Banner"
import Footer from "../components/landing-page/Footer"
import Hero from "../components/landing-page/Hero"
import Navbar from "../components/landing-page/Navbar"
import Review from "../components/landing-page/Review"
import Products from "../components/landing-page/Products"
import Category from "../components/landing-page/Category"
import SecondBanner from "../components/landing-page/SecondBanner"
import NewArrivals from "../components/NewArrivals"

const LandingPage = () => {
  return (
    <div>
      <Hero/>
      {/* <Category/> */}
      <Products/>
      <SecondBanner/>
      <NewArrivals/>
            <Banner/>
      <Review/>
      
    </div>
  )
}

export default LandingPage
