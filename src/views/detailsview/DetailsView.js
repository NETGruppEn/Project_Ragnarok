import React from "react";
import { useHistory, useLocation } from "react-router";
import { useEffect, useState, useContext } from "react/cjs/react.development";
import Button from "../../components/button/Button";
import ViewTitle from "../../components/viewtitle/ViewTitle";
import RoutingPath from "../../routes/RoutingPath";
import { setPageTitle } from "../../shared/global/Functions";
import { PokemonContext } from "../../shared/provider/PokemonProvider";

const DetailsView = () => {
  const location = useLocation();
  const history = useHistory();
  const [pokemon, setPokemon] = useState();
  const { allPokemon } = useContext(PokemonContext);

  useEffect(() => {
    if (location.state) {
      setPokemon(location.state);
    } else {
      setPokemon(allPokemon[0]);
    }
  });

  return (
    <div>
      {pokemon && setPageTitle(`${pokemon.name} | Pokédex`)}
      <ViewTitle title="Details" />
      <p>{pokemon?.name}</p>
      <Button onClick={() => history.push(RoutingPath.homeView)}>
        Explore More Pokémon
      </Button>
    </div>
  );
};

export default DetailsView;
