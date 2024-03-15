import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

import footerLogo from './Logo.svg'

function Footer() {
  return (
    <footer className="footer-container"> {/* Add the unique class here */}
      {/* Empty Column */}
      <div className="Left"></div>
        <Link to="/">
          <img src={footerLogo} alt="Company Logo" className="logo-footer" />
        </Link>
      {/* Navigation Links */}
      <div className="navigation">
        <h3>Navigation</h3>
        <div><a href="/">Home</a></div>
        <div><Link to="/about">About</Link></div>
        <div><Link to="/menu">Menu</Link></div>
        <div><Link to="/reservations">Reservations</Link></div>
        <div><Link to="/order-online">Order Online</Link></div>
        <div><Link to="/login">Login</Link></div>
      </div>
      {/* Contact Information */}
      <div className="contact">
        <h3>Contact</h3>
         <p>123 Main Street,</p>
         <p>Chicago, IL 60601</p>
        <p>(312) 555-1234</p>
        <a href="mailto:your@email.com">Email</a>
      </div>
      {/* Social Media Links */}
      <div className="social-media">
        <h3>Social Media</h3>
            <p>123 Main Street,</p>
           <p>Chicago, IL 60601</p>
        <p>(312) 555-1234</p>
        <a href="mailto:your@email.com">Email</a>
      </div>

      <div className="Right">

      </div>
    </footer>
  );
}

export default Footer;