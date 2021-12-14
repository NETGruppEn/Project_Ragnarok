import React from "react";
import Gauge from "../gauge/Gauge";
import "./StatisticContainer.css";

/**
 * Renders StatsComponent with strength bars
 *
 * @param {array} stats Object with values and titles
 *
 */
const StatisticContainer = ({ stats }) => {
  // This is a test example data for Bulbasaur pokemon
  // stats = [
  //   { base_stat: 45, stat: { name: "HP" } },
  //   { base_stat: 49, stat: { name: "Atatck" } },
  //   { base_stat: 49, stat: { name: "Defense" } },
  //   { base_stat: 65, stat: { name: "Special Attack" } },
  //   { base_stat: 65, stat: { name: "Special Defense" } },
  //   { base_stat: 45, stat: { name: "Speed" } },
  // ];

  return (
    <div className="stats-container">
      <h3 className="stats-container--title">Stats</h3>
      <div className="stats-gauge-container">
        {stats.map((item, index) => {
          return (
            <Gauge title={item.stat.name} value={item.base_stat} key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default StatisticContainer;
