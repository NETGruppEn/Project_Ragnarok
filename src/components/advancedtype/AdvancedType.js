import React, { useState, useEffect } from "react";
import { COLORS } from "../../shared/global/Colors";
import Type from "../type/Type";
import { FaCheck } from "react-icons/fa";
import "./AdvancedType.css";

const AdvancedType = ({ type, selectedTypes, setSelectedTypes, isReset }) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (isSelected) {
      setSelectedTypes([...selectedTypes, type]);
    } else {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    }

    if (isReset) {
      setIsSelected(false);
    }
  }, [isSelected, isReset]);

  return (
    <div className="advanced-type-container">
      <Type name={type} className={"advanced"} />
      <div
        className="advanced-checkbox"
        onClick={() => setIsSelected(!isSelected)}
        style={
          isSelected ? { background: COLORS.green } : { background: "#fff" }
        }
      >
        {isSelected ? <FaCheck color="#fff" /> : ""}
      </div>
    </div>
  );
};

export default AdvancedType;
