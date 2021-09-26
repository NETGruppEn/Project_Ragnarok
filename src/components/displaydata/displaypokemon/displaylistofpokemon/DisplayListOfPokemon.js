import { useContext } from "react";
import { PokemonContext } from "../../../../shared/provider/PokemonProvider";
import { DisplayLoading } from "../../displayloading/DisplayLoading";

/**
 * DisplayListOfPokemon is a component that displays a list of pokemons with the help of the arrow function {displayData()} when used.
 * The global values (loading) and (serverData) is used from PokemonContext.
 * @returns Arrow function {displayData()}.
 */
export const DisplayListOfPokemon = () => {
  const { loading, serverData } = useContext(PokemonContext);

  /**
   *
   * @returns The component <DisplayLoading/> if loading is true.
   * If loading is false the serverData gets "mapped" and a numbered list of pokemon names are displayed.
   */
  const displayData = () => {
    return loading ? (
      <DisplayLoading />
    ) : (
      serverData?.results?.map((pokemon, i) => (
        <div key={pokemon.name}>
          <h3>
            {i + 1}. {pokemon.name}
          </h3>
        </div>
      ))
    );
  };

  return <div>{displayData()}</div>;
};
