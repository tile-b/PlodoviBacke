import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { useLanguage } from '../context/LanguageContext';

const Povrce = () => {
  const { t } = useLanguage();

  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="relative w-full h-[614px] min-h-[500px] flex items-center justify-center bg-surface-container-low overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover grayscale-[15%] brightness-90"
          >
            <source src="/assets/0_Peas_Carrots_1920x1080.mp4" type="video/mp4" />
          </video>
          {/* Very Thin Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/20" />
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
              {t('products.vegTitle')}
            </h1>
            <p className="font-body text-base md:text-lg text-white/90 max-w-md mx-auto leading-relaxed drop-shadow-md font-medium">
              {t('products.vegDesc')}
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
            title="Grašak" 
            image="/assets/PLODOVI BACKE GRASAK JPEG.jpeg"
            weight="400g"
            category={t('products.categoryVeg')}
          />
          <ProductCard 
            title="Carska Mešavina" 
            image="/assets/PLODOVI BACKE CARSKA MESAVINA JPEG.jpeg"
            weight="400g"
            category={t('products.categoryVeg')}
          />
          <ProductCard 
            title="Ruska Salata" 
            image="/assets/PLODOVI BACKE RUSKA SALATA JPEG.jpeg"
            weight="400g"
            category={t('products.categoryVeg')}
          />
          <ProductCard 
            title="Spanać Briketi" 
            image="/assets/PLODOVI BACKE SPANAC BRIKETI JPEG.jpeg"
            weight="400g"
            category={t('products.categoryVeg')}
          />
          <ProductCard 
            title="Zlatni Mix" 
            image="/assets/PLODOVI BACKE ZLATNI MIX JPG.jpeg"
            weight="400g"
            category={t('products.categoryVeg')}
          />
          <ProductCard 
            title="Žuta Boranija" 
            image="/assets/PLODOVI BACKE ZUTA BORANIJA JPEG.jpeg"
            weight="400g"
            category={t('products.categoryVeg')}
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Povrce;
