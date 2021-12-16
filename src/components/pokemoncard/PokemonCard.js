import React from "react";
import CardTitle from "../cardTitle/CardTitle";
import Type from "../type/Type";
import "./PokemonCard.css";

/**
 * Shows an image, name, id and type of a Pokémon.
 */
const PokemonCard = ({ pokemon, onClick }) => {
  return (
    <li className="card" >
      <img className="card-img" src={pokemon.image} alt={pokemon.name} onClick={onClick} />
      <div className="card-info">
        <CardTitle id={pokemon.id} name={pokemon.name} className="pokedex" />
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
