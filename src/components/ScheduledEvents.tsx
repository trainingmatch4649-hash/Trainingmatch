import { useState } from 'react';
import { ArrowLeft, Search, ChevronDown } from 'lucide-react';
import { EventCard } from './EventCard';

interface ScheduledEventsProps {
  onBack: () => void;
  onEventClick: (eventId: number) => void;
  searchFilters?: {
    level: string;
    category: string;
    region: string;
  };
}

export function ScheduledEvents({ onBack, onEventClick, searchFilters }: ScheduledEventsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    level: searchFilters?.level || 'すべて',
    category: searchFilters?.category || 'すべて',
    region: searchFilters?.region || 'すべて',
    month: 'すべて'
  });

  const allEvents = [
    {
      id: 1,
      name: 'LEMON CLASSIC 2025 OSAKA',
      year: '',
      category: ['ビキニ', 'ノービスフィジーク', 'オープンフィジーク', 'クラシックフィジーク', 'ノービスボディビル', 'オープンボディビル'],
      date: '2025年7月5日',
      location: '大阪府大阪市・大阪国際交流センター',
      price: '参加費: 6,000円',
      badge: '経験者向け',
      region: '関西',
      month: '7月'
    },
    {
      id: 2,
      name: 'LEMON CLASSIC 2025 FUKUOKA',
      year: '',
      category: ['ビキニ', 'ノービスフィジーク', 'オープンフィジーク', 'クラシックフィジーク', 'ノービスボディビル', 'オープンボディビル'],
      date: '2025年7月20日',
      location: '福岡県福岡市・パピヨン24ガスホール',
      price: '参加費: 6,000円',
      badge: '初心者向け',
      region: '九州',
      month: '7月'
    },
    {
      id: 3,
      name: 'LEMON CLASSIC 2025 NAGOYA',
      year: '',
      category: ['ビキニ', 'ノービスフィジーク', 'オープンフィジーク', 'クラシックフィジーク', 'ノービスボディビル', 'オープンボディビル'],
      date: '2025年8月16日',
      location: '愛知県名古屋市・名古屋市公会堂',
      price: '参加費: 6,000円',
      badge: '初心者向け',
      region: '中部',
      month: '8月'
    },
    {
      id: 4,
      name: 'LEMON CLASSIC 2025 OKINAWA',
      year: '',
      category: ['ビキニ', 'ノービスフィジーク', 'オープンフィジーク', 'クラシックフィジーク', 'ノービスボディビル', 'オープンボディビル'],
      date: '2025年8月30日',
      location: '沖縄県沖縄市・てだこホール',
      price: '参加費: 6,000円',
      badge: '初心者向け',
      region: '九州',
      month: '8月'
    },
    {
      id: 5,
      name: 'LEMON CLASSIC 2025 TOKYO',
      year: '',
      category: ['ビキニ', 'ノービスフィジーク', 'オープンフィジーク', 'クラシックフィジーク', 'ノービスボディビル', 'オープンボディビル'],
      date: '2025年9月6日',
      location: '東京都江東区・TFTホール',
      price: '参加費: 6,000円',
      badge: '経験者向け',
      region: '関東',
      month: '9月'
    },
    {
      id: 6,
      name: 'LEMON CLASSIC 2025 HIROSHIMA',
      year: '',
      category: ['ビキニ', 'ノービスフィジーク', 'オープンフィジーク', 'クラシックフィジーク', 'ノービスボディビル', 'オープンボディビル'],
      date: '2025年9月15日',
      location: '広島県広島市・フェニックスホール',
      price: '参加費: 6,000円',
      badge: '経験者向け',
      region: '中国',
      month: '9月'
    }
  ];

  // フィルタリングロジック
  const filteredEvents = allEvents.filter((event) => {
    // 大会名検索
    if (searchQuery && !event.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // レベルフィルター
    if (filters.level !== 'すべて' && event.badge !== filters.level) {
      return false;
    }

    // カテゴリーフィルター
    if (filters.category !== 'すべて') {
      // 「ボディビルディング」選択時は「ノービスボディビル」と「オープンボディビル」の両方を含むものを検索
      if (filters.category === 'ボディビルディング') {
        if (!event.category.includes('ノービスボディビル') || !event.category.includes('オープンボディビル')) {
          return false;
        }
      } 
      // 「メンズフィジーク」選択時は「ノービスフィジーク」と「オープンフィジーク」の両方を含むものを検索
      else if (filters.category === 'メンズフィジーク') {
        if (!event.category.includes('ノービスフィジーク') || !event.category.includes('オープンフィジーク')) {
          return false;
        }
      } 
      else if (!event.category.includes(filters.category)) {
        return false;
      }
    }

    // 地域フィルター
    if (filters.region !== 'すべて' && event.region !== filters.region) {
      return false;
    }

    // 開催月フィルター
    if (filters.month !== 'すべて' && event.month !== filters.month) {
      return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          戻る
        </button>

        {/* 検索バー */}
        <div className="bg-white rounded-lg p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="大会名で検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* フィルター */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative">
              <label className="block text-sm mb-2">レベル</label>
              <select
                value={filters.level}
                onChange={(e) => setFilters({ ...filters, level: e.target.value })}
                className="w-full appearance-none px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>すべて</option>
                <option>初心者向け</option>
                <option>経験者向け</option>
              </select>
              <ChevronDown className="absolute right-3 top-9 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            <div className="relative">
              <label className="block text-sm mb-2">種目</label>
              <select
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="w-full appearance-none px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>すべて</option>
                <option>メンズフィジーク</option>
                <option>ビキニ</option>
                <option>ボディビル</option>
                <option>ベストボディ</option>
                <option>クラシックフィジーク</option>
                <option>ウィメンズフィジーク</option>
                <option>ボディビルディング</option>
              </select>
              <ChevronDown className="absolute right-3 top-9 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            <div className="relative">
              <label className="block text-sm mb-2">地域</label>
              <select
                value={filters.region}
                onChange={(e) => setFilters({ ...filters, region: e.target.value })}
                className="w-full appearance-none px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>すべて</option>
                <option>北海道</option>
                <option>東北</option>
                <option>関東</option>
                <option>中部</option>
                <option>関西</option>
                <option>中国</option>
                <option>四国</option>
                <option>九州</option>
              </select>
              <ChevronDown className="absolute right-3 top-9 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            <div className="relative">
              <label className="block text-sm mb-2">開催月</label>
              <select
                value={filters.month}
                onChange={(e) => setFilters({ ...filters, month: e.target.value })}
                className="w-full appearance-none px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>すべて</option>
                <option>7月</option>
                <option>8月</option>
                <option>9月</option>
              </select>
              <ChevronDown className="absolute right-3 top-9 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* イベント一覧 */}
        <div className="flex justify-between items-center mb-6">
          <h2>開催予定の大会</h2>
          <span className="text-gray-600">{filteredEvents.length}件の大会</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} onEventClick={onEventClick} />
          ))}
        </div>
      </div>
    </div>
  );
}