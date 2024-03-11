// SpecialCard.js
import React from 'react';
import './SpecialCard.css';
import deliveryImage from './delivery.png'; // Import your delivery image

function SpecialCard({ name, price, description, imageUrl }) {
  return (
    <div className="special-card">
      <img src={imageUrl} alt={name} className="card-image" />
      <div className="card-details">
        <div className="card-name-and-price">
          <div className="card-name">{name}</div>
          <div className="card-price">{price}</div>
        </div>
        <p className="card-description">{description}</p>
        <a href="/order-online" className="order-link">
          Order a Delivery
          <img src={deliveryImage} alt="Delivery" className="delivery-image" />
        </a>
      </div>
    </div>
  );
}

export default SpecialCard;