import React from "react";
import "./Gauge.css";

/**
 * Renders Gauge component for Stats Container
 *
 * @param {string} title Gauge title
 * @param {int} value Show strength of the pokemon
 */
const Gauge = ({ title, value }) => {
  // Calculate the number of bars that should be colored
  //
  // Max value is 250
  // Number of bars - 15 pcs
  // Math.ceil -> rounds a number upwords (2.3 -> 3)
  const getValue = () => {
    return Math.ceil((value * 15) / 250);
  };

  // Render all 15 bars
  const renderBars = () => {
    // array to store elements
    const elementsToRender = [];

    // looping through all 15 elements
    // elements with index lower than returned value from getValue() function should be colored
    // default color: #30a7d7
    // each child in a list should have a unique "key" prop.
    for (let index = 1; index < 16; index++) {
      elementsToRender.push(
        <span
          className="gauge-bar"
          id={index + "-bar"}
          key={index + "-bar"}
          style={index <= getValue() ? { backgroundColor: "#30a7d7" } : {}}
        ></span>
      );
    }

    return elementsToRender;
  };

  return (
    <div className="gauge-container">
      <div className="gauge-bars">{renderBars()}</div>
      <p className="gauge-title">{title}</p>
    </div>
  );
};

export default Gauge;
