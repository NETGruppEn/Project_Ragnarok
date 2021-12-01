import React from "react";

const format = (id) => {
  return id < 10 ? "#00" + id : id < 100 ? "#0" + id : "#" + id;
}

const capitalize = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
} 

const CardTitle = ({id, name}) => {
  return (
    <div>
      <p data-testid="id">{format(id)}</p>
      <h3 data-testid="name">{capitalize(name)}</h3>
    </div>
  );
};

export default CardTitle;
