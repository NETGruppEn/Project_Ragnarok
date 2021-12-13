import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { COLORS } from "../../shared/global/Colors";
import { PokemonContext } from "../../shared/provider/PokemonProvider";
import Button from "../button/Button";
import DropDown from "../dropdown/DropDown";
import { useFocus } from "../../shared/hooks/useFocus";
import "./Search.css";

const Search = ({ setFoundPokemon, setIsPokemonFound }) => {
  const { allPokemon } = useContext(PokemonContext);
  const [searchValue, setSearchValue] = useState("");
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [inputRef, setInputFocus] = useFocus();

  const searchForPokemon = (event) => {
    if (searchValue.length > 0) {
      const match = allPokemon.filter(
        (pokemon) =>
          pokemon.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          String(pokemon.id).includes(searchValue)
      );

      if (match.length > 0) {
        setIsPokemonFound(true);
        setFoundPokemon(match);
      } else {
        setIsPokemonFound(false);
        setFoundPokemon([]);
      }
    } else {
      setIsPokemonFound(true);
      setFoundPokemon([]);
    }
    event?.preventDefault();
  };

  const handleChange = (value) => {
    setSearchValue(value);
    if (value.length > 0) {
      setIsDropDownOpen(true);
    } else {
      setIsDropDownOpen(false);
    }
  };

  const handleSubmit = (event) => {
    setIsDropDownOpen(false);
    searchForPokemon(event);
  };

  const selectOption = (option) => {
    setSearchValue(option);
    setInputFocus();
    setIsDropDownOpen(false);
  };

  return (
    <div className="search-wrapper" style={{ backgroundColor: COLORS.black }}>
      <div className="container search">
        <form
          className="search-input-container"
          onSubmit={(event) => handleSubmit(event)}
        >
          <label>Name or Number:</label>
          <div>
            <div className="search-input-field">
              <input
                className="search-input"
                type="text"
                value={searchValue}
                onChange={(event) => handleChange(event.target.value)}
                ref={inputRef}
              />
              {isDropDownOpen && (
                <DropDown
                  options={allPokemon
                    .filter((pokemon) =>
                      pokemon.name
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                    )
                    .slice(0, 5)
                    .map((pokemon) => pokemon.name)}
                  setSelected={selectOption}
                />
              )}
            </div>
            <Button
              className="btn-search"
              onClick={(event) => {
                handleSubmit(event);
              }}
            >
              <FaSearch data-testid="search" size="30" />
            </Button>
          </div>
        </form>

        <div
          className="search-text-container"
          style={{ backgroundColor: COLORS.green }}
        >
          <h2>
            Search for a Pokémon by name or using its National Pokédex number.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Search;
