import { ArrowLeft, Calendar, MapPin, Tag, Users, Award, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';

interface Event {
  id: number;
  name: string;
  year: string;
  category: string;
  date: string;
  location: string;
  price: string;
  badge: string;
}

interface EventDetailProps {
  event: Event;
  onBack: () => void;
}

export function EventDetail({ event, onBack }: EventDetailProps) {
  const details = {
    overview: `${event.name}は、${event.badge}の大会です。初めての大会参加の方から経験者まで、幅広いレベルの選手が参加できる大会となっています。充実したサポート体制と、フェアな審査基準で、参加者の皆様に最高の体験をお届けします。本大会は${event.category}部門を中心に、全国から多くの選手が集まる注目の大会です。`,
    date: event.date,
    dateDetail: '開場 09:00 / 開始 10:00 / 終了予定 17:00',
    venue: event.location,
    venueDetail: '最寄り駅より徒歩5分、駐車場100台完備（無料）',
    price: event.price,
    priceDetail: '※参加費には大会参加費、審査費用、記念Tシャツが含まれます',
    recruitmentPeriod: '2025年4月1日（火）〜 2025年6月30日（月）',
    recruitmentDetail: '※定員に達し次第、募集を締め切らせていただきます（定員：各部門50名）',
    requirements: [
      '18歳以上の健康な方（高校生不可）',
      '大会規定のポージングウェア着用必須',
      '事前エントリーが必要（当日受付不可）',
      '参加費の事前振込が必要',
      'タンニング（日焼け）は任意ですが推奨',
      '医師の診断書提出（初回参加のみ）'
    ],
    prize: {
      champion: '優勝：10万円 + トロフィー + 副賞',
      second: '準優勝：5万円 + トロフィー',
      third: '第3位：3万円 + トロフィー',
      special: '特別賞：商品券1万円分',
      note: '※各部門ごとに上記賞金・賞品を授与'
    }
  };

  const faqs = [
    {
      q: '初心者でも参加できますか？',
      a: 'はい、初心者の方も大歓迎です！ポージング指導もありますので、安心してご参加ください。'
    },
    {
      q: '当日の持ち物は何が必要ですか？',
      a: 'ポージングウェア、タオル、飲み物、エントリー確認書をお持ちください。'
    },
    {
      q: 'キャンセルはできますか？',
      a: '大会7日前までのキャンセルは可能です。それ以降は返金できませんのでご了承ください。'
    },
    {
      q: '見学は可能ですか？',
      a: 'はい、観覧チケット（1,000円）をご購入いただければ、どなたでも見学できます。'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          戻る
        </button>

        {/* --- デザイン変更箇所ここから --- */}
        {/* メイン画像エリア：高さを調整(h-72 md:h-96) */}
        <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden mb-8 shadow-2xl bg-black">
          
          {/* メインロゴ：中央に配置し、object-containで全体を表示。サイズを調整(max-h-56 md:max-h-64) */}
          <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
            <img 
              src="/lemoncrassic_logo.png" 
              alt={event.name}
              // ▼ object-contain に変更し、高さを調整 ▼
              className="max-w-full max-h-56 md:max-h-64 object-contain drop-shadow-2xl"
            />
          </div>

          {/* 文字を見やすくするためのグラデーション */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
          
          {/* テキスト情報 */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
            <div className="flex items-center gap-3 mb-2">
              <div className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs md:text-sm border border-white/10">
                {event.badge}
              </div>
            </div>
            <h1 className="text-xl md:text-3xl font-bold mb-1 text-white tracking-tight">{event.name}</h1>
            {event.year && <p className="text-base md:text-lg text-white/80 font-medium">{event.year}</p>}
          </div>
        </div>
        {/* --- デザイン変更箇所ここまで --- */}

        {/* 大会情報 */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg border border-gray-100">
          <h2 className="mb-6 text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-500" />
            大会情報
          </h2>
          
          {/* 大会概要 */}
          <div className="mb-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
            <h3 className="mb-3 flex items-center gap-2 text-base font-bold text-gray-800">
              大会概要
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              {details.overview}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* 開催日時 */}
            <div>
              <h3 className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-700">
                <Calendar className="w-4 h-4 text-blue-500" />
                開催日時
              </h3>
              <div className="bg-white rounded-xl p-4 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="font-bold text-gray-800 mb-1">{details.date}</div>
                <div className="text-gray-500 text-xs">{details.dateDetail}</div>
              </div>
            </div>

            {/* 会場 */}
            <div>
              <h3 className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-700">
                <MapPin className="w-4 h-4 text-purple-500" />
                会場
              </h3>
              <div className="bg-white rounded-xl p-4 border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="font-bold text-gray-800 mb-1 text-sm">{details.venue}</div>
                <div className="text-gray-500 text-xs">{details.venueDetail}</div>
              </div>
            </div>

            {/* 参加費 */}
            <div>
              <h3 className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-700">
                <Tag className="w-4 h-4 text-orange-500" />
                参加費
              </h3>
              <div className="bg-white rounded-xl p-4 border border-orange-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="font-bold text-gray-800 mb-1">{details.price}</div>
                <div className="text-gray-500 text-xs">{details.priceDetail}</div>
              </div>
            </div>

            {/* カテゴリー */}
            <div>
              <h3 className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-700">
                <Users className="w-4 h-4 text-green-500" />
                カテゴリー
              </h3>
              <div className="bg-white rounded-xl p-4 border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="font-bold text-gray-800">{event.category}</div>
              </div>
            </div>
          </div>

          {/* 参加条件 */}
          <div className="mb-8">
            <h3 className="mb-3 flex items-center gap-2 text-base font-bold text-gray-800">
              <AlertCircle className="w-5 h-5 text-red-500" />
              参加条件
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {details.requirements.map((req, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-red-50/50 rounded-lg border border-red-100">
                  <CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm font-medium">{req}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 賞金 */}
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-gray-800">
              <Award className="w-5 h-5 text-yellow-500" />
              賞金・表彰
            </h3>
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 rounded-xl p-4 border border-yellow-200 shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md flex-shrink-0">
                  1
                </div>
                <div>
                  <div className="text-sm font-bold text-yellow-800 mb-1">優勝</div>
                  <div className="text-gray-800 font-bold">{details.prize.champion}</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-50 via-slate-50 to-gray-50 rounded-xl p-4 border border-gray-200 shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md flex-shrink-0">
                  2
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-700 mb-1">準優勝</div>
                  <div className="text-gray-800 font-bold">{details.prize.second}</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 rounded-xl p-4 border border-orange-200 shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md flex-shrink-0">
                  3
                </div>
                <div>
                  <div className="text-sm font-bold text-orange-800 mb-1">第3位</div>
                  <div className="text-gray-800 font-bold">{details.prize.third}</div>
                </div>
              </div>
              
              <p className="text-xs text-gray-500 mt-2 text-right">{details.prize.note}</p>
            </div>
          </div>
        </div>

        {/* よくある質問 */}
        <div className="bg-white rounded-2xl p-6 mb-24 shadow-lg border border-gray-100">
          <h2 className="mb-6 text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="group">
                <div className="flex gap-3 mb-2">
                  <span className="text-blue-500 font-bold text-lg">Q.</span>
                  <span className="font-bold text-gray-800 pt-0.5">{faq.q}</span>
                </div>
                <div className="flex gap-3 pl-2 border-l-2 border-blue-100 ml-2 py-1">
                  <span className="text-gray-400 font-bold ml-2">A.</span>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* エントリーボタン（固定） */}
        <div className="fixed bottom-6 left-4 right-4 md:left-auto md:right-auto md:max-w-4xl md:mx-auto md:w-full z-50">
          <div className="bg-gray-900/95 backdrop-blur-md text-white rounded-2xl p-4 shadow-2xl border border-gray-700/50 flex items-center justify-between gap-4">
            <div className="hidden md:block pl-2">
              <div className="font-bold">{event.name}</div>
              <div className="text-xs text-gray-300">{event.date} 開催</div>
            </div>
            <button className="flex-1 md:flex-none bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 font-bold transform hover:-translate-y-0.5">
              <Award className="w-5 h-5" />
              今すぐエントリー
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}