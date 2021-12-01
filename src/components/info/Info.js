import React from "react";
import { capitalize } from "../../shared/global/Functions";

const Info = ({ title, value, unit, values }) => {
  return (
    <div>
      <h4 data-testid="title">{title}</h4>
      {value ? (
        <p data-testid="value">
          {value / 10} {unit ? unit : null}
        </p>
      ) : null}
      {values
        ? values.map((val, index) => (
            <p key={index} data-testid="values">
              {capitalize(val.ability.name)}
            </p>
          ))
        : null}
    </div>
  );
};

export default Info;
