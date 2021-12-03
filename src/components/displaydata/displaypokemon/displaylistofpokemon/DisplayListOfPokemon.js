import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import RoutingPath from "../../../../routes/RoutingPath";
import { PokemonContext } from "../../../../shared/provider/PokemonProvider";
import PokemonCard from "../../../pokemoncard/PokemonCard";
import { DisplayLoading } from "../../displayloading/DisplayLoading";
import Button from "../../../button/Button";

/**
 * DisplayListOfPokemon is a component that displays a list of pokemons with the help of the arrow function {displayData()} when used.
 * The global values (loading) and (serverData) is used from PokemonContext.
 * @returns Arrow function {displayData()}.
 */
export const DisplayListOfPokemon = () => {
  const {allPokemon, AMOUNT_OF_POKEMON} = useContext(PokemonContext);
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const pokemonToShow = 12;
  const history = useHistory();

  useEffect(() => {
    if (pokemon.length < 1 && allPokemon.length >= offset + pokemonToShow) {
      getPokemonToShow();
    }
  });

  /**
   * Gets the pokémon to show from the list of all pokémon based on the offset.
   */
  const getPokemonToShow = () => {
    setPokemon(allPokemon.slice(offset, offset + pokemonToShow));
  };

  /**
   *
   * @returns The component <DisplayLoading/> if no pokemon has loaded.
   * If some pokémon has been loaded, the pokémon cards are displayed.
   *
   */
  const displayData = () => {
    if (pokemon.length < pokemonToShow) {
      return <DisplayLoading />;
    }

    return pokemon.map((pokemon, index) => (
      <PokemonCard
        key={index}
        pokemon={pokemon}
        onClick={() => history.push(RoutingPath.detailsView, pokemon)}
      />
    ));
  };

  const getNextPokemon = () => {
    if (offset + pokemonToShow < AMOUNT_OF_POKEMON) {
      setOffset(offset + pokemonToShow);
    } else {
      setOffset(0);
    }

    setPokemon([]);
  };

  const getPrevPokemon = () => {
    if (offset - pokemonToShow >= 0) {
      setOffset(offset - pokemonToShow);
    } else {
      setOffset(AMOUNT_OF_POKEMON - pokemonToShow);
    }

    setPokemon([]);
  };

  return (
    <div>
      {displayData()}
      <Button title="Prev" onClick={() => getPrevPokemon()} />
      <Button title="Next" onClick={() => getNextPokemon()} />
    </div>
  );
};
