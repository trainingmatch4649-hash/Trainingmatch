import { Calendar, MapPin, Tag } from 'lucide-react';
// ↓ 元あった figma:asset... の行は削除しました

interface EventCardProps {
  event: {
    id: number;
    name: string;
    year: string;
    category: string;
    date: string;
    location: string;
    price: string;
    badge: string;
  };
  onEventClick?: (event: any) => void;
}

export function EventCard({ event, onEventClick }: EventCardProps) {
  const handleClick = () => {
    if (onEventClick) {
      onEventClick(event);
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
      {/* イベント画像 */}
      <div className="relative overflow-hidden">
        {/* ▼ ここを指定されたファイル名に書き換えました ▼ */}
        <img 
          src="/lemoncrassic_logo.png" 
          alt={event.name}
          className="w-full h-48 object-cover bg-black group-hover:scale-105 transition-transform duration-500"
        />
        {/* ▲ ここまで ▲ */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm shadow-lg">
          {event.badge}
        </div>
      </div>

      {/* イベント詳細 */}
      <div className="p-6">
        {/* タイトルの文字サイズを少し調整しました */}
        <h3 className="mb-1 text-lg font-bold">{event.name}</h3>
        {event.year && <div className="text-gray-600 mb-3">{event.year}</div>}
        
        <div className="inline-block bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 px-4 py-2 rounded-full text-sm mb-4">
          {event.category}
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3 text-sm text-gray-600">
            <Calendar className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-500" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-start gap-3 text-sm text-gray-600">
            <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-500" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-start gap-3 text-sm text-gray-600">
            <Tag className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-500" />
            <span>{event.price}</span>
          </div>
        </div>

        <button 
          onClick={handleClick}
          className="w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white py-3 rounded-xl hover:from-gray-800 hover:to-gray-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          詳細を見る
        </button>
      </div>
    </div>
  );
}