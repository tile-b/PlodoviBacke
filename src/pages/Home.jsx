import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CTA from '../components/CTA';
import Trust from '../components/Trust';
import Production from '../components/Production';

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <Production />
      <CTA />
      <Trust />
    </div>
  );
};

export default Home;
