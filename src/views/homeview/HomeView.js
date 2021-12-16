import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../shared/provider/PokemonProvider";
import ViewTitle from "../../components/viewtitle/ViewTitle";
import DisplayLoading from "../../components/displayloading/DisplayLoading";
import PokemonCard from "../../components/pokemoncard/PokemonCard";
import Button from "../../components/button/Button";
import "./HomeView.css";
import Search from "../../components/search/Search";
import { IoIosArrowUp } from "react-icons/io";
import DisplayError from "../../components/displayerror/DisplayError";
import { setPageTitle } from "../../shared/global/Functions";
import { useHistory } from "react-router-dom";
import RoutingPath from "../../routes/RoutingPath";

/**
 * Homeview is a component that displays a list of Pokemon.
 */
const HomeView = () => {
  const { allPokemon } = useContext(PokemonContext);
  const [listOfPokemon, setListOfPokemon] = useState([]);
  const POKEMON_TO_SHOW = 12;
  const [offset, setOffset] = useState(POKEMON_TO_SHOW);
  const [isHidden, setIsHidden] = useState(false);
  const [showPageUp, setShowPageUp] = useState(false);
  const [foundPokemon, setFoundPokemon] = useState([]);
  const [isPokemonFound, setIsPokemonFound] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (listOfPokemon.length < 1 && allPokemon.length >= POKEMON_TO_SHOW) {
      getFirstPokemon();
    }
  });

  useEffect(() => {
    getFirstPokemon();
  }, [foundPokemon])

  /**
   * When the button is clicked it gets hidden and loads 12 more Pokémon
   */
  const handleClick = () => {
    setIsHidden(true);
    loadMorePokemon();
  };

  /**
   * Gets the first 12 pokemon to show
   */
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
  const displayResult = () => {
    if (listOfPokemon.length < 1) {
      return <DisplayLoading />;
    } else if (isPokemonFound) {
      return listOfPokemon.map((pokemon, index) => (
        <PokemonCard
          key={index}
          pokemon={pokemon}
          onClick={() => history.push(RoutingPath.detailsView, pokemon)}
        />
      ));
    }
  };

  return (
    <div className="container">
      {setPageTitle("Pokédex | Ragnarök")}
      <ViewTitle title="Pokédex" />
      <Search
        setFoundPokemon={setFoundPokemon}
        setIsPokemonFound={setIsPokemonFound}
      />
      <div className="content">
        <ul className="results">{displayResult()}</ul>
        {!isPokemonFound && <DisplayError />}
        <div className="home-view-btn-container">
          {!isHidden && isPokemonFound && (
            <Button className="btn-load-more" onClick={() => handleClick()}>
              Load more Pokémon
            </Button>
          )}
        </div>
      </div>
      <Button
        className="btn-page-up"
        onClick={() => window.scrollTo(0, 0)}
        styles={{
          transform: showPageUp && "translateY(-68px)",
        }}
      >
        <span className="arrow-up">
          <IoIosArrowUp size="50" />
        </span>
      </Button>
    </div>
  );
};

export default HomeView;
