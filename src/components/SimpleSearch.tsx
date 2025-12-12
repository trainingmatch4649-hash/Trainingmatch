import { Users, MapPin, Search } from 'lucide-react';

interface SimpleSearchProps {
  filters: {
    level: string;
    category: string;
    region: string;
  };
  onFilterChange: (filters: any) => void;
  onNavigate: (view: 'home' | 'diagnosis' | 'scheduled') => void;
}

export function SimpleSearch({ filters, onFilterChange, onNavigate }: SimpleSearchProps) {
  const levels = [
    { id: 'beginner', label: '初心者向け', subtitle: '初めての大会参加' },
    { id: 'experienced', label: '経験者向け', subtitle: '大会出場経験者向け' }
  ];

  const categories = [
    'メンズフィジーク',
    'ビキニ',
    'ボディビル',
    'ウィメンズフィジーク',
    'ベストボディ',
    'クラシックフィジーク'
  ];

  const regions = [
    '関東',
    '関西',
    '中部',
    '九州',
    '北海道',
    '東北'
  ];

  return (
    <div id="simple-search" className="bg-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-2">簡単検索</h2>
          <p className="text-gray-600">複数の条件を選択して、あなたに合った大会を見つけよう</p>
        </div>

        {/* レベルから探す */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5" />
            <h3>レベルから探す</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {levels.map((level) => (
              <button
                key={level.id}
                onClick={() => onFilterChange({ ...filters, level: level.id })}
                className={`text-left p-4 rounded-lg border-2 transition-colors ${
                  filters.level === level.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div>{level.label}</div>
                <div className="text-sm text-gray-500">{level.subtitle}</div>
              </button>
            ))}
          </div>
        </div>

        {/* 種目から探す */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5" />
            <h3>種目から探す</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onFilterChange({ ...filters, category })}
                className={`p-4 rounded-lg border-2 transition-colors ${
                  filters.category === category
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 地域から探す */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5" />
            <h3>地域から探す</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => onFilterChange({ ...filters, region })}
                className={`p-4 rounded-lg border-2 transition-colors ${
                  filters.region === region
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* アクションボタン */}
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 text-gray-600 hover:text-gray-800">
            リセット
          </button>
          <button 
            onClick={() => onNavigate('scheduled')}
            className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 flex items-center gap-2"
          >
            <Search className="w-5 h-5" />
            この条件で検索
          </button>
        </div>
      </div>
    </div>
  );
}
