/**
 * Switches the first letter to capital
 * @param {string} text The text to capitalize the first letter
 * @returns Text with first letter uppercase
 */
export const capitalize = (text) => {
  if (text.includes("-")) {
    let parts = text.split("-");
    text = "";
    parts.forEach((part) => {
      text += capitalize(part) + " ";
    });
  } else {
    text = text.charAt(0).toUpperCase() + text.slice(1);
  }

  return text;
};

/**
 * Sets the title of the page
 * @param {string} title
 */
export const setPageTitle = (title) => {
  document.title = title;
};

/**
 * If the Pokémon is Nidoran, the gender letter
 * will be replaced for a gender symbol
 */
export const checkName = (name) => {
  if (name === "nidoran-f") {
    name = name.replace("-f", "♀");
  } else if (name === "nidoran-m") {
    name = name.replace("-m", "♂");
  }

  return capitalize(name);
};

/**
 * Turns centimeter into feet and inches.
 * @param {number} cm
 * @returns a string of feet and inches. For example: 5' 4"
 */
export const centimetersToFeetAndInches = (cm) => {
  let inches = Math.round(cm / 2.54);
  let feet = 0;
  while (inches - 12 >= 0) {
    feet++;
    inches -= 12;
  }
  return `${feet}' ${inches}"`;
};

/**
 * Turns kilo into pounds
 * @param {number} kg
 * @returns a string of pounds. For example: 199 lbs
 */
export const kilosToPounds = (kg) => {
  return `${(kg * 2.2046).toFixed(1)} lbs`;
};
