import {
  act,
  render,
  fireEvent,
  screen,
  waitFor,
} from "@testing-library/react";
import React from "react";
import HomeView from "./HomeView";
import PokemonProvider from "../../shared/provider/PokemonProvider";
import "@testing-library/jest-dom";

describe("integration test 1", () => {
  jest.setTimeout(20000);
  it("Make sure that twelve pokemons with id 1-12 load properly when page runs.", async () => {
    act(() => {
      render(
        <PokemonProvider>
          <HomeView />
        </PokemonProvider>
      );
    });
    const spinnerText = screen.getByText("Loading...");
    await waitFor(
      () => {
        expect(spinnerText).not.toBeInTheDocument();
      },
      { timeout: 10000 }
    );
    expect(screen.getByAltText("Bulbasaur")).toBeInTheDocument();
    expect(screen.getByAltText("Ivysaur")).toBeInTheDocument();
    expect(screen.getByAltText("Venusaur")).toBeInTheDocument();
    expect(screen.getByAltText("Charmander")).toBeInTheDocument();
    expect(screen.getByAltText("Charmeleon")).toBeInTheDocument();
    expect(screen.getByAltText("Charizard")).toBeInTheDocument();
    expect(screen.getByAltText("Squirtle")).toBeInTheDocument();
    expect(screen.getByAltText("Wartortle")).toBeInTheDocument();
    expect(screen.getByAltText("Blastoise")).toBeInTheDocument();
    expect(screen.getByAltText("Caterpie")).toBeInTheDocument();
    expect(screen.getByAltText("Metapod")).toBeInTheDocument();
    expect(screen.getByAltText("Butterfree")).toBeInTheDocument();
  });
});

describe("integration test 2", () => {
  jest.setTimeout(25000);
  it(
    "Enter the letter 'm' in the search box, and make sure that a" +
      'list of pokemon are shown, then click on "Gloom"',
    async () => {
      render(
        <PokemonProvider>
          <HomeView />
        </PokemonProvider>
      );
      const inputElement = screen.getByTestId("search-input");
      fireEvent.change(inputElement, { target: { value: "m" } });
      await waitFor(() => screen.findByText("Vileplume"), { timeout: 15000 });
      expect(screen.getAllByText("Charmander")[0]).toBeInTheDocument();
      expect(screen.getAllByText("Charmeleon")[0]).toBeInTheDocument();
      expect(screen.getAllByText("Metapod")[0]).toBeInTheDocument();
      expect(screen.getByText("Vileplume")).toBeInTheDocument();
      fireEvent.click(screen.getByText("Gloom"));
    }
  );
});
