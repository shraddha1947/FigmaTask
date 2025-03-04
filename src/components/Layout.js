import React from "react";
import "../components/Layout.css";
import layout1 from "../components/assets/layout1.png";
import layout2 from "../components/assets/layout2.png";
import layout3 from "../components/assets/layout3.png";

const Layout = () => {
  return (
    <div className="top">
      <h1 className="main-heading">Tailored Solutions for Every Business</h1>
      <div />

      <div className="content">
        <div className="section">
          <img src={layout1} alt="Startups" />
          <div className="text">
            <h3>Startups:</h3>
            <p>
              Simplified fundraising and shareholder management to streamline
              the early stages of growth, allowing founders to focus on
              innovation without getting bogged down in complex admin tasks.
            </p>
          </div>
        </div>

        <div className="section reverse">
          <img src={layout2} alt="Enterprises" />
          <div className="text">
            <h3>Enterprises:</h3>
            <p>
              Scalable governance solutions that grow with your business.
              CorpRite's platform adapts to the needs of large organizations,
              providing robust tools for managing a wide range of stakeholders
              and compliance requirements.
            </p>
          </div>
        </div>

        <div className="section">
          <img src={layout3} alt="Professional Services" />
          <div className="text">
            <h3>Professional Services:</h3>
            <p>
              Enhance your client offerings with CorpRite’s white-label
              solutions. Provide a branded, seamless experience for your
              clients, helping them manage governance and corporate structures
              with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
