import React from "react";
import { capitalize } from "../../shared/global/Functions";

/**
 * Shows title and value with corresponding unit.
 * @param {string} title  The title of the value
 * @param {int} value     The value corrensponding to the title
 * @param {string} unit   The unit of the value
 */
export const MonoInfo = ({ title, value, unit }) => {
  return (
    <div>
      <h4 data-testid="title">{title}</h4>
      <p data-testid="value">
        {value / 10} {unit}
      </p>
    </div>
  );
};

/**
 * Shows title and value.
 * @param {string} title  The title of the values
 * @param {int} values    The values corrensponding to the titles
 */
export const PolyInfo = ({ title, values }) => {
  return (
    <div>
      <h4 data-testid="title">{title}</h4>
      {values.map((val, index) => (
        <p key={index} data-testid={`value${index}`}>
          {capitalize(val.ability.name)}
        </p>
      ))}
    </div>
  );
};
