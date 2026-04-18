import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CTA from '../components/CTA';
import Trust from '../components/Trust';

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <CTA />
      <Trust />
    </div>
  );
};

export default Home;
