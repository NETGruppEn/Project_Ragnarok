import React, { useContext, useState, useEffect } from "react";
import "./AdvancedSearch.css";
import { PokemonContext } from "../../shared/provider/PokemonProvider";
import Button from "../button/Button";
import { FaSearch } from "react-icons/fa";
import PokemonAPIService from "../../shared/api/service/PokemonAPIService";
import AdvancedType from "../advancedtype/AdvancedType";

const AdvancedSearch = ({ setFoundPokemon, setIsPokemonFound }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { allPokemon, AMOUNT_OF_POKEMON } = useContext(PokemonContext);
  const [lowerNumberRange, setLowerNumberRange] = useState(1);
  const [higherNumberRange, setHigherNumberRange] = useState(AMOUNT_OF_POKEMON);
  const [types, setTypes] = useState([]);

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

  const handleClick = () => {
    const match = allPokemon.slice(lowerNumberRange - 1, higherNumberRange);
    if (match.length > 0) {
      setFoundPokemon(match);
      setIsPokemonFound(true);
    } else {
      setFoundPokemon([]);
      setIsPokemonFound(false);
    }
  };

  return (
    <div className="advanced-search-container">
      <div
        className="advanced-search-content"
        style={{ maxHeight: isExpanded ? "100em" : 0 }}
      >
        <div className="advanced-search-types-container">
        {types.map((type, index) => {
            if (type !== "shadow" && type !== "unknown") {
              return (
                <AdvancedType key={index} type={type} />
              );
            }
          })}
        </div>
        <div>
          <h3>Number Range</h3>
          <input
            value={lowerNumberRange}
            onChange={(event) => setLowerNumberRange(event.target.value)}
          />
          {" - "}
          <input
            value={higherNumberRange}
            onChange={(event) => setHigherNumberRange(event.target.value)}
          />
        </div>
        <Button onClick={() => handleClick()}>
          <span>
            <FaSearch size="12" />
            {" Search"}
          </span>
        </Button>
      </div>
      <div
        className="advanced-search-btn"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        Click me!
      </div>
    </div>
  );
};

export default AdvancedSearch;
