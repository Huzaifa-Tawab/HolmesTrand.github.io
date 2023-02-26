import React from "react";
import "./adbanner.css";
import home from "../../Assets/home.png";
import achi from "../../Assets/achi.png";
import person from "../../Assets/person.png";
function Adbanner() {
  return (
    <div className="adbanner">
      <div className="adbanner-item ad1">
        <div className="adbanner-item-img">
          <img src={person} />
        </div>
        <div className="adbanner-item-content">
          <h5>Experienced Team</h5>
          <span>More Than 10 Years</span>
        </div>
      </div>
      <div className="adbanner-item ad2">
        <div className="adbanner-item-img">
          <img src={home} />
        </div>
        <div className="adbanner-item-content">
          <h5>Reasonable Price</h5>
          <span>Flexable Pricing</span>
        </div>
      </div>
      <div className="adbanner-item ad3">
        <div className="adbanner-item-img">
          <img src={achi} />
        </div>
        <div className="adbanner-item-content">
          <h5>3 Years Warranty</h5>
          <span>For Every Service</span>
        </div>
      </div>
    </div>
  );
}

export default Adbanner;
