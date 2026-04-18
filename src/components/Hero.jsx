import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[870px] min-h-[500px] flex items-center justify-center bg-surface-container-low overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Plantaže Plodovi Bačke"
          className="w-full h-full object-cover object-center"
          src="/assets/home-hero-day.png"
        />
      </div>

      {/* Frost Overlay Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-2xl mx-auto px-6"
      >
        <div className="bg-white/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-[0_32px_64px_-12px_rgba(5,25,66,0.1)] border border-white/20 text-center">
          <h1 className="font-headline text-3xl sm:text-5xl md:text-6xl font-extrabold text-on-surface tracking-tight mb-4 md:mb-6 leading-tight">
            Priroda sačuvana u svom vrhuncu.
          </h1>
          <p className="font-body text-sm md:text-lg text-on-surface-variant max-w-md mx-auto leading-relaxed font-medium">
            Više od hrane. Svaki plod je umetničko delo, zamrznut u trenutku savršenstva pomoću napredne kriogene tehnologije.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
