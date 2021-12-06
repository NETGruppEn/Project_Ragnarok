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
      <img className="header-image" src={pokeLogo} alt="Pokemon logo" />
      <Line />
    </div>
  );
};

export default Header;