import React from 'react'
import pokeLogo from "../../shared/images/PokeLogo.png";

/**
 * Basic header for pokemon react app
 * @returns A pokemon picture
 */
const Header = () => {
    //TODO:  line, CSS
    return (
        <div>
            <img src={pokeLogo}
            alt="Pokemon logo"
            className="pokeLogo"></img>        
        </div>
    )
}

export default Header