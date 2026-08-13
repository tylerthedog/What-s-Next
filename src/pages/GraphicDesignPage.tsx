import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Palette, Sparkles, CheckCircle2, ArrowRight, ChevronDown, Youtube, Layers, Layout, Printer } from 'lucide-react';

interface GraphicDesignPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
}

export const GraphicDesignPage: React.FC<GraphicDesignPageProps> = ({ onNavigateHome, onNavigateContact }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const servicesIncluded = [
    {
      title: 'YouTube Thumbnails',
      desc: 'Custom thumbnail design tailored to your niche; High-CTR concepts and expression isolation; A/B testing variations; Quick turnaround for active upload schedules.',
      icon: Youtube,
    },
    {
      title: 'Branding & Identity',
      desc: 'Logo design and visual identity packages; Brand guidelines (colour palette, typography, usage rules); Business card and stationery design; Brand asset suites (icons, patterns, badges).',
      icon: Layers,
    },
    {
      title: 'Social Media & Marketing Graphics',
      desc: 'Banner graphics for YouTube, X (Twitter), LinkedIn, and Facebook; Carousel post design for Instagram and LinkedIn; Ad creatives for paid social and search campaigns; Infographics and data visualisers.',
      icon: Layout,
    },
    {
      title: 'Print & Digital Collateral',
      desc: 'E-book covers and layout design; Flyers, posters, and brochures; Presentation decks and pitch decks; Event signage and merch design.',
      icon: Printer,
    },
  ];

  const whoThisIsFor = [
    'YouTubers and creators needing high-CTR thumbnails',
    'Businesses launching or refreshing their brand identity',
    'Marketers running paid social or display campaigns',
    'Founders preparing pitch decks for investors',
  ];

  const processSteps = [
    { step: '01', title: 'Creative Brief', desc: 'We gather brand guidelines, style preferences, and goals.' },
    { step: '02', title: 'Concepting', desc: 'We draft initial design concepts and visual directions.' },
    { step: '03', title: 'Feedback & Revisions', desc: 'You review drafts and request adjustments.' },
    { step: '04', title: 'Final Polish', desc: 'We refine details and prepare high-res production files.' },
    { step: '05', title: 'Delivery', desc: 'Full asset handoff in all required formats (PNG, JPG, SVG, PSD).' },
  ];

  const faqs = [
    {
      q: 'What is the turnaround time for a YouTube thumbnail?',
      a: 'Standard turnaround is 24–48 hours. Rush delivery is available for active upload schedules.',
    },
    {
      q: 'Do I get source files for my logo design?',
      a: 'Yes. All branding projects include full vector source files (AI, EPS, SVG, PNG, PDF).',
    },
    {
      q: 'Can you work within our existing brand guidelines?',
      a: 'Absolutely. We ensure all new graphics align perfectly with your existing colour palette, fonts, and style.',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pb-20">
      <PageHeader
        badge="Graphic Design"
        title="Eye-Catching Design That Captures Attention"
        description="Custom YouTube thumbnails, branding, social media graphics, and marketing collateral designed to convert."
        onNavigateHome={onNavigateHome}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-16">
        
        {/* Hero CTA & Overview */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-md space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[#1cff00] text-xs font-bold uppercase tracking-wider">
                <Palette className="w-3.5 h-3.5" />
                <span>What We Do</span>
              </div>
              <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                We create bold, professional visual designs that make your brand stand out. From click-worthy YouTube thumbnails and complete brand identity packages to social media graphics and print collateral, our design team turns ideas into high-impact visuals.
              </p>
            </div>
            <button
              onClick={onNavigateContact}
              className="px-6 py-3.5 rounded-2xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-xs transition-all shadow-lg shadow-[#1cff00]/20 flex items-center justify-center gap-2 shrink-0"
            >
              <span>Enquire About Design Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Services Included */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-zinc-900">Services Included</h2>
            <p className="text-xs sm:text-sm text-zinc-600">Complete visual design services for digital and print media.</p>
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
            <p className="text-xs text-zinc-400">Structured design process from creative brief to final handoff.</p>
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
              Ready to elevate your visual identity?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300">
              Let's create designs that capture attention and build brand trust.
            </p>
          </div>
          <button
            onClick={onNavigateContact}
            className="px-6 py-3.5 rounded-2xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-xs transition-all shadow-lg shadow-[#1cff00]/20 flex items-center justify-center gap-2 shrink-0"
          >
            <span>Contact Us About Graphic Design</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>

      </div>
    </div>
  );
};

