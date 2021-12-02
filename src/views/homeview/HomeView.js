import { DisplayListOfPokemon } from "../../components/displaydata/displaypokemon/displaylistofpokemon/DisplayListOfPokemon";
import {Head} from "../../shared/global/Functions";

/**
 * Homeview is a component that displays a list of Pokemon.
 * @returns Titel and component <DisplayListOfPokemon/>
 */
export const HomeView = () => {
  return (
    [
        Head("Pokédex"),
    <div>
      <h1>List of Pokemon</h1>
      <DisplayListOfPokemon />
    </div>
    ]
  );
};
