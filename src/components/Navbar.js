// import React from "react";
// import { Link } from "react-router-dom";
// import "../components/Navbar.css";
// import logo from "./assets/logo.png";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <Link to="/">
//           <img src={logo} alt="logo" />
//         </Link>
//       </div>

//       <ul className="nav-links">
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/pricing">Pricing</Link>
//         </li>
//         <li>
//           <Link to="/b2c">B2C </Link>
//         </li>
//         <li>
//           <Link to="/articles">Articles</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//         <li>
//           <Link to="/faqs">faqs</Link>
//         </li>
//       </ul>

//       <div className="nav-buttons">
//         <button className="login-btn">Login</button>
//         <button className="demo-btn">Try Demo</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS
import logo from "./assets/logo.png"; // Adjust the path if needed

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/pricing" onClick={() => setMenuOpen(false)}>
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/b2c" onClick={() => setMenuOpen(false)}>
              B2C
            </Link>
          </li>
          <li>
            <Link to="/articles" onClick={() => setMenuOpen(false)}>
              Articles
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/faqs" onClick={() => setMenuOpen(false)}>
              FAQs
            </Link>
          </li>
        </ul>

        {/* Login & Demo Buttons */}
        <div className="nav-buttons">
          <button className="login-btn">Login</button>
          <button className="demo-btn">Try Demo</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
