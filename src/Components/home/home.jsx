import React from "react";
import "./home.css";
function Home() {
  return (
    <div className="home" id="home">
      <div className="home-content">
        <h1 className="home-content-heading">Nothing is Impossible for Us</h1>
        <p className="home-content-para">
          Our power of choice is untrammelled and when nothing being able to do
          what we like best.
        </p>
        <div className="home-content-button">
          <button className="learnmore">Learn More</button>
          <button className="ourservices">Our Services</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
