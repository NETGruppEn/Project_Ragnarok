/**
 * Switches the first letter to capital
 * @param {string} text The text to capitalize the first letter
 * @returns Text with first letter uppercase
 */
export const capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

/**
 * Sets the title of the page
 * @param {string} title 
 */
export const setPageTitle = (title) => {
  document.title = title;
}
