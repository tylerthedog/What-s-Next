import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { FileText, Sparkles, CheckCircle2, ArrowRight, ChevronDown, Video, Search, Globe, Mail } from 'lucide-react';

interface WrittenContentPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
}

export const WrittenContentPage: React.FC<WrittenContentPageProps> = ({ onNavigateHome, onNavigateContact }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const servicesIncluded = [
    {
      title: 'Video Scriptwriting',
      desc: 'YouTube video scripts (long-form & short-form); Commercial and ad scripts; Podcast outlines and intro scripts; Course and tutorial scripts.',
      icon: Video,
    },
    {
      title: 'SEO Articles & Blog Posts',
      desc: 'Keyword research and content strategy; In-depth, well-researched blog posts; Formatting with headings, bullet points, and meta tags; Internal linking and CTA placement.',
      icon: Search,
    },
    {
      title: 'Website & Landing Page Copy',
      desc: 'Homepage, About, and Services copy; High-converting landing page headlines and body copy; Product descriptions for e-commerce; Microcopy and call-to-action text.',
      icon: Globe,
    },
    {
      title: 'Email & Sales Copy',
      desc: 'Welcome sequences and automated flows; Sales emails and product launch campaigns; Newsletters and re-engagement campaigns; Ad copy for Facebook, Instagram, and Google.',
      icon: Mail,
    },
  ];

  const whoThisIsFor = [
    'Creators needing video scripts and descriptions',
    'Businesses building organic traffic through SEO',
    'E-commerce stores needing product copy',
    'Marketers launching campaigns or email sequences',
  ];

  const processSteps = [
    { step: '01', title: 'Content Brief', desc: 'We collect your goals, audience, and key details.' },
    { step: '02', title: 'Outline & Research', desc: 'We build a structure and conduct keyword research.' },
    { step: '03', title: 'Drafting', desc: 'Our writers produce clear, engaging copy.' },
    { step: '04', title: 'Review & Refine', desc: 'You review and request adjustments.' },
    { step: '05', title: 'Delivery', desc: 'Final copy delivered in your preferred format.' },
  ];

  const faqs = [
    {
      q: 'Do you include keyword research with blog posts?',
      a: 'Yes. Every SEO article includes keyword research and strategic placement.',
    },
    {
      q: 'How long are the video scripts you write?',
      a: 'We write scripts of any length, from 60-second Reels/Shorts to 20+ minute deep-dive YouTube videos.',
    },
    {
      q: 'Can you match our existing brand voice?',
      a: 'Absolutely. Share brand guidelines or existing content and we will mirror your tone seamlessly.',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pb-20">
      <PageHeader
        badge="Written Content & SEO"
        title="Copywriting That Hooks Readers and Drives Action"
        description="From video scripts and SEO articles to email sequences and ad copy, we craft words that sell."
        onNavigateHome={onNavigateHome}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-16">
        
        {/* Hero CTA & Overview */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-md space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[#1cff00] text-xs font-bold uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5" />
                <span>What We Do</span>
              </div>
              <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                We write clear, persuasive, and SEO-optimised copy tailored to your brand voice. Whether you need scripts for YouTube videos, articles to rank on Google, or sales copy that converts, our writers deliver content that drives measurable results.
              </p>
            </div>
            <button
              onClick={onNavigateContact}
              className="px-6 py-3.5 rounded-2xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-xs transition-all shadow-lg shadow-[#1cff00]/20 flex items-center justify-center gap-2 shrink-0"
            >
              <span>Enquire About Written Content</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Services Included */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-zinc-900">Services Included</h2>
            <p className="text-xs sm:text-sm text-zinc-600">End-to-end strategic writing services for every platform.</p>
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
            <p className="text-xs text-zinc-400">Structured workflow for persuasive, high-converting copy.</p>
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
              Ready for copy that converts?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300">
              Let's craft words that hook readers and build long-term trust.
            </p>
          </div>
          <button
            onClick={onNavigateContact}
            className="px-6 py-3.5 rounded-2xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-xs transition-all shadow-lg shadow-[#1cff00]/20 flex items-center justify-center gap-2 shrink-0"
          >
            <span>Contact Us About Written Content</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>

      </div>
    </div>
  );
};

