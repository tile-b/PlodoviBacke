import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';

const Rinfuz = () => {
  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="relative w-full h-[614px] min-h-[500px] flex items-center justify-center bg-surface-container-low overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            alt="Rinfuzno voće i povrće background" 
            className="w-full h-full object-cover" 
            src="/assets/rinfuz-hero.png" 
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-surface-container-lowest/40 backdrop-blur-xl p-8 md:p-10 rounded-xl text-center max-w-lg w-full border border-outline-variant/15 shadow-[0_20px_40px_rgba(5,25,66,0.06)]"
          >
            <p className="font-label text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant mb-3">Katalog proizvoda</p>
            <h1 className="font-headline text-3xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-tight mb-4">Rinfuzna Pakovanja</h1>
            <p className="font-body text-sm md:text-base text-on-surface-variant max-w-md mx-auto">Premium zamrznuti proizvodi u pakovanjima prilagođenim zahtevima profesionalnih kuhinja i industrijske proizvodnje.</p>
          </motion.div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <ProductCard 
            title="Malina Rinfuz" 
            image="/assets/PLODOVI BACKE MALINA JPEG 1.jpeg"
            weight="10kg / 13kg"
            category="Industrijsko Pakovanje"
          />
          <ProductCard 
            title="Grašak Rinfuz" 
            image="/assets/PLODOVI BACKE GRASAK JPEG.jpeg"
            weight="20kg"
            category="Industrijsko Pakovanje"
          />
          <ProductCard 
            title="Mešavina Carska" 
            image="/assets/PLODOVI BACKE CARSKA MESAVINA JPEG.jpeg"
            weight="10kg / 20kg"
            category="Industrijsko Pakovanje"
          />
        </div>
      </section>
    </div>
  );
};

export default Rinfuz;
