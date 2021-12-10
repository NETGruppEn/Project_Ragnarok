import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../shared/provider/PokemonProvider";
import { Head } from "../../shared/global/Functions";
import ViewTitle from "../../components/viewtitle/ViewTitle";
import DisplayLoading from "../../components/displayloading/DisplayLoading";
import PokemonCard from "../../components/pokemoncard/PokemonCard";
import Button from "../../components/button/Button";
import { COLORS } from "../../shared/global/Colors";
import "./HomeView.css";
import Search from "../../components/search/Search";
import { FaArrowUp } from "react-icons/fa";

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
  const [foundPokemon, setFoundPokemon] = useState([]);

  useEffect(() => {
    if (listOfPokemon.length < 1 && allPokemon.length >= POKEMON_TO_SHOW) {
      getFirstPokemon();
    }

    console.log(allPokemon.length);
  });

  useEffect(() => {
    getFirstPokemon();
  }, [foundPokemon]);

  const getFirstPokemon = () => {
    if (foundPokemon.length > 0) {
      setListOfPokemon(foundPokemon.slice(0, POKEMON_TO_SHOW));
      if (foundPokemon.length <= POKEMON_TO_SHOW) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    } else {
      setListOfPokemon(allPokemon.slice(0, POKEMON_TO_SHOW));
      setIsHidden(false);
    }

    setOffset(POKEMON_TO_SHOW);
  };

  /**
   * When the button is clicked it gets hidden and loads 12 more Pokémon
   */
  const handleClick = () => {
    setIsHidden(true);
    console.log(offset);
    loadMorePokemon();
  };

  /**
   * Loads 12 more Pokémon to the list of Pokémon
   */
  const loadMorePokemon = () => {
    if (foundPokemon.length > 0) {
      setListOfPokemon([
        ...listOfPokemon,
        ...foundPokemon.slice(offset, offset + POKEMON_TO_SHOW),
      ]);
    } else {
      setListOfPokemon([
        ...listOfPokemon,
        ...allPokemon.slice(offset, offset + POKEMON_TO_SHOW),
      ]);
    }

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

    if (window.scrollY > 0) {
      setShowPageUp(true);
    } else {
      setShowPageUp(false);
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
      <Button
        className="btn-page-up"
        onClick={() => window.scrollTo(0, 0)}
        styles={{
          transform: showPageUp ? "translateY(0)" : "translateY(100%)",
        }}
      >
        <FaArrowUp size="30" />
      </Button>
      {Head("Pokédex | Ragnarök")}
      <ViewTitle title="Pokédex" />
      <Search setFoundPokemon={setFoundPokemon} />
      <div className="container pokemon-cards" id="cards">
        {displayData()}
      </div>
      <div className="home-view-btn-container">
        {!isHidden && (
          <div>
            <Button className="btn-load-more" onClick={() => handleClick()}>
              Load more Pokémon
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeView;
