import { Search, Users, Sparkles, Calendar } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (view: 'home' | 'diagnosis' | 'scheduled') => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const features = [
    {
      icon: Search,
      title: '簡単検索',
      subtitle: 'ボタンで選択',
      action: () => {
        document.getElementById('simple-search')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      icon: Users,
      title: '初心者歓迎',
      subtitle: 'レベル別検索',
      action: () => {
        document.getElementById('level-recommendations')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      icon: Sparkles,
      title: '大会診断',
      subtitle: 'おすすめ提案',
      action: () => onNavigate('diagnosis')
    },
    {
      icon: Calendar,
      title: '開催予定',
      subtitle: '大会一覧',
      action: () => onNavigate('scheduled')
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white px-6 py-20 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h1 className="mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent text-2xl md:text-4xl lg:text-5xl">
            あなたにぴったりのフィットネス大会を見つけよう
          </h1>
          <p className="text-slate-300 text-sm md:text-lg">
            初めての大会参加でも安心、レベル、種目、地域から自分に合った大会を簡単に検索できます。
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={feature.action}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div className="mb-1 text-base">{feature.title}</div>
              <div className="text-xs text-slate-400">{feature.subtitle}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}