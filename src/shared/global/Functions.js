import { TYPE_COLORS, COLORS } from './Colors';

/**
 * Switches the first letter to capital
 * @param {string} text The text to capitalize the first letter
 * @returns Text with first letter uppercase
 */
export const capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};


/**
 * 
 * @param {label} string label of the page  
 */

 export const Head = (label) => {
  document.title= label;
 };

export const getColors = (type) => {
  let colors = {};

  switch (type) {
    case "bug":
      colors.background = TYPE_COLORS.bug;
      colors.color = "white";
      break;
    case "dragon":
      colors.background = TYPE_COLORS.dragon;
      colors.color = "white";
      break;
    case "fairy":
      colors.background = TYPE_COLORS.fairy;
      colors.color = COLORS.black;
      break;
    case "fire":
      colors.background = TYPE_COLORS.fire;
      colors.color = "white";
      break;
    case "ghost":
      colors.background = TYPE_COLORS.ghost;
      colors.color = "white";
      break;
case "ground":
      colors.background = TYPE_COLORS.ground;
      colors.color = COLORS.black;
      break;
    case "normal":
      colors.background = TYPE_COLORS.normal;
      colors.color = COLORS.black;
      break;
    case "psychic":
      colors.background = TYPE_COLORS.psychic;
      colors.color = "white";
      break;
    case "steel":
      colors.background = TYPE_COLORS.steel;
      colors.color = COLORS.black;
      break;
    case "dark":
      colors.background = TYPE_COLORS.dark;
      colors.color = "white";
      break;
    case "electric":
      colors.background = TYPE_COLORS.electric;
      colors.color = COLORS.black;
      break;
    case "fighting":
      colors.background = TYPE_COLORS.fighting;
      colors.color = "white";
      break;
    case "flying":
      colors.background = TYPE_COLORS.flying;
      colors.color = COLORS.black;
      break;
    case "grass":
      colors.background = TYPE_COLORS.grass;
      colors.color = COLORS.black;
      break;
    case "ice":
      colors.background = TYPE_COLORS.ice;
      colors.color = COLORS.black;
      break;
    case "poison":
      colors.background = TYPE_COLORS.poison;
      colors.color = "white";
      break;
    case "rock":
      colors.background = TYPE_COLORS.rock;
      colors.color = "white";
      break;
    case "water":
      colors.background = TYPE_COLORS.water;
      colors.color = "white";
      break;
    default:
      break;
  }

  return colors;
}

export const checkName = (name) => {
  if (name === "nidoran-f") {
    name = name.replace("-f", "♀");
  } else if (name === "nidoran-m") {
    name = name.replace("-m", "♂");
  }

  return capitalize(name);
};