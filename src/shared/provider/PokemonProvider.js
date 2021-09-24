import { useState, createContext, useEffect } from "react";
import PokemonAPIService from "../api/service/PokemonAPIService";

export const PokemonContext = createContext()

export const PokemonProvider = () => {

    const[serverData, setServerData] = useState()
    const[loading, setLoading] = useState(true)

    const fetchDAta = async () =>{
        setLoading(true)
        try {
            const {data} = await PokemonAPIService.getHundredPokemon()
            setServerData(data)
            setLoading(false)
        } catch (error) {
            console.log("Error with API: " + error)
        }
    }

    return (
        <div>
            
        </div>
    )
}
