// Specials.js
import React from 'react';
import './Specials.css'; // Import your CSS file for Specials styling

function Specials() {
  return (
    <div className="specials-container">
      <div className="specials-header-and-button">
        <div className="specials-header">This week's specials!</div>
        <button className="specials-button">Online Menu</button>
      </div>
      <div className="specials-columns">
        <div className="specials-column">Special 1</div>
        <div className="specials-column">Special 2</div>
        <div className="specials-column">Special 3</div>
        <div className="specials-column">Special 4</div>
        <div className="specials-column">Special 5</div>
      </div>
    </div>
  );
}

export default Specials;
