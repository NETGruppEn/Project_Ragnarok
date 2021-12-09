import React from "react";
import "./ViewTitle.css";

const ViewTitle = ({ title }) => {
  return (
    <div className="container">
      <h1 className="viewtitle ">{title}</h1>
    </div>
  );
};

export default ViewTitle;
