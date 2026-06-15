import { useState } from 'react';
import { MapPin, Clock, Copy, Check, Navigation, ExternalLink, Store } from 'lucide-react';
import { INITIAL_CONFIG } from '../data';
import { renderIcon } from './IconRegistry';

interface LocationPanelProps {
  onBack: () => void;
}

export default function LocationPanel({ onBack }: LocationPanelProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(INITIAL_CONFIG.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-[500px] bg-brand-cream border-2 border-brand-brown rounded-2xl flex flex-col overflow-hidden btn-shadow relative z-20">
      <div className="p-4 bg-brand-pink border-b-2 border-brand-brown flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center justify-center p-2 rounded-full border-2 border-brand-brown bg-brand-cream hover:bg-brand-orange text-brand-brown transition-all hover:scale-105 active:scale-95 btn-shadow-sm cursor-pointer"
          title="Voltar"
        >
          {renderIcon('BackRoute', 18)}
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
            <div className="absolute h-4 w-full bg-brand-brown/10 top-12 left-0 transform -rotate-12" />
            <div className="absolute h-4 w-full bg-brand-brown/10 top-32 left-0 transform rotate-6" />
            <div className="absolute w-4 h-full bg-brand-brown/10 left-20 top-0 transform rotate-12" />
            <div className="absolute w-4 h-full bg-brand-brown/10 left-64 top-0 transform -rotate-6" />
          </div>

          <div className="absolute top-[35%] left-[45%] flex flex-col items-center z-10">
            <span className="text-2xl animate-bounce drop-shadow">🧁</span>
            <div className="w-5 h-2 bg-brand-brown/30 rounded-full blur-[1px] transform scale-x-125" />
          </div>

          <div className="relative z-10 bg-white border border-brand-brown p-2.5 rounded-lg flex items-center gap-2 shadow-sm">
            <div className="bg-brand-pink p-1.5 rounded-md border border-brand-brown">
              <Store size={14} className="text-brand-brown" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-black uppercase text-brand-brown/60 tracking-wider">
                Ateliê Físico
              </p>
              <p className="text-xs font-extrabold text-brand-brown">Doces do Natinho Doceria</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3.5 mt-1">
          <InfoRow icon={<MapPin size={16} className="text-brand-brown" />} label="Endereço">
            <p className="text-sm font-bold text-brand-brown leading-snug mt-0.5">
              {INITIAL_CONFIG.address}
            </p>
          </InfoRow>

          <InfoRow
            icon={<Clock size={16} className="text-brand-brown" />}
            label="Horário de Funcionamento"
          >
            <p className="text-sm font-bold text-brand-brown mt-0.5">
              {INITIAL_CONFIG.openingHours}
            </p>
          </InfoRow>
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
    </div>
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-2.5 items-start">
      <div className="bg-brand-orange/40 border border-brand-brown/30 p-2 rounded-xl shrink-0 mt-0.5">
        {icon}
      </div>
      <div className="flex-1 text-left">
        <h4 className="text-xs font-black uppercase tracking-wider text-brand-brown/60">{label}</h4>
        {children}
      </div>
    </div>
  );
}
