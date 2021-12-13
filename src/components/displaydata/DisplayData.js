import React from "react";
import DisplayListOfPokemon from "./displaypokemon/displaylistofpokemon/DisplayListOfPokemon";
import DisplayLoading from "./displayloading/DisplayLoading";

const DisplayData = ({ listOfPokemon, pokemon }) => {
  if (listOfPokemon?.length > 1) {
    return <DisplayListOfPokemon listOfPokemon={listOfPokemon} />;
  }

  // if (pokemon) {
  //   return <p>{pokemon.name}</p>;
  // }

  return <DisplayLoading />;
};

export default DisplayData;
