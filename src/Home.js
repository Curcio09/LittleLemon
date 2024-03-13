import React from 'react';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import AboutC from './AboutC'; // Corrected import with uppercase component name

function Home() {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <AboutC />
    </>
  );
}

export default Home;
