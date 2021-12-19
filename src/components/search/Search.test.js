import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Search from "./Search";
import { PokemonContext } from "../../shared/provider/PokemonProvider";

test("Search - integration test", () => {
  const allPokemon = ["Bulbasaur", "charmander", "squirtle"];
  const setFoundPokemonSpy = jest.fn();
  const setIsPokemonFoundSpy = jest.fn();
  const setIsAdvancedClosedSpy = jest.fn();
  render(
    <PokemonContext.Provider value={{ allPokemon }}>
      <Search
        setFoundPokemon={setFoundPokemonSpy}
        setIsPokemonFound={setIsPokemonFoundSpy}
        setIsAdvancedClosed={setIsAdvancedClosedSpy}
      />
    </PokemonContext.Provider>
  );

  const searchButton = screen.getByTestId("search-btn");
  fireEvent.click(searchButton);

  // When searchValue is empty these three calls will fire.
  expect(setFoundPokemonSpy).toHaveBeenCalledTimes(1);
  expect(setFoundPokemonSpy).toHaveBeenCalledWith([]);
  expect(setIsPokemonFoundSpy).toHaveBeenCalledTimes(1);
  expect(setIsPokemonFoundSpy).toHaveBeenCalledWith(true); 
  expect(setIsAdvancedClosedSpy).toHaveBeenCalledTimes(1);
  expect(setIsAdvancedClosedSpy).toHaveBeenCalledWith(true);
});