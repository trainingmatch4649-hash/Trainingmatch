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
    'ウェルネス',
    'フィギュア',
    'ウィメンズフィジーク',
    'クラシックフィジーク',
    'ボディビルディング',
    'フィットモデル'
  ];

  const regions = [
    '北海道',
    '東北',
    '関東',
    '中部',
    '関西',
    '中国',
    '四国',
    '九州'
  ];

  const handleLevelSelect = (levelId: string) => {
    const levelLabel = levels.find(l => l.id === levelId)?.label || '';
    onFilterChange({ ...filters, level: levelLabel });
  };

  const handleReset = () => {
    onFilterChange({ level: '', category: '', region: '' });
  };

  return (
    <div id="simple-search" className="bg-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
              <Search className="w-4 h-4 text-white" />
            </div>
            <h2 className="mb-0">簡単検索</h2>
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            複数の条件を選択して、
            <br />
            あなたに合った大会を見つけよう
          </p>
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
                onClick={() => handleLevelSelect(level.id)}
                className={`text-left p-4 rounded-lg border-2 transition-colors ${
                  filters.level === level.label
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
          <button className="px-6 py-3 text-gray-600 hover:text-gray-800" onClick={handleReset}>
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