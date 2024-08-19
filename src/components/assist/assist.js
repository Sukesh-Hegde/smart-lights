import React from "react";
import "./assist.css";

const Assist = () => {
  return (
    <div className="container">
      <h2>The platform assists city managers on multiple fronts</h2>
      <div className="grid">
        <div className="grid-item">
          <img src="your-symbol-url.svg" alt="Icon" className="icon" />
          <p>Saves on power consumption & related costs</p>
        </div>
        <div className="grid-item">
          <img src="your-symbol-url.svg" alt="Icon" className="icon" />
          <p>Lowers downtimes</p>
        </div>
        <div className="grid-item">
          <img src="your-symbol-url.svg" alt="Icon" className="icon" />
          <p>Detects power thefts.</p>
        </div>
        <div className="grid-item">
          <img src="your-symbol-url.svg" alt="Icon" className="icon" />
          <p>
            Ensures smart monitoring and control of the street light
            infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Assist;


