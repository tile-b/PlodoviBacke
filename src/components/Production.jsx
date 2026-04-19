import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Production = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-headline font-bold text-primary uppercase tracking-[0.2em] text-xs"
              >
                {t('production.tag')}
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-headline text-3xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-tight"
              >
                {t('production.title')}
              </motion.h2>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed"
            >
              {t('production.description')}
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col gap-2"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">precision_manufacturing</span>
                </div>
                <h4 className="font-bold text-on-surface">{t('production.machineTitle')}</h4>
                <p className="text-sm text-on-surface-variant">{t('production.machineDesc')}</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col gap-2"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">pan_tool</span>
                </div>
                <h4 className="font-bold text-on-surface">{t('production.manualTitle')}</h4>
                <p className="text-sm text-on-surface-variant">{t('production.manualDesc')}</p>
              </motion.div>
            </div>
          </div>

          {/* Visuals */}
          <div className="w-full md:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square sm:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 border border-outline-variant/10"
            >
              <img 
                src="/assets/malina-prebiranje.jpeg" 
                alt="Ručno prebiranje malina" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent pointer-events-none" />
              
              {/* Floating Image Card */}
              <motion.div 
                initial={{ opacity: 0, y: 40, x: 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute -bottom-10 -left-10 w-2/3 aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 hidden sm:block"
              >
                <img 
                  src="/assets/masina-prebiranje.jpeg" 
                  alt="Mašinsko sortiranje plodova" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Production;
