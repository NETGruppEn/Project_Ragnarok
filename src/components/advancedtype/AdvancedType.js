import React, { useState } from "react";
import { COLORS } from "../../shared/global/Colors";
import Type from "../type/Type";
import {FaCheck} from "react-icons/fa";
import "./AdvancedType.css";

const AdvancedType = ({ type }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="advanced-type-container">
      <Type name={type} className={"advanced"} />
      <div
        className="advanced-checkbox"
        onClick={() => setIsClicked(!isClicked)}
        style={isClicked ? { background: COLORS.green } : { background: "#fff" }}
      >
          {isClicked ? <FaCheck color="#fff"/> : ""}
      </div>
    </div>
  );
};

export default AdvancedType;
