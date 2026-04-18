import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="col-span-1 md:col-span-5 flex flex-col justify-center text-center md:text-left"
        >
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-on-background tracking-tight mb-6">
            O nama: Filozofija svežine
          </h2>
          <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed mb-8">
            The Cryogenic Editorial redefiniše standarde zamrznute hrane. Verujemo da hladnoća nije samo metod čuvanja, već način da se zaključa esencija prirode. Bez kompromisa, bez aditiva—samo čista, netaknuta materija.
          </p>
          <ul className="space-y-4 font-body text-on-background text-sm md:text-base text-left mx-auto md:mx-0 inline-block">
            {['Branje u optimalnom trenutku zrelosti', 'Šok smrzavanje za očuvanje ćelijske strukture', 'Premium selekcija za profesionalce i entuzijaste'].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Visuals (Overlapping) */}
        <div className="col-span-1 md:col-span-7 relative h-[400px] md:h-[600px] mt-8 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute top-0 right-0 w-[85%] md:w-3/4 h-[85%] md:h-3/4 bg-surface-container-low rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(5,25,66,0.06)]"
          >
            <img
              alt="Frozen raspberry"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcKu0B8hsN6QOPOhcLnQwF6zI4IVWPwGp5q8xYxQOcW0YHHVnBNLWlAEniQKaJNDMVnpIPgDN4z7j48XFvMHlolxB_aQECu0vf9-Qv9E3IlRcuuX5p_ecWp381peYVZnQeNF2rf5QJAUnoSmWp8pGhzrpTWoDAreYRgWnG5ayyGfT7YphSScAbAYF_-XhdJf1NWUB2ttRnYb2iZ4-keczwaMmziVTUFq6TTZlSSMfeZ-NKg3l0E8mSHkJiL7VDF0CnZtpzO6Q_W7k"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-0 left-0 w-[70%] md:w-1/2 h-fit bg-surface-container-highest/90 rounded-xl p-6 md:p-8 shadow-[0_20px_40px_rgba(5,25,66,0.06)] flex flex-col justify-end backdrop-blur-sm border border-outline-variant/15"
          >
            <span className="material-symbols-outlined text-3xl md:text-4xl text-primary-container mb-4">ac_unit</span>
            <h3 className="font-headline text-xl md:text-2xl font-bold text-on-background mb-2">Netaknuto vreme</h3>
            <p className="font-body text-xs md:text-sm text-on-surface-variant">Naš proces zaustavlja biološki sat tačno na vrhuncu nutritivne vrednosti.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
