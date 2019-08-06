import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={Logo}  alt = "Rohan Mahajan's site logo" />
            </div>
            <a className="header__contact" href="mailto:rohanm789@gmail.com?subject=Hey, Rohan!">
                <span>SAY</span>
                <span className="hello">Hello</span>
            </a>
        </header>
    );
}

export default Header;