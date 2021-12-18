import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import HomeView from "./HomeView";
import PokemonProvider from "../../shared/provider/PokemonProvider";

describe("integration test 1", () => {
  it('Search for pokemon "Weedle" and make sure it is returned', () => {
    render(
      <PokemonProvider>
        <HomeView />
      </PokemonProvider>
    );
    const inputElement = screen.getByRole("textbox");
    const buttonElement = screen.getByTestId("search");
    fireEvent.change(inputElement, { target: { value: "Weedle" } });
    //console.log(inputElement);
    fireEvent.click(buttonElement);
    const divElement = () => {
      screen.getByAltText(/Weedle/i);
    };
    //console.log(divElement);
  });
});

// describe("integration test 2", () => {
//   it('Click on pokemon "Bulbasaur" and go to its detail page', () => {
//     // render(
//     //   <PokemonProvider>
//     //     <HomeView />
//     //   </PokemonProvider>
//     // );
//     const divElement = async () => {
//       await screen.findByAltText("Bulbasaur");
//     };
//     //fireEvent.click(divElement);

    
//   });
// });
