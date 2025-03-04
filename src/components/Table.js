import React from "react";
import "../components/Table.css";
import right1 from "../components/assets/right1.png";
import wrong from "../components/assets/wrong.png";

const Table = () => {
  const rowColors = ["#FFFFFF", "#EEEEEE", "#FFFFFF", "#EEEEEE"];

  const features = [
    "Distributerd LedgerTransparency",
    "Customizable White-Label Solutions",
    "Scalable for Businesses of All Sizes",
    "Affordable Pricing",
  ];

  return (
    <div className="table-container">
      <h2 className="outside-heading">Why Choose CorpRite Over Others?</h2>

      <table>
        <thead>
          <tr>
            <th>Features</th>
            <th>CORPRITE</th>
            <th>OTHER</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index} style={{ backgroundColor: rowColors[index] }}>
              <td>{feature}</td>
              <td>
                <img src={right1} alt="Right" className="icon" />
              </td>
              <td>
                <img
                  src={index === 2 ? right1 : wrong}
                  alt="Right/Wrong"
                  className="icon"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
