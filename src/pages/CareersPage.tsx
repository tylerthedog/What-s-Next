import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Briefcase, MapPin, Clock, Send, CheckCircle2, Sparkles, Globe, Zap, HeartHandshake, BookOpen, ArrowRight } from 'lucide-react';

interface CareersPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onNavigateHome, onNavigateContact }) => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [coverNote, setCoverNote] = useState('');

  const perks = [
    {
      title: 'Remote-First Culture',
      desc: 'Work from anywhere in the world with flexible hours.',
      icon: Globe,
    },
    {
      title: 'Competitive Pay',
      desc: 'Top-of-market rates and performance bonuses.',
      icon: Zap,
    },
    {
      title: 'Creative Freedom',
      desc: 'Ownership over your projects with room to experiment.',
      icon: HeartHandshake,
    },
    {
      title: 'Growth & Learning',
      desc: 'Access to tools, courses, and mentorship to level up your skills.',
      icon: BookOpen,
    },
  ];

  const openRoles = [
    {
      title: 'Senior Video Editor',
      type: 'Full-time / Contract',
      desc: 'Expertise in Premiere Pro, After Effects, pacing, and sound design.',
    },
    {
      title: 'Social Media Manager',
      type: 'Full-time',
      desc: 'Experience managing Instagram, TikTok, and LinkedIn accounts with proven growth.',
    },
    {
      title: 'YouTube Channel Strategist',
      type: 'Contract',
      desc: 'Deep understanding of YouTube analytics, SEO, thumbnails, and content strategy.',
    },
    {
      title: 'Copywriter & Scriptwriter',
      type: 'Freelance',
      desc: 'Strong narrative writing skills for video scripts, articles, and sales copy.',
    },
    {
      title: 'Graphic & Thumbnail Designer',
      type: 'Freelance',
      desc: 'High-CTR YouTube thumbnail design and brand identity experience.',
    },
    {
      title: 'Voice-Over Artist',
      type: 'Freelance',
      desc: 'Professional studio setup with versatility across tones and genres.',
    },
  ];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedJob(null);
      setApplicantName('');
      setApplicantEmail('');
      setPortfolioUrl('');
      setCoverNote('');
    }, 4000);
  };

  const scrollToPositions = () => {
    const el = document.getElementById('open-positions');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pb-20">
      <PageHeader
        badge="Careers"
        title="Join the What's Next? Team"
        description="We're looking for talented, passionate creators, editors, strategists, and builders to help us deliver world-class work."
        onNavigateHome={onNavigateHome}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-16">
        
        {/* Hero CTA & Why Work With Us */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-md space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[#1cff00] text-xs font-bold uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Why Work With Us</span>
              </div>
              <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                We're a fast-growing creative production agency with a simple philosophy: hire great people, give them autonomy, and build incredible work together. Whether you're a full-time professional or a specialized freelancer, we offer competitive pay, flexible schedules, and the opportunity to work on exciting projects with top creators and brands.
              </p>
            </div>
            <button
              onClick={scrollToPositions}
              className="px-6 py-3.5 rounded-2xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-xs transition-all shadow-lg shadow-[#1cff00]/20 flex items-center justify-center gap-2 shrink-0"
            >
              <span>View Open Positions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Perks & Benefits */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-zinc-900">Perks & Benefits</h2>
            <p className="text-xs sm:text-sm text-zinc-600">Built for high performance and personal autonomy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-sm space-y-3">
                  <div className="p-3 rounded-2xl bg-black text-[#1cff00] w-fit">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900">{p.title}</h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Open Roles */}
        <section id="open-positions" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-zinc-900">Open Roles</h2>
            <p className="text-xs sm:text-sm text-zinc-600">Explore active positions across our creative teams.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openRoles.map((role, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-sm flex flex-col justify-between space-y-4 hover:border-zinc-400 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-black text-[#1cff00] text-[10px] font-extrabold uppercase tracking-wider">
                      {role.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900">{role.title}</h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">{role.desc}</p>
                </div>

                <button
                  onClick={() => {
                    setSelectedJob(role.title);
                    const formEl = document.getElementById('application-form');
                    if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3 rounded-2xl bg-black text-white hover:bg-zinc-800 font-extrabold text-xs transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-[#1cff00]" />
                  <span>Apply for Position</span>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Application Form & General Application */}
        <section id="application-form" className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-md space-y-6 max-w-3xl mx-auto">
          <div className="border-b border-zinc-100 pb-4">
            <h3 className="text-2xl font-extrabold text-zinc-900">
              {selectedJob ? `Apply for: ${selectedJob}` : 'General Application'}
            </h3>
            <p className="text-xs text-zinc-600 mt-1">
              Don't see a role that fits? We're always looking for great talent. Send us your portfolio and tell us how you can contribute.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-[#228f0c] mx-auto animate-bounce" />
              <h4 className="text-2xl font-bold text-zinc-900">Application Submitted!</h4>
              <p className="text-xs text-zinc-600 max-w-sm mx-auto">
                Thank you for applying to What's Next? Our team will review your portfolio and reach out shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleApply} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1">Full Name *</label>
                  <input
                    required
                    type="text"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-zinc-900 focus:border-[#228f0c] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1">Email Address *</label>
                  <input
                    required
                    type="email"
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-zinc-900 focus:border-[#228f0c] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">Portfolio / Work Sample URL *</label>
                <input
                  required
                  type="url"
                  value={portfolioUrl}
                  onChange={(e) => setPortfolioUrl(e.target.value)}
                  placeholder="https://behance.net/yourprofile or YouTube channel / Website"
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-zinc-900 focus:border-[#228f0c] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">Brief Cover Note & Experience Summary *</label>
                <textarea
                  required
                  rows={4}
                  value={coverNote}
                  onChange={(e) => setCoverNote(e.target.value)}
                  placeholder="Tell us about your background, tools you use, and why you want to join our team..."
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-zinc-900 focus:border-[#228f0c] focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-xs shadow-lg shadow-[#1cff00]/20 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Apply Now</span>
              </button>
            </form>
          )}
        </section>

      </div>
    </div>
  );
};

