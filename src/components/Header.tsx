import logoImage from 'figma:asset/Bcm_[jp]ai_A_clean_and_iconic_workout_competition_logo,__inspired_by_sports_c9a3a95a-5036-4c51-80cf-dba722cfe67b.png';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950 border-b border-blue-900/30 px-4 md:px-6 py-3 md:py-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-sm">
            <img src="https://horrible-green-zp0hxcfufe.edgeone.app/logo.png" alt="Training Match Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-sm md:text-xl text-white tracking-wide overflow-visible" style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, letterSpacing: '0.05em', lineHeight: '1.6' }}>
            Training Match
          </span>
        </div>
      </div>
    </header>
  );
}