import { ArrowLeft, Calendar, MapPin, Tag, Users, Clock, Award, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import { useEffect } from 'react';
import mrMuscleImage from '/Mr.Muscle.png';
import lemonClassicImage from '/lemoncrassic_logo.png';

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
  // ページトップにスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // LEMON CLASSIC 2025 FUKUOKA の特別な詳細情報
  const isLemonFukuoka = event.name === 'LEMON CLASSIC 2025 FUKUOKA';
  
  // LEMON CLASSIC 2025 OSAKA の特別な詳細情報
  const isLemonOsaka = event.name === 'LEMON CLASSIC 2025 OSAKA';
  
  // その他の大会判定
  const isLemonNagoya = event.name === 'LEMON CLASSIC 2025 NAGOYA';
  const isLemonOkinawa = event.name === 'LEMON CLASSIC 2025 OKINAWA';
  const isLemonTokyo = event.name === 'LEMON CLASSIC 2025 TOKYO';
  const isLemonHiroshima = event.name === 'LEMON CLASSIC 2025 HIROSHIMA';
  
  // Mr.筋肉（六大学ボディビルコンテスト）の判定
  const isMrMuscle = event.name === 'Mr.筋肉（六大学ボディビルコンテスト）';
  
  // すべてのLEMON CLASSICで共通カテゴリー
  const standardCategories = [
    'ビキニ',
    'ノービスフィジーク',
    'オープンフィジーク',
    'クラシックフィジーク',
    'ノービスボディビル',
    'オープンボディビル'
  ];
  
  // Mr.筋肉専用のカテゴリー
  const mrMuscleCategories = [
    'ノービスフィジーク',
    'オープンフィジーク',
    'オープンボディビル'
  ];
  
  const details = isMrMuscle ? {
    overview: '本大会「Mr.筋肉（六大学ボディビルコンテスト）」は、日本最大級のナイトクラブを舞台に、演出に特化した新感覚のボディビル・フィジークコンテストとして開催されます。\n対象は六大学（東京大学・早稲田大学・慶應義塾大学・明治大学・立教大学・法政大学）に所属する学生で、高学歴×筋肉という新しい学生カルチャーを発信します。\n従来の競技性重視のボディコンテストとは異なり、照明・音響・映像演出を融合させ、フィットネスをエンターテインメントとして楽しめる大会を目指します。',
    date: event.date,
    venue: 'T2 SHINJUKU\n（東京都新宿区西新宿7丁目1−1 新宿カレイドビル7F）',
    price: '出場費：3,000円',
    recruitmentPeriod: '2025年8月1日 20:00 〜 2025年11月1日 20:00',
    recruitmentDetail: '',
    requirements: [
      '大学生・大学院生'
    ],
    prize: {
      novicePhysique: 'ノービスフィジーク　優勝 5万円',
      openPhysique: 'オープンフィジーク　優勝 10万円',
      openBodybuilding: 'オープンボディビル　優勝 10万円',
      bestPosing: 'ベストポージング賞　優勝 5万円',
      note: '※各カテゴリーごとに上記賞金を授与'
    }
  } : isLemonFukuoka ? {
    overview: 'ボディビルの魅力を全国に伝えたい！出場される選手とお越しいただける観客の気持ちに寄り添った大会を目指します。 今年度は大阪、福岡、名古屋、沖縄、東京、では初心者でも出場しやすい大会 広島では上位入賞者へ賞金総額500万円を出す大会を開催します！',
    date: event.date,
    venue: event.location,
    price: event.price,
    recruitmentPeriod: '2025年4月20日 20:00 〜 2025年7月6日 20:00',
    recruitmentDetail: '※定員に達し次第、募集を締め切らせていただきます',
    requirements: [
      '特になし。（出場歴、成績、加盟ジム、所属団体、年齢、タトゥー、国籍等は関係なく出場可能となります。）'
    ],
    prize: {
      classic: 'クラシックフィジーク　優勝 10万円',
      physique: 'フィジークオープン　優勝 10万円',
      bodybuilding: 'ボディビルオープン　優勝 10万円',
      note: '※各カテゴリーごとに上記賞金を授与'
    }
  } : isLemonOsaka ? {
    overview: `昨年度からの変更点といたしまして、今大会は予選を行わず、本戦1回のみの審査となります。

また、選手の出場時間を長く取るため、フィジークとビキニに関しましては選手登場時15〜30秒のIウォークを用意させていただきます。ステージの中央から出ていただき、自由にポージングしていただけます。Iウォークは審査には影響致しません。

ボディビルとクラシックフィジークに関しましては、比較審査前に全員にフリーポーズを行っていただけます。こちらもIウォークと同様にフリーポーズは審査に影響致しません。

また、カテゴリーごとの出場順は以下の通りとなります。

-ノービスフィジーク-170
-ノービスフィジーク-175
-ノービスフィジーク+175
-ノービスボディビル
-ビキニ
-オープンボディビル
-クラシクフィジーク
-オープンフィジーク`,
    date: event.date,
    venue: event.location,
    price: event.price,
    recruitmentPeriod: '4/5 20:00～6/21 20:00',
    recruitmentDetail: '',
    requirements: [
      '特になし。（出場歴、成績、加盟ジム、所属団体、年齢、タトゥー、国籍等は関係なく出場可能となります。）'
    ],
    prize: {
      classic: 'クラシックフィジーク　優勝 10万円',
      physique: 'フィジークープン　優勝 10万円',
      bodybuilding: 'ボディビルオープン　優勝10万円',
      note: '※各カテゴリーごとに上記賞金を授与'
    }
  } : {
    overview: 'ボディビルの魅力を全国に伝えたい！出場される選手とお越しいただける観客の気持ちに寄り添った大会を目指します。 今年度は大阪、福岡、名古屋、沖縄、東京、では初心者でも出場しやすい大会 広島では上位入賞者へ賞金総額500万円を出す大会を開催します！',
    date: event.date,
    venue: event.location,
    price: event.price,
    recruitmentPeriod: '2025年4月1日（火）〜 2025年6月30（月）',
    recruitmentDetail: '※定員に達し次第、募集を締め切らせていただきます（定員：各部門50名）',
    requirements: [
      '特になし。（出場歴、成績、加盟ジム、所属団体、年齢、タトゥー、国籍等は関係なく出場可能となります。）'
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

        {/* メイン画像 */}
        <div className="relative rounded-2xl overflow-hidden mb-8 shadow-2xl bg-white">
          <img 
            src={isMrMuscle ? mrMuscleImage : lemonClassicImage}
            alt={event.name}
            className={isMrMuscle ? "w-full h-80 object-cover" : "w-full h-85 object-contain"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm mb-4">
              {event.badge}
            </div>
            <h1 className="mb-2 text-white">{event.name}</h1>
            {event.year && <p className="text-xl text-white/90">{event.year}</p>}
          </div>
        </div>

        {/* 大会情報 */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
          <h2 className="mb-5 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            大会情報
          </h2>
          
          {/* 大会概要 */}
          <div className="mb-6">
            <h3 className="mb-3 flex items-center gap-2 text-base">
              <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
              大会概要
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">
              {details.overview}
            </p>
          </div>

          {/* 開催日時 */}
          <div className="mb-6">
            <h3 className="mb-3 flex items-center gap-2 text-base">
              <Calendar className="w-4 h-4 text-blue-500" />
              開催日時
            </h3>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
              <div>{details.date}</div>
            </div>
          </div>

          {/* 会場 */}
          <div className="mb-6">
            <h3 className="mb-3 flex items-center gap-2 text-base">
              <MapPin className="w-4 h-4 text-purple-500" />
              会場
            </h3>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
              <div className="text-sm">{details.venue}</div>
            </div>
          </div>

          {/* 参加費 */}
          <div className="mb-6">
            <h3 className="mb-3 flex items-center gap-2 text-base">
              <Tag className="w-4 h-4 text-orange-500" />
              参加費
            </h3>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 border border-orange-200">
              <div>{details.price}</div>
            </div>
          </div>

          {/* カテゴリー */}
          <div className="mb-6">
            <h3 className="mb-3 flex items-center gap-2 text-base">
              <Users className="w-4 h-4 text-green-500" />
              カテゴリー
            </h3>
            <div className="space-y-2">
              {isMrMuscle ? mrMuscleCategories.map((category, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-3 border border-green-200">
                  <div className="text-sm">{category}</div>
                </div>
              )) : standardCategories.map((category, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-3 border border-green-200">
                  <div className="text-sm">{category}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 募集期間 */}
          <div className="mb-6">
            <h3 className="mb-3 flex items-center gap-2 text-base">
              <Clock className="w-4 h-4 text-teal-500" />
              募集期間
            </h3>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-4 border border-teal-200">
              <div className="mb-1">{details.recruitmentPeriod}</div>
              <div className="text-gray-600 text-xs">{details.recruitmentDetail}</div>
            </div>
          </div>

          {/* 参加条件 */}
          <div className="mb-6">
            <h3 className="mb-3 flex items-center gap-2 text-base">
              <AlertCircle className="w-4 h-4 text-red-500" />
              参加条件
            </h3>
            <ul className="space-y-2">
              {details.requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-2 p-3 bg-gradient-to-r from-gray-50 to-red-50 rounded-lg border border-gray-200">
                  <CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 賞金 */}
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-base">
              <Award className="w-4 h-4 text-yellow-500" />
              賞金
            </h3>
            <div className="space-y-3">
              {isLemonFukuoka || isLemonOsaka ? (
                <>
                  <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-4 border-2 border-yellow-300 shadow-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-sm shadow-md">
                        1
                      </div>
                      <div className="text-base">クラシックフィジーク</div>
                    </div>
                    <div className="ml-10 text-gray-700 text-sm">{details.prize.classic}</div>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-4 border-2 border-yellow-300 shadow-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-sm shadow-md">
                        1
                      </div>
                      <div className="text-base">フィジークオープン</div>
                    </div>
                    <div className="ml-10 text-gray-700 text-sm">{details.prize.physique}</div>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-4 border-2 border-yellow-300 shadow-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-sm shadow-md">
                        1
                      </div>
                      <div className="text-base">ボディビルオープン</div>
                    </div>
                    <div className="ml-10 text-gray-700 text-sm">{details.prize.bodybuilding}</div>
                  </div>
                </>
              ) : isMrMuscle ? (
                <>
                  <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-4 border-2 border-yellow-300 shadow-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-sm shadow-md">
                        1
                      </div>
                      <div className="text-base">ノービスフィジーク</div>
                    </div>
                    <div className="ml-10 text-gray-700 text-sm">{details.prize.novicePhysique}</div>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-4 border-2 border-yellow-300 shadow-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-sm shadow-md">
                        1
                      </div>
                      <div className="text-base">オープンフィジーク</div>
                    </div>
                    <div className="ml-10 text-gray-700 text-sm">{details.prize.openPhysique}</div>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-4 border-2 border-yellow-300 shadow-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-sm shadow-md">
                        1
                      </div>
                      <div className="text-base">オープンボディビル</div>
                    </div>
                    <div className="ml-10 text-gray-700 text-sm">{details.prize.openBodybuilding}</div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className="w-4 h-4 text-blue-500" />
                      <div className="text-sm">ベストポージング賞</div>
                    </div>
                    <div className="ml-6 text-gray-700 text-xs">{details.prize.bestPosing}</div>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-4 border-2 border-yellow-300 shadow-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-sm shadow-md">
                        1
                      </div>
                      <div className="text-base">優勝</div>
                    </div>
                    <div className="ml-10 text-gray-700 text-sm">{details.prize.champion}</div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-4 border-2 border-gray-300 shadow-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white text-sm shadow-md">
                        2
                      </div>
                      <div className="text-base">準優勝</div>
                    </div>
                    <div className="ml-10 text-gray-700 text-sm">{details.prize.second}</div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 border-2 border-orange-300 shadow-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-sm shadow-md">
                        3
                      </div>
                      <div className="text-base">第3位</div>
                    </div>
                    <div className="ml-10 text-gray-700 text-sm">{details.prize.third}</div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className="w-4 h-4 text-blue-500" />
                      <div className="text-sm">特別賞</div>
                    </div>
                    <div className="ml-6 text-gray-700 text-xs">{details.prize.special}</div>
                  </div>
                </>
              )}
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                <p className="text-xs text-gray-600">{details.prize.note}</p>
              </div>
            </div>
          </div>
        </div>

        {/* よくある質問 */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
          <h2 className="mb-5 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                <div className="mb-2 text-sm">
                  <span className="text-blue-600 mr-2">Q.</span>
                  {faq.q}
                </div>
                <div className="text-gray-600 text-sm">
                  <span className="text-blue-600 mr-2">A.</span>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* エントリーボタン（固定） */}
        <div className="sticky bottom-6 mx-4 md:mx-auto max-w-4xl z-40">
          <div className="bg-blue-950/90 backdrop-blur-xl border border-white/10 text-white rounded-3xl p-5 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* 左側：イベント情報 */}
              <div className="text-center md:text-left">
                <div className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold mb-1">
                  Registration Open
                </div>
                <h3 className="text-lg md:text-xl font-bold tracking-tight" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                  {event.name}
                </h3>
                <div className="flex items-center justify-center md:justify-start gap-3 mt-1 text-sm text-white/60">
                  <span className="flex items-center gap-1.5">
                    <span className="opacity-50">📅</span> {event.date}
                  </span>
                  <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                  <span className="font-bold text-blue-300">{event.price}</span>
                </div>
              </div>
              
              {/* 右側：アクションボタン */}
              <a 
                href={
                  isLemonFukuoka 
                    ? "https://lemon-classic.com/2025/lemon-classic-2025-fukuoka/" 
                    : isLemonOsaka 
                    ? "https://lemon-classic.com/2025/lemon-classic-2025-osaka/" 
                    : isLemonNagoya
                    ? "https://lemon-classic.com/2025/lemon-classic-2025-nagoya/"
                    : isLemonOkinawa
                    ? "https://lemon-classic.com/2025/lemon-classic-okinawa/"
                    : isLemonTokyo
                    ? "https://lemon-classic.com/2025/lemon-classic-2025-tokyo/"
                    : isLemonHiroshima
                    ? "https://lemon-classic.com/2025/lemon-classic-japan-2025-in-hiroshima/"
                    : isMrMuscle
                    ? "https://readyfor.jp/projects/mrmuscle"
                    : "https://lemon-classic.com/2025/"
                } 
                target="_blank" 
                rel="noopener noreferrer"
                className="
                  group relative w-full md:w-auto overflow-hidden
                  bg-blue-600 px-10 py-4 rounded-2xl
                  transition-all duration-300 
                  hover:bg-blue-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]
                  active:scale-95
                  flex items-center justify-center gap-2
                "
              >
                {/* 光るアニメーション用のオーバーレイ */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <Award className="w-5 h-5 text-white relative z-10" />
                <span className="font-bold tracking-wider text-lg relative z-10">今すぐエントリー</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}