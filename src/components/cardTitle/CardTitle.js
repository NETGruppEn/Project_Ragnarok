import React from "react";
import { capitalize } from "../../shared/global/Functions";

const format = (id) => {
  return id < 10 ? "#00" + id : id < 100 ? "#0" + id : "#" + id;
};

const CardTitle = ({ id, name }) => {
  return (
    <div>
      <p data-testid="id">{format(id)}</p>
      <h3 data-testid="name">{capitalize(name)}</h3>
    </div>
  );
};

export default CardTitle;
