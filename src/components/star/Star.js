import React, { useLayoutEffect } from "react";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import "./Star.css";
import { COLORS } from "../../shared/global/Colors";
import react from "react";
import PropTypes from "prop-types";
import Button from "../button/Button";

/**
 * Renders a star icon that can be clicked.
 *
 * @param {boolean} isFavorite  If the Pokémon is a favorite or not
 * @param {function} onClick    A function that sets isFavorite to true or false
 * @param {string} size         Determines the size of the star in em
 *
 * example of usage:  <Star isFavorite={isFavorite} size="1.5em" onClick={() => setIsFavorite(!isFavorite)}/>
 */
const Star = ({ id, favorites, setFavorites }) => {
  //const [listOfFavorites, setListOfFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const listOfFavorites = [localStorage.getItem('pokemonFavorites')];

  useEffect(() => {
    if (listOfFavorites?.includes(id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
    console.log(favorites)
  });

  useEffect(() => {
    localStorage.setItem('pokemonFavorites', favorites)
  },[favorites]);

  const handleClick = () => {
    if (isFavorite) {
      //setListOfFavorites(listOfFavorites.filter((x) => x != id));
      setFavorites(favorites.filter((x) => x !== id));
    } else {
      //setListOfFavorites([...listOfFavorites, id]);
      setFavorites([...favorites, id]);
    }
  };

  return (
    //<FaStar className="star" data-testid="star" size={size} color={isFavorite ? "orange" : "lightgray"} onClick={onClick}/>

    <FaStar
      className="star"
      data-testid="star"
      color={isFavorite ? "orange" : "lightgray"}
      onClick={() => handleClick()}
    />
  );
};

export default Star;
