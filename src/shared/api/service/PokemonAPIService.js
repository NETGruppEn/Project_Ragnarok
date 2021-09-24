import http from "../PokemonAPI"

const getHundredPokemon = () =>{
    return http.get("/pokemon?limit=100")
}

export default {getHundredPokemon}