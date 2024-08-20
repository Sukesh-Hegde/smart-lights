import React from "react";
import "./assist.css";
import box from "../assets/blockchain.png";

const Assist = () => {
  return (
    <div id="services">
      <div className="container">
        <h2>The platform assists city managers on multiple fronts</h2>
        <div className="grid">
          <div className="grid-item">
            <img src={box} alt="Icon" className="icon" />
            <p>Saves on power consumption & related costs</p>
          </div>
          <div className="grid-item">
            <img src={box} alt="Icon" className="icon" />
            <p>Lowers downtimes</p>
          </div>
          <div className="grid-item">
            <img src={box} alt="Icon" className="icon" />
            <p>Detects power thefts.</p>
          </div>
          <div className="grid-item">
            <img src={box} alt="Icon" className="icon" />
            <p>
              Ensures smart monitoring and control of the street light
              infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assist;
