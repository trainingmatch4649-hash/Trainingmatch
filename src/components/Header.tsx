import logoImage from "/logo.png";

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      {/* 背景（HeroSectionと同じ発想でレイヤ分け） */}
      <div className="absolute inset-0 overflow-hidden">
        {/* ベース背景：ここがないと透明に見えがち */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950" />

        {/* ふわっと装飾（HeroSectionと同じ） */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

        {/* 透明感を出す薄膜（必要なら） */}
        <div className="absolute inset-0 bg-slate-950/40" />
      </div>

      {/* コンテンツ（前面） */}
      <div className="relative border-b border-blue-900/30 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-sm">
              <img
                src="./logoImage"
                alt="Training Match Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <span
              className="text-sm md:text-xl text-white tracking-wide overflow-visible"
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
