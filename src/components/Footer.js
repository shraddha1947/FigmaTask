import React from "react";
import "../components/Footer.css";
import logo from "../components/assets/logo.png";
import footer1 from "../components/assets/footer1.png";
import footer2 from "../components/assets/footer2.png";
import footer3 from "../components/assets/footer3.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <img src={logo} alt="Company Logo" className="logo" />
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-left">
          <p>
            @2024Corprite <a href="#privacy">Privacy Policy</a>{" "}
            <a href="#terms">Terms of Service</a>
          </p>
        </div>
        <div className="footer-right">
          <img src={footer1} alt="Facebook" className="social-icon" />
          <img src={footer2} alt="Twitter" className="social-icon" />
          <img src={footer3} alt="LinkedIn" className="social-icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
