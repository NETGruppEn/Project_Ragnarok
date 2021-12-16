import {render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import HomeView from "./HomeView";
import PokemonProvider from "../../shared/provider/PokemonProvider"

describe("integration test 1", () => {
    it("renders without crashing", async () => {
        const container = document.createElement("div");
        render(<HomeView />, container);
        const inputElement = screen.getByRole("textbox");
        const buttonElement = screen.getByTestId("search");
        fireEvent.change(inputElement, {target: {searchValue: "b"}});
        // fireEvent.click(buttonElement);
        //const divElement = screen.getAllByText(/bulbasaur/i);
    });
  });