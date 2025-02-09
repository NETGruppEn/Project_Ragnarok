import React from "react";
import "./Button.css";

/**
 * Button component to navigate between different routes
 *
 * @param {string} onClick  A function that is responsible for the logic of the button behavior
 *                          For example: routing, search button ect
 * @param {string} syles    The style for the button
 * @param {string} className The css class name for the button.
 * @param {object} props    The rest of the props.
 *                          ... - Destructuring assignment syntax. Makes it possible to
 *                          unpack values from arrays, or properties from objects, into distinct variables.
 */
const Button = ({ onClick, children, styles, className, ...props }) => {
  return (
    <div
      className={`btn ${className}`}
      onClick={onClick}
      style={{ ...styles }}
      {...props}
    >
      <div className="btn-children">{children}</div>
    </div>
  );
};

export default Button;
