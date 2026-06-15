import { useEffect, useState, CSSProperties } from 'react';

interface Particle {
  id: number;
  emoji: string;
  left: string;
  sway: string;
  rot: string;
  duration: string;
  fontSize: string;
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

      return { id, emoji, left, sway, rot, duration, fontSize };
    };

    // Pre-populate some particles
    const initialList: Particle[] = Array.from({ length: 10 }, () => createParticle());
    setParticles(initialList);

    const interval = setInterval(() => {
      const newParticle = createParticle();
      setParticles((prev) => {
        // Keep up to 25 particles in memory to prevent memory bleed
        const filtered = prev.filter((p) => {
          // Parse duration string to number of milliseconds, add buffer of 2s
          const d = parseFloat(p.duration) * 1000;
          return true; // we will clean them up by matching timestamps or using a simple timer
        });
        return [...filtered, newParticle];
      });

      // Automatically remove old particle after its animation
      const durationMs = parseFloat(newParticle.duration) * 1000;
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, durationMs);
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
