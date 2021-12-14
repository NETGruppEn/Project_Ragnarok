import React, { useState } from 'react'
import Star from '../star/Star'
import { COLORS } from '../../shared/global/Colors'

const Favorite = () => {

    const [favorite, setFavorite] = useState('false');

    const SetColor = () => {
        if (favorite === 'true')
        {
            setFavorite('false');
        }
        else
        {
            setFavorite('true');
        }
        console.log('click');
    };
    

    return (
        <div>
            <Star isFavorite={'true'} size={"2em"} onClick={SetColor}/>
        </div>
    )
}

export default Favorite
