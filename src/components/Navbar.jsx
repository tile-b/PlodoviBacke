import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'O nama', path: '/' },
    { name: 'Zamrznuto voće', path: '/zamrznuto-voce' },
    { name: 'Zamrznuto povrće', path: '/zamrznuto-povrce' },
    { name: 'Rinfuz', path: '/rinfuz' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] bg-white/60 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(5,25,66,0.04)] transition-all duration-300">
        <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-screen-2xl mx-auto">
          <NavLink to="/" className="text-xl md:text-2xl font-extrabold tracking-tighter text-on-surface uppercase font-headline">
            Plodovi Bačke
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-headline font-semibold tracking-tight text-base">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `transition-all duration-300 pb-1 ${isActive
                    ? 'text-on-surface font-bold border-b-2 border-on-surface'
                    : 'text-on-surface-variant hover:text-on-surface'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

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
      </nav>

      {/* Mobile Sidebar - Moved OUTSIDE the nav to avoid backdrop-filter clipping */}
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
              style={{ backdropFilter: 'blur(40px)', backgroundColor: 'rgba(250, 248, 255, 0.6)' }}
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-headline font-extrabold text-lg uppercase tracking-tighter">Meni</span>
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
              <div className="mt-auto pt-8 border-t border-outline-variant/15 text-center">
                <span className="text-xl font-extrabold tracking-tighter text-on-surface uppercase font-headline block">
                  Plodovi Bačke
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
