import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const navItems = [
    { name: t('nav.about'), path: '/' },
    { name: t('nav.frozenFruit'), path: '/zamrznuto-voce' },
    { name: t('nav.frozenVeg'), path: '/zamrznuto-povrce' },
    { name: t('nav.bulk'), path: '/rinfuz' },
    { name: t('nav.contact'), path: '/kontakt' },
  ];

  return (
    <footer className="bg-on-surface py-12 md:py-16 border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start text-sm font-body">
        
        {/* Brand Section */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <Link to="/" className="inline-block">
            <img src="/assets/plodovi.png" alt="Plodovi Bačke" className="h-12 w-auto object-contain brightness-0 invert" />
          </Link>
          <p className="text-white/70 max-w-xs font-medium">{t('footer.desc')} © 2024</p>
          <div className="flex flex-col gap-1 mt-2">
            <p className="text-white font-semibold">+381 11 123 4567</p>
            <p className="text-white font-semibold">info@plodovibacke.rs</p>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="md:col-span-4 grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="font-headline font-bold text-white uppercase tracking-widest text-[10px]">{t('footer.navTitle')}</h4>
            <div className="flex flex-col gap-3 text-white/70 font-medium">
              {navItems.slice(0, 3).map((item) => (
                <Link key={item.path} to={item.path} className="hover:text-white transition-colors">{item.name}</Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-headline font-bold text-white uppercase tracking-widest text-[10px]">&nbsp;</h4>
            <div className="flex flex-col gap-3 text-white/70 font-medium">
              {navItems.slice(3).map((item) => (
                <Link key={item.path} to={item.path} className="hover:text-white transition-colors">{item.name}</Link>
              ))}
            </div>
          </div>
        </div>

        {/* Legal/Small Print Section */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <h4 className="font-headline font-bold text-white uppercase tracking-widest text-[10px]">{t('footer.infoTitle')}</h4>
          <div className="flex flex-col gap-3 text-white/70 font-medium">
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
