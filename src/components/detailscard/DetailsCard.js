import React from "react";
import CardTitle from "../cardTitle/CardTitle";
import StatisticContainer from "../statistic/StatisticContainer";
import Info from "../info/Info";
import "./DetailsCard.css";
import Type from "../type/Type";

const DetailsCard = ({ pokemon }) => {
  return (
    <div>
      <CardTitle id={pokemon.id} name={pokemon.name} />
      <img src={pokemon.image} alt={pokemon.name} />
      <StatisticContainer stats={pokemon.stats} />
      <p>{pokemon.description}</p>
      <div className="info-container">
        {pokemon.info.map((info, index) => (
          <Info key={index} info={info} />
        ))}
      </div>
      <div>
        <h3>Type</h3>
        {pokemon.types.map((t, index) => (
          <Type name={t.type.name} size="large" />
        ))}
      </div>
    </div>
  );
};

export default DetailsCard;
