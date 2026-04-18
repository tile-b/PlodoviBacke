import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const ProductCard = ({ 
  title, 
  image, 
  weight = "300g",
  category = "Premium Selection"
}) => {
  return (
    <motion.div 
      variants={cardVariants}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] transition-all duration-500 cursor-pointer"
    >
      {/* Image Container */}
      <div className="aspect-[4/5] overflow-hidden bg-surface-container-low relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Subtle Overlay for Premium Feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Info Overlay / Footer */}
      <div className="p-6 md:p-8 flex flex-col gap-1">
        <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-label">{category}</p>
        <div className="flex justify-between items-end">
          <h3 className="text-xl md:text-2xl font-bold font-headline text-on-surface tracking-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
          <span className="text-sm font-medium text-on-surface-variant/70 font-body">{weight}</span>
        </div>
      </div>

      {/* Decorative Frost Detail */}
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
        <span className="material-symbols-outlined text-white text-sm">ac_unit</span>
      </div>
    </motion.div>
  );
};

export default ProductCard;
