import { INITIAL_CONFIG } from '../data';

export default function ProfileHeader() {
  return (
    <div className="flex flex-col items-center text-center gap-2">
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
        <div className="h-0.5 w-full bg-brand-brown/25 rounded-full" />
        <span className="text-lg drop-shadow-sm select-none flex flex-row items-center whitespace-nowrap">
          🍩🍫🧁
        </span>
        <div className="h-0.5 w-full bg-brand-brown/25 rounded-full" />
      </div>
    </div>
  );
}
