// Specials.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Specials.css';
import SpecialCard from './SpecialCard';

// Import your images
import greekSaladImage from './greekSalad.jpg';
import bruchettaImage from './bruchetta.svg';
import lemonDessertImage from './lemonDessert.jpg';

function Specials() {
  const specialsData = [
    {
      name: 'Greek salad',
      price: '$12.99',
      description: `The famous Greek salad of
                    crispy lettuce, peppers, olives
                    and our Chicago style feta
                    cheese, garnished with
                    crunchy garlic and rosemary
                    croutons.`,
      imageUrl: greekSaladImage,
    },
    {
      name: 'Bruchetta',
      price: '$5.99',
      description: `Our Bruschetta is made from
                    grilled bread that has been
                    smeared with garlic and
                    seasoned with salt and olive
                    oil.`,
      imageUrl: bruchettaImage,
    },
    {
      name: 'Lemon Dessert',
      price: '$5.00',
      description: `This comes straight from
                    grandma's recipe book, every
                    last ingredient has been
                    sourced and is as authentic
                    as can be imagined.`,
      imageUrl: lemonDessertImage,
    },
  ];

  return (
    <div className="specials-container">
      <div className="specials-header-and-button">
        <div className="specials-header">This week's specials!</div>
        <Link to="/order-online" className="specials-button">Order Online</Link>
      </div>
      <div className="specials-columns">
        {specialsData.map((special, index) => (
          <SpecialCard
            key={index}
            name={special.name}
            price={special.price}
            description={special.description}
            imageUrl={special.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Specials;