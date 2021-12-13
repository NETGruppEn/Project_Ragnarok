import React from "react";
import "./Footer.css";
import Line from "../line/Line";

/**
 * A basic footer
 * @returns the copyrights and the current year
 */
const Footer = () => {
  const date = new Date();
  return (
    <footer className="footer">
      <Line />
      <p className="footer-text" data-testid="footer">© {date.getFullYear()} Ragnarök inc</p>
    </footer>
  );
};

export default Footer;