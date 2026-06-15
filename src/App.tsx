import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

import { LinkType } from './types';
import { INITIAL_CONFIG, BASE_URL } from './data';
import FallingParticles from './components/FallingParticles';
import BackgroundDecoration from './components/BackgroundDecoration';
import ProfileHeader from './components/ProfileHeader';
import LinkList from './components/LinkList';
import LocationPanel from './components/LocationPanel';
import Footer from './components/Footer';

export default function App() {
  const [activePanel, setActivePanel] = useState<'links' | 'localizacao'>('links');

  const handleLinkAction = (type: LinkType, url?: string) => {
    switch (type) {
      case 'url':
        if (url) window.open(url, '_blank');
        else console.warn(`Link type "url" missing "url" field`);
        break;
      case 'whatsapp': {
        const message = `Olá! Vi o link no seu perfil e gostaria de tirar uma dúvida sobre os deliciosos doces! 🥰`;
        const cleaned = INITIAL_CONFIG.whatsappNumber.replace(/\D/g, '');
        window.open(`https://wa.me/${cleaned}?text=${encodeURIComponent(message)}`, '_blank');
        break;
      }
      case 'encomendas':
        window.open(`${BASE_URL}/loja`, '_blank');
        break;
      case 'location':
        setActivePanel('localizacao');
        break;
    }
  };

  return (
    <div className="bg-brand-cream text-brand-brown min-h-screen font-sans flex flex-col items-center py-8 px-4 relative z-0 selection:bg-brand-pink select-none overflow-x-hidden">
      <FallingParticles />
      <BackgroundDecoration />

      <div className="w-full max-w-[480px] flex flex-col items-center gap-6 relative z-10 my-auto">
        <AnimatePresence mode="wait">
          {activePanel === 'links' && (
            <motion.div
              key="header"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <ProfileHeader />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {activePanel === 'links' && (
            <motion.div
              key="main-links"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
            >
              <LinkList onAction={handleLinkAction} />
            </motion.div>
          )}

          {activePanel === 'localizacao' && (
            <motion.div
              key="panel-location"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              <LocationPanel onBack={() => setActivePanel('links')} />
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </div>
    </div>
  );
}
