import React from "react";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import "./Star.css";

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
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const getItem = localStorage.getItem(name);
    for(let index = 0; index < localStorage.length; index++){
      if(getItem != null)
        setIsFavorite(true);
    };
  }, [name]);

  const handleClick = () => {
    if (isFavorite) {
      setIsFavorite(!isFavorite);
      localStorage.removeItem(name, JSON.stringify({ id, name }));
    } else {
      setIsFavorite([isFavorite, id]);
      localStorage.setItem(name, JSON.stringify({ id, name }));
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
