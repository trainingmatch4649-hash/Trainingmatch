import { useState } from 'react';
import { Sparkles, Award } from 'lucide-react';
import { EventCard } from './EventCard';

export function LevelRecommendations() {
  const [activeTab, setActiveTab] = useState<'beginner' | 'experienced'>('beginner');

  const beginnerEvents = [
    {
      id: 1,
      name: 'LEMON CLASSIC',
      year: '2025 FUKUOKA',
      category: 'ビキニ',
      date: '2025年7月20日',
      location: '福岡県福岡市・パピヨン24ガスホール',
      price: '6,000円',
      badge: '初心者向け'
    },
    {
      id: 2,
      name: 'LEMON CLASSIC 2025 TOKYO',
      year: '',
      category: 'メンズフィジーク',
      date: '2025年9月6日',
      location: '東京都江東区・TFTホール',
      price: '参加費: 6,000円',
      badge: '初心者向け'
    }
  ];

  const experiencedEvents = [
    {
      id: 3,
      name: 'LEMON CLASSIC 2025 OSAKA',
      year: '',
      category: 'ベストボディ',
      date: '2025年7月5日',
      location: '大阪府大阪市・大阪国際交流センター',
      price: '参加費: 6,000円',
      badge: '経験者向け'
    },
    {
      id: 4,
      name: 'LEMON CLASSIC 2025 NAGOYA',
      year: '',
      category: 'クラシックフィジーク',
      date: '2025年8月16日',
      location: '愛知県名古屋市・名古屋市公会堂',
      price: '参加費: 6,000円',
      badge: '経験者向け'
    }
  ];

  const events = activeTab === 'beginner' ? beginnerEvents : experiencedEvents;

  return (
    <div id="level-recommendations" className="bg-gray-50 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="mb-2">レベル別おすすめ大会</h2>
          <p className="text-gray-600">あなたのレベルに合った大会を見つけましょう</p>
        </div>

        {/* タブ */}
        <div className="flex justify-center gap-8 mb-12 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('beginner')}
            className={`flex items-center gap-2 pb-4 border-b-2 transition-colors ${
              activeTab === 'beginner'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <Sparkles className="w-5 h-5" />
            <span>初心者</span>
          </button>
          <button
            onClick={() => setActiveTab('experienced')}
            className={`flex items-center gap-2 pb-4 border-b-2 transition-colors ${
              activeTab === 'experienced'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <Award className="w-5 h-5" />
            <span>経験者</span>
          </button>
        </div>

        {/* 初心者向け大会の情報 */}
        {activeTab === 'beginner' && (
          <div className="mb-8 p-6 bg-white rounded-lg">
            <h3 className="mb-4">初心者向け大会の特徴</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• ポージング指導やウォーキング練習が受けられる</li>
              <li>• 審査基準の説明があり、初めてでも安心</li>
              <li>• 完走・完走を重視し、楽しむことが一緒一</li>
              <li>• 経験豊富なスタッフがサポート</li>
            </ul>
          </div>
        )}

        {/* イベントカード */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
