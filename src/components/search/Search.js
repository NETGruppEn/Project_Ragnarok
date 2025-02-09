import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { COLORS } from "../../shared/global/Colors";
import { PokemonContext } from "../../shared/provider/PokemonProvider";
import Button from "../button/Button";
import DropDownMenu from "../dropdownmenu/DropDownMenu";
import { useFocus } from "../../shared/hooks/useFocus";
import "./Search.css";

/**
 * Lets the user to search for Pokemon based on name and number.
 */
const Search = ({ setFoundPokemon, setIsPokemonFound, setIsAdvancedClosed }) => {
  const { allPokemon, AMOUNT_OF_POKEMON } = useContext(PokemonContext);
  const [searchValue, setSearchValue] = useState("");
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [inputRef, setInputFocus] = useFocus();

  /**
   * Looks for a match based on the searchword and sets foundPokemon and isPokemonFound.
   * @param {*} event
   */
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
      setFoundPokemon(allPokemon);
    }
    event?.preventDefault();
  };

  /**
   * Sets searchValue and open/closes dropdown.
   * @param {string} value
   */
  const handleChange = (value) => {
    setSearchValue(value);
    if (value.length > 0) {
      setIsDropDownOpen(true);
    } else {
      setIsDropDownOpen(false);
    }
  };

  /**
   * Closes DropDownMenu connected to search box
   * Searches for pokemon
   * @param {*} event Event fires on Submit
   */
  const handleSubmit = (event) => {
    setIsDropDownOpen(false);
    searchForPokemon(event);
    setIsAdvancedClosed(true);
  };
  /**
   * If user chooses an alternative from DropDownMenu to search for.
   * Sets searchvalue to selected option
   * Sets focus on the input field
   * Closes the DropDownMenu
   * @param {string} option The option that the user chooses.
   */
  const selectOption = (option) => {
    setSearchValue(option);
    setInputFocus();
    setIsDropDownOpen(false);
  };

  return (
    <div className="search-wrapper">
      <div className="search-container">
        <form
          className="search-input-container"
          onSubmit={(event) => handleSubmit(event)}
        >
          <label>Name or Number:</label>
          <div className="search-input-row">
            <div className="search-input-field">
              <input
                data-testid="search-input"
                type="text"
                value={searchValue}
                onChange={(event) => handleChange(event.target.value)}
                ref={inputRef}
              />
              {isDropDownOpen && (
                <DropDownMenu
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
              data-testid="search-btn"
              className="btn-search"
              onClick={(event) => {
                handleSubmit(event);
              }}
            >
              <FaSearch size="30" />
            </Button>
          </div>
        </form>

        <div
          className="search-text-container"
          style={{ backgroundColor: COLORS.green }}
        >
          <h3>
            Search for a Pokémon by name or using its National Pokédex number 1-{AMOUNT_OF_POKEMON}.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Search;
