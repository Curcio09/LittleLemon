// Testimonials.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Testimonials.css';

import R1Image from './R1.jpeg';
import R2Image from './R2.jpeg';
import R3Image from './R3.jpeg';
import R4Image from './R4.jpeg';

function Testimonials() {
  return (
    <div className="testimonials-container">
      <h1>Testimonials</h1>
      <div className="testimonial-cards-container">
        <div className="testimonial-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <Link to="/login">
            <img src={R1Image} alt="Customer Profile" className="profile-picture" />
          </Link>
          <p className="review-text">
            "The dining experience at this Italian restaurant was absolutely delightful. The flavors
            were authentic, and the atmosphere felt like home. Highly recommend!"
          </p>
          <p className="user-name">- Maria R.</p>
        </div>

        <div className="testimonial-card">
          <div className="stars">⭐⭐⭐⭐</div>
          <Link to="/login">
            <img src={R2Image} alt="Customer Profile" className="profile-picture" />
          </Link>
          <p className="review-text">
            "Visited the restaurant with my family and had an amazing time. The pasta dishes were
            superb, and the staff was very friendly. Will definitely come back!"
          </p>
          <p className="user-name">- John S.</p>
        </div>

        <div className="testimonial-card">
          <div className="stars">⭐⭐⭐</div>
          <Link to="/login">
            <img src={R3Image} alt="Customer Profile" className="profile-picture" />
          </Link>
          <p className="review-text">
            "Fantastic place for a cozy dinner. The ambiance is charming, and the food is delicious.
            I highly recommend trying their homemade desserts!"
          </p>
          <p className="user-name">- Emily M.</p>
        </div>

        <div className="testimonial-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <Link to="/login">
            <img src={R4Image} alt="Customer Profile" className="profile-picture" />
          </Link>
          <p className="review-text">
            "A hidden gem in Chicago! The staff is attentive, and the food is top-notch. Loved every
            moment of our dining experience. I can't wait to dine again."
          </p>
          <p className="user-name">- Robert D.</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;