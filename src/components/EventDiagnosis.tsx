import { useState } from 'react';
import { ArrowLeft, Sparkles, TrendingUp, Award, Heart, Users } from 'lucide-react';
import { EventCard } from './EventCard';

interface EventDiagnosisProps {
  onBack: () => void;
  onEventClick: (event: any) => void;
}

type DiagnosisResult = {
  type: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  strengths: string[];
  recommendations: string[];
};

export function EventDiagnosis({ onBack, onEventClick }: EventDiagnosisProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: '筋トレ・フィットネス経験はどのくらいですか？',
      options: [
        '3ヶ月未満・初心者',
        '3ヶ月〜1年程度',
        '1年以上',
        '2年以上・大会経験あり'
      ]
    },
    {
      id: 2,
      question: 'どのカテゴリーに興味がありますか？',
      options: [
        'メンズフィジーク',
        'ビキニ',
        'ボディビル',
        'ベストボディ',
        'クラシックフィジーク',
        'ウィメンズフィジーク'
      ]
    },
    {
      id: 3,
      question: '大会に参する目標は何ですか？',
      options: [
        '楽しむこと・完走すること',
        '自己ベストを目指す',
        '上位入賞を狙う',
        '新しい仲間との出会い'
      ]
    },
    {
      id: 4,
      question: '大会準備にどのくらい時間をかけられますか？',
      options: [
        '1ヶ月程度',
        '2〜3ヶ月',
        '4〜6ヶ月',
        '半年以上じっくり準備したい'
      ]
    }
  ];

  // 診断ロジック：回答を分析して最適なタイプを決定
  const analyzeDiagnosis = (): DiagnosisResult => {
    const experience = answers[0];
    const category = answers[1];
    const goal = answers[2];
    const preparationTime = answers[3];

    // 経験レベルのスコア
    let experienceScore = 0;
    if (experience === '3ヶ月未満・初心者') experienceScore = 1;
    else if (experience === '3ヶ月〜1年程度') experienceScore = 2;
    else if (experience === '1年以上') experienceScore = 3;
    else experienceScore = 4;

    // 総合スコアで診断タイプを決定
    const totalScore = experienceScore;

    // 目標と経験に基づいた詳細な診断
    if (experienceScore <= 2 && goal === '楽しむこと・完走すること') {
      return {
        type: 'beginner-fun',
        title: 'チャレンジャータイプ',
        description: 'あなたは新しいことに挑戦する勇気を持った初心者です！',
        icon: Heart,
        color: 'from-pink-50 to-rose-50',
        strengths: [
          '前向きな姿勢と挑戦する心',
          '楽しむことを大切にする姿勢',
          '成長への意欲が高い'
        ],
        recommendations: [
          '初心者向けの大会からスタート',
          'サポート体制が充実した大会を選択',
          'ポージング指導付きの大会がおすすめ',
          '大会の雰囲気を楽しむことを第一に'
        ]
      };
    } else if (experienceScore <= 2 && goal === '自己ベストを目指す') {
      return {
        type: 'beginner-growth',
        title: 'グロースマインドタイプ',
        description: '初心者ながら成長志向が高く、向上心に溢れています！',
        icon: TrendingUp,
        color: 'from-blue-50 to-cyan-50',
        strengths: [
          '明確な目標設定ができている',
          '自己成長への強い意欲',
          '結果を重視する姿勢'
        ],
        recommendations: [
          '審査基準が明確な初心者向け大会',
          'フィードバックがもらえる大会を選択',
          '2〜3ヶ月前からの計画的な準備',
          '経験者のアドバイスを積極的に求める'
        ]
      };
    } else if (experienceScore >= 3 && goal === '上位入賞を狙う') {
      return {
        type: 'advanced-competitive',
        title: 'アスリートタイプ',
        description: '高い実力と努力で上位を目指す本格派です！',
        icon: Award,
        color: 'from-yellow-50 to-amber-50',
        strengths: [
          '豊富な経験と確かな実力',
          '高いトレーニング頻度',
          '勝利への強い意志'
        ],
        recommendations: [
          'レベルの高い経験者向け大会',
          '4〜6ヶ月前からの戦略的準備',
          '過去の大会映像の分析',
          '審査員の目線を意識したトレーニング'
        ]
      };
    } else if (goal === '新しい仲間との出会い') {
      return {
        type: 'community',
        title: 'コミュニティビルダータイプ',
        description: '人との繋がりを大切にする社交的なあなた！',
        icon: Users,
        color: 'from-purple-50 to-violet-50',
        strengths: [
          '社交性が高く協調性がある',
          'コミュニティへの貢献意識',
          '長期的な視点での参加'
        ],
        recommendations: [
          '交流会やイベントが充実した大会',
          '地域コミュニティと連携した大会',
          'チーム参加が可能な大会',
          '大会後の懇親会がある大会を選択'
        ]
      };
    } else {
      return {
        type: 'balanced',
        title: 'バランスタイプ',
        description: '楽しみながらも着実に成長を目指すバランス型！',
        icon: Heart,
        color: 'from-indigo-50 to-blue-50',
        strengths: [
          'バランスの取れた姿勢',
          '無理のないペース配分',
          '長期的な継続力'
        ],
        recommendations: [
          '初心者〜中級者向けの大会',
          '負担が少ない地域の大会',
          '自分のペースで準備',
          '楽しみながら技術向上'
        ]
      };
    }
  };

  const getRecommendedEvents = () => {
    const diagnosis = analyzeDiagnosis();
    const experience = answers[0];
    const category = answers[1];
    const goal = answers[2];
    const prepTime = answers[3];
    
    // 経験レベルの判定
    const isBeginnerLevel = experience === '3ヶ月未満・初心者' || experience === '3ヶ月〜1年程度';
    
    // 全ての大会データ
    const allEvents = [
      {
        id: 1,
        name: 'LEMON CLASSIC',
        year: '2025 FUKUOKA',
        category: 'ビキニ',
        date: '2025年7月20日',
        monthsFromNow: 7,
        location: '福岡県福岡市・パピヨン24ガスホール',
        price: '参加費: 6,000円',
        badge: '初心者向け',
        level: 'beginner',
        types: ['beginner-fun', 'beginner-growth', 'balanced', 'community']
      },
      {
        id: 2,
        name: 'LEMON CLASSIC 2025 TOKYO',
        year: '',
        category: 'メンズフィジーク',
        date: '2025年9月6日',
        monthsFromNow: 9,
        location: '東京都江東区・TFTホール',
        price: '参加費: 6,000円',
        badge: '初心者向け',
        level: 'beginner',
        types: ['beginner-fun', 'beginner-growth', 'community']
      },
      {
        id: 3,
        name: 'LEMON CLASSIC 2025 OSAKA',
        year: '',
        category: 'ベストボディ',
        date: '2025年7月5日',
        monthsFromNow: 7,
        location: '大阪府大阪市・大阪国際交流センター',
        price: '参加費: 6,000円',
        badge: '経験者向け',
        level: 'experienced',
        types: ['advanced-competitive']
      },
      {
        id: 4,
        name: 'LEMON CLASSIC 2025 NAGOYA',
        year: '',
        category: 'クラシックフィジーク',
        date: '2025年8月16日',
        monthsFromNow: 8,
        location: '愛知県名古屋市・名古屋市公会堂',
        price: '参加費: 6,000円',
        badge: '中級者向け',
        level: 'intermediate',
        types: ['advanced-competitive', 'balanced']
      },
      {
        id: 5,
        name: 'LEMON CLASSIC',
        year: '2025 OKINAWA',
        category: 'ベストボディ',
        date: '2025年8月30日',
        monthsFromNow: 8,
        location: '沖縄県沖縄市・てだこホール',
        price: '参加費: 6,000円',
        badge: '経験者向け',
        level: 'experienced',
        types: ['advanced-competitive']
      },
      {
        id: 6,
        name: 'LEMON CLASSIC JAPAN',
        year: '2025 HIROSHIMA',
        category: 'ウィメンズフィジーク',
        date: '2025年9月15日',
        monthsFromNow: 9,
        location: '広島県広島市・フェニックスホール',
        price: '参加費: 6,000円',
        badge: '初心者向け',
        level: 'beginner',
        types: ['beginner-fun', 'community', 'balanced']
      },
      {
        id: 7,
        name: 'LEMON CLASSIC 2025 SAPPORO',
        year: '',
        category: 'メンズフィジーク',
        date: '2025年10月12日',
        monthsFromNow: 10,
        location: '北海道札幌市・札幌コンベンションセンター',
        price: '参加費: 6,000円',
        badge: '初心者向け',
        level: 'beginner',
        types: ['beginner-fun', 'beginner-growth', 'community']
      },
      {
        id: 8,
        name: 'LEMON CLASSIC SENDAI',
        year: '2025',
        category: 'ビキニ',
        date: '2025年8月9日',
        monthsFromNow: 8,
        location: '宮城県仙台市・仙台サンプラザ',
        price: '参加費: 6,000円',
        badge: '初心者向け',
        level: 'beginner',
        types: ['beginner-fun', 'beginner-growth', 'balanced']
      },
      {
        id: 9,
        name: 'LEMON CLASSIC KYOTO',
        year: '2025',
        category: 'ボディビル',
        date: '2025年7月27日',
        monthsFromNow: 7,
        location: '京都府京都市・京都会館',
        price: '参加費: 6,000円',
        badge: '経験者向け',
        level: 'experienced',
        types: ['advanced-competitive']
      }
    ];

    // 準備期間に基づいた開催時期の計算
    let idealMonthsFromNow = 3; // デフォルト
    if (prepTime === '1ヶ月程度') idealMonthsFromNow = 1.5;
    else if (prepTime === '2〜3ヶ月') idealMonthsFromNow = 3;
    else if (prepTime === '4〜6ヶ月') idealMonthsFromNow = 5;
    else if (prepTime === '半年以上じっくり準備したい') idealMonthsFromNow = 8;

    // スコアリングシステムで大会をランク付け
    const scoredEvents = allEvents.map(event => {
      let score = 0;
      
      // 1. カテゴリーが一致するか（最重要）
      if (event.category === category) {
        score += 50;
      }
      
      // 2. 経験レベルが合っているか
      if (isBeginnerLevel && event.level === 'beginner') {
        score += 30;
      } else if (!isBeginnerLevel && event.level === 'experienced') {
        score += 30;
      } else if (event.level === 'intermediate') {
        score += 20; // 中級者向けはどちらにも適度にマッチ
      }
      
      // 3. 診断タイプに合っているか
      if (event.types.includes(diagnosis.type)) {
        score += 20;
      }
      
      // 4. 準備期間が適切か（開催時期が準備期間とマッチ）
      const timeDifference = Math.abs(event.monthsFromNow - idealMonthsFromNow);
      if (timeDifference <= 1) {
        score += 15;
      } else if (timeDifference <= 2) {
        score += 10;
      } else if (timeDifference <= 3) {
        score += 5;
      }
      
      return { ...event, score };
    });

    // スコアの高い順にソートして上位3件を返す
    return scoredEvents
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const diagnosis = analyzeDiagnosis();
    const recommendedEvents = getRecommendedEvents();
    const DiagnosisIcon = diagnosis.icon;

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            戻る
          </button>

          {/* おすすめ大会 */}
          <div className="mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h2 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent text-xl">
                あなたにおすすめの大会
              </h2>
            </div>
            <p className="text-gray-600 text-center mb-6 text-sm">
              {answers[1]}・{answers[0]}・準備期間{answers[3]}の条件で最適な大会を選びました
            </p>
          </div>

          {/* マッチング理由カード */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 mb-6 border border-blue-200">
            <h3 className="mb-3 text-center text-base">これらの大会がおすすめな理由</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-xs text-gray-600 mb-1">希望カテゴリー</div>
                <div className="text-sm">{answers[1]}</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-xs text-gray-600 mb-1">あなたのレベル</div>
                <div className="text-xs">{answers[0]}</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-xs text-gray-600 mb-1">準備期間</div>
                <div className="text-xs">{answers[3]}</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {recommendedEvents.map((event, index) => (
              <div key={event.id} className="relative">
                {index === 0 && (
                  <div className="absolute -top-3 -right-3 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs shadow-lg">
                    最もおすすめ
                  </div>
                )}
                <EventCard event={event} onEventClick={onEventClick} />
              </div>
            ))}
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={handleReset}
              className="px-6 py-3 text-sm text-gray-700 border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              もう一度診断する
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-6 py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-8 transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          戻る
        </button>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h2 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent text-lg">
              あなたに合う大会診断
            </h2>
          </div>

          <p className="text-center text-gray-600 mb-6 text-sm">
            4つの質問に答えて、最適な大会を見つけましょう
          </p>

          {/* プログレスバー */}
          <div className="mb-6">
            <div className="flex justify-between text-xs text-gray-600 mb-2">
              <span>質問 {currentQuestion + 1}/{questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500 ease-out shadow-lg"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* 質問 */}
          <div className="mb-6">
            <h3 className="mb-5 text-center text-base">{questions[currentQuestion].question}</h3>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="group w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-gray-100 group-hover:bg-blue-500 flex items-center justify-center text-gray-600 group-hover:text-white transition-colors duration-300 text-sm">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="flex-1 text-sm">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 戻るボタン */}
          {currentQuestion > 0 && (
            <div className="flex justify-center">
              <button
                onClick={() => {
                  setCurrentQuestion(currentQuestion - 1);
                  setAnswers(answers.slice(0, -1));
                }}
                className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors text-sm"
              >
                前の質問に戻る
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}