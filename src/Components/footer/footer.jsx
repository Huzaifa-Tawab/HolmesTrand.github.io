import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-col c1">
        <h5>HOLMESTRAND ELEKTRO</h5>
        <p className="c1p">
          Wireman is your one-call solution for a wide range of home maintenance
          and repair needs. We are fully insured professional team.
        </p>
        <div className="social">
        <a href="https://www.youtube.com/c/jamesqquick"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/learnbuildteach/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
        </div>
      </div>
      <div className="footer-col c2">
        <h5>Company</h5>
        <p>Home</p>
        <p>Services</p>
        <p>About Us</p>
        <p>Testimonials</p>
      </div>
      <div className="footer-col c3">
        <h5>Legal</h5>
        <p>Customer Service</p>
        <p>Partner Help</p>
        <p>Partner Dispute</p>
        <p>Terms & Conditions</p>
      </div>
      <div className="footer-col c4">
        <h5>Newsletter</h5>
        <input type="email" placeholder="Your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Footer;
