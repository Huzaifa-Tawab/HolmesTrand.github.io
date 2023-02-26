import React from "react";
import "./testamonials.css";
import TestaMony from "./testamony";
function TestaMonials() {
  return (
    <div className="testamonails" id="testimonials">
      <h4>TESTAMONIALS</h4>
      <span>What people say about us</span>
      <div className="testamonies">
        <TestaMony />
        <TestaMony />
        <TestaMony />
      </div>
    </div>
  );
}

export default TestaMonials;
