import React from "react";
import "./Footer.css";
import Line from "../line/Line";

/**
 * Footer
 * @returns the copyrights and the current year
 */
const Footer = () => {
  const date = new Date();
  return (
    <div className="footer">
      <Line />
      <p className="footer-text" data-testid="footer">© {date.getFullYear()} Ragnarök inc</p>
    </div>
  );
};

export default Footer;