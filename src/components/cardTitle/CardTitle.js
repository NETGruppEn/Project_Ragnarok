import React from "react";
import { capitalize } from "../../shared/global/Functions";
import "./CardTitle.css";

/**
 * Formats the input
 * @param id  The id of the pokemon as a number
 * @returns The id in the format of a # and three digits
 */
const format = (id) => {
  return id < 10 ? "#00" + id : id < 100 ? "#0" + id : "#" + id;
};

/**
 * Display name and id of the pokemon
 * @param id    The id of the pokemon as a number
 * @param name  The name of the pokemon as a string
 */
const CardTitle = ({ id, name }) => {
  return (
    <div className="card-title">
      <p className="id" data-testid="id">{format(id)}</p>
      <h3 className="name" data-testid="name">{capitalize(name)}</h3>
    </div>
  );
};

export default CardTitle;
