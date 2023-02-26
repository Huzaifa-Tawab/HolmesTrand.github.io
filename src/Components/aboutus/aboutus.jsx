import React from "react";
import aboutus from "../../Assets/aboutus.png";
import check from "../../Assets/check.png";
import avatar from "../../Assets/avatar.png";
import "./aboutus.css";
function AboutUs() {
  return (
    <div className="aboutus" id="aboutUs">
      <div className="aboutus-img">
        <img src={aboutus} />
      </div>
      <div className="aboutus-content">
        <span>ABOUT US</span>
        <h4>Outstanding Residential & Commercial Services</h4>
        <p>
          All od our services are backen by our 100% satisfaction guarantee. Our
          electricians can install anything from new security lighting for your
          outdoors to a whole home generator that will keep your appliances
          working during a power outage.
        </p>
        <ul>
          <li>
            <img src={check} style={{ width: 20 }} />
            Full-service electrical layout,design
          </li>
          <li>
            <img src={check} style={{ width: 20 }} />
            Wiring and installation/upgrades
          </li>
          <li>
            <img src={check} style={{ width: 20 }} />
            Emergency power solutions (generators)
          </li>
          <li>
            <img src={check} style={{ width: 20 }} />
            Virtually any electrical needs you have - just ask!
          </li>
        </ul>
        <div className="owner">
          <div className="owner-avatar">
            <img src={avatar} style={{ width: 50 }} />
            <h4>Patrick Nordhagen</h4>
            <span>Your own electrician</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
