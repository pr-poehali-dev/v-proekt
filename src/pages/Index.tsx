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
import FeaturesSection from '@/components/forum/FeaturesSection';
import AiBuilderSection from '@/components/forum/AiBuilderSection';
import BuiltInSection from '@/components/forum/BuiltInSection';
import ForumBoard from '@/components/forum/ForumBoard';
import ForumCategory from '@/components/forum/ForumCategory';
import ForumThread from '@/components/forum/ForumThread';

type View =
  | { type: 'home' }
  | { type: 'section'; id: string }
  | { type: 'forum-board' }
  | { type: 'forum-category'; categoryId: string }
  | { type: 'forum-thread'; threadId: string; categoryId: string };

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [view, setView] = useState<View>({ type: 'home' });
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const handleNav = (section: string) => {
    setActiveSection(section);
    if (section === 'forum') {
      setView({ type: 'forum-board' });
    } else {
      setView({ type: 'section', id: section });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategory = (categoryId: string) => {
    setView({ type: 'forum-category', categoryId });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleThread = (threadId: string) => {
    if (view.type === 'forum-category') {
      setView({ type: 'forum-thread', threadId, categoryId: view.categoryId });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (view.type === 'forum-thread') {
      setView({ type: 'forum-category', categoryId: view.categoryId });
    } else if (view.type === 'forum-category') {
      setView({ type: 'forum-board' });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBoard = () => {
    setView({ type: 'forum-board' });
    setActiveSection('forum');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleTheme = () => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  };

  const renderContent = () => {
    if (view.type === 'forum-board') {
      return <ForumBoard onCategory={handleCategory} />;
    }
    if (view.type === 'forum-category') {
      return <ForumCategory categoryId={view.categoryId} onBack={handleBack} onThread={handleThread} />;
    }
    if (view.type === 'forum-thread') {
      return <ForumThread threadId={view.threadId} categoryId={view.categoryId} onBack={handleBack} onBoard={handleBoard} />;
    }

    const sectionId = view.type === 'section' ? view.id : activeSection;
    switch (sectionId) {
      case 'home':
        return (
          <>
            <HeroSection onNav={handleNav} />
            <FeaturesSection />
            <AiBuilderSection />
            <BuiltInSection />
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
    <div className={`forum-body${theme === 'light' ? ' forum-light' : ''}`}>
      <MarketTicker />
      <Header
        activeSection={activeSection}
        onNav={handleNav}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}