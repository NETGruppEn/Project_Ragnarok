import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import RoutingPath from "../../../../routes/RoutingPath";
import { PokemonContext } from "../../../../shared/provider/PokemonProvider";
import PokemonCard from "../../../pokemoncard/PokemonCard";
import DisplayLoading from "../../displayloading/DisplayLoading";
import Pagination12 from "../../../pagination/pagination12/Pagination12";

/**
 * Displays 12 Pokémon from a list of Pokémon
 */
export const DisplayListOfPokemon = () => {
  const { allPokemon, AMOUNT_OF_POKEMON } = useContext(PokemonContext);
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const POKEMON_TO_SHOW = 12;
  const history = useHistory();

  useEffect(() => {
    if (
      pokemon.length < 1 &&
      (allPokemon.length >= offset + POKEMON_TO_SHOW ||
        allPokemon.length == AMOUNT_OF_POKEMON)
    ) {
      setPokemon(allPokemon.slice(offset, offset + POKEMON_TO_SHOW));
    }
  });

  /**
   * @returns The component <DisplayLoading/> if no pokemon has loaded.
   * If some pokémon has been loaded, the pokémon cards are displayed.
   */
  const displayData = () => {
    if (pokemon.length < 1) {
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

  return (
    <div>
      {displayData()}
      <Pagination12
        offset={offset}
        setOffset={setOffset}
        POKEMON_TO_SHOW={POKEMON_TO_SHOW}
        setPokemon={setPokemon}
      />
    </div>
  );
};
