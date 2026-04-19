import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: t('nav.about'), path: '/' },
    { name: t('nav.frozenFruit'), path: '/zamrznuto-voce' },
    { name: t('nav.frozenVeg'), path: '/zamrznuto-povrce' },
    { name: t('nav.bulk'), path: '/rinfuz' },
    { name: t('nav.contact'), path: '/kontakt' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(5,25,66,0.04)] transition-all duration-300">
        <div className="flex justify-between items-center px-6 md:px-8 xl:px-10 py-4 md:py-[clamp(1rem,1.5vw,1.5rem)] max-w-screen-2xl mx-auto">
          <NavLink to="/" className="flex items-center">
            <img src="/assets/plodovi.png" alt="Plodovi Bačke" className="h-10 md:h-[clamp(3rem,4vw,4rem)] w-auto object-contain" />
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-[clamp(1rem,2vw,2.5rem)] font-headline font-semibold tracking-tight text-base md:text-[clamp(1.125rem,1.2vw,1.25rem)]">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `transition-all duration-300 pb-1 max-[1000px]:text-[0.8rem] ${isActive
                    ? 'text-on-surface font-bold border-b-2 border-on-surface'
                    : 'text-on-surface-variant hover:text-on-surface'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Language Switcher Desktop */}
            <div className="hidden md:flex items-center gap-3 ml-4">
              <button
                onClick={() => setLanguage('sr')}
                className={`flex items-center gap-2 p-1.5 transition-all duration-300 border-[1px] rounded-md ${language === 'sr' ? 'bg-primary/5 border-primary scale-110 shadow-sm' : 'border-transparent grayscale-[50%] opacity-70 hover:opacity-100 hover:grayscale-0'}`}
                title="Srpski"
              >
                <img
                  src="https://flagcdn.com/w40/rs.png"
                  alt="SR"
                  className="w-5 h-3.5 object-cover rounded-[1px] shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
                />
                <span className={`font-headline text-[10px] font-bold tracking-tighter ${language === 'sr' ? 'text-on-surface' : 'text-on-surface-variant'}`}>SR</span>
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center gap-2 p-1.5 transition-all duration-300 border-[1px] rounded-md ${language === 'en' ? 'bg-primary/5 border-primary scale-110 shadow-sm' : 'border-transparent grayscale-[50%] opacity-70 hover:opacity-100 hover:grayscale-0'}`}
                title="English"
              >
                <img
                  src="https://flagcdn.com/w40/gb.png"
                  alt="EN"
                  className="w-5 h-3.5 object-cover rounded-[1px] shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
                />
                <span className={`font-headline text-[10px] font-bold tracking-tighter ${language === 'en' ? 'text-on-surface' : 'text-on-surface-variant'}`}>EN</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">


            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center p-2 rounded-full hover:bg-surface-container-low transition-colors"
            >
              <span className="material-symbols-outlined text-on-surface">
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[110] md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-on-surface/20 backdrop-blur-sm"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 h-full w-[80%] max-w-sm shadow-2xl p-8 flex flex-col border-l border-outline-variant/30"
              style={{ backdropFilter: 'blur(40px)', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-headline font-extrabold text-lg uppercase tracking-tighter">{t('nav.menu')}</span>
                <button onClick={() => setIsOpen(false)}>
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <div className="flex flex-col gap-6 font-headline font-medium text-lg">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `transition-all duration-300 ${isActive
                        ? 'text-on-surface font-bold pl-4 border-l-4 border-on-surface'
                        : 'text-on-surface-variant'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-8 pt-8 border-t border-outline-variant/15">
                {/* Language Switcher Mobile (Sidebar) */}
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => setLanguage('sr')}
                    className={`flex items-center gap-3 p-2 px-4 rounded-xl transition-all border-[1px] ${language === 'sr' ? 'border-primary bg-primary/5' : 'border-transparent grayscale-[50%] opacity-70'}`}
                  >
                    <img src="https://flagcdn.com/w40/rs.png" alt="SR" className="w-6 h-6 object-cover rounded-full shadow-sm" />
                    <span className={`font-headline text-sm font-bold ${language === 'sr' ? 'text-on-surface' : 'text-on-surface-variant'}`}>SR</span>
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`flex items-center gap-3 p-2 px-4 rounded-xl transition-all border-[1px] ${language === 'en' ? 'border-primary bg-primary/5' : 'border-transparent grayscale-[50%] opacity-70'}`}
                  >
                    <img src="https://flagcdn.com/w40/gb.png" alt="EN" className="w-6 h-6 object-cover rounded-full shadow-sm" />
                    <span className={`font-headline text-sm font-bold ${language === 'en' ? 'text-on-surface' : 'text-on-surface-variant'}`}>EN</span>
                  </button>
                </div>
                <div className="flex justify-center">
                  <img src="/assets/plodovi.png" alt="Plodovi Bačke" className="h-10 w-auto object-contain" />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
