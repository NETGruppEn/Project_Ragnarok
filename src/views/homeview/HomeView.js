import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../shared/provider/PokemonProvider";
import { Head } from "../../shared/global/Functions";
import ViewTitle from "../../components/viewtitle/ViewTitle";
import DisplayData from "../../components/displaydata/DisplayData";
import Pagination12 from "../../components/pagination/pagination12/Pagination12";

/**
 * Homeview is a component that displays a list of Pokemon.
 * @returns Titel and component <DisplayListOfPokemon/>
 */
export const HomeView = () => {
  const { allPokemon, AMOUNT_OF_POKEMON } = useContext(PokemonContext);
  const [listOfPokemon, setListOfPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const POKEMON_TO_SHOW = 12;

  useEffect(() => {
    if (
      listOfPokemon.length < 1 &&
      (allPokemon.length >= offset + POKEMON_TO_SHOW ||
        allPokemon.length == AMOUNT_OF_POKEMON)
    ) {
      setListOfPokemon(allPokemon.slice(offset, offset + POKEMON_TO_SHOW));
    }
  });

  return [
    Head("Pokédex"),
    <div>
      <ViewTitle title="Pokédex" />
      <DisplayData listOfPokemon={listOfPokemon} />
      <Pagination12
        offset={offset}
        setOffset={setOffset}
        POKEMON_TO_SHOW={POKEMON_TO_SHOW}
        setListOfPokemon={setListOfPokemon}
      />
    </div>,
  ];
};
