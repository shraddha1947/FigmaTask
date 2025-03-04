import React from "react";
import { Link } from "react-router-dom";
import "../components/Navbar.css";
import logo from "./assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

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

      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="demo-btn">Try Demo</button>
      </div>
    </nav>
  );
};

export default Navbar;
