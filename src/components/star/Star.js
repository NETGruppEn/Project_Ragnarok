import React from "react";
import { FaStar } from 'react-icons/fa'
import './Star.css';

/**
 * Renders a star icon that can be clicked.
 * 
 * @param {boolean} isFavorite  If the Pokémon is a favorite or not
 * @param {function} onClick    A function that sets isFavorite to true or false
 * @param {string} size         Determines the size of the star in em 
 * 
 * example of usage:  <Star isFavorite={isFavorite} size="1.5em" onClick={() => setIsFavorite(!isFavorite)}/>
 */
const Star = ({isFavorite, onClick, size}) => {
  return (
    <FaStar className="star" data-testid="star" size={size} color={isFavorite ? "orange" : "lightgray"} onClick={onClick}/>
  );
};

export default Star;