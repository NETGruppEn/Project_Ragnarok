import React from "react";
import CardTitle from "../cardTitle/CardTitle";
import Type from "../type/Type";
import "./PokemonCard.css";

/**
 * Shows an image, name, id and type of a pokemon.
 * @param {*} pokemon The pokemon to show 
 */
const PokemonCard = ({ pokemon, onClick }) => {
  return (
    <li className="card" onClick={onClick}>
      <img className="card-img" src={pokemon.image} alt={pokemon.name} />
      <div className="card-info">
        <CardTitle id={pokemon.id} name={pokemon.name} />
      </div>
      <div className="card-types">
        {pokemon.types.map((value, index) => {
          return <Type key={index} name={value.type.name} size="small" />;
        })}
      </div>
    </li>
  );
};

export default PokemonCard;
