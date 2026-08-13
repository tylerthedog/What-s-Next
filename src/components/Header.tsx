import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  FileText,
  Video,
  Briefcase,
  HelpCircle,
  ShieldAlert,
  PhoneCall,
  UserCheck,
  Palette,
  PenTool,
  Mic,
  Camera,
  Youtube,
  Globe,
  Users,
  Languages,
  Shirt
} from 'lucide-react';
import { WhatsNextLogo } from './WhatsNextLogo';
import { SocialStrip } from './SocialStrip';

interface HeaderProps {
  currentPage: string;
  onNavigate: (pageId: string) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target as Node)) {
        setServicesMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const servicesCategory = [
    {
      id: 'video-production',
      label: 'Video Production',
      desc: 'Video editing, filming, motion content & post-production',
      icon: Video,
    },
    {
      id: 'photography',
      label: 'Photography',
      desc: 'Brand, product, event & social media visuals',
      icon: Camera,
    },
    {
      id: 'voiceovers',
      label: 'Voice-Overs',
      desc: 'Voice recording, audio post-production & narration',
      icon: Mic,
    },
    {
      id: 'social-media',
      label: 'Social Media Management',
      desc: 'Strategy, content creation, posting & community growth',
      icon: Users,
    },
    {
      id: 'youtube-management',
      label: 'YouTube Channel Management',
      desc: 'Channel strategy, production, SEO & publishing',
      icon: Youtube,
    },
    {
      id: 'profile-resume',
      label: 'Profile Optimisation & CVs',
      desc: 'LinkedIn, CVs, cover letters & career branding',
      icon: UserCheck,
    },
    {
      id: 'written-content',
      label: 'Written Content & SEO',
      desc: 'SEO blog writing, website copy & YouTube scripts',
      icon: PenTool,
    },
    {
      id: 'website-building',
      label: 'Website & App Development',
      desc: 'Custom sites, apps, UI/UX design & e-commerce',
      icon: Globe,
    },
    {
      id: 'graphic-design',
      label: 'Graphic Design',
      desc: 'Logos, brand kits, thumbnails & social graphics',
      icon: Palette,
    },
    {
      id: 'translation',
      label: 'Translation & Localisation',
      desc: 'Websites, videos, documents & lesser-spoken languages',
      icon: Languages,
    },
    {
      id: 'company-apparel',
      label: 'Company Apparel & Custom Branding',
      desc: 'Custom clothing, embroidery & interactive QR codes',
      icon: Shirt,
    },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    setServicesMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-sm">
      {/* Main Top Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo Brand Header */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 shrink-0 focus:outline-none rounded-xl p-1 group cursor-pointer"
              aria-label="Go to homepage"
            >
              <WhatsNextLogo size="sm" />
              <span className="font-cinzel font-bold text-xl sm:text-2xl tracking-wide text-zinc-900 group-hover:text-[#228f0c] transition-colors text-left">
                What's Next?
              </span>
            </button>
          </div>

          {/* Quick Global Search Bar */}
          <div className="hidden xl:flex flex-1 max-w-xs mx-4">
            <button
              onClick={onOpenSearch}
              className="w-full flex items-center justify-between bg-zinc-100 hover:bg-zinc-200/80 text-zinc-500 hover:text-zinc-800 px-3.5 py-2 rounded-xl border border-zinc-200 text-xs transition-all group"
            >
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-[#228f0c] group-hover:scale-110 transition-transform" />
                <span>Search services & pages...</span>
              </div>
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white text-zinc-500 rounded border border-zinc-200 shadow-2xs">
                /
              </kbd>
            </button>
          </div>

          {/* Top Navbar Navigation Links */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer ${
                currentPage === 'home'
                  ? 'bg-black text-[#1cff00] font-extrabold shadow-sm'
                  : 'text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100'
              }`}
            >
              Home
            </button>

            {/* Services Dropdown Menu */}
            <div className="relative" ref={servicesMenuRef}>
              <button
                type="button"
                onClick={() => setServicesMenuOpen((prev) => !prev)}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-extrabold rounded-xl transition-all cursor-pointer ${
                  servicesMenuOpen || servicesCategory.some(s => s.id === currentPage)
                    ? 'bg-black text-[#1cff00] shadow-md'
                    : 'text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesMenuOpen && (
                <div className="absolute top-full right-0 w-80 sm:w-96 max-w-[calc(100vw-2rem)] max-h-[calc(100vh-100px)] overflow-y-auto bg-white border border-zinc-200 rounded-3xl shadow-2xl p-3 mt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 flex flex-col gap-1">
                  <div className="text-[10px] uppercase tracking-wider text-[#228f0c] font-extrabold px-3 py-2 bg-[#1cff00]/10 rounded-xl flex items-center justify-between mb-0.5 shrink-0">
                    <span>Services Directory</span>
                  </div>
                  {servicesCategory.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleNavClick(item.id)}
                      className={`text-left p-2.5 rounded-2xl transition-all flex items-start gap-3 cursor-pointer shrink-0 ${
                        currentPage === item.id
                          ? 'bg-black text-[#1cff00] shadow-sm'
                          : 'hover:bg-zinc-100 text-zinc-800'
                      }`}
                    >
                      <item.icon className="w-4 h-4 text-[#228f0c] mt-0.5 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-extrabold leading-tight">{item.label}</div>
                        <div className="text-[10px] text-zinc-500 line-clamp-1 mt-0.5">{item.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* About Us Button */}
            <button
              type="button"
              onClick={() => handleNavClick('about')}
              className={`px-3 py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer ${
                currentPage === 'about'
                  ? 'bg-black text-[#1cff00] font-extrabold shadow-sm'
                  : 'text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100'
              }`}
            >
              About Us
            </button>

            {/* Contact Us Page Button */}
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all shrink-0 cursor-pointer ${
                currentPage === 'contact'
                  ? 'bg-black text-[#1cff00] shadow-md'
                  : 'bg-[#1cff00] hover:bg-[#18e000] text-black shadow-md shadow-[#1cff00]/20 hover:scale-105'
              }`}
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-xl bg-zinc-100 text-zinc-800 border border-zinc-200"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-black text-[#1cff00]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 px-4 py-5 max-h-[calc(100vh-80px)] overflow-y-auto space-y-5 shadow-xl">
          <button
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between bg-zinc-100 text-zinc-700 px-3.5 py-2.5 rounded-xl border border-zinc-200 text-xs font-medium cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <Search className="w-4 h-4 text-[#228f0c]" />
              <span>Search services & pages...</span>
            </span>
          </button>

          <div className="space-y-1">
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#228f0c] px-2 py-1 bg-[#1cff00]/10 rounded-lg inline-block">
              Services Directory
            </div>
            <div className="grid grid-cols-1 gap-1 pt-1">
              {servicesCategory.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold flex items-center gap-3 transition-colors cursor-pointer ${
                    currentPage === item.id ? 'bg-zinc-900 text-[#1cff00]' : 'text-zinc-800 hover:bg-zinc-100'
                  }`}
                >
                  <item.icon className="w-4 h-4 text-[#228f0c] shrink-0" />
                  <span className="truncate">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-zinc-100 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                currentPage === 'home' ? 'bg-zinc-900 text-[#1cff00]' : 'text-zinc-800 hover:bg-zinc-100'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                currentPage === 'about' ? 'bg-zinc-900 text-[#1cff00]' : 'text-zinc-800 hover:bg-zinc-100'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('careers')}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                currentPage === 'careers' ? 'bg-zinc-900 text-[#1cff00]' : 'text-zinc-800 hover:bg-zinc-100'
              }`}
            >
              Careers
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 rounded-xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-xs text-center shadow-md shadow-[#1cff00]/20 cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
