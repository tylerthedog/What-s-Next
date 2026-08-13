import React from 'react';
import {
  ArrowRight,
  Target,
  Video,
  Camera,
  Mic,
  Share2,
  Youtube,
  PenTool,
  Globe,
  Palette,
  CheckCircle2,
  Sparkles,
  Languages
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (pageId: string) => void;
  onOpenSearch: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const whatWeDoList = [
    {
      id: 'video-production',
      title: 'Video production and editing',
      desc: 'Professional editing, filming, motion graphics, and post-production for videos that perform.',
      icon: Video,
    },
    {
      id: 'photography',
      title: 'Photography and visual content',
      desc: 'Product shots, brand photography, event coverage, and social media visual assets.',
      icon: Camera,
    },
    {
      id: 'voiceovers',
      title: 'Voice-over recording and audio production',
      desc: 'Broadcast-quality voice talent, studio audio post-production, narration, and mastering.',
      icon: Mic,
    },
    {
      id: 'social-media',
      title: 'Social media management and strategy',
      desc: 'End-to-end strategy, content calendar creation, scheduled posting, and community growth.',
      icon: Share2,
    },
    {
      id: 'youtube-management',
      title: 'YouTube channel growth and optimisation',
      desc: 'Channel strategy, thumbnail creation, video SEO, upload scheduling, and audience expansion.',
      icon: Youtube,
    },
    {
      id: 'written-content',
      title: 'SEO-optimised written content',
      desc: 'High-ranking blog articles, website copy, YouTube scripts, and conversion messaging.',
      icon: PenTool,
    },
    {
      id: 'website-building',
      title: 'Website and app development',
      desc: 'Custom responsive websites, e-commerce stores, landing pages, and web application MVPs.',
      icon: Globe,
    },
    {
      id: 'graphic-design',
      title: 'Graphic design, logos, and thumbnails',
      desc: 'Custom company logos, brand identity guidelines, high-CTR thumbnails, and social graphics.',
      icon: Palette,
    },
    {
      id: 'translation',
      title: 'Translation and localization services',
      desc: 'Websites, videos, documents, and app localization specializing in lesser-spoken languages.',
      icon: Languages,
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pb-20">
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 border-b border-zinc-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-[#1cff00] text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>What's Next? Creative Production Agency</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-tight">
            What's Next? Everything Your Brand Needs to Create, Publish, and Grow.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            We're a full-service creative production agency handling video, photo, voice, social media, YouTube, content writing, design, and development, under one roof.
          </p>
        </div>
      </section>

      {/* Brief Introduction Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-md space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[#1cff00] text-xs font-extrabold uppercase tracking-wider">
            <Target className="w-3.5 h-3.5" />
            <span>Brief Introduction</span>
          </div>
          <p className="text-zinc-800 text-base sm:text-lg leading-relaxed font-medium">
            At What's Next?, we don't just create content, we build complete creative workflows for brands, creators, and businesses. From filming and editing to publishing and promotion, our team manages every stage of production so you can focus on what matters most.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[#1cff00] text-xs font-bold uppercase tracking-wider">
            <span>Our Full Services</span>
          </div>
          <h2 className="text-3xl font-extrabold text-zinc-900">What We Do</h2>
          <p className="text-xs sm:text-sm text-zinc-600">
            Click any service to view full deliverables, package options, and process details.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatWeDoList.map((card) => {
            const Icon = card.icon;
            return (
              <button
                key={card.id}
                onClick={() => onNavigate(card.id)}
                className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-md hover:border-black transition-all text-left group flex flex-col justify-between space-y-4 hover:shadow-xl"
              >
                <div className="space-y-3">
                  <div className="p-3 rounded-2xl bg-black text-[#1cff00] group-hover:bg-[#228f0c] group-hover:text-white transition-colors w-fit">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-zinc-900 group-hover:text-[#228f0c] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-xs font-bold text-zinc-900 group-hover:text-[#228f0c] pt-2 border-t border-zinc-100">
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900 text-white shadow-2xl space-y-6 text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#1cff00] font-mono">
            Our Core Value
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold">Our Promise</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 pt-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#1cff00]" />
              <span className="text-sm font-bold">Clean execution.</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#1cff00]" />
              <span className="text-sm font-bold">Strong visual quality.</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#1cff00]" />
              <span className="text-sm font-bold">Content that connects.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-black text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white text-center sm:text-left">
            Ready to see what's next for your brand?
          </h3>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 rounded-2xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-sm transition-all shadow-lg shadow-[#1cff00]/20 flex items-center justify-center gap-2 shrink-0"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};

