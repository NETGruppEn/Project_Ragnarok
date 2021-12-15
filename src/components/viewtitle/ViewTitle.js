import React from "react";
import "./ViewTitle.css";

/**
 * Shows a title 
 * @param {string} title The title to show
 */
const ViewTitle = ({ title }) => {
  return (
    <div className="view-title">
      <h1 className="view-title-text">{title}</h1>
    </div>
  );
};

export default ViewTitle;
