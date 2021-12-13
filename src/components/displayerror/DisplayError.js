import React, { useContext } from "react";
import { PokemonContext } from "../../shared/provider/PokemonProvider";
import "./DisplayError.css";

/**
 * Displays a container with an error
 * message and some search tips
 */
const DisplayError = () => {
  const {AMOUNT_OF_POKEMON} = useContext(PokemonContext);
  return (
    <div className="error-container">
      <h3>No Pokémon Matched Your Search!</h3>
      <strong>Try these suggestions to find a Pokémon:</strong>
      <ul>
        <li className="error-tip">Search for parts of the name</li>
        <li className="error-tip">Search for an Pokémon id between 1-{AMOUNT_OF_POKEMON}</li>
      </ul>
    </div>
  );
};

export default DisplayError;
