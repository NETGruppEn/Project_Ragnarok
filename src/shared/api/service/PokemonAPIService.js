import http from "../PokemonAPI"

/**
 * getHundredPOkemon is an arrow function that gets the endpoint for a limit of 100 pokemon with the http from PokemonAPI.
 * @returns Endpoint for a limit of 100 pokemon.
 */
const getHundredPokemon = () =>{
    return http.get("/pokemon?limit=100")
}

export default {getHundredPokemon}