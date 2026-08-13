import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Video, Film, Sparkles, CheckCircle2, ArrowRight, ChevronDown, Camera, PlayCircle, Clapperboard } from 'lucide-react';

interface VideoEditingPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
}

export const VideoEditingPage: React.FC<VideoEditingPageProps> = ({ onNavigateHome, onNavigateContact }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const servicesIncluded = [
    {
      title: 'Video Editing',
      desc: 'Professional cuts, transitions, and pacing; Colour grading and correction; Sound design and audio mixing; Motion graphics and text overlays; Format optimisation for all platforms (YouTube, Instagram, TikTok, LinkedIn).',
      icon: Film,
    },
    {
      title: 'Filming & Production',
      desc: 'On-location shooting; Studio production; Multi-camera setups; Lighting and audio recording; Direction and talent coordination.',
      icon: Camera,
    },
    {
      title: 'Motion Content & VFX',
      desc: 'Animated intros and outros; Lower thirds and titles; Visual effects and compositing; Logo animations and brand elements.',
      icon: Clapperboard,
    },
    {
      title: 'Post-Production Support',
      desc: 'Subtitling and captions; Video recycling for social media; Thumbnail creation; YouTube optimisation (titles, descriptions, tags).',
      icon: PlayCircle,
    },
  ];

  const whoThisIsFor = [
    'Brands needing promotional or explainer videos',
    'Creators launching or growing YouTube channels',
    'Businesses producing tutorials, courses, or training content',
    'Agencies requiring white-label video production',
  ];

  const processSteps = [
    { step: '01', title: 'Discovery', desc: 'We discuss your goals, audience, and vision.' },
    { step: '02', title: 'Pre-Production', desc: 'Scripting, storyboarding, and planning.' },
    { step: '03', title: 'Production', desc: 'Filming or receiving your raw footage.' },
    { step: '04', title: 'Post-Production', desc: 'Editing, colour, sound, and graphics.' },
    { step: '05', title: 'Delivery', desc: 'Final files optimised for your platforms.' },
  ];

  const faqs = [
    {
      q: 'Do you work with raw footage we provide?',
      a: "Absolutely. Send us your footage and we'll handle the rest, editing, colour, sound, and delivery.",
    },
    {
      q: 'What formats do you deliver?',
      a: 'We deliver in any format you need, vertical for TikTok/Reels, horizontal for YouTube, or custom sizes for ads and web.',
    },
    {
      q: 'How long does a typical project take?',
      a: 'Most edits are delivered within 3–7 business days, depending on complexity. Larger productions vary based on scope.',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pb-20">
      <PageHeader
        badge="Video Production"
        title="Video Production That Looks Professional and Performs"
        description="From concept to final cut, we handle every stage of video creation, editing, filming, motion graphics, and everything in between."
        onNavigateHome={onNavigateHome}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-16">
        
        {/* Hero CTA & Overview */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-md space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[#1cff00] text-xs font-bold uppercase tracking-wider">
                <Video className="w-3.5 h-3.5" />
                <span>What We Do</span>
              </div>
              <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                We turn raw footage into polished, high-impact video content. Whether you need promotional videos, tutorials, social media clips, or full-scale productions, our team delivers clean edits, strong storytelling, and visual quality that stands out.
              </p>
            </div>
            <button
              onClick={onNavigateContact}
              className="px-6 py-3.5 rounded-2xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-xs transition-all shadow-lg shadow-[#1cff00]/20 flex items-center justify-center gap-2 shrink-0"
            >
              <span>Enquire About Video Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Services Included */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-zinc-900">Services Included</h2>
            <p className="text-xs sm:text-sm text-zinc-600">End-to-end video capabilities for every channel.</p>
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
            <p className="text-xs text-zinc-400">Streamlined workflow from concept to final export.</p>
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
              Ready to create video content that performs?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300">
              Let's turn your raw ideas and footage into high-converting videos.
            </p>
          </div>
          <button
            onClick={onNavigateContact}
            className="px-6 py-3.5 rounded-2xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-xs transition-all shadow-lg shadow-[#1cff00]/20 flex items-center justify-center gap-2 shrink-0"
          >
            <span>Contact Us About Video Production</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>

      </div>
    </div>
  );
};

