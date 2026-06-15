import { useState } from 'react';
import {
  Instagram,
  Store,
  ShoppingBag,
  ThumbsUp,
  MapPin,
  Copy,
  Check,
  ExternalLink,
  Clock,
  Navigation,
  Sparkles,
  Heart
} from 'lucide-react';
import { IoLogoWhatsapp } from "react-icons/io";

import { motion, AnimatePresence } from 'motion/react';

import { INITIAL_CONFIG, BASE_URL } from './data';
import FallingParticles from './components/FallingParticles';
import { IoLogoInstagram } from 'react-icons/io';
import { FaSquareInstagram } from 'react-icons/fa6';
import { SiGooglemaps, SiIfood } from 'react-icons/si';
import { FaFacebookSquare } from 'react-icons/fa';
import { LuDonut } from 'react-icons/lu';
import { GiCupcake, GiDonut } from 'react-icons/gi';

export default function App() {
  const [activePanel, setActivePanel] = useState<'links' | 'localizacao'>('links');
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(INITIAL_CONFIG.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getWhatsAppContactUrl = () => {
    const message = `Olá! Vi o link no seu perfil e gostaria de tirar uma dúvida sobre os deliciosos doces! 🥰`;
    const cleaned = INITIAL_CONFIG.whatsappNumber.replace(/\D/g, '');
    return `https://wa.me/${cleaned}?text=${encodeURIComponent(message)}`;
  };

  const renderIcon = (name: string, size = 26) => {
    switch (name) {
      case 'Instagram':
        return <FaSquareInstagram  size={size} color="#C13584" />;
      case 'WhatsApp':
        return <IoLogoWhatsapp size={size} color='green' />;
      case 'Store':
        return <GiCupcake size={size} color="#8B4513" />;
      case 'ShoppingBag':
        return <SiIfood size={size} color="red" />;
      case 'ThumbsUp':
        return <FaFacebookSquare size={size} color="#1877F2" />;
      case 'MapPin':
        return <SiGooglemaps size={size} color="#4285F4" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-brand-cream text-brand-brown min-h-screen font-sans flex flex-col items-center py-8 px-4 relative z-0 selection:bg-brand-pink select-none overflow-x-hidden">
      
      <FallingParticles />

      <div className="fixed inset-0 z-[-2] pointer-events-none opacity-[0.06] overflow-hidden flex flex-wrap justify-between items-center p-12 gap-24">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="flex gap-16">
            <Sparkles size={64} className="text-brand-brown" />
            <Store size={48} className="text-brand-brown" />
            <Heart size={56} className="text-brand-brown" />
          </div>
        ))}
      </div>

      <div className="w-full max-w-[480px] flex flex-col items-center gap-6 relative z-10 my-auto">
        
        <AnimatePresence mode="wait">
          {activePanel === 'links' && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="profile-img-container w-[116px] h-[116px] rounded-full border-[4px] border-brand-brown overflow-hidden bg-white shadow-md select-none pointer-events-none">
                <img
                  alt="Foto de perfil Natinho"
                  className="w-full h-full object-cover"
                  src={INITIAL_CONFIG.profileImage}
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-col items-center mt-2">
                <h1 className="font-sans font-black text-3xl tracking-tight text-brand-brown drop-shadow-sm">
                  {INITIAL_CONFIG.profileName}
                </h1>
                <p className="font-sans font-bold text-base text-brand-brown/80 italic mt-0.5 flex items-center gap-1 bg-white/40 px-3.5 py-0.5 rounded-full border border-brand-brown/5">
                  {INITIAL_CONFIG.profileSubtitle}
                </p>
              </div>

              <div className="flex items-center justify-center gap-3 w-full max-w-[260px] py-1 mt-1">
                <div className="h-0.5 w-full bg-brand-brown/25 rounded-full"></div>
                <span className="text-lg drop-shadow-sm select-none flex flex-row items-center whitespace-nowrap">🍩🍫🧁</span>
                <div className="h-0.5 w-full bg-brand-brown/25 rounded-full"></div>
              </div>
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
              className="w-full flex flex-col gap-4 mt-2"
            >
              {[
                { id: 'insta', label: 'Instagram', icon: 'Instagram', action: () => window.open(INITIAL_CONFIG.instagramUrl, '_blank') },
                { id: 'whats', label: 'WhatsApp', icon: 'WhatsApp', action: () => window.open(getWhatsAppContactUrl(), '_blank') },
                { id: 'encomendas', label: 'Encomendas', icon: 'Store', action: () => window.open(`${BASE_URL}/loja`, '_blank') },
                { id: 'ifood', label: 'iFood', icon: 'ShoppingBag', action: () => window.open(INITIAL_CONFIG.ifoodUrl, '_blank') },
                { id: 'fb', label: 'Facebook', icon: 'ThumbsUp', action: () => window.open(INITIAL_CONFIG.facebookUrl, '_blank') },
                { id: 'loc', label: 'Nossa Localização', icon: 'MapPin', action: () => setActivePanel('localizacao') },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={item.action}
                  id={`btn-link-${item.id}`}
                  className="group relative w-full flex items-center py-3.5 px-6 rounded-full bg-brand-blue border-[2.5px] border-brand-brown text-brand-brown font-sans text-xl font-extrabold leading-tight transition-all duration-200 hover:scale-[1.03] hover:bg-brand-blue-hover active:translate-x-[2px] active:translate-y-[2px] btn-shadow cursor-pointer pointer-events-auto"
                >
                  <span className="absolute left-6 text-brand-brown flex items-center justify-center">
                    {renderIcon(item.icon)}
                  </span>
                  <span className="w-full text-center pr-2">
                    {item.label}
                  </span>
                </button>
              ))}
            </motion.div>
          )}

          {activePanel === 'localizacao' && (
            <motion.div
              key="panel-location"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-[500px] bg-brand-cream border-2 border-brand-brown rounded-2xl flex flex-col overflow-hidden btn-shadow relative z-20"
            >
              <div className="p-4 bg-brand-pink border-b-2 border-brand-brown flex items-center justify-between">
                <button
                  onClick={() => setActivePanel('links')}
                  className="flex items-center justify-center p-2 rounded-full border-2 border-brand-brown bg-brand-cream hover:bg-brand-orange text-brand-brown transition-all hover:scale-105 active:scale-95 btn-shadow-sm cursor-pointer"
                  title="Voltar"
                >
                  {renderIcon('MapPin', 18)}
                </button>
                <div className="text-center flex-1 pr-6">
                  <h2 className="font-sans font-extrabold text-xl text-brand-brown tracking-tight">
                    Nossa Localização
                  </h2>
                  <p className="text-xs text-brand-brown/85 font-semibold mt-0.5">Venha nos visitar ✨</p>
                </div>
              </div>

              <div className="p-5 flex flex-col gap-4 bg-white/60">
                
                <div className="h-[180px] w-full rounded-xl border-2 border-brand-brown bg-brand-blue/30 relative overflow-hidden flex flex-col justify-end p-3 shadow-inner">
                  
                  <div className="absolute inset-0 z-0 opacity-40">
                    <div className="absolute h-4 w-full bg-brand-brown/10 top-12 left-0 transform -rotate-12"></div>
                    <div className="absolute h-4 w-full bg-brand-brown/10 top-32 left-0 transform rotate-6"></div>
                    <div className="absolute w-4 h-full bg-brand-brown/10 left-20 top-0 transform rotate-12"></div>
                    <div className="absolute w-4 h-full bg-brand-brown/10 left-64 top-0 transform -rotate-6"></div>
                  </div>

                  <div className="absolute top-[35%] left-[45%] flex flex-col items-center z-10">
                    <span className="text-2xl animate-bounce drop-shadow">🧁</span>
                    <div className="w-5 h-2 bg-brand-brown/30 rounded-full blur-[1px] transform scale-x-125"></div>
                  </div>

                  <div className="relative z-10 bg-white border border-brand-brown p-2.5 rounded-lg flex items-center gap-2 shadow-sm">
                    <div className="bg-brand-pink p-1.5 rounded-md border border-brand-brown">
                      <Store size={14} className="text-brand-brown" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-black uppercase text-brand-brown/60 tracking-wider">Ateliê Físico</p>
                      <p className="text-xs font-extrabold text-brand-brown">Doces do Natinho Doceria</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3.5 mt-1">
                  
                  <div className="flex gap-2.5 items-start">
                    <div className="bg-brand-orange/40 border border-brand-brown/30 p-2 rounded-xl shrink-0 mt-0.5">
                      <MapPin size={16} className="text-brand-brown" />
                    </div>
                    <div className="flex-1 text-left">
                      <h4 className="text-xs font-black uppercase tracking-wider text-brand-brown/60">Endereço</h4>
                      <p className="text-sm font-bold text-brand-brown leading-snug mt-0.5">
                        {INITIAL_CONFIG.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2.5 items-start">
                    <div className="bg-brand-orange/40 border border-brand-brown/30 p-2 rounded-xl shrink-0 mt-0.5">
                      <Clock size={16} className="text-brand-brown" />
                    </div>
                    <div className="flex-1 text-left">
                      <h4 className="text-xs font-black uppercase tracking-wider text-brand-brown/60">Horário de Funcionamento</h4>
                      <p className="text-sm font-bold text-brand-brown mt-0.5">
                        {INITIAL_CONFIG.openingHours}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3.5 pt-3 border-t border-brand-brown/15">
                  <button
                    onClick={handleCopyAddress}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full border-2 border-brand-brown bg-white hover:bg-brand-cream font-bold text-xs text-brand-brown transition-all active:scale-95 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-green-800" strokeWidth={3} />
                        Copiado!
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        Copiar Endereço
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => window.open(INITIAL_CONFIG.addressMapUrl, '_blank')}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full border-2 border-brand-brown bg-brand-blue hover:bg-brand-blue-hover font-black text-xs text-brand-brown transition-all btn-shadow-sm cursor-pointer"
                  >
                    <Navigation size={13} />
                    Rotas no Maps
                    <ExternalLink size={11} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>

        <footer className="w-full mt-2 flex flex-col items-center justify-center gap-3 bg-transparent">
          <div className="w-3/4 max-w-[240px] border-t-[1.5px] border-dashed border-brand-brown/25 mb-1"></div>
          <p className="font-sans font-bold text-[13px] text-brand-brown/70 text-center tracking-tight">
            © {new Date().getFullYear()} {INITIAL_CONFIG.profileName}
          </p>
        </footer>
      </div>
    </div>
  );
}
