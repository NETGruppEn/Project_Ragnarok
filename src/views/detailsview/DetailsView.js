import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../shared/provider/PokemonProvider";
import { useHistory, useLocation } from "react-router";
import RoutingPath from "../../routes/RoutingPath";
import ViewTitle from "../../components/viewtitle/ViewTitle";
import DisplayData from "../../components/displaydata/DisplayData";
import Button from "../../components/button/Button";

/**
 * Displays details about a specific Pokémon
 */
const DetailsView = () => {
  const { allPokemon } = useContext(PokemonContext);
  const [pokemon, setPokemon] = useState();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setPokemon(location.state);
    } else {
      setPokemon(allPokemon[0]);
    }
  });

  return (
    <div>
      <ViewTitle title="Details" />
      <DisplayData pokemon={pokemon} />
      <Button
        title="Explore More Pokémon"
        onClick={() => history.push(RoutingPath.homeView)}
      />
    </div>
  );
};

export default DetailsView;
