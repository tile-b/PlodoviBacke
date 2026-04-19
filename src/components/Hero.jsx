import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-[70vh] md:h-[870px] min-h-[500px] flex items-center justify-center bg-surface-container-low overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Plantaže Plodovi Bačke"
          className="w-full h-full object-cover object-center grayscale-[15%] brightness-90"
          src="/assets/home-hero-day.png"
        />
        {/* Very Thin Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center"
      >
        <h1 className="font-headline text-4xl sm:text-6xl md:text-8xl font-extrabold text-white tracking-tight mb-6 leading-tight drop-shadow-2xl">
          {t('hero.title')}
        </h1>
        <p className="font-body text-base md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-xl font-medium">
          {t('hero.description')}
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
