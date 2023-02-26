import React from "react";
import "./nav.css";
function Nav() {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>HolmesTrand Elektro</h1>
      </div>
      <div className="navbarbuttons">
        <button className="navbtn">
          <a href="#home">Home</a>
        </button>
        <button className="navbtn">
          <a href="#services">Services</a>
        </button>
        <button className="navbtn">
          <a href="#aboutUs"> About Us</a>
        </button>
        <button className="navbtn">
          <a href="#testimonials">Testimonials</a>
        </button>
        <button className="navbtn-contact">
          <a href="#contactUs" style={{color:"#fff"}}> Contact Us</a>
        </button>
      </div>
    </div>
  );
}

export default Nav;
