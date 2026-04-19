import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Trust = () => {
  const { t } = useLanguage();

  const logistics = [
    {
      icon: 'route',
      title: t('trust.routes'),
      description: t('trust.routesDesc')
    },
    {
      icon: 'thermostat',
      title: t('trust.temp'),
      description: t('trust.tempDesc')
    },
    {
      icon: 'forklift',
      title: t('trust.load'),
      description: t('trust.loadDesc')
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Logistics Section */}
      <section className="py-24 px-6 md:px-12 bg-surface-container-low/50">
        <div className="max-w-screen-2xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-headline font-bold text-on-background tracking-tight"
            >
              {t('trust.logisticsTitle')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-on-surface-variant leading-relaxed font-body"
            >
              {t('trust.logisticsDesc')}
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {logistics.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * (idx + 1) }}
                className="flex flex-col items-center text-center gap-4 p-8 bg-surface rounded-2xl shadow-sm border border-outline-variant/10"
              >
                <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center text-primary mb-2">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold font-headline text-on-surface">{item.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed font-body">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Row */}
      <section className="py-20 border-t border-outline-variant/10 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8 flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-4"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-full blur-2xl animate-pulse" />
              <div className="relative w-24 h-24 rounded-full border-2 border-primary/20 flex items-center justify-center bg-white shadow-xl shadow-primary/10">
                <span className="material-symbols-outlined text-5xl text-primary font-light">verified_user</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-headline font-black text-2xl md:text-3xl tracking-tight text-on-surface uppercase">
                {t('trust.haccp')}
              </span>
              <p className="text-on-surface-variant font-medium text-sm md:text-base max-w-sm">
                {t('trust.haccpDesc')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Trust;
