import React from "react";
import "./services.css";
import dimmer from "../../Assets/dimmer.png";
import lamp from "../../Assets/lamp.png";
import stkkon from "../../Assets/stkkon.png";
import thermo from "../../Assets/thermo.png";
function Services() {
  return (
    <div className="services" id="services">
      <span>OUR SERVICES</span>
      <h3>We're Your Trusted Electrician</h3>
      <div className="services-items">
        <div className="services-item">
          <div className="services-item-col">
            <img src={dimmer} />
            <h4>Dimmer</h4>
            <p>Fra kr1990</p>
          </div>
        </div>
        <div className="services-item">
          <div className="services-item-col">
            <img src={lamp} />
            <h4>Lamp</h4>
            <p>Fra kr1990</p>
          </div>
        </div>
        <div className="services-item">
          <div className="services-item-col">
            <img src={stkkon} />
            <h4>Stikkontakt</h4>
            <p>Fra kr1990</p>
          </div>
        </div>
        <div className="services-item">
          <div className="services-item-col">
            <img src={thermo} />
            <h4>Termostat</h4>
            <p>Fra kr1990</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
