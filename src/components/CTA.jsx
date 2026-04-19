import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const CTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-32 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-screen-xl mx-auto bg-primary-container rounded-3xl p-8 md:p-24 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-on-primary-fixed-variant/20 to-transparent"></div>
        <div className="relative z-10">
          <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-extrabold text-on-primary tracking-tight mb-6 md:mb-8 leading-tight">
            {t('cta.title')}
          </h2>
          <p className="font-body text-base md:text-xl text-surface-container-low max-w-2xl mx-auto mb-8 md:mb-12">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/kontakt"
              className="bg-transparent border-2 border-surface text-surface font-label font-bold px-8 py-4 rounded-xl hover:bg-surface/10 transition-all duration-300 inline-block"
            >
              {t('cta.button')}
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
