import { DisplayListOfPokemon } from "../../components/displaydata/displaypokemon/displaylistofpokemon/DisplayListOfPokemon";
import {Head} from "../../shared/global/Functions";
import ViewTitle from "../../components/viewtitle/ViewTitle";

/**
 * Homeview is a component that displays a list of Pokemon.
 * @returns Titel and component <DisplayListOfPokemon/>
 */
export const HomeView = () => {
  return (
    [
        Head("Pokédex"),
    <div>
      <ViewTitle title="Pokédex"/>
      <DisplayListOfPokemon />
    </div>
    ]
  );
};
