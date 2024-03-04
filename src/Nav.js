// Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

import companyLogo from './Logo.svg'; // Adjust the path based on your project structure

function Nav() {
    return (
        <nav>
            <div className="logo-container">
                <Link to="/">
                    <img src={companyLogo} alt="Company Logo" className="logo" />
                </Link>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/order-online">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;