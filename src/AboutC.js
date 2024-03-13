// AboutC.js
import React from 'react';
import './AboutC.css';
import restaurantImage from './restaurant.jpg';
import MAAImage from './MAA.jpg';

function AboutC() {
  return (
    <div className="about-container">
      <div className="about-column"></div>
      <div className="about-column">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Welcome to Little Lemon, a hidden gem nestled in the heart of Chicago. As a family-owned establishment, we take pride in offering a warm and inviting atmosphere that makes you feel right at home. Our restaurant specializes in a wide range of Mediterranean dishes, each crafted with care and authenticity.
        </p>
      </div>
      <div className="about-images">
        <img src={restaurantImage} alt="Restaurant Food" className="about-image-left" />
        <img src={MAAImage} alt="Mario" className="about-image-right" />
      </div>
      <div className="about-column"></div>
    </div>
  );
}

export default AboutC;