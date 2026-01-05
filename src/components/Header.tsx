import logoImage from "/logo.png";

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      {/* 前面：グラデーションを直接指定（ここが肝） */}
      <div
        className="
          relative
          bg-gradient-to-r
          from-slate-950
          via-blue-950
          to-indigo-950
          border-b border-blue-900/40
          shadow-lg
        "
      >
        {/* 装飾（弱め・ほぼ見えないくらい） */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl" />
        </div>

        {/* コンテンツ */}
        <div className="relative backdrop-blur-sm">
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
      </div>
    </header>
  );
}
