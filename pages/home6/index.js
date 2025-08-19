import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import Hero6 from "../../components/hero6";
import Footer from "../../components/footer";
import Logo from "/public/images/logo2.png";
import abimg from "/public/images/about6.jpg";
import NoPoint from "../../components/NoPoint";
import Service from "../../components/Service";
import FunFact from "../../components/FunFact";
import FoundationIntro from "../../components/FoundationIntro";

const HomePage6 = () => {
  return (
    <Fragment>
      <Navbar Logo={Logo} hclass={"wpo-header-style-4"} />
      <Hero6 heroClass={"wpo-hero-section-6"} />
      
      {/* Vakıf Tanıtım Bölümü */}
      <FoundationIntro />
      
    {/*   <Service Fclass={"wpo-features-section-s2"} vclassClass={"v1"} />
      <FunFact /> */}
      <Footer />
    </Fragment>
  );
};
export default HomePage6;
