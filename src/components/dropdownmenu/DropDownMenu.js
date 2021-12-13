import React from "react";
import "./DropDownMenu.css";

/**
 * Shows options in a drop-down menu
 * that you can select from.
 * @param {*} options The options shown
 * @param {*} setSelected A function that selects the chosen option
 */
const DropDownMenu = ({ options, setSelected }) => {
  return (
    <div className="drop-down">
      {options.map((option, index) => (
        <div
          key={index}
          className="drop-down-item"
          onClick={() => setSelected(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default DropDownMenu;
