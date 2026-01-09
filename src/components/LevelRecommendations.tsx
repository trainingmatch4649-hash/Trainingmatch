import { useState } from 'react';
import { Sparkles, Award } from 'lucide-react';
import { EventCard } from './EventCard';

interface LevelRecommendationsProps {
  onEventClick: (event: any) => void;
}

export function LevelRecommendations({ onEventClick }: LevelRecommendationsProps) {
  const [activeTab, setActiveTab] = useState<'beginner' | 'experienced'>('beginner');

  const beginnerEvents = [
    {
      id: 1,
      name: 'LEMON CLASSIC 2025 FUKUOKA',
      year: '',
      category: ['ビキニ', 'ノービスフィジーク', 'オープンフィジーク', 'クラシックフィジーク', 'ノービスボディビル', 'オープンボディビル'],
      date: '2025年8月3日',
      location: '福岡国際会議場',
      price: '6,000円',
      badge: '初心者歓迎'
    },
    {
      id: 2,
      name: 'LEMON CLASSIC 2025 NAGOYA',
      year: '',
      category: ['ビキニ', 'ノービスフィジーク', 'オープンフィジーク', 'クラシックフィジーク', 'ノービスボディビル', 'オープンボディビル'],
      date: '2025年7月20日',
      location: '名古屋国際会議場',
      price: '6,000円',
      badge: '初心者歓迎'
    },
    {
      id: 3,
      name: 'LEMON CLASSIC 2025 OKINAWA',
      year: '',
      category: ['ビキニ', 'ノービスフィジーク', 'オープンフィジーク', 'クラシックフィジーク', 'ノービスボディビル', 'オープンボディビル'],
      date: '2025年7月27日',
      location: '沖縄コンベンションセンター',
      price: '6,000円',
      badge: '初心者歓迎'
    },
    {
      id: 7,
      name: 'Mr.筋肉（六大学ボディビルコンテスト）',
      year: '',
      category: ['ノービスフィジーク', 'オープンフィジーク', 'オープンボディビル'],
      date: '2025年11月23日',
      location: 'T2 SHINJUKU',
      price: '3,000円',
      badge: '初心者歓迎'
    }
  ];

  const experiencedEvents = [
    {
      id: 4,
      name: 'LEMON CLASSIC 2025 OSAKA',
      year: '',
      category: ['ビキニ', 'ノービスフィジーク', 'オープンフィジーク', 'クラシックフィジーク', 'ノービスボディビル', 'オープンボディビル'],
      date: '2025年7月5日',
      location: '大阪府大阪市・大阪国際交流センター',
      price: '参加費: 6,000円',
      badge: '経験者向け'
    },
    {
      id: 5,
      name: 'LEMON CLASSIC 2025 TOKYO',
      year: '',
      category: ['ビキニ', 'ノービスフィジーク', 'オープンフィジーク', 'クラシックフィジーク', 'ノービスボディビル', 'オープンボディビル'],
      date: '2025年9月6日',
      location: '東京都江東区・TFTホール',
      price: '参加費: 6,000円',
      badge: '経験者向け'
    },
    {
      id: 6,
      name: 'LEMON CLASSIC 2025 HIROSHIMA',
      year: '',
      category: ['ビキニ', 'ノービスフィジーク', 'オープンフィジーク', 'クラシックフィジーク', 'ノービスボディビル', 'オープンボディビル'],
      date: '2025年9月15日',
      location: '広島県広島市・フェニックスホール',
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
              <li>• 完走・完走を重視し、楽しむことが大事</li>
              <li>• 経験豊富なスタッフがサポート</li>
            </ul>
          </div>
        )}

        {/* イベントカード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} onEventClick={onEventClick} />
          ))}
        </div>
      </div>
    </div>
  );
}