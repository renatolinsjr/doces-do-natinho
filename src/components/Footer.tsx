import { INITIAL_CONFIG } from '../data';

export default function Footer() {
  return (
    <footer className="w-full mt-2 flex flex-col items-center justify-center gap-3 bg-transparent">
      <div className="w-3/4 max-w-[240px] border-t-[1.5px] border-dashed border-brand-brown/25 mb-1" />
      <p className="font-sans font-bold text-[13px] text-brand-brown/70 text-center tracking-tight">
        &copy; {new Date().getFullYear()} {INITIAL_CONFIG.profileName}
      </p>
    </footer>
  );
}
