import React from "react";
import { render } from "@testing-library/react";
import PokemonCard from "./PokemonCard";

const pokemon = {
    id: 1,
    name: "bulbasaur",
    image: "https://raw.githubuserco…r/official-artwork/1.png",
    types: [
        {
            type: {
                name: "grass"
            }
        },
        {
            type: {
                name: "poison"
            }
        }
    ]
}

it('renders correctly', () => {
    const div = document.createElement("div");
    render(<PokemonCard pokemon={pokemon} />, div);
})