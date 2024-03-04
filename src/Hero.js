// Hero.js
import React from 'react';
import './Hero.css'; // Import your CSS file for Hero styling
import restaurantfoodImage from './restauranfood.jpg'; // Corrected image file name

function Hero() {
  return (
    <div className="hero-container">
      <div className="column"></div>
      <div className="column">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family-owned<br />
          Mediterranean restaurant,<br />
          focused on traditional<br />
          recipes served with a modern<br />
          twist.
        </p>
        <button className="reserve-button">Reserve a Table</button>
      </div>
      <div className="column">
        <img src={restaurantfoodImage} alt="Restaurant Food" />
      </div>
      <div className="column"></div>
    </div>
  );
}

export default Hero;
