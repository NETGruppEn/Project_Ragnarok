import React from 'react'
import pokeLogo from "../../shared/images/PokeLogo.png";
import "./Header.css";

/**
 * Basic header for pokemon react app
 * @returns A pokemon picture
 */
const Header = ({label}) => {
    return (
        [
        <div className ="pokeLogo">
            <img src={pokeLogo}
            alt="Pokemon logo"
            className="image"></img>        
        </div>,
        <div className ="thinGrayLine">
        </div>,
        <h1>
            {label}
        </h1>
        ]
    )
}

export default Header