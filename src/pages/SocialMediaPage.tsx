import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Share2, Sparkles, CheckCircle2, ArrowRight, ChevronDown, Calendar, Video, MessageSquare, Target } from 'lucide-react';

interface SocialMediaPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
}

export const SocialMediaPage: React.FC<SocialMediaPageProps> = ({ onNavigateHome, onNavigateContact }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const servicesIncluded = [
    {
      title: 'Strategy & Planning',
      desc: 'Social media audit; Platform selection and positioning; Content pillars and themes; Monthly content calendars.',
      icon: Target,
    },
    {
      title: 'Content Creation',
      desc: 'Short-form videos (Reels, TikTok, Shorts); Branded photos and graphics; Stories and carousel posts; Captions and hashtag strategy.',
      icon: Video,
    },
    {
      title: 'Posting & Scheduling',
      desc: 'Multi-platform scheduling (Instagram, Facebook, TikTok, LinkedIn, X); Optimal timing and frequency; Story management and highlights; Bio and profile optimisation.',
      icon: Calendar,
    },
    {
      title: 'Community Management',
      desc: 'Comment responses and engagement; DM management; Audience growth strategies; Analytics and performance reporting.',
      icon: MessageSquare,
    },
    {
      title: 'Paid Social (Optional)',
      desc: 'Ad creative and copy; Campaign setup and management; Targeting and optimisation; ROI tracking and reporting.',
      icon: Share2,
    },
  ];

  const packages = [
    {
      name: 'Starter Package',
      tagline: 'Ideal for: Small businesses and creators',
      features: [
        '3 platforms',
        '3 posts per week',
        'Content creation included',
        'Monthly analytics report',
      ],
    },
    {
      name: 'Growth Package',
      popular: true,
      tagline: 'Ideal for: Growing brands and agencies',
      features: [
        '5 platforms',
        '5 posts per week',
        'Stories and reels included',
        'Community management',
        'Bi-weekly strategy calls',
      ],
    },
    {
      name: 'Enterprise Package',
      tagline: 'Ideal for: Established brands and e-commerce',
      features: [
        'Unlimited platforms',
        'Daily posting',
        'Full content production (video, photo, graphics)',
        'Dedicated account manager',
        'Weekly reporting and optimisation',
      ],
    },
  ];

  const whoThisIsFor = [
    'Brands needing consistent social presence',
    'Creators scaling their content output',
    'Businesses launching or refreshing social strategy',
    'Agencies requiring white-label social management',
  ];

  const processSteps = [
    { step: '01', title: 'Audit & Strategy', desc: 'We review your current presence and build a plan.' },
    { step: '02', title: 'Content Creation', desc: 'We produce videos, photos, and graphics.' },
    { step: '03', title: 'Scheduling', desc: 'We post consistently at optimal times.' },
    { step: '04', title: 'Engagement', desc: 'We manage comments, DMs, and growth.' },
    { step: '05', title: 'Reporting', desc: 'Monthly analytics and strategy refinement.' },
  ];

  const faqs = [
    {
      q: 'Do you create the content or just post?',
      a: 'We handle everything, strategy, creation, posting, and engagement.',
    },
    {
      q: 'Can you work with existing content?',
      a: 'Yes. We can repurpose your footage and photos into platform-optimised posts.',
    },
    {
      q: 'How long until I see results?',
      a: 'Most clients see engagement growth within 4–8 weeks. Algorithmic growth varies by platform and consistency.',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pb-20">
      <PageHeader
        badge="Social Media Management"
        title="Social Media Management That Keeps Your Brand Active and Engaged"
        description="Strategy, content creation, posting, and growth, across all your platforms."
        onNavigateHome={onNavigateHome}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-16">
        
        {/* Hero CTA & Overview */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-md space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[#1cff00] text-xs font-bold uppercase tracking-wider">
                <Share2 className="w-3.5 h-3.5" />
                <span>What We Do</span>
              </div>
              <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                We manage the lifecycle of your social presence. From strategy and content calendars to creation, posting, and community engagement, we ensure every post reinforces your brand and keeps your audience connected.
              </p>
            </div>
            <button
              onClick={onNavigateContact}
              className="px-6 py-3.5 rounded-2xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-xs transition-all shadow-lg shadow-[#1cff00]/20 flex items-center justify-center gap-2 shrink-0"
            >
              <span>Enquire About Social Media Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Services Included */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-zinc-900">Services Included</h2>
            <p className="text-xs sm:text-sm text-zinc-600">Full-lifecycle social media capabilities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesIncluded.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={idx} className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-sm space-y-3">
                  <div className="p-3 rounded-2xl bg-black text-[#1cff00] w-fit">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900">{s.title}</h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Packages Grid */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-zinc-900">Management Packages</h2>
            <p className="text-xs sm:text-sm text-zinc-600">Flexible options tailored for creators and businesses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between space-y-6 ${
                  pkg.popular
                    ? 'bg-black text-white border-zinc-900 shadow-xl relative'
                    : 'bg-white text-zinc-900 border-zinc-200 shadow-sm'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#1cff00] text-black text-[10px] font-extrabold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">{pkg.name}</h3>
                    <p className={`text-xs mt-1 ${pkg.popular ? 'text-[#1cff00]' : 'text-zinc-500'}`}>{pkg.tagline}</p>
                  </div>
                  <ul className="space-y-2.5 text-xs">
                    {pkg.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${pkg.popular ? 'text-[#1cff00]' : 'text-[#228f0c]'}`} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={onNavigateContact}
                  className={`w-full py-3 rounded-2xl font-extrabold text-xs transition-all ${
                    pkg.popular
                      ? 'bg-[#1cff00] hover:bg-[#18e000] text-black'
                      : 'bg-black text-white hover:bg-zinc-800'
                  }`}
                >
                  Choose {pkg.name}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Who This Is For */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-md space-y-6">
          <h2 className="text-2xl font-extrabold text-zinc-900">Who This Is For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whoThisIsFor.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200">
                <CheckCircle2 className="w-5 h-5 text-[#228f0c] shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-zinc-800">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="p-8 sm:p-12 rounded-3xl bg-zinc-900 text-white space-y-8 shadow-2xl">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Our 5-Step Process</h2>
            <p className="text-xs text-zinc-400">Consistent workflow for platform growth and engagement.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((s, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-zinc-800/80 border border-zinc-700/80 space-y-2">
                <span className="text-xs font-extrabold text-[#1cff00] font-mono">{s.step}</span>
                <h3 className="text-base font-bold text-white">{s.title}</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-md space-y-6">
          <h2 className="text-2xl font-extrabold text-zinc-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-2xl border border-zinc-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-left font-bold text-xs sm:text-sm text-zinc-900 bg-zinc-50 hover:bg-zinc-100 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="p-4 text-xs text-zinc-600 bg-white border-t border-zinc-200 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="p-8 sm:p-12 rounded-3xl bg-black text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to stay active and grow your audience?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300">
              Let's create, schedule, and optimize your social media presence.
            </p>
          </div>
          <button
            onClick={onNavigateContact}
            className="px-6 py-3.5 rounded-2xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-xs transition-all shadow-lg shadow-[#1cff00]/20 flex items-center justify-center gap-2 shrink-0"
          >
            <span>Contact Us About Social Media Management</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>

      </div>
    </div>
  );
};

