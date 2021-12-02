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