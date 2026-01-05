import logoImage from "/logo.png";

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div
        className="
          relative
          bg-blue-950
          border-b border-blue-900/50
          shadow-lg
        "
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center bg-white/10">
              <img
                src={logoImage}
                alt="Training Match Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <span
              className="text-sm md:text-xl text-white tracking-wide"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.05em",
                lineHeight: "1.6",
              }}
            >
              Training Match
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
