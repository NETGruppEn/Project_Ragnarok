import React from "react";
import "./Button.css";

/**
 * Button component to navigate between different routes
 *
 * @param {string} title    Button title
 * @param {string} onClick  A function that is responsible for the logic of the button behavior
 *                          For example: routing, search button ect
 * @param {string} color    Button's Color. Orange by default
 * @param {string} onHover  The color for when the mouse hovers over the button
 * @param {object} props    The rest of the props.
 *                          ... - Destructuring assignment syntax. Makes it possible to
 *                          unpack values from arrays, or properties from objects, into distinct variables.
 *
 * * Example:
 * * <Button title="Home" onClick={() => history.push('/')} />
 *
 */
const Button = ({ title, onClick, color, onHover, ...props }) => {

  /**
   * When the button is hovered over the background color will
   * be changed to the color onHover.
   */
  const handleMouseEnter = (event) => {
    event.target.style.background = onHover;
  }

  /**
   * When the mouse leaves the button the background color will 
   * be reset to the provided color.
   */
  const handleMouseLeave = (event) => {
    event.target.style.background = color;
  }

  return (
    <div
      className="button"
      onClick={() => onClick()}
      style={{ backgroundColor: color }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {title}
    </div>
  );
};

export default Button;
