import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const navItems = [
    { name: 'O nama', path: '/' },
    { name: 'Zamrznuto voće', path: '/zamrznuto-voce' },
    { name: 'Zamrznuto povrće', path: '/zamrznuto-povrce' },
    { name: 'Rinfuz', path: '/rinfuz' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <footer className="bg-surface-container-low py-12 md:py-16 border-t border-outline-variant/10">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start text-sm font-body">
        
        {/* Brand Section */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <p className="text-xl font-extrabold text-on-surface font-headline tracking-tighter uppercase">Plodovi Bačke</p>
          <p className="text-on-surface-variant max-w-xs">Priroda sačuvana u svom vrhunskom obliku. © 2024</p>
          <div className="flex flex-col gap-1 mt-2">
            <p className="text-on-surface font-medium">+381 11 123 4567</p>
            <p className="text-on-surface font-medium">info@plodovibacke.rs</p>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="md:col-span-4 grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="font-headline font-bold text-on-surface uppercase tracking-widest text-[10px]">Navigacija</h4>
            <div className="flex flex-col gap-3 text-on-surface-variant">
              {navItems.slice(0, 3).map((item) => (
                <Link key={item.path} to={item.path} className="hover:text-on-surface transition-colors">{item.name}</Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-headline font-bold text-on-surface uppercase tracking-widest text-[10px]">&nbsp;</h4>
            <div className="flex flex-col gap-3 text-on-surface-variant">
              {navItems.slice(3).map((item) => (
                <Link key={item.path} to={item.path} className="hover:text-on-surface transition-colors">{item.name}</Link>
              ))}
            </div>
          </div>
        </div>

        {/* Legal/Small Print Section */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <h4 className="font-headline font-bold text-on-surface uppercase tracking-widest text-[10px]">Informacije</h4>
          <div className="flex flex-col gap-3 text-on-surface-variant">
            <a href="#" className="hover:text-on-surface transition-colors">Privatnost</a>
            <a href="#" className="hover:text-on-surface transition-colors">Uslovi korišćenja</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
