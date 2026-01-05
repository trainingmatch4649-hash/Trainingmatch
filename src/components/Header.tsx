import logoImage from '/logo.png';

export function Header() {
  return (
    <header className="bg-red-500 text-white p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-sm">
            <img src="/logo.png" alt="Training Match Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-sm md:text-xl text-white tracking-wide overflow-visible" style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, letterSpacing: '0.05em', lineHeight: '1.6' }}>
            Training Match
          </span>
        </div>
      </div>
    </header>
  );
}