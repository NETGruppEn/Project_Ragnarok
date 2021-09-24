import { useContext } from "react";
import { PokemonContext } from "../../../../shared/provider/PokemonProvider";
import { DisplayLoading } from "../../displayloading/DisplayLoading";

export const DisplayListOfPokemon = () => {
  const { loading, serverData } = useContext(PokemonContext);

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

  return (
    <div>
      {displayData()}
    </div>
  );
};
