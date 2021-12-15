import React from "react";
import "./Divider.css";

const Divider = ({className, children}) => {
  return (
    <div className={`divider-${className}`}>
      <div className={`notch-${className}`}>{children}</div>
    </div>
  );
};

export default Divider;
