import React, { useContext, useState } from "react";
import "./AdvancedSearch.css";
import { PokemonContext } from "../../shared/provider/PokemonProvider";
import Button from "../button/Button";
import { FaSearch } from "react-icons/fa";

const AdvancedSearch = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { AMOUNT_OF_POKEMON } = useContext(PokemonContext);
  const [lowerNumberRange, setLowerNumberRange] = useState(1);
  const [higherNumberRange, setHigherNumberRange] = useState(AMOUNT_OF_POKEMON);

  return (
    <div className="advanced-search-container">
      <div
        className="advanced-search-content"
        style={{ maxHeight: isExpanded ? "100em" : 0 }}
      >
        <div>
          <h3>Number Range</h3>
          <input
            type="text"
            value={lowerNumberRange}
            onChange={(event) => setLowerNumberRange(event.target.value)}
          />
          <input
            type="text"
            value={higherNumberRange}
            onChange={(event) => setHigherNumberRange(event.target.value)}
          />
        </div>
        <Button>
          <FaSearch />
        </Button>
        <p>{`${lowerNumberRange} - ${higherNumberRange}`}</p>
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
