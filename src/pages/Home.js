import React from "react";
import "./Home.css";
import hero1 from "../components/assets/hero1.png";
import Trustedby from "../components/Trustedby";
import Slider from "../components/Slider";
import Offersection from "../components/Offersection";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>
            Streamline your
            <br />
            Entity and Equity
            <br />
            Management
          </h1>
          <p>
            Simplyfy compliance,manage stakeholders,
            <br />
            and drive growth with corprite's intuitive platform.
          </p>
          <button className="hero-button">Try it Now!</button>
          <button className="pricing-button">View Pricing</button>
        </div>

        <div className="container">
          {/* Top Boxes */}
          <div className="box top-left">
            PRECISION
            <br />
            INNOVATION
            <br />
            TRUST
          </div>
          <div className="box top-right">
            EASY
            <br />
            BLOCKCHAIN
            <br />
            MANAGEMENT
          </div>

          {/* Middle Circle Image */}
          <div className="image-container">
            <img src={hero1} alt="hero1" />
          </div>

          {/* Middle Surrounding Boxes */}
          <div className="box left-side">
            SECURITY
            <br />
            BLOCKCHAIGY
            <br />
            TECHNOLLONY
          </div>
          <div className="box right-side">
            POWERFUL
            <br />
            EQUTIY
            <br />
            TRACKING
          </div>

          {/* Bottom Box */}
          <div className="box bottom">
            SECURE
            <br />
            BLOCKCHAIGY
            <br />
            TECHNOLOGY
          </div>
        </div>
      </section>
      <Trustedby />
      <Slider />
      <Offersection />
      <Cards />
    </>
  );
};

export default Home;
