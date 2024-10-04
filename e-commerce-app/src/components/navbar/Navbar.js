// src/Navbar.js
import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">BrandName</div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-toggle" onClick={toggleMenu}>
        {/* {isOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />} */}
      </div>
    </nav>
  );
};

export default Navbar;
