import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { UserCheck, Sparkles, CheckCircle2, ArrowRight, ChevronDown, Linkedin, Briefcase, Award } from 'lucide-react';

interface ProfileOptimizationPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
}

export const ProfileOptimizationPage: React.FC<ProfileOptimizationPageProps> = ({ onNavigateHome, onNavigateContact }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const servicesIncluded = [
    {
      title: 'LinkedIn Optimisation',
      desc: 'SEO headline and summary copywriting; Experience section bullet points; Custom banner design; Featured content section setup; Skills, endorsements, and recommendation strategies.',
      icon: Linkedin,
    },
    {
      title: 'Freelance Platform Optimisation',
      desc: 'Upwork, Fiverr, and Freelancer.com profiles; Proposal templates and pitch copywriting; Portfolio item layout and descriptions; Pricing strategy and service tiering.',
      icon: Briefcase,
    },
    {
      title: 'Executive & Personal Brand Profiles',
      desc: 'Executive bios and press kit copy; Website "About Me" pages; Speaker profiles and media kits.',
      icon: Award,
    },
  ];

  const whoThisIsFor = [
    'Job seekers and career changers',
    'Freelancers and agency owners',
    'Executives and thought leaders',
    'Founders and entrepreneurs',
  ];

  const processSteps = [
    { step: '01', title: 'Profile Review', desc: 'We analyse your existing profiles.' },
    { step: '02', title: 'Questionnaire', desc: 'We collect key achievements, skills, and goals.' },
    { step: '03', title: 'Copy & Design', desc: 'We write custom copy and design custom graphics.' },
    { step: '04', title: 'Implementation', desc: 'We update your profile directly or provide step-by-step guides.' },
    { step: '05', title: 'Follow-Up', desc: 'We check performance and make refinements.' },
  ];

  const faqs = [
    {
      q: 'Will you update my profile for me, or do I make the changes?',
      a: 'Both options are available. We can log in and update your profile directly, or send you an organised doc with step-by-step instructions.',
    },
    {
      q: 'How long does profile optimisation take?',
      a: 'Turnaround is typically 3–5 business days after receiving your completed questionnaire.',
    },
    {
      q: 'Does profile optimisation really work?',
      a: 'Yes. Optimised profiles see up to 5x more profile views, search appearances, and inbound messages from recruiters and prospective clients.',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pb-20">
      <PageHeader
        badge="Profile Optimisation"
        title="Profile Optimisation That Gets You Noticed"
        description="Transform your LinkedIn, Upwork, and social profiles into high-converting assets that attract opportunities."
        onNavigateHome={onNavigateHome}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-16">
        
        {/* Hero CTA & Overview */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-md space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[#1cff00] text-xs font-bold uppercase tracking-wider">
                <UserCheck className="w-3.5 h-3.5" />
                <span>What We Do</span>
              </div>
              <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                We optimise your digital presence across platforms so recruiters, clients, and partners find you first. From headline copywriting to keyword tuning, banner design, and portfolio curation, we make your profiles work for you 24/7.
              </p>
            </div>
            <button
              onClick={onNavigateContact}
              className="px-6 py-3.5 rounded-2xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-xs transition-all shadow-lg shadow-[#1cff00]/20 flex items-center justify-center gap-2 shrink-0"
            >
              <span>Enquire About Profile Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Services Included */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-zinc-900">Services Included</h2>
            <p className="text-xs sm:text-sm text-zinc-600">Tailored profile development across top professional platforms.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            <p className="text-xs text-zinc-400">Structured workflow for maximum profile conversion.</p>
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
              Ready to upgrade your online presence?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300">
              Let's turn your profiles into inbound opportunities.
            </p>
          </div>
          <button
            onClick={onNavigateContact}
            className="px-6 py-3.5 rounded-2xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-xs transition-all shadow-lg shadow-[#1cff00]/20 flex items-center justify-center gap-2 shrink-0"
          >
            <span>Contact Us About Profile Optimisation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>

      </div>
    </div>
  );
};

