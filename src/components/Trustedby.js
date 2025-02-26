import React from "react";
import "./TrustedBy.css";
import company1 from "./assets/company1.png"; // Example logo
import company2 from "./assets/company2.png";
import company3 from "./assets/company3.png";
import company4 from "./assets/company4.png";
import company5 from "./assets/company5.png";
import company6 from "./assets/company6.png";

const Trustedby = () => {
  return (
    <div className="trusted-by-container">
      <section className="trusted-by">
        <div className="trusted-header">
          <h2>Trusted by </h2>
          <p>
            They work to find cures to cancer, travel to space,bulid
            <br />
            tomorrow's innovation,and beyond.
          </p>
        </div>
        <div className="trusted-logos">
          <img src={company1} alt="Company 1" />
          <img src={company2} alt="Company 2" />
          <img src={company3} alt="Company 3" />
          <img src={company4} alt="Company 4" />
          <img src={company5} alt="Company 5" />
          <img src={company6} alt="Company 6" />
        </div>
      </section>
    </div>
  );
};

export default Trustedby;
