import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Kontakt = () => {
  const { t } = useLanguage();

  return (
    <div className="flex-grow pt-24 pb-24">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Hero Header */}
        <div className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-4"
          >
            {t('contact.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-body text-base text-on-surface-variant max-w-xl mx-auto"
          >
            {t('contact.desc')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-surface-container-lowest/60 backdrop-blur-xl p-8 rounded-xl border border-outline-variant/15 shadow-[0_20px_40px_rgba(5,25,66,0.06)] relative overflow-hidden group">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-fixed-dim/10 rounded-full blur-3xl transition-all duration-700"></div>
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-6 relative z-10">{t('contact.formTitle')}</h2>
              <form className="space-y-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">{t('contact.name')}</label>
                    <input className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-sm text-on-surface outline-none focus:ring-1 focus:ring-on-surface/10 transition-all" placeholder={t('contact.namePlaceholder')} type="text" />
                  </div>
                  <div>
                    <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">{t('contact.email')}</label>
                    <input className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-sm text-on-surface outline-none focus:ring-1 focus:ring-on-surface/10 transition-all" placeholder={t('contact.emailPlaceholder')} type="email" />
                  </div>
                </div>
                <div>
                  <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">{t('contact.message')}</label>
                  <textarea className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-sm text-on-surface outline-none focus:ring-1 focus:ring-on-surface/10 transition-all h-32 resize-none" placeholder={t('contact.messagePlaceholder')}></textarea>
                </div>
                <button className="bg-on-surface text-surface px-8 py-3 rounded-xl font-label text-sm font-bold hover:bg-secondary hover:text-on-primary transition-all duration-300 shadow-sm flex items-center justify-center gap-2">
                  {t('contact.send')}
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {[
              { icon: 'location_on', title: t('contact.addressTitle'), content: t('contact.address') },
              { icon: 'call', title: t('contact.phoneTitle'), content: '+381 11 123 4567', sub: t('contact.phoneSub') },
              { icon: 'mail', title: t('contact.emailTitle'), content: 'info@plodovibacke.rs' }
            ].map((info) => (
              <div key={info.title} className="bg-surface-container-low/50 p-5 rounded-xl border border-outline-variant/15 flex items-start gap-4 hover:bg-surface-container-low transition-colors duration-300">
                <div className="bg-on-surface/5 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-surface text-xl">{info.icon}</span>
                </div>
                <div>
                  <h3 className="font-headline text-base font-bold text-on-surface mb-1">{info.title}</h3>
                  <p className="font-body text-sm text-on-surface-variant">{info.content}</p>
                  {info.sub && <p className="text-[10px] text-on-surface-variant/60 mt-0.5">{info.sub}</p>}
                </div>
              </div>
            ))}

            <div className="flex-grow min-h-[250px] rounded-xl overflow-hidden relative border border-outline-variant/15 shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44933.27533810243!2d19.351284531846142!3d45.2612984578832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b08e503375839%3A0x709f6e696203a1!2sBa%C4%8Dka%20Palanka!5e0!3m2!1sen!2srs!4v1713462681534!5m2!1sen!2srs" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Bačka Palanka"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
