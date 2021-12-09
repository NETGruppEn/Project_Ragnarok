import React, { useState } from "react";
import Button from "../button/Button";
import { FaSearch } from "react-icons/fa";
import { COLORS, TYPE_COLORS } from "../../shared/global/Colors";
import "./Search.css";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="search-wrapper" style={{ backgroundColor: COLORS.black }}>
      <div className="container search">
        <div className="search-input-container">
          <p>Name or Number:</p>
          <div>
            <input
              className="search-input"
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button onClick={() => console.log(searchValue)}>
              <FaSearch data-testid="star" size="30" />
            </Button>
          </div>
        </div>
        <div
          className="search-text-container"
          style={{ backgroundColor: TYPE_COLORS.bug }}
        >
          <p>Search for a Pokémon by name or using its Pokédex number</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
