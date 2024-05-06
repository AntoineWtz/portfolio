// Header.js
import React, { useState } from 'react';
import '../styles/Header.css';
import logo from '../img/avatar-AW-trans2.png';
import burgerIcon from '../img/burger-icon.png'; 

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <a href="#"><img src={logo} alt="Logo" style={{ height: '50px', width: 'auto' }} /> </a>
        </div>
        <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#projects">WORK</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
        <div className="burger-menu" onClick={toggleMenu}>
          <img src={burgerIcon} alt="Burger Menu" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
