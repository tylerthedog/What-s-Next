import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import {
  Youtube,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Search,
  Video,
  BarChart3,
  TrendingUp,
  DollarSign,
  Share2,
  ListOrdered
} from 'lucide-react';

interface YouTubeManagementPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
}

export const YouTubeManagementPage: React.FC<YouTubeManagementPageProps> = ({
  onNavigateHome,
  onNavigateContact,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const servicesIncluded = [
    {
      title: 'Channel Strategy',
      desc: 'Niche and audience research, content pillars and video ideas, upload schedule and consistency planning, competitive analysis.',
      icon: Search,
    },
    {
      title: 'Video Production',
      desc: 'Scripting and storyboarding, filming and editing, thumbnail design, titles, descriptions, and tags.',
      icon: Video,
    },
    {
      title: 'SEO & Optimisation',
      desc: 'Keyword research for YouTube search, video titles and descriptions optimised for discovery, tags, chapters, and end screens, playlist organisation.',
      icon: BarChart3,
    },
    {
      title: 'Publishing & Management',
      desc: 'Upload scheduling, community tab posts, comment moderation and engagement, analytics tracking and reporting.',
      icon: Youtube,
    },
    {
      title: 'Growth & Promotion',
      desc: 'Cross-platform promotion (Instagram, TikTok, Twitter), collaboration outreach, YouTube Shorts strategy, ad campaigns (optional).',
      icon: Share2,
    },
    {
      title: 'Monetisation Support',
      desc: 'AdSense setup and optimisation, sponsorship outreach, membership and Super Chat strategy, affiliate integration.',
      icon: DollarSign,
    },
  ];

  const packages = [
    {
      name: 'Launch Package',
      tagline: 'Ideal for: New channels',
      features: [
        'Channel setup and branding',
        '4 videos per month (script, edit, thumbnail)',
        'SEO optimisation for all videos',
        'Upload and scheduling',
      ],
    },
    {
      name: 'Growth Package',
      popular: true,
      tagline: 'Ideal for: Growing channels',
      features: [
        '8 videos per month',
        'Full SEO and keyword research',
        'Thumbnail design and A/B testing',
        'Community management',
        'Monthly analytics and strategy call',
      ],
    },
    {
      name: 'Scale Package',
      tagline: 'Ideal for: Established channels and brands',
      features: [
        '12+ videos per month',
        'Dedicated channel manager',
        'Shorts and long-form content',
        'Paid promotion strategy',
        'Weekly reporting and optimisation',
      ],
    },
  ];

  const whoThisIsFor = [
    'Creators launching or scaling YouTube channels',
    'Brands using YouTube for marketing or education',
    'Businesses producing tutorials, courses, or demos',
    'Agencies managing client channels',
  ];

  const processSteps = [
    { step: '01', title: 'Strategy Session', desc: 'We define your niche, audience, and content plan.' },
    { step: '02', title: 'Production', desc: 'Scripting, filming, editing, and thumbnails.' },
    { step: '03', title: 'Optimisation', desc: 'SEO titles, descriptions, tags, and chapters.' },
    { step: '04', title: 'Publishing', desc: 'Scheduled uploads and community posts.' },
    { step: '05', title: 'Growth', desc: 'Analytics, adjustments, and promotion.' },
  ];

  const faqs = [
    {
      q: 'Do you script the videos?',
      a: 'Yes. We can write scripts based on your ideas or develop concepts from scratch.',
    },
    {
      q: 'Can you work with existing footage?',
      a: 'Absolutely. Send us your raw footage and we\'ll handle editing, thumbnails, and optimisation.',
    },
    {
      q: 'How long until I see growth?',
      a: 'Most channels see traction within 2–4 months with consistent uploads and optimisation.',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pb-20">
      <PageHeader
        badge="YouTube Channel Management"
        title="YouTube Channel Management That Grows Your Audience"
        description="From content strategy to publishing and optimisation, we handle everything so your channel performs."
        onNavigateHome={onNavigateHome}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-16">
        {/* Hero CTA & Overview */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-md space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[#1cff00] text-xs font-bold uppercase tracking-wider">
                <Youtube className="w-3.5 h-3.5" />
                <span>What We Do</span>
              </div>
              <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                We partner with creators and brands to build, manage, and grow YouTube channels. Whether you're launching from zero or scaling an existing channel, we provide end-to-end support, strategy, production, optimisation, and promotion.
              </p>
            </div>
            <button
              onClick={onNavigateContact}
              className="px-6 py-3.5 rounded-2xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-xs transition-all shadow-lg shadow-[#1cff00]/20 flex items-center justify-center gap-2 shrink-0"
            >
              <span>Enquire About YouTube Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Services Included */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-zinc-900">Services Included</h2>
            <p className="text-xs sm:text-sm text-zinc-600">Comprehensive YouTube management from script to analytics.</p>
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
            <h2 className="text-3xl font-extrabold text-zinc-900">Channel Packages</h2>
            <p className="text-xs sm:text-sm text-zinc-600">Flexible tiers tailored for channels at any stage.</p>
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
            <p className="text-xs text-zinc-400">Structured workflow for consistent long-term growth.</p>
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
              Ready to grow your YouTube presence?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300">
              Let's talk strategy, video production, and channel optimisation.
            </p>
          </div>
          <button
            onClick={onNavigateContact}
            className="px-6 py-3.5 rounded-2xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-xs transition-all shadow-lg shadow-[#1cff00]/20 flex items-center justify-center gap-2 shrink-0"
          >
            <span>Contact Us About YouTube Management</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>
      </div>
    </div>
  );
};
