import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import AdvancedSearch from "./AdvancedSearch";
import { PokemonContext } from "../../shared/provider/PokemonProvider";

test("Advanced Search - integration test", () => {
  const allPokemon = ["Bulbasaur", "charmander", "squirtle"];
  const AMOUNT_OF_POKEMON = 112;
  const setFoundPokemonSpy = jest.fn();
  const setIsPokemonFoundSpy = jest.fn();
  render(
    <PokemonContext.Provider value={{ allPokemon, AMOUNT_OF_POKEMON }}>
      <AdvancedSearch
        setFoundPokemon={setFoundPokemonSpy}
        setIsPokemonFound={setIsPokemonFoundSpy}
      />
    </PokemonContext.Provider>
  );
  
  const searchButton = screen.getByTestId("advanced-search-btn");
  fireEvent.click(searchButton);
  expect(setFoundPokemonSpy).toHaveBeenCalledTimes(1);
  expect(setFoundPokemonSpy).toHaveBeenCalledWith(allPokemon);
  expect(setIsPokemonFoundSpy).toHaveBeenCalledTimes(1);
  expect(setIsPokemonFoundSpy).toHaveBeenCalledWith(true); 
});
