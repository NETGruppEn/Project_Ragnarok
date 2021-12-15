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
const Star = ({ id, name }) => {
  const [favorite, setFavorite] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (favorite) {
      setIsFavorite(false);
    } else {
      setIsFavorite(true);
    }
  }, [favorite, id]);

  const handleClick = () => {
    if (isFavorite) {
      setIsFavorite(!isFavorite);
      localStorage.removeItem(name, JSON.stringify([...favorite, {id, name}]));
    } else {
      setIsFavorite([isFavorite, id]);
      localStorage.setItem(name, JSON.stringify([...favorite, {id, name}]));
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
