import { useState, createContext, useEffect } from "react";
import PokemonAPIService from "../api/service/PokemonAPIService";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [serverData, setServerData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await PokemonAPIService.getHundredPokemon();
      setServerData(data);
      setLoading(false);
    } catch (error) {
      console.log("Error with API: " + error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PokemonContext.Provider value={{ serverData, loading }}>
      {children}
    </PokemonContext.Provider>
  );
};
