import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../shared/provider/PokemonProvider";
import { Head } from "../../shared/global/Functions";
import ViewTitle from "../../components/viewtitle/ViewTitle";
import DisplayLoading from "../../components/displayloading/DisplayLoading";
import PokemonCard from "../../components/pokemoncard/PokemonCard";
import Button from "../../components/button/Button";
import { COLORS } from "../../shared/global/Colors";
import "./HomeView.css";
import { FaArrowUp } from "react-icons/fa";
import useWindowDimensions from "../../shared/hooks/useWindowDimensions";

/**
 * Homeview is a component that displays a list of Pokemon.
 */
const HomeView = () => {
  const { allPokemon, AMOUNT_OF_POKEMON } = useContext(PokemonContext);
  const [listOfPokemon, setListOfPokemon] = useState([]);
  const POKEMON_TO_SHOW = 12;
  const [offset, setOffset] = useState(POKEMON_TO_SHOW);
  const [isHidden, setIsHidden] = useState(false);
  const [showPageUp, setShowPageUp] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (listOfPokemon.length < 1 && allPokemon.length >= POKEMON_TO_SHOW) {
      setListOfPokemon(allPokemon.slice(0, POKEMON_TO_SHOW));
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    if (width < 960 && window.scrollY > 0) {
      setShowPageUp(true);
    } else {
      setShowPageUp(false);
    }
  };


  /**
   * When the button is clicked it gets hidden and loads 12 more Pokémon
   */
  const handleClick = () => {
    setIsHidden(true);
    loadMorePokemon();
  };

  /**
   * Loads 12 more Pokémon to the list of Pokémon
   */
  const loadMorePokemon = () => {
    setListOfPokemon([
      ...listOfPokemon,
      ...allPokemon.slice(offset, offset + POKEMON_TO_SHOW),
    ]);
    setOffset(offset + POKEMON_TO_SHOW);
  };

  /**
   * Found the code for this function here https://stackoverflow.com/a/44422472
   * If the button is clicked, then every time you scroll to the bottom of the
   * screen, 12 more Pokémon gets added to the list of Pokémon
   */
  window.onscroll = function () {
    if (
      isHidden &&
      listOfPokemon.length < AMOUNT_OF_POKEMON &&
      window.innerHeight + Math.ceil(window.pageYOffset) >=
        document.body.offsetHeight
    ) {
      loadMorePokemon();
    }
  };

  /**
   * Decides what kind of data to display
   * @returns Pokémon cards if the list of Pokémon is populated,
   * otherwise a loading screen
   */
  const displayData = () => {
    if (listOfPokemon.length < 1) {
      return <DisplayLoading />;
    }

    return listOfPokemon.map((pokemon, index) => (
      <PokemonCard key={index} pokemon={pokemon} />
    ));
  };

  return (
    <div>
      <div
        className="btn-page-up"
        style={{
          transition: `transform 0.3s linear`,
          transform: showPageUp ? "translateY(0)" : "translateY(100%)",
        }}
      >
        <Button
          styles={{
            borderRadius: `10px 0 0 0`,
            opacity: 0.6,
            border: `2px solid ${COLORS.black}`,
            background: `${COLORS.gray}`,
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          <FaArrowUp size="30" />
        </Button>
      </div>
      {Head("Pokédex | Ragnarök")}
      <ViewTitle title="Pokédex" />
      <div className="pokemon-cards" id="cards">
        {displayData()}
      </div>
      <div className="home-view-btn-container">
        {!isHidden && (
          <Button
            title="Load more Pokémon"
            onClick={() => handleClick()}
            color={COLORS.blue}
            onHover={COLORS.blueHover}
          />
        )}
      </div>
    </div>
  );
};

export default HomeView;
