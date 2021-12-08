import React from 'react';
import { getColors, capitalize } from '../../shared/global/Functions';
import "./Type.css";

/**
 * Renders a pokémon type with correszponding text and colors.
 * 
 * @param name    The name of the type
 * @param size    The size of the type ex. small or large
 */
const Type = ({name, size}) => {
  return (
    <div data-testid="type" className={`type type-${size}`} style={getColors(name)}>
      {capitalize(name)}
    </div>
  );
}

export default Type;