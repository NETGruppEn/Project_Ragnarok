import React from "react";
import { useHistory, useLocation } from "react-router";
import { useEffect, useState, useContext } from "react/cjs/react.development";
import Button from "../../components/button/Button";
import DetailsCard from "../../components/detailscard/DetailsCard";
import DisplayLoading from "../../components/displayloading/DisplayLoading";
import ViewTitle from "../../components/viewtitle/ViewTitle";
import RoutingPath from "../../routes/RoutingPath";
import { setPageTitle } from "../../shared/global/Functions";
import { PokemonContext } from "../../shared/provider/PokemonProvider";
import PokemonAPIService from "../../shared/api/service/PokemonAPIService";

const DetailsView = () => {
  const location = useLocation();
  const history = useHistory();
  const [pokemon, setPokemon] = useState();
  const { allPokemon } = useContext(PokemonContext);
  const [isFetchComplete, setIsFetchComplete] = useState(false);

  useEffect(() => {
    if (location.state) {
      setPokemon(location.state);
    } else {
      setPokemon(allPokemon[0]);
    }
  });

  useEffect(() => {
    fetchDescription();
  }, [pokemon]);

  const fetchDescription = async () => {
    try {
      const { data } = await PokemonAPIService.getPokemonDescription(
        pokemon.id
      );
      pokemon.description = getDescriptionEntry(data.flavor_text_entries);
      pokemon.info = [
        ...pokemon.info,
        {
          name: "Category",
          values: [
            data.genera[7].genus.slice(
              0,
              data.genera[7].genus.indexOf("Pokémon")
            ),
          ],
        },
      ];
      setIsFetchComplete(true);
    } catch (error) {
      console.log(error);
    }
  };

  const getDescriptionEntry = (entries) => {
    const lang = "en";
    const entry = entries.find((entry) => entry.language.name === lang);
    return entry.flavor_text.replace("\f", " ");
  };

  const displayData = () => {
    if (pokemon && isFetchComplete) {
      return <DetailsCard pokemon={pokemon} />;
    }

    return <DisplayLoading />;
  };

  return (
    <div>
      {pokemon && setPageTitle(`${pokemon.name} | Pokédex`)}
      <ViewTitle title="Details" />
      {displayData()}
      <Button onClick={() => history.push(RoutingPath.homeView)}>
        Explore More Pokémon
      </Button>
    </div>
  );
};

export default DetailsView;
