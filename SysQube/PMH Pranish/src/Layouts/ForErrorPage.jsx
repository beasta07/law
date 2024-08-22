import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ForErrorPage = ({ children, noNavFooter }) => {
  return (
    <div>
      {!noNavFooter && <Navbar />}
      <main>{children}</main>
      {!noNavFooter && <Footer />}
    </div>
  );
};

export default ForErrorPage;
