import React from "react";
import CardTitle from "../cardTitle/CardTitle";
import StatisticContainer from "../statistic/StatisticContainer";
import Info from "../info/Info";
import Type from "../type/Type";
import "./DetailsCard.css";

/**
 * A large card containing details about the Pokémon
 * @param {object} pokemon 
 */
const DetailsCard = ({ pokemon }) => {
  return (
    <section className="details-card-container">
      <CardTitle id={pokemon.id} name={pokemon.name} className="details" />
      <div className="details-card">
        <div className="details-left-column">
          <img
            className="details details-img"
            src={pokemon.image}
            alt={pokemon.name}
          />
          <StatisticContainer stats={pokemon.stats} />
        </div>
        <div className="details-right-column">
          <p className="details pokemon-description">{pokemon.description}</p>
          <div className="details info-container">
            {pokemon.info.map((info, index) => (
              <Info key={index} info={info} />
            ))}
          </div>
          <div className="details type-container">
            <h3>Type</h3>
            <div className="types">
              {pokemon.types.map((t, index) => (
                <Type key={index} name={t.type.name} className="details" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsCard;
