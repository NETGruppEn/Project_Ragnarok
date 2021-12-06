import React from 'react'
import pokeLogo from "../../shared/images/PokeLogo.png";
import "./Header.css";

/**
 * Basic header for pokemon react app
 * @returns A pokemon picture
 */
const Header = () => {
    return (
        <div className ="header">
            <img src={pokeLogo}
            alt="Pokemon logo"
            className="image"></img>        
        </div>
    )
}

export default Header