import React from "react";
import "./Divider.css";

/**
 * A divider between sections.
 * @returns an aesthetically pleasing notch with some space around  
 */
const Divider = ({className, children}) => {
  return (
    <div className={`divider-${className}`}>
      <div className={`notch-${className}`}>{children}</div>
    </div>
  );
};

export default Divider;
