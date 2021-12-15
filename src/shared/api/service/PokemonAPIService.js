import http from "../PokemonAPI";

const PokemonAPIService = {};

/**
 * @param limit   The number of pokemon to fetch as a number
 * @param offset  Where to begin fetching pokemon as a number
 * @returns The endpoint to get a range of pokemon
 */
 PokemonAPIService.getRangeOfPokemon = (limit) => {
  return http.get(`/pokemon?limit=${limit}`);
}

/**
 * @param identifier  The name or id of a pokémon
 * @returns The endpoint to get a specific pokemon with more info
 */
 PokemonAPIService.getAPokemon = (identifier) => {
  return http.get(`/pokemon/${identifier}`);
}

/**
 * @param {*} identifier 
 * @returns the endpoint to fetch description and category
 */
PokemonAPIService.getPokemonDescription = (identifier) => {
  return http.get(`/pokemon-species/${identifier}`);
}

/**
 * @returns the endpoint to fetch all Pokémon types.
 */
PokemonAPIService.getTypes = () =>{
  return http.get("/type/");
}

export default PokemonAPIService;