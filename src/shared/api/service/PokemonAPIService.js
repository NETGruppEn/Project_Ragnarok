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
 * 
 * @param identifier  The name or id of a pokémon
 * @returns The endpoint to get a specific pokemon with more info
 */
 PokemonAPIService.getAPokemon = (identifier) => {
  return http.get(`/pokemon/${identifier}`);
}

PokemonAPIService.getPokemonDescription = (identifier) => {
  return http.get(`/pokemon-species/${identifier}`);
}

export default PokemonAPIService;