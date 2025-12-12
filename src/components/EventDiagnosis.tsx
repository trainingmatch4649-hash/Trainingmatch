import { useState } from 'react';
import { ArrowLeft, Sparkles, TrendingUp, Award, Heart, Users } from 'lucide-react';
import { EventCard } from './EventCard';

interface EventDiagnosisProps {
  onBack: () => void;
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

export function EventDiagnosis({ onBack }: EventDiagnosisProps) {
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
      question: '参加したい種目を選んでください',
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
      question: '参加望の地域を選んでください',
      options: [
        '関東',
        '関西',
        '中部',
        '九州',
        '北海道・東北',
        'どこでも良い'
      ]
    },
    {
      id: 4,
      question: '大会で重視したいことは何ですか？',
      options: [
        '楽しむこと・完走すること',
        '自己ベストを目指す',
        '上位入賞を狙う',
        '新しい仲間との出会い'
      ]
    },
    {
      id: 5,
      question: '一週間のトレーニング頻度は？',
      options: [
        '週1〜2回',
        '週3〜4回',
        '週5〜6回',
        '毎日トレーニング'
      ]
    },
    {
      id: 6,
      question: '大会参加の予算はどのくらいですか？',
      options: [
        '〜1万円',
        '1〜3万円',
        '3〜5万円',
        '5万円以上も可能'
      ]
    }
  ];

  // 診断ロジック：回答を分析して最適なタイプを決定
  const analyzeDiagnosis = (): DiagnosisResult => {
    const experience = answers[0];
    const category = answers[1];
    const goal = answers[3];
    const trainingFreq = answers[4];
    const budget = answers[5];

    // 経験レベルのスコア
    let experienceScore = 0;
    if (experience === '3ヶ月未満・初心者') experienceScore = 1;
    else if (experience === '3ヶ月〜1年程度') experienceScore = 2;
    else if (experience === '1年以上') experienceScore = 3;
    else experienceScore = 4;

    // トレーニング頻度のスコア
    let trainingScore = 0;
    if (trainingFreq === '週1〜2回') trainingScore = 1;
    else if (trainingFreq === '週3〜4回') trainingScore = 2;
    else if (trainingFreq === '週5〜6回') trainingScore = 3;
    else trainingScore = 4;

    // 総合スコアで診断タイプを決定
    const totalScore = experienceScore + trainingScore;

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
    } else if (experienceScore >= 3 && trainingScore >= 3 && goal === '上位入賞を狙う') {
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
    } else if (experienceScore >= 3 && trainingScore >= 2) {
      return {
        type: 'intermediate',
        title: 'ステディタイプ',
        description: '着実に実力をつけている経験者です！',
        icon: TrendingUp,
        color: 'from-green-50 to-emerald-50',
        strengths: [
          '安定したトレーニング習慣',
          'バランスの取れた目標設定',
          '継続的な成長'
        ],
        recommendations: [
          '中級〜上級者向けの大会',
          '自分のペースで挑戦できる大会',
          '3〜4ヶ月前からの準備',
          '技術向上を重視した練習'
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
    const category = answers[1];
    const region = answers[2];
    
    // 診断タイプに基づいて異なる大会を推奨
    const allEvents = [
      {
        id: 1,
        name: 'LEMON CLASSIC',
        year: '2025 FUKUOKA',
        category: category || 'ビキニ',
        date: '2025年7月20日',
        location: '福岡県福岡市・パピヨン24ガスホール',
        price: '参加費: 6,000円',
        badge: '初心者向け',
        types: ['beginner-fun', 'beginner-growth', 'balanced', 'community']
      },
      {
        id: 2,
        name: 'LEMON CLASSIC 2025 TOKYO',
        year: '',
        category: category || 'メンズフィジーク',
        date: '2025年9月6日',
        location: '東京都江東区・TFTホール',
        price: '参加費: 6,000円',
        badge: '初心者向け',
        types: ['beginner-fun', 'beginner-growth', 'community']
      },
      {
        id: 3,
        name: 'LEMON CLASSIC 2025 OSAKA',
        year: '',
        category: category || 'ベストボディ',
        date: '2025年7月5日',
        location: '大阪府大阪市・大阪国際交流センター',
        price: '参加費: 6,000円',
        badge: '経験者向け',
        types: ['intermediate', 'advanced-competitive']
      },
      {
        id: 4,
        name: 'LEMON CLASSIC 2025 NAGOYA',
        year: '',
        category: 'クラシックフィジーク',
        date: '2025年8月16日',
        location: '愛知県名古屋市・名古屋市公会堂',
        price: '参加費: 6,000円',
        badge: '経験者向け',
        types: ['intermediate', 'advanced-competitive', 'balanced']
      },
      {
        id: 5,
        name: 'LEMON CLASSIC',
        year: '2025 OKINAWA',
        category: 'ベストボディ',
        date: '2025年8月30日',
        location: '沖縄県沖縄市・てだこホール',
        price: '参加費: 6,000円',
        badge: '経験者向け',
        types: ['advanced-competitive']
      },
      {
        id: 6,
        name: 'LEMON CLASSIC JAPAN',
        year: '2025 HIROSHIMA',
        category: 'ウィメンズフィジーク',
        date: '2025年9月15日',
        location: '広島県広島市・フェニックスホール',
        price: '参加費: 6,000円',
        badge: '初心者向け',
        types: ['beginner-fun', 'community', 'balanced']
      }
    ];

    // 診断タイプに合った大会をフィルタリング
    return allEvents
      .filter(event => event.types.includes(diagnosis.type))
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

          {/* 診断結果カード */}
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-xl">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h2 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                診断結果
              </h2>
            </div>

            {/* メインの診断結果 */}
            <div className={`bg-gradient-to-br ${diagnosis.color} rounded-2xl p-8 mb-8 text-center shadow-lg border border-white/50`}>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <DiagnosisIcon className="w-10 h-10 text-gray-800" />
              </div>
              <h3 className="mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {diagnosis.title}
              </h3>
              <p className="text-gray-700 text-lg mb-2">
                {diagnosis.description}
              </p>
            </div>

            {/* あなたの強み */}
            <div className="mb-8">
              <h3 className="mb-6 text-center">あなたの強み</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {diagnosis.strengths.map((strength, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 text-center border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-relaxed">{strength}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* おすすめのアプローチ */}
            <div className="mb-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
              <h3 className="mb-6 text-center">あなたへのおすすめ</h3>
              <ul className="space-y-4">
                {diagnosis.recommendations.map((rec, index) => (
                  <li key={index} className="flex gap-4 items-start group">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-full flex items-center justify-center text-sm shadow-md group-hover:scale-110 transition-transform duration-300">
                      ✓
                    </span>
                    <span className="text-gray-700 pt-1">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 回答サマリー */}
            <details className="mb-6 group">
              <summary className="cursor-pointer text-gray-600 hover:text-gray-800 mb-2 list-none flex items-center justify-center gap-2 py-3 px-6 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                <span>あなたの回答を確認する</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="space-y-3 mt-6">
                {answers.map((answer, index) => (
                  <div key={index} className="flex items-start gap-3 text-sm bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors duration-300">
                    <span className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-full flex items-center justify-center shadow-sm">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <div className="text-gray-600 mb-1">{questions[index].question}</div>
                      <div>{answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </details>

            <div className="flex gap-4 justify-center">
              <button
                onClick={handleReset}
                className="px-8 py-4 text-gray-700 border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                もう一度診断する
              </button>
            </div>
          </div>

          {/* おすすめ大会 */}
          <div className="mb-6">
            <h2 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              あなたにおすすめの大会（{recommendedEvents.length}件）
            </h2>
            <p className="text-gray-600 mt-2">
              診断結果「{diagnosis.title}」に最適な大会を厳選しました
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
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
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          戻る
        </button>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              あなたに合う大会診断
            </h2>
          </div>

          <p className="text-center text-gray-600 mb-8">
            6つの質問に答えて、最適な大会を見つけましょう
          </p>

          {/* プログレスバー */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>質問 {currentQuestion + 1}/{questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500 ease-out shadow-lg"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* 質問 */}
          <div className="mb-8">
            <h3 className="mb-6 text-center">{questions[currentQuestion].question}</h3>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="group w-full text-left p-5 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-blue-500 flex items-center justify-center text-gray-600 group-hover:text-white transition-colors duration-300">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="flex-1">{option}</span>
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
                className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
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