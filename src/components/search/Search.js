import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { COLORS } from "../../shared/global/Colors";
import { PokemonContext } from "../../shared/provider/PokemonProvider";
import Button from "../button/Button";
import "./Search.css";

const Search = ({ setFoundPokemon }) => {
  const { allPokemon } = useContext(PokemonContext);
  const [searchValue, setSearchValue] = useState("");

  const searchForPokemon = (event) => {
    const match = allPokemon.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        String(pokemon.id).includes(searchValue)
    );

    if (match.length > 0) {
      setFoundPokemon(match);
    } else {
      setFoundPokemon([]);
    }

    setSearchValue("");
    event?.preventDefault();
  };

  return (
    <div className="search-wrapper" style={{ backgroundColor: COLORS.black }}>
      <div className="container search">
        <form
          className="search-input-container"
          onSubmit={(event) => searchForPokemon(event)}
        >
          <h2>Name or Number:</h2>
          <div>
            <input
              className="search-input"
              type="text"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            />
            <Button onClick={(event) => {searchForPokemon(event)}}>
              <FaSearch data-testid="search" size="30" />
            </Button>
          </div>
        </form>
        <div
          className="search-text-container"
          style={{ backgroundColor: COLORS.green }}
        >
          <p>Search for a Pokémon by name or using its Pokédex number</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
