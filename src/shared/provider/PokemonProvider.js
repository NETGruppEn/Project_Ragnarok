import { useState, createContext, useEffect } from "react";
import PokemonAPIService from "../api/service/PokemonAPIService";

export const PokemonContext = createContext();

/**
 * ! A PokemonContext is created with createContext().
 * PokemonProvider is a provider that fetch the data from the pokeapi with arrow function fetchData() and runs the funtion right before the component renders with useEffect.
 * serverData and laoding is set to useState(). 
 * @param {children}
 * @returns PokemonContext provider with the global values serverData and loading so they can be reached from other components.
 */
export const PokemonProvider = ({ children }) => {
  const [serverData, setServerData] = useState();
  const [loading, setLoading] = useState(true);

  /**
   * Sets loading to true before the data is retrieved and to false after the data is tetrieved.
   * serverData is set to the data from the pokeapi.
   * If the api fetch is NO succes an error is logged.
   * ! Async is a feature that is put on fetchData() function to tell the rest of the program that they should NOT wait for it, but run under the meantime. The function runs asynchronously.
   * ! Await means that the asynchronous code must wait for pokeapi call to be completed before the remaining code is executed in the block. Code outside the function is still running.
   */
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

  /**
   * Then the fetchData() is called in the hook useEffect so the function will run right before the component renders.
 * ? Better way to explain useEffect in this case?
   */
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PokemonContext.Provider value={{ serverData, loading }}>
      {children}
    </PokemonContext.Provider>
  );
};
