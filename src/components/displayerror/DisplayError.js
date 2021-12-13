import React from "react";
import "./DisplayError.css";

const DisplayError = () => {
  return (
    <div className="error-container">
      <h3>No Pokémon Matched Your Search!</h3>
      <strong>Try these suggestions to find a Pokémon:</strong>
      <ul>
        <li className="error-tip">Search for parts of the name</li>
        <li className="error-tip">Search for an Pokémon id between 1-151</li>
      </ul>
    </div>
  );
};

export default DisplayError;
