import React from 'react';
import { getColors, capitalize } from '../../shared/global/Functions';

const Type = ({name, size}) => {
  return (
    <div data-testid="type" className={`type ${size}`} style={getColors(name)}>
      {capitalize(name)}
    </div>
  );
}

export default Type;