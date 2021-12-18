import React, { useEffect, useState, useContext } from "react";
import { useHistory, useLocation } from "react-router";
import Button from "../../components/button/Button";
import DetailsCard from "../../components/detailscard/DetailsCard";
import DisplayLoading from "../../components/displayloading/DisplayLoading";
import ViewTitle from "../../components/viewtitle/ViewTitle";
import RoutingPath from "../../routes/RoutingPath";
import { setPageTitle } from "../../shared/global/Functions";
import { PokemonContext } from "../../shared/provider/PokemonProvider";
import PokemonAPIService from "../../shared/api/service/PokemonAPIService";
import "./DetailsView.css";

/**
 * Displays detaild information of a specific Pokémon
 */
const DetailsView = () => {
  const location = useLocation();
  const history = useHistory();
  const [pokemon, setPokemon] = useState(null);
  const { allPokemon } = useContext(PokemonContext);
  const [isFetchComplete, setIsFetchComplete] = useState(false);

  /**
   * Sets the pokemon. If a Pokémon is clicked i home view then that Pokémon will
   * come from location.state otherwise the Pokémon will be the first one from allPokemon.
   */
  useEffect(() => {
    if (location.state) {
      setPokemon(location.state);
    } else {
      setPokemon(allPokemon[0]);
    }
  }, [location.state, allPokemon]);

  /**
   * Fetches the description and category of a specific Pokémon.
   */
  useEffect(() => {
    const fetchDescriptionAndCategory = async () => {
      try {
        const { data } = await PokemonAPIService.getPokemonDescription(
          pokemon.id
        );
        pokemon.description = getDescriptionEntry(data.flavor_text_entries);
        if (
          (pokemon.info.find((info) => info.name === "Category").values = [])
        ) {
          pokemon.info.find((info) => info.name === "Category").values = [
            data.genera[7].genus.slice(
              0,
              data.genera[7].genus.indexOf("Pokémon")
            ),
          ];
        }

        setIsFetchComplete(true);
      } catch (error) {
        console.log(error);
      }
    };

    if (pokemon) {
      fetchDescriptionAndCategory();
    }
  }, [pokemon]);

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
    <div className="container">
      {pokemon && setPageTitle(`${pokemon.name} | Pokédex`)}
      <ViewTitle title="Details" />
      <div className="content">
        {displayData()}
        <div className="btn-return">
          <Button onClick={() => history.push(RoutingPath.homeView)}>
            Explore More Pokémon
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetailsView;
