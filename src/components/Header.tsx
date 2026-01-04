import { Sparkles, Award } from 'lucide-react';
// Dumbbell は画像に置き換えるので削除しました

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 md:px-6 py-3 md:py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          {/* ▼ ここをアイコンから画像に変更しました ▼ */}
          <img 
            src="/logo.png" 
            alt="Training Match" 
            className="w-8 h-8 md:w-10 md:h-10 rounded-xl object-contain shadow-md"
          />
          {/* ▲ ここまで ▲ */}

          <span className="text-sm md:text-base font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Training Match
          </span>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <button className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1.5 md:py-2 rounded-lg hover:bg-blue-50 transition-colors duration-300">
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-500" />
            <span className="text-xs md:text-sm">初心者</span>
          </button>
          <button className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1.5 md:py-2 rounded-lg hover:bg-purple-50 transition-colors duration-300">
            <Award className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-500" />
            <span className="text-xs md:text-sm">経験者</span>
          </button>
        </div>
      </div>
    </header>
  );
}