import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Camera, Image as ImageIcon, Sparkles, CheckCircle2, ArrowRight, ChevronDown, ShoppingBag, Calendar, Share2 } from 'lucide-react';

interface PhotographyPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
}

export const PhotographyPage: React.FC<PhotographyPageProps> = ({ onNavigateHome, onNavigateContact }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const servicesIncluded = [
    {
      title: 'Brand Photography',
      desc: 'Lifestyle and environmental shoots; Team and headshot sessions; Behind-the-scenes content; Visual identity development.',
      icon: Camera,
    },
    {
      title: 'Product Photography',
      desc: 'E-commerce product shots; Flat lays and styled compositions; Packshots and detail images; White background and lifestyle options.',
      icon: ShoppingBag,
    },
    {
      title: 'Event Photography',
      desc: 'Corporate events and conferences; Product launches and activations; Workshops and team gatherings; Photo reports and highlight reels.',
      icon: Calendar,
    },
    {
      title: 'Social Media Visuals',
      desc: 'Branded photos for posts and stories; Content batch creation; Reels and short-form video integration; Platform-specific formatting.',
      icon: Share2,
    },
  ];

  const whoThisIsFor = [
    'E-commerce brands needing product imagery',
    'Businesses building or refreshing brand visuals',
    'Events requiring professional documentation',
    'Creators and influencers needing content batches',
  ];

  const processSteps = [
    { step: '01', title: 'Creative Brief', desc: 'We align on style, mood, and deliverables.' },
    { step: '02', title: 'Pre-Production', desc: 'Location scouting, styling, and shot lists.' },
    { step: '03', title: 'Shoot Day', desc: 'Professional photography with direction.' },
    { step: '04', title: 'Post-Production', desc: 'Editing, retouching, and colour grading.' },
    { step: '05', title: 'Delivery', desc: 'High-res files optimised for web and print.' },
  ];

  const faqs = [
    {
      q: 'Do you provide styling and props?',
      a: 'Yes, we can coordinate styling, props, and location scouting as part of the package.',
    },
    {
      q: 'How many images will I receive?',
      a: 'Deliverables vary by project. Typical brand shoots include 30–100 edited images, product shoots vary by SKU count.',
    },
    {
      q: 'Can you shoot on location?',
      a: 'Absolutely. We work on-location, in-studio, or hybrid setups depending on your needs.',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pb-20">
      <PageHeader
        badge="Photography Services"
        title="Photography That Captures Your Brand's Identity"
        description="Product shots, brand photography, event coverage, and visual content designed to keep you top of mind."
        onNavigateHome={onNavigateHome}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-16">
        
        {/* Hero CTA & Overview */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-md space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[#1cff00] text-xs font-bold uppercase tracking-wider">
                <Camera className="w-3.5 h-3.5" />
                <span>What We Do</span>
              </div>
              <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                We create images with weight, photos that pull viewers into your brand's identity and tell your story at a glance. From product photography to lifestyle shoots, we plan, produce, and manage visual content so your brand stays unmatched.
              </p>
            </div>
            <button
              onClick={onNavigateContact}
              className="px-6 py-3.5 rounded-2xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-xs transition-all shadow-lg shadow-[#1cff00]/20 flex items-center justify-center gap-2 shrink-0"
            >
              <span>Enquire About Photography Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Services Included */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-zinc-900">Services Included</h2>
            <p className="text-xs sm:text-sm text-zinc-600">Professional photography tailored to your brand.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <p className="text-xs text-zinc-400">Structured workflow from shoot setup to retouched delivery.</p>
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
              Let's create visuals that define your brand.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300">
              Book a photography shoot or request custom product imagery today.
            </p>
          </div>
          <button
            onClick={onNavigateContact}
            className="px-6 py-3.5 rounded-2xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-xs transition-all shadow-lg shadow-[#1cff00]/20 flex items-center justify-center gap-2 shrink-0"
          >
            <span>Contact Us About Photography</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>

      </div>
    </div>
  );
};

