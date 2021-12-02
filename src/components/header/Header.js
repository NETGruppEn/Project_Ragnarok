import React from 'react'
import pokeLogo from "../../shared/images/PokeLogo.png";

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