import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={Logo}  alt = "Rohan Mahajan's site logo" />
            </div>
            <div className="header__contact">
                Say Hello
            </div>
        </header>
    );
}

export default Header;