import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../../../shared/provider/PokemonProvider";
import PokemonCard from "../../../pokemoncard/PokemonCard";
import { DisplayLoading } from "../../displayloading/DisplayLoading";

/**
 * DisplayListOfPokemon is a component that displays a list of pokemons with the help of the arrow function {displayData()} when used.
 * The global values (loading) and (serverData) is used from PokemonContext.
 * @returns Arrow function {displayData()}.
 */
export const DisplayListOfPokemon = () => {
  const [allPokemon] = useContext(PokemonContext);
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const pokemonToShow = 12;

  useEffect(() => {
    if (pokemon.length < 1 && allPokemon.length >= pokemonToShow) {
      getPokemonToShow();
    }
  })

  /**
   * Gets the pokémon to show from the list of all pokémon based on the offset.
   */
  const getPokemonToShow = () => {
    setPokemon(allPokemon.slice(offset, offset + pokemonToShow));
  }

  /**
   *
   * @returns The component <DisplayLoading/> if no pokemon has loaded.
   * If some pokémon has been loaded, the pokémon cards are displayed.
   *
   */
  const displayData = () => {
    if (pokemon.length < 1) {
      return (
        <DisplayLoading />
      )
    }

    return pokemon.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
      ));
  };

  return <div>{displayData()}</div>;
};
