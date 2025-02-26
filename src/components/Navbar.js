import React from "react";
import { Link } from "react-router-dom";
import "../components/Navbar.css"; // Import CSS for styling
import logo from "./assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/b2c">B2C </Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/faqs">faqs</Link>
        </li>
      </ul>

      {/* Buttons Section */}
      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="demo-btn">Try Demo</button>
      </div>
    </nav>
  );
};

export default Navbar;
