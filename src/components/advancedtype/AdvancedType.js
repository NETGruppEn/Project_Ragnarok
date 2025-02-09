import React, { useState, useEffect } from "react";
import { COLORS } from "../../shared/global/Colors";
import Type from "../type/Type";
import { FaCheck } from "react-icons/fa";
import "./AdvancedType.css";

const AdvancedType = ({ type, selectedTypes, setSelectedTypes, isReset }) => {
  const [isSelected, setIsSelected] = useState(false);

  /**
   * If a type is selected/deselected it gets added/removed 
   * from the list of selected types.
   * If the reset button is clicked the type is deselected 
   * and removed from the list selected types
   */
  useEffect(() => {
    if (isSelected) {
      setSelectedTypes(s => [...s, type]);
    } else {
      setSelectedTypes(s => s.filter((t) => t !== type));
    }

    if (isReset) {
      setIsSelected(false);
    }
  }, [isSelected, isReset, type, setSelectedTypes]);

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
