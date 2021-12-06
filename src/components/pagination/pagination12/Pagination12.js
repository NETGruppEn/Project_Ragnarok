import { useContext } from "react";
import { COLORS } from "../../../shared/global/Colors";
import { PokemonContext } from "../../../shared/provider/PokemonProvider";
import Button from "../../button/Button";
import "./Pagination12.css";

const Pagination12 = ({ offset, setOffset, POKEMON_TO_SHOW, setPokemon }) => {
  const { AMOUNT_OF_POKEMON } = useContext(PokemonContext);

  const showNextPokemon = () => {
    if (offset + POKEMON_TO_SHOW < AMOUNT_OF_POKEMON) {
      setOffset(offset + POKEMON_TO_SHOW);
    } else {
      setOffset(0);
    }

    setPokemon([]);
  };

  const showPrevPokemon = () => {
    if (offset - POKEMON_TO_SHOW >= 0) {
      setOffset(offset - POKEMON_TO_SHOW);
    } else {
      setOffset(AMOUNT_OF_POKEMON - POKEMON_TO_SHOW);
    }

    setPokemon([]);
  };

  return (
    <div className="pagination12">
      <Button
        title="Prev"
        onClick={() => showPrevPokemon()}
        color={COLORS.blue}
        onHover={COLORS.blueHover}
      />
      <Button
        title="Next"
        onClick={() => showNextPokemon()}
        color={COLORS.blue}
        onHover={COLORS.blueHover}
      />
    </div>
  );
};
export default Pagination12;
