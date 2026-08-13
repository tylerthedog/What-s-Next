import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Mic, Volume2, Sparkles, CheckCircle2, ArrowRight, ChevronDown, Sliders, Globe2, FileAudio } from 'lucide-react';

interface VoiceoversPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
}

export const VoiceoversPage: React.FC<VoiceoversPageProps> = ({ onNavigateHome, onNavigateContact }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const servicesIncluded = [
    {
      title: 'Voice Recording',
      desc: 'Professional voice talent (multiple voices and accents available); Script review and direction; Multiple takes and options; Fast turnaround.',
      icon: Mic,
    },
    {
      title: 'Audio Post-Production',
      desc: 'Editing and cleanup; Noise reduction and mastering; Music and SFX integration; Format delivery (WAV, MP3, etc.).',
      icon: Sliders,
    },
    {
      title: 'Content Types',
      desc: 'Video narration and explainers; Commercials and radio spots; E-learning and tutorials; Audiobooks and podcasts; IVR and phone systems; Social media voice content.',
      icon: FileAudio,
    },
    {
      title: 'Localisation',
      desc: 'English and Afrikaans voice talent; Multilingual options available; Script adaptation and translation support.',
      icon: Globe2,
    },
  ];

  const whoThisIsFor = [
    'Brands producing video content or ads',
    'E-learning platforms and course creators',
    'Podcasters and audiobook authors',
    'Businesses needing phone system recordings',
  ];

  const processSteps = [
    { step: '01', title: 'Script & Direction', desc: "Share your script or we'll help write it." },
    { step: '02', title: 'Talent Selection', desc: 'We match the right voice to your brand.' },
    { step: '03', title: 'Recording', desc: 'Professional studio or remote recording.' },
    { step: '04', title: 'Post-Production', desc: 'Editing, mastering, and delivery.' },
    { step: '05', title: 'Revisions', desc: 'Adjustments included to ensure perfection.' },
  ];

  const faqs = [
    {
      q: 'Can you match a specific tone or style?',
      a: "Yes. Share reference audio and we'll match tone, pace, and energy.",
    },
    {
      q: 'Do you offer scriptwriting?',
      a: 'Absolutely. We can write or adapt scripts to fit your voice-over needs.',
    },
    {
      q: 'How fast can you deliver?',
      a: 'Standard turnaround is 2–5 business days. Rush options available.',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pb-20">
      <PageHeader
        badge="Voice-Overs & Audio"
        title="Voice-Overs That Bring Your Content to Life"
        description="Professional voice recording for videos, ads, tutorials, audiobooks, and more, delivered with clarity and impact."
        onNavigateHome={onNavigateHome}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-16">
        
        {/* Hero CTA & Overview */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-md space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[#1cff00] text-xs font-bold uppercase tracking-wider">
                <Mic className="w-3.5 h-3.5" />
                <span>What We Do</span>
              </div>
              <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                We record, edit, and deliver broadcast-quality voice-overs tailored to your brand's tone. Whether you need narration for a video, a commercial spot, or an entire audiobook, our team ensures clean audio that connects.
              </p>
            </div>
            <button
              onClick={onNavigateContact}
              className="px-6 py-3.5 rounded-2xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-xs transition-all shadow-lg shadow-[#1cff00]/20 flex items-center justify-center gap-2 shrink-0"
            >
              <span>Enquire About Voice-Over Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Services Included */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-zinc-900">Services Included</h2>
            <p className="text-xs sm:text-sm text-zinc-600">End-to-end voice and audio production capabilities.</p>
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
            <p className="text-xs text-zinc-400">Structured workflow from script review to final audio master.</p>
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
              Need a voice that fits your brand?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300">
              Request a free vocal audition or submit your project script today.
            </p>
          </div>
          <button
            onClick={onNavigateContact}
            className="px-6 py-3.5 rounded-2xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-xs transition-all shadow-lg shadow-[#1cff00]/20 flex items-center justify-center gap-2 shrink-0"
          >
            <span>Contact Us About Voice-Overs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>

      </div>
    </div>
  );
};

