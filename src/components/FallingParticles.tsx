import { useEffect, useState, CSSProperties } from 'react';

interface Particle {
  id: number;
  emoji: string;
  left: string;
  sway: string;
  rot: string;
  duration: string;
  fontSize: string;
  createdAt: number;
}

const EMOJIS = ['🍩', '🍫', '🧁', '🍬', '🍭', '🍪', '🍓'];

export default function FallingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    let idCounter = 0;

    const createParticle = (): Particle => {
      const id = ++idCounter;
      const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      const left = `${Math.random() * 100}%`;
      const sway = `${(Math.random() - 0.5) * 160}px`;
      const rot = `${Math.random() * 360 + 180}deg`;
      const duration = `${8 + Math.random() * 8}s`;
      const fontSize = `${20 + Math.random() * 16}px`;

      return { id, emoji, left, sway, rot, duration, fontSize, createdAt: Date.now() };
    };

    // Pre-populate some particles
    const initialList: Particle[] = Array.from({ length: 10 }, () => createParticle());
    setParticles(initialList);

    const interval = setInterval(() => {
      const newParticle = createParticle();
      setParticles((prev) => {
        const now = Date.now();
        return [
          ...prev.filter((p) => now - p.createdAt < parseFloat(p.duration) * 1000),
          newParticle,
        ];
      });
    }, 1800);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute text-2xl filter saturate-75 brightness-105 select-none animate-fall"
          style={
            {
              left: p.left,
              top: '-50px',
              fontSize: p.fontSize,
              animationName: 'fallSway',
              animationDuration: p.duration,
              animationTimingFunction: 'linear',
              animationFillMode: 'forwards',
              '--sway-amount': p.sway,
              '--rotate-amount': p.rot,
            } as CSSProperties
          }
        >
          {p.emoji}
        </span>
      ))}
      <style>{`
        @keyframes fallSway {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.35;
          }
          90% {
            opacity: 0.35;
          }
          100% {
            transform: translateY(110vh) translateX(var(--sway-amount)) rotate(var(--rotate-amount));
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
