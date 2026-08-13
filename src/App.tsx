import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ConsultationsPage } from './pages/ConsultationsPage';
import { ProfileOptimizationPage } from './pages/ProfileOptimizationPage';
import { ResumeCoverLetterPage } from './pages/ResumeCoverLetterPage';
import { SocialMediaPage } from './pages/SocialMediaPage';
import { YouTubeManagementPage } from './pages/YouTubeManagementPage';
import { WebsiteBuildingPage } from './pages/WebsiteBuildingPage';
import { PoliciesPage } from './pages/PoliciesPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { VideoEditingPage } from './pages/VideoEditingPage';
import { VoiceoversPage } from './pages/VoiceoversPage';
import { PhotographyPage } from './pages/PhotographyPage';
import { GraphicDesignPage } from './pages/GraphicDesignPage';
import { WrittenContentPage } from './pages/WrittenContentPage';
import { TranslationPage } from './pages/TranslationPage';
import { CompanyApparelPage } from './pages/CompanyApparelPage';
import { YouTubeResourcesPage } from './pages/YouTubeResourcesPage';
import { CareersPage } from './pages/CareersPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').split('?')[0];
      if (hash) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Keyboard shortcut '/' to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (pageId: string) => {
    setCurrentPage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onOpenSearch={() => setSearchOpen(true)} />;

      case 'profile-resume':
      case 'profile-optimization':
        return (
          <ProfileOptimizationPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateContact={() => handleNavigate('contact')}
          />
        );

      case 'resume-cover-letters':
        return (
          <ResumeCoverLetterPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateContact={() => handleNavigate('contact')}
          />
        );

      case 'social-youtube':
      case 'social-media':
        return (
          <SocialMediaPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateContact={() => handleNavigate('contact')}
          />
        );

      case 'youtube-management':
        return (
          <YouTubeManagementPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateContact={() => handleNavigate('contact')}
          />
        );

      case 'website-building':
        return (
          <WebsiteBuildingPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateContact={() => handleNavigate('contact')}
          />
        );

      case 'consultations':
        return (
          <ConsultationsPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateContact={() => handleNavigate('contact')}
          />
        );

      case 'video-editing-production':
      case 'video-editing':
      case 'video-production':
        return (
          <VideoEditingPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateContact={() => handleNavigate('contact')}
          />
        );

      case 'voiceovers':
        return (
          <VoiceoversPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateContact={() => handleNavigate('contact')}
          />
        );

      case 'photography':
        return (
          <PhotographyPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateContact={() => handleNavigate('contact')}
          />
        );

      case 'graphic-design':
        return (
          <GraphicDesignPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateContact={() => handleNavigate('contact')}
          />
        );

      case 'written-content':
        return (
          <WrittenContentPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateContact={() => handleNavigate('contact')}
          />
        );

      case 'translation':
      case 'translation-localization':
        return (
          <TranslationPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateContact={() => handleNavigate('contact')}
          />
        );

      case 'company-apparel':
      case 'company-apparel-branding':
      case 'apparel':
        return (
          <CompanyApparelPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateContact={() => handleNavigate('contact')}
          />
        );

      case 'youtube-resources':
        return <YouTubeResourcesPage onNavigateHome={() => handleNavigate('home')} />;

      case 'careers':
      case 'opportunities':
        return (
          <CareersPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateContact={() => handleNavigate('contact')}
          />
        );

      case 'policies':
        return (
          <PoliciesPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateContact={() => handleNavigate('contact')}
          />
        );

      case 'contact':
        return <ContactPage onNavigateHome={() => handleNavigate('home')} />;

      case 'faq':
        return (
          <FaqPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateContact={() => handleNavigate('contact')}
          />
        );

      default:
        return <HomePage onNavigate={handleNavigate} onOpenSearch={() => setSearchOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 flex flex-col font-sans selection:bg-[#1cff00] selection:text-black overflow-x-hidden">
      
      {/* Header with Search and Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Main Page View */}
      <main className="flex-1">{renderCurrentPage()}</main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
