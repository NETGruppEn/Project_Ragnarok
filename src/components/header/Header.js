import React from "react";
import pokeLogo from "../../shared/images/PokeLogo.png";
import Line from "../line/Line";
import "./Header.css";

/**
 * Basic header for pokemon react app
 * @returns A pokemon picture
 */
const Header = () => {
  return (
    <div className="header">
      <img className="header-image" src={pokeLogo} alt="Pokémon logo" data-testid="header-image" />
      <Line />
    </div>
  );
};

export default Header;