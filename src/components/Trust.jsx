import React from 'react';
import { motion } from 'framer-motion';

const Trust = () => {
  const logistics = [
    {
      icon: 'route',
      title: 'Optimizovane Rute',
      description: 'Koristimo napredne sisteme za praćenje i optimizaciju ruta kako bismo osigurali najbržu isporuku uz minimalno izlaganje temperaturnim promenama.'
    },
    {
      icon: 'thermostat',
      title: 'Stroga Temperaturna Kontrola',
      description: 'Sva vozila su opremljena savremenim sistemima za kontinuirano praćenje temperature. Garantujemo održavanje -18°C od našeg do vašeg magacina.'
    },
    {
      icon: 'forklift',
      title: 'Prilagođen Utovar i Istovar',
      description: 'Pakujemo i paletizujemo robu prema specifičnim zahtevima vašeg sistema manipulacije teretom, osiguravajući efikasan i siguran prijem.'
    }
  ];

  const certificates = [
    { icon: 'verified_user', name: 'HACCP Certified' },
    { icon: 'fact_check', name: 'IFS Standard' },
    { icon: 'high_quality', name: 'BRC Global' },
    { icon: 'eco', name: 'Global GAP' }
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
              Pouzdana Logistika Hladnog Lanca
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-on-surface-variant leading-relaxed font-body"
            >
              Razumemo važnost neprekidnog hladnog lanca u prehrambenoj industriji. Naš logistički sistem je dizajniran da osigura da vaša narudžbina stigne u savršenom stanju.
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
      <section className="py-16 border-t border-outline-variant/10 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {certificates.map((cert, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3 group">
                <span className="material-symbols-outlined text-5xl text-on-surface group-hover:text-primary transition-colors duration-300">{cert.icon}</span>
                <span className="font-bold text-[10px] md:text-xs tracking-widest uppercase text-on-surface-variant font-headline">
                  {cert.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trust;
