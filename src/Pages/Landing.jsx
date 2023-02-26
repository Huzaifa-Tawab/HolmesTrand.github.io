import React from "react";
import Nav from "../Components/nav/nav";
import Home from "../Components/home/home";
import Adbanner from "../Components/adbanner/adbanner";
import Services from "../Components/services/services";
import AboutUs from "../Components/aboutus/aboutus";
import TestaMonials from "../Components/testamonials/testamonials";
import GetInTouch from "../Components/getintouch/getintouch";
import Footer from "../Components/footer/footer";
function Landing() {
  return (
    <>
      <Nav />
      <Home />
      <Adbanner />
      <Services />
      <AboutUs />
      <TestaMonials />
      <GetInTouch />
      <Footer/>
    </>
  );
}

export default Landing;
