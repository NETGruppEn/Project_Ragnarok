import React from "react";
import CardTitle from "../cardTitle/CardTitle";
import Star from "../star/Star";
import Type from "../type/Type";
import "./PokemonCard.css";

const PokemonCard = ({ pokemon, onClick, ...props }) => {
  return (
    <div className="card" onClick={onClick}>
      <img className="card-img" src={pokemon.image} alt={pokemon.name} />
      <div className="card-info">
        <CardTitle id={pokemon.id} name={pokemon.name} />
        <Star
          isFavorite={pokemon.isFavorite}
          onClick={() => props.setIsFavorite}
          size="1.5em"
        />
      </div>
      <div className="card-types">
        {pokemon.types.map((value, index) => {
          return <Type key={index} name={value.type.name} size="small" />;
        })}
      </div>
    </div>
  );
};

export default PokemonCard;
