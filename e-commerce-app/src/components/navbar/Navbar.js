import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">ReduxStore</div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="search-container">
                    <input type="text" placeholder="Search..." className="search-input" />
                    <button className="search-button">🔍</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
