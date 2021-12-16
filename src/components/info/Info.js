import React from "react";
import { capitalize } from "../../shared/global/Functions";
import "./Info.css";
// import { capitalize } from "../../shared/global/Functions";

/**
 * Shows info title and values.
 * @param {object} info The info object to show  
 */
const Info = ({ info }) => {
  return (
    <div className="info">
      <h4 className="info-title" data-testid="title">
        {info.name}
      </h4>
      {info.values.map((value, index) => (
        <p className="values" key={index} data-testid={`value${index}`}>
          {capitalize(value)}
        </p>
      ))}
    </div>
  );
};

export default Info;
