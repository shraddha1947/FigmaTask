import React from "react";
import "./End.css";
import Endimg from "../components/assets/Endimg.png";

const End = () => {
  return (
    <div className="end-part">
      <div className="part-content">
        <h2 className="part-title">Experience the Corprite Difference</h2>
        <p className="part-description">
          See how our platform can transform your operations.
        </p>
        <button className="part-button">Request a Demo</button>
      </div>
      <div className="part-image">
        <img src={Endimg} alt="pic" />
      </div>
    </div>
  );
};

export default End;
