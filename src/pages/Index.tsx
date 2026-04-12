import { useState } from 'react';
import Header from '@/components/forum/Header';
import MarketTicker from '@/components/forum/MarketTicker';
import HeroSection from '@/components/forum/HeroSection';
import StrategiesSection from '@/components/forum/StrategiesSection';
import NewsSection from '@/components/forum/NewsSection';
import ChatSection from '@/components/forum/ChatSection';
import AboutSection from '@/components/forum/AboutSection';
import HelpSection from '@/components/forum/HelpSection';
import Footer from '@/components/forum/Footer';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNav = (section: string) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <HeroSection onNav={handleNav} />
            <div className="section-divider" />
            <StrategiesSection />
            <div className="section-divider" />
            <NewsSection />
            <div className="section-divider" />
            <ChatSection />
          </>
        );
      case 'strategies':
        return <StrategiesSection />;
      case 'news':
        return <NewsSection />;
      case 'chat':
        return <ChatSection />;
      case 'about':
        return <AboutSection />;
      case 'help':
        return <HelpSection />;
      default:
        return null;
    }
  };

  return (
    <div className="forum-body">
      <MarketTicker />
      <Header activeSection={activeSection} onNav={handleNav} />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}
