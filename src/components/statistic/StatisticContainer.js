import React from "react";
import Gauge from "../gauge/Gauge";
import "./StatisticContainer.css";

/**
 * Renders StatsComponent with strength bars
 * @param {array} stats Object with values and titles
 */
const StatisticContainer = ({ stats }) => {
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
