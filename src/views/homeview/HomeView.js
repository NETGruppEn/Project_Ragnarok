import React, { useContext, useEffect, useState } from "react";
import { Head } from "../../shared/global/Functions";
import DisplayData from "../../components/displaydata/DisplayData";
import ViewTitle from "../../components/viewtitle/ViewTitle";
import { PokemonContext } from "../../shared/provider/PokemonProvider";
import Pagination12 from "../../components/pagination/pagination12/Pagination12";

/**
 * Homeview is a component that displays a list of Pokemon.
 */
const HomeView = () => {
  const { allPokemon, AMOUNT_OF_POKEMON } = useContext(PokemonContext);
  const [listOfPokemon, setListOfPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const POKEMON_TO_SHOW = 12;

  useEffect(() => {
    if (
      listOfPokemon.length < 1 &&
      (allPokemon.length >= offset + POKEMON_TO_SHOW ||
        allPokemon.Length == AMOUNT_OF_POKEMON)
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

export default HomeView;