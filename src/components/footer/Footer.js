import React from 'react'
import "./Footer.css";

/**
 * Footer
 * @returns 
 */
const Footer = () => {
    const date = new Date();
    return (
        <div>
            <p className="footer" data-testid="footer">© {date.getFullYear()} Ragnarök inc</p>
        </div>
    )
}

export default Footer