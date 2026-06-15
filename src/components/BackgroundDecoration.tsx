import { Sparkles, Store, Heart } from 'lucide-react';

export default function BackgroundDecoration() {
  return (
    <div className="fixed inset-0 z-[-2] pointer-events-none opacity-[0.06] overflow-hidden flex flex-wrap justify-between items-center p-12 gap-24">
      {Array.from({ length: 15 }).map((_, i) => (
        <div key={i} className="flex gap-16">
          <Sparkles size={64} className="text-brand-brown" />
          <Store size={48} className="text-brand-brown" />
          <Heart size={56} className="text-brand-brown" />
        </div>
      ))}
    </div>
  );
}
