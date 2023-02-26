import React from "react";
import stars from "../../Assets/stars.png";
import avatar from "../../Assets/avatar.png";
import "./testamony.css";
function TestaMony() {
  return (
    <div className="testamony">
      <p className="testamony-para">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti velit
        hic debitis perferendis modi expedita esse dolorum ducimus facere
        eligendi, a corporis consequatur exercitationem sapiente possimus nihil
        consequuntur. Labore, ullam!
      </p>
      <img className="testamony-img" />
      <img src={avatar} alt="" style={{ width: 60 }} />
      <h5 className="testamony-name">Evan Taylor</h5>
      <h3 className="testamony-design">Chairman,Sun Solutions</h3>
      <div className="testamony-stars">
        <img src={stars} style={{ height: "30px" }} />
      </div>
    </div>
  );
}

export default TestaMony;
