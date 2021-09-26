import axios from "axios";

/**
 * Creates the baseURL for the pokeapi with axios.create().
 * ! axios needs to be installed to work (npm install axios). Alredy installed on this project.
 */
const PokemonAPI = axios.create({
  baseURL: "https://pokeapi.co/api/v2/"
});

export default PokemonAPI;
