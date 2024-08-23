import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollOnTop from "./components/ScrollOnTop";
import LandingPage from "./pages/LandingPage";
import ProductDetails from "./pages/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Shop from "./pages/Shop";
import SignIn from "./pages/Auth/SignIn";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
// import ForErrorPage from "./Layouts/ForErrorPage";
import Cart from "./pages/Cart";
import Shipping from "./components/Cart Page/Shipping";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Payment from "./components/Cart Page/Payment";
import OrderReview from "./components/Cart Page/OrderReview";
import OrderSuccess from "./pages/OrderSuccess";
import AboutUs from "./pages/AboutUs";
import For404Error from "./Layouts/For404Page";
import Wishlist from "./pages/Wishlist";
import FAQ from "./pages/FAQ";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import ConfirmPassword from "./pages/Auth/ConfirmPassword";
import VerifyEmail from "./pages/Auth/VerifyEmail";
import UserSettings from "./pages/UserSettings";
import UserAccount from "./pages/UserAccount";
import MyAddress from "./components/MyAddress";

export default function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({
        top: 0,
      });
    }, [pathname]);

    return null;
  };
  
  return (
    <div>
      <Router>
        <ScrollToTop />
        <For404Error>
          <Navbar />
        </For404Error>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping-info" element={<Shipping />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/payment-info" element={<Payment />} />
          <Route path="/order-review" element={<OrderReview />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<PageNotFound />} />

          {/* AUTH */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/confirmPassword" element={<ConfirmPassword />} />
          <Route path="/userSettings" element={<UserSettings />} />
          <Route path="/userAccount" element={<UserAccount />} />
          <Route path="/verifyEmail" element={<VerifyEmail />} />
          <Route path="/myAddress" element={<MyAddress />} />




        </Routes>
        <For404Error>
          <Footer />
        </For404Error>
        <ScrollOnTop />
      </Router>
    </div>
  );
}
