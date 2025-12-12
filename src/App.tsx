import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SimpleSearch } from './components/SimpleSearch';
import { LevelRecommendations } from './components/LevelRecommendations';
import { BeginnerGuide } from './components/BeginnerGuide';
import { EventDiagnosis } from './components/EventDiagnosis';
import { ScheduledEvents } from './components/ScheduledEvents';

type View = 'home' | 'diagnosis' | 'scheduled';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [searchFilters, setSearchFilters] = useState({
    level: '',
    category: '',
    region: ''
  });

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
          <LevelRecommendations />
          <BeginnerGuide />
        </>
      )}

      {currentView === 'diagnosis' && (
        <EventDiagnosis onBack={() => setCurrentView('home')} />
      )}

      {currentView === 'scheduled' && (
        <ScheduledEvents onBack={() => setCurrentView('home')} />
      )}
    </div>
  );
}