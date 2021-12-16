import React from "react";
import "./ViewTitle.css";

/**
 * Shows a title 
 * @param {string} title The title to show
 */
const ViewTitle = ({ title }) => {
  return (
    <div className="container">
      <h1 className="viewtitle ">{title}</h1>
    </div>
  );
};

export default ViewTitle;
S