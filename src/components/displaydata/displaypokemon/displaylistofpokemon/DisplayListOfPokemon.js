import React from "react";
import PokemonCard from "../../../pokemoncard/PokemonCard";
import { useHistory } from "react-router";
import RoutingPath from "../../../../routes/RoutingPath";

/**
 * Shows a pokemon card for every pokemon in the list
 */
const DisplayListOfPokemon = ({listOfPokemon}) => {
  const history = useHistory();

  return (
    <div>
      {listOfPokemon.map((pokemon, index) => (
        <PokemonCard
          key={index}
          pokemon={pokemon}
          onClick={() => history.push(RoutingPath.detailsView, pokemon)}
        />
      ))}
    </div>
  );
};

export default DisplayListOfPokemon;
