import React from 'react'

const Footer = () => {
    const date = new Date();
    return (
        <div>
            <p data-testid="footer">© {date.getFullYear()} Ragnarök inc</p>
        </div>
    )
}

export default Footer
