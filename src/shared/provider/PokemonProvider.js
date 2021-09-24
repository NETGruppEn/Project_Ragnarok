import { useState, createContext, useEffect } from "react";
import PokemonAPIService from "../api/service/PokemonAPIService";

export const PokemonContext = createContext()

export const PokemonProvider = () => {

    const[serverData, setServerData] = useState()
    const[loading, setLoading] = useState(true)

    const fetchDAta = async () =>{
        try {
            
        } catch (error) {
            
        }
    }

    return (
        <div>
            
        </div>
    )
}
