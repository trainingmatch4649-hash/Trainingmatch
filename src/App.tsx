import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SimpleSearch } from './components/SimpleSearch';
import { LevelRecommendations } from './components/LevelRecommendations';
import { BeginnerGuide } from './components/BeginnerGuide';
import { EventDiagnosis } from './components/EventDiagnosis';
import { ScheduledEvents } from './components/ScheduledEvents';
import { EventDetail } from './components/EventDetail';

type View = 'home' | 'diagnosis' | 'scheduled' | 'detail';

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

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [searchFilters, setSearchFilters] = useState({
    level: '',
    category: '',
    region: ''
  });

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setCurrentView('detail');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {currentView === 'home' && (
        <>
          <HeroSection onNavigate={setCurrentView} />
          <SimpleSearch 
            filters={searchFilters}
            onFilterChange={setSearchFilters}
            onNavigate={setCurrentView}
          />
          <LevelRecommendations onEventClick={handleEventClick} />
          <BeginnerGuide />
        </>
      )}

      {currentView === 'diagnosis' && (
        <EventDiagnosis 
          onBack={() => setCurrentView('home')}
          onEventClick={handleEventClick}
        />
      )}

      {currentView === 'scheduled' && (
        <ScheduledEvents 
          onBack={() => setCurrentView('home')}
          onEventClick={handleEventClick}
        />
      )}

      {currentView === 'detail' && selectedEvent && (
        <EventDetail 
          event={selectedEvent}
          onBack={() => setCurrentView('home')}
        />
      )}
    </div>
  );
}