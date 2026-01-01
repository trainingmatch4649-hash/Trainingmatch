import logoImage from 'logo.png';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950 border-b border-blue-900/30 px-4 md:px-6 py-3 md:py-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-sm">
            <img src={logoImage} alt="Training Match Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-sm md:text-base text-white">
            Training Match
          </span>
        </div>
      </div>
    </header>
  );
}