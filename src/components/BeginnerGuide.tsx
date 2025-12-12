import { Target, BookOpen, HelpCircle, Heart } from 'lucide-react';

export function BeginnerGuide() {
  const guides = [
    {
      icon: Target,
      title: '目標を設定する',
      description: 'まずは自分の目標を明確にしましょう。完走を目指すのか、タイムを競うのか、目標に合わせて大会を選べます。'
    },
    {
      icon: BookOpen,
      title: 'レベルを確認',
      description: '初心者向け、中級者向け、上級者向けの3つのレベルがあります。自分のレベルに合った大会を選びましょう。'
    },
    {
      icon: HelpCircle,
      title: '参加条件を確認',
      description: '各大会には参加条件があります。年齢制限、必要な技術、持参物などを事前に確認してください。'
    },
    {
      icon: Heart,
      title: '楽しむことが大切',
      description: '結果にこだわりすぎず、まずは参加することを楽しみましょう。完走するだけでも大きな達成感が得られます。'
    }
  ];

  const faqs = [
    {
      question: '初心者でも参加できますか？',
      answer: 'はい、多くの大会が初心者を歓迎しています。「初心者向け」のタグがついた大会を選びましょう。'
    },
    {
      question: 'どのくらい前から準備すればいいですか？',
      answer: '種目にもよりますが、一般的には2〜3ヶ月前から準備を始めることをおすすめします。'
    },
    {
      question: '参加費以外に費用はかかりますか？',
      answer: '会場までの交通費、宿泊費（遠方の場合）、装備品などが別途必要になる場合があります。'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h2 className="mb-3 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            初めての方へ
          </h2>
          <p className="text-gray-600">
            フィットネス大会への参加が初めての方も安心してください。
          </p>
          <p className="text-gray-600">
            あなたにぴったりの大会を見つけるためのガイドです。
          </p>
        </div>

        {/* ガイドカード */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                <guide.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="mb-3">{guide.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {guide.description}
              </p>
            </div>
          ))}
        </div>

        {/* よくある質問 */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
          
          <div className="relative">
            <h3 className="text-center mb-10 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              よくある質問
            </h3>
            <div className="space-y-8 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-3 flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-sm shadow-md">
                      Q
                    </span>
                    <span className="pt-1">{faq.question}</span>
                  </div>
                  <div className="text-gray-300 ml-11 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}