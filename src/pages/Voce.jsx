import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';

const Voce = () => {
  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="relative w-full h-[614px] min-h-[500px] flex items-center justify-center bg-surface-container-low overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            alt="Zamrznuto voće background" 
            className="w-full h-full object-cover" 
            src="/assets/voce-hero.png" 
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-surface-container-lowest/40 backdrop-blur-xl p-8 md:p-10 rounded-xl text-center max-w-lg w-full border border-outline-variant/15 shadow-[0_20px_40px_rgba(5,25,66,0.06)]"
          >
            <p className="font-label text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant mb-3">Katalog Proizvoda</p>
            <h1 className="font-headline text-3xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-tight mb-4">Zamrznuto voće</h1>
            <p className="font-body text-sm md:text-base text-on-surface-variant max-w-md mx-auto">Najfiniji plodovi prirode, sačuvani u trenutku maksimalne sočnosti i nutritivne vrednosti. Osetite svežinu koja ne bledi.</p>
          </motion.div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <ProductCard 
            title="Borovnica" 
            image="/assets/PLODOVI BACKE BOROVNICA JPEG.jpeg"
            weight="300g"
            category="Premium Zamrznuto Voće"
          />
          <ProductCard 
            title="Jagoda" 
            image="/assets/PLODOVI BACKE JAGODA JPEG.jpeg"
            weight="300g"
            category="Premium Zamrznuto Voće"
          />
          <ProductCard 
            title="Malina" 
            image="/assets/PLODOVI BACKE MALINA JPEG 1.jpeg"
            weight="300g"
            category="Premium Zamrznuto Voće"
          />
          <ProductCard 
            title="Višnja" 
            image="/assets/PLODOVI BACKE VISNJA JPEG.jpeg"
            weight="300g"
            category="Premium Zamrznuto Voće"
          />
          <ProductCard 
            title="Voćni Mix" 
            image="/assets/PLODOVI BACKE VOCNI MIX JPEG 3.jpeg"
            weight="300g"
            category="Premium Zamrznuto Voće"
          />
        </div>
      </section>
    </div>
  );
};

export default Voce;
