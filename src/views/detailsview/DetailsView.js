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

const DetailsView = () => {
  const location = useLocation();
  const history = useHistory();
  const [pokemon, setPokemon] = useState();
  const { allPokemon } = useContext(PokemonContext);
  const [isFetchComplete, setIsFetchComplete] = useState(false);

  /**
   * If we get to this view from clicking on a pokemonCard
   * the pokemon is sent with the location state. Otherwise 
   * the pokemon will be set to the first pokemon in allPokemon
   */
  useEffect(() => {
    if (location.state) {
      setPokemon(location.state);
    } else {
      setPokemon(allPokemon[0]);
    }
  }, [location.state, allPokemon]);

  /**
   * Fetches the description and category for the Pokémon
   * when the view is mounted.
   */
  useEffect(() => {
    
  /**
   * Fetches description and category for the active pokemon.
   * Then marks the fetch to be complete by setting isFetchComplete to true
   */
    const fetchDescriptionAndCategory = async () => {
      try {
        const { data } = await PokemonAPIService.getPokemonDescription(
          pokemon.id
        );
        pokemon.description = getDescriptionEntry(data.flavor_text_entries);
        console.log(pokemon.info[1]);
        if ((pokemon.info.find((info) => info.name === "Category").values = [])) {
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
    };
  }, [pokemon]);

 /**
   * Turns the entries into an english description
   * @param {*} entries 
   */
  const getDescriptionEntry = (entries) => {
    const lang = "en";
    const entry = entries.find((entry) => entry.language.name === lang);
    return entry.flavor_text.replace("\f", " ");
  };

  /**
   * If the fetch is complete, the DetailsCard will be shown.
   * Otherwise a loading spinner will be shown
   */
  const displayData = () => {
    if (isFetchComplete) {
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
