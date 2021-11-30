import Button from "../../components/Button/Button";
import { DisplayListOfPokemon } from "../../components/displaydata/displaypokemon/displaylistofpokemon/DisplayListOfPokemon";

/**
 * Homeview is a component that displays a list of Pokemon.
 * @returns Titel and component <DisplayListOfPokemon/>
 */
export const HomeView = () => {
  return (
    <div>
      <h1>List of Pokemon</h1>
      <DisplayListOfPokemon />
    </div>
  );
};
