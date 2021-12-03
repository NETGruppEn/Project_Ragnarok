import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import Button from "../../components/button/Button";
import RoutingPath from "../../routes/RoutingPath";

const DetailsView = () => {
  const location = useLocation();
  const history = useHistory();
  const [pokemonId, setPokemonId] = useState(
    location.state ? location.state : 1
  );
  return (
    <div>
      <h1>Details</h1>
      <p>Id = {pokemonId}</p>
      <Button
        title="Explore More Pokémon"
        onClick={() => history.push(RoutingPath.homeView)}
      />
    </div>
  );
};

export default DetailsView;
