import React, { useContext, useState, useEffect } from "react";
import { PokemonContext } from "../../shared/provider/PokemonProvider";
import Button from "../button/Button";
import { FaSearch, FaStar } from "react-icons/fa";
import PokemonAPIService from "../../shared/api/service/PokemonAPIService";
import AdvancedType from "../advancedtype/AdvancedType";
import Divider from "../divider/Divider";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import "./AdvancedSearch.css";

const AdvancedSearch = ({
  setFoundPokemon,
  setIsPokemonFound,
  isAdvancedClosed,
  setIsAdvancedClosed,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { allPokemon, AMOUNT_OF_POKEMON } = useContext(PokemonContext);
  const [lowerNumberRange, setLowerNumberRange] = useState(1);
  const [higherNumberRange, setHigherNumberRange] = useState(AMOUNT_OF_POKEMON);
  const [types, setTypes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [isFavorites, setIsFavorites] = useState(false);
  const [isReset, setIsReset] = useState(false);

  /**
   * Fetches description and category for the active pokemon
   */
  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const { data } = await PokemonAPIService.getTypes();
        setTypes(data.results.map((result) => result.name).sort());
      } catch (error) {
        console.log(error);
      }
    };
    fetchTypes();
  }, []);

  useEffect(() => {
    if (isAdvancedClosed) {
      setIsReset(true);
      setIsExpanded(false);
    }
  }, [isAdvancedClosed]);

  /**
   * If the reset button is clicked, all states are set to default
   */
  useEffect(() => {
    setSelectedTypes([]);
    setLowerNumberRange(1);
    setHigherNumberRange(AMOUNT_OF_POKEMON);
    setIsReset(false);
  }, [isReset]);

  const handleExpand = () => {
    setIsAdvancedClosed(false);
    setIsExpanded(true);
  };

  /**
   * When the search button is clicked, this function tries to find matching
   * Pokémon based on the number range and types selected
   */
  const handleSearch = () => {
    const pokemonInRange = allPokemon.slice(
      lowerNumberRange - 1,
      higherNumberRange
    );
    const pokemonOfTypes = [];
    if (selectedTypes.length > 0) {
      let counter = 0;
      pokemonInRange.map((pokemon) => {
        pokemon.types.forEach((t) => {
          if (selectedTypes.includes(t.type.name)) {
            counter++;
          }
        });

        if (counter === selectedTypes.length) {
          pokemonOfTypes.push(pokemon);
        }

        counter = 0;
      });
    } else {
      pokemonOfTypes.push(...pokemonInRange);
    }

    const pokemonOfFavorites = [];
    if (isFavorites) {
      pokemonOfTypes.forEach((pokemon) => {
        const getItem = localStorage.getItem(pokemon.id);
        if (getItem != null) {
          pokemonOfFavorites.push(pokemon);
        }
      });
    } else {
      pokemonOfFavorites.push(...pokemonOfTypes);
    }

    if (pokemonOfFavorites.length > 0) {
      setFoundPokemon(pokemonOfFavorites);
      setIsPokemonFound(true);
    } else {
      setFoundPokemon([]);
      setIsPokemonFound(false);
    }
  };

  return (
    <div>
      <div className="advanced-search-top" />
      <div className="advanced-search-container">
        <div
          className="advanced-search-content-container"
          style={{ maxHeight: isExpanded ? "100em" : 0 }}
        >
          <div className="advanced-search-content">
            <h3 className="advanced-search-title">Type</h3>
            <div className="advanced-search-types">
              {types.map((type, index) => {
                if (type !== "shadow" && type !== "unknown") {
                  return (
                    <AdvancedType
                      key={index}
                      type={type}
                      selectedTypes={selectedTypes}
                      setSelectedTypes={setSelectedTypes}
                      isReset={isReset}
                    />
                  );
                }
              })}
            </div>
          </div>
          <div className="advanced-search-content">
            <h3 className="advanced-search-title">Favorites</h3>
            <FaStar
              size="50"
              onClick={() => setIsFavorites(!isFavorites)}
              color={isFavorites ? "orange" : "lightgray"}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="advanced-search-content">
            <h3 className="advanced-search-title">Number Range</h3>
            <input
              className="advanced-search-number-range-input"
              value={lowerNumberRange}
              onChange={(event) => setLowerNumberRange(event.target.value)}
            />
            <span> - </span>
            <input
              className="advanced-search-number-range-input"
              value={higherNumberRange}
              onChange={(event) => setHigherNumberRange(event.target.value)}
            />
          </div>
          <div className="advanced-search-content advanced-search-btns">
            <Button
              onClick={() => handleSearch()}
              className="advanced-search-btn"
            >
              <span>
                <FaSearch size="14" />
                {" Search"}
              </span>
            </Button>{" "}
            <Button
              className="advanced-search-btn advanced-search-btn-reset"
              onClick={() => setIsReset(true)}
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
      <Divider className="advanced-search">
        {isExpanded ? (
          <span
            onClick={() => setIsExpanded(false)}
            className="advanced-search-expand"
          >
            <p>Hide Advanced Search </p>
            <IoIosArrowUp size="20" className="advanced-search-arrow" />
          </span>
        ) : (
          <span
            onClick={() => handleExpand()}
            className="advanced-search-expand"
          >
            <p>Show Advanced Search</p>
            <IoIosArrowDown size="20" className="advanced-search-arrow" />
          </span>
        )}
      </Divider>
    </div>
  );
};

export default AdvancedSearch;
