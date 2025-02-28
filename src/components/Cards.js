import React from "react";
import "./card.css"; // Import the CSS file for styling
import icon1 from "../components/assets/icon1.png";
import icon2 from "../components/assets/icon2.png";
import icon3 from "../components/assets/icon3.png";

const Cards = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <div className="card-icon">
          <img src={icon1} alt="Icon 1" />
        </div>

        <div className="card-title">Automated Cap Table Management:</div>
        <div className="card-text">
          Track equity changes in real-time with blockchain-backed accuracy.
        </div>
      </div>

      <div className="card">
        <div className="card-icon">
          <img src={icon2} alt="Icon 2" />
        </div>
        <div className="card-title">Shareholder Portal:</div>
        <div className="card-text">
          Empower Stackholders with a seamless, intuitive experience.
        </div>
      </div>

      <div className="card">
        <div className="card-icon">
          <img src={icon3} alt="Icon 3" />
        </div>
        <div className="card-title">Entity Governance</div>
        <div className="card-text">
          Stay complaint and in control with comprehensive entity management
          tools.
        </div>
      </div>
    </div>
  );
};

export default Cards;
