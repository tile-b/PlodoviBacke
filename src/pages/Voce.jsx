import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { useLanguage } from '../context/LanguageContext';

const Voce = () => {
  const { t } = useLanguage();

  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="relative w-full h-[614px] min-h-[500px] flex items-center justify-center bg-surface-container-low overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            alt="Zamrznuto voće background"
            className="w-full h-full object-cover grayscale-[15%] brightness-90"
            src="/assets/voce-hero.png"
          />
          {/* Very Thin Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/35" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-2xl w-full"
          >
            <p className="font-label text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/80 mb-4 drop-shadow-md">{t('products.catalog')}</p>
            <h1 className="font-headline text-4xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-xl">
              {t('products.fruitTitle')}
            </h1>
            <p className="font-body text-base md:text-lg text-white/90 max-w-md mx-auto leading-relaxed drop-shadow-md font-medium">
              {t('products.fruitDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          <ProductCard
            title="Borovnica"
            image="/assets/PLODOVI BACKE BOROVNICA JPEG.jpeg"
            weight="300g"
            category={t('products.categoryFruit')}
          />
          <ProductCard
            title="Jagoda"
            image="/assets/PLODOVI BACKE JAGODA JPEG.jpeg"
            weight="300g"
            category={t('products.categoryFruit')}
          />
          <ProductCard
            title="Malina"
            image="/assets/PLODOVI BACKE MALINA JPEG 1.jpeg"
            weight="300g"
            category={t('products.categoryFruit')}
          />
          <ProductCard
            title="Višnja"
            image="/assets/PLODOVI BACKE VISNJA JPEG.jpeg"
            weight="300g"
            category={t('products.categoryFruit')}
          />
          <ProductCard
            title="Voćni Mix"
            image="/assets/PLODOVI BACKE VOCNI MIX JPEG 3.jpeg"
            weight="300g"
            category={t('products.categoryFruit')}
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Voce;
