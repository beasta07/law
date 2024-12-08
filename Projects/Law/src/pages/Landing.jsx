import React from "react";
import Hero from "../components/ForLanding/Hero";
import GetStart from "../components/GetStart";
import Service from "../components/ForLanding/Service";
import Feature from "../components/Feature";
import WhyChooseUs from "../components/ForLanding/WhyChooseUs";
import AboutComp from "../components/AboutComp";
import CEOMessage from "../components/ForLanding/CEOMessage";
import OurClient from "../components/ForLanding/OurClient";

const Landing = () => {
  return (
    <>
      <Hero />
      <Feature />
      <AboutComp />
      <CEOMessage />
      <Service />
      <WhyChooseUs />
      <OurClient />
      <GetStart />
    </>
  );
};

export default Landing;
