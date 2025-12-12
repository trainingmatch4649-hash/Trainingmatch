import { Dumbbell, Sparkles, Award } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-md">
            <Dumbbell className="w-6 h-6 text-white" />
          </div>
          <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Training Match
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-300">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span>初心者</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors duration-300">
            <Award className="w-4 h-4 text-purple-500" />
            <span>経験者</span>
          </button>
        </div>
      </div>
    </header>
  );
}