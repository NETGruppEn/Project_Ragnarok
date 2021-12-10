import { useState, createContext, useEffect } from "react";
import PokemonAPIService from "../api/service/PokemonAPIService";
import { checkName } from '../global/Functions';

export const PokemonContext = createContext();

/**
 * ! A PokemonContext is created with createContext().
 * PokemonProvider is a provider that fetch the data from the pokeapi with arrow function fetchData() and runs the funtion right before the component renders with useEffect.
 * serverData and laoding is set to useState().
 * @param amountOfPokemon The amount of pokémon to fetch.
 * @returns PokemonContext provider with the global values serverData and loading so they can be reached from other components.
 */
const PokemonProvider = ({ children }) => {
  const [serverData, setServerData] = useState([]);
  const [counter, setCounter] = useState(0);
  const [allPokemon, setAllPokemon] = useState([]);
  const AMOUNT_OF_POKEMON = 151;

  /**
   * Then the fetchData() is called in the hook useEffect so the function will run right before the component renders.
   * ? Better way to explain useEffect in this case?
   */
  useEffect(() => {
    fetchData();
  }, []);

  /**
   * Is firts triggered when the server data is populated and then each time
   * the sounter is updated.
   */
  useEffect(() => {
    if (counter < serverData.length) {
      fetchPokemon(serverData[counter]);
    }
  }, [serverData, counter]);

  /**
   * Sets loading to true before the data is retrieved and to false after the data is tetrieved.
   * serverData is set to the data from the pokeapi.
   * If the api fetch is NO succes an error is logged.
   * ! Async is a feature that is put on fetchData() function to tell the rest of the program that they should NOT wait for it, but run under the meantime. The function runs asynchronously.
   * ! Await means that the asynchronous code must wait for pokeapi call to be completed before the remaining code is executed in the block. Code outside the function is still running.
   */
  const fetchData = async () => {
    try {
      const { data } = await PokemonAPIService.getRangeOfPokemon(AMOUNT_OF_POKEMON);
      setServerData(data.results);
    } catch (error) {
      console.log("Error with API: " + error);
    }
  };

  /**
   * Fetches a specific pokemon based on id and adds that pokemon to the list of pokemon.
   * @param result  A result from the server data list of all pokémon names and urls. 
   */
  const fetchPokemon = async (result) => {
    try {
      const { data } = await PokemonAPIService.getAPokemon(result.name)
      const pokemon = {
        name: checkName(data.species.name),
        id: data.id,
        image: data.sprites.other["official-artwork"].front_default,
        stats: data.stats,
        info: {
          height: data.height,
          weight: data.weight,
          abilities: data.abilities,
        },
        types: data.types 
      };

      setAllPokemon([...allPokemon, pokemon]);
      setCounter(counter + 1);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <PokemonContext.Provider value={{allPokemon, AMOUNT_OF_POKEMON}}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;