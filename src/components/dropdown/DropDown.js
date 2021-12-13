import React from "react";
import "./DropDown.css";

const DropDown = ({ options, setSelected }) => {
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

export default DropDown;
