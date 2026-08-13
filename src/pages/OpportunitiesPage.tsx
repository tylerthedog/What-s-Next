import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { OPPORTUNITIES_LIST } from '../data/content';
import { Briefcase, MapPin, Calendar, ArrowRight, CheckCircle, Send, Sparkles } from 'lucide-react';

interface OpportunitiesPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
}

export const OpportunitiesPage: React.FC<OpportunitiesPageProps> = ({ onNavigateHome, onNavigateContact }) => {
  const [selectedOpp, setSelectedOpp] = useState<string | null>(null);
  const [appliedOpp, setAppliedOpp] = useState<string | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedOpp) {
      setAppliedOpp(selectedOpp);
      setTimeout(() => {
        setSelectedOpp(null);
        setApplicantName('');
        setApplicantEmail('');
        setPortfolioLink('');
      }, 2500);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-20">
      <PageHeader
        badge="Join & Partner With Us"
        title="Current Opportunities & Freelance Network"
        description="Explore open contracts, freelance positions, and strategic media partnerships with What's Next."
        onNavigateHome={onNavigateHome}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        
        {/* Intro Banner */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl font-bold text-white">Looking for custom strategic partnership?</h2>
            <p className="text-sm text-slate-300">
              We regularly collaborate with top talent in video editing, CV strategy, software engineering, and vocal narration. If you don't see an exact match, reach out directly.
            </p>
          </div>
          <button
            onClick={onNavigateContact}
            className="px-6 py-3 rounded-2xl bg-[#1cff00] hover:bg-[#1cff00] text-slate-950 font-bold text-sm shrink-0 transition-all shadow-lg shadow-[#1cff00]/20"
          >
            Contact Talent Relations
          </button>
        </div>

        {/* Opportunities List */}
        <div className="space-y-6">
          {OPPORTUNITIES_LIST.map((opp) => (
            <div
              key={opp.id}
              className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-[#1cff00]/40 shadow-xl transition-all duration-200 space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1cff00] bg-emerald-950 px-2.5 py-1 rounded-lg border border-[#1cff00]/30">
                      {opp.type}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">{opp.department}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-2">{opp.title}</h3>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#1cff00]" />
                    <span>{opp.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#1cff00]" />
                    <span>Deadline: {opp.deadline}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">{opp.description}</p>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1cff00]">Key Requirements</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {opp.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-[#1cff00] shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedOpp(opp.id)}
                  className="px-6 py-2.5 rounded-xl bg-[#1cff00] hover:bg-[#1cff00] text-slate-950 text-xs font-bold flex items-center gap-2 shadow-md transition-all"
                >
                  <span>Apply / Partner Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Application Modal */}
      {selectedOpp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-lg p-6 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-xl font-bold text-white">Application Submission</h3>
              <button onClick={() => setSelectedOpp(null)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            {appliedOpp === selectedOpp ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle className="w-12 h-12 text-[#1cff00] mx-auto" />
                <h4 className="text-lg font-bold text-white">Application Submitted!</h4>
                <p className="text-xs text-slate-300">Thank you for your submission. Our Talent team will review your application and reach out via email.</p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name *</label>
                  <input
                    required
                    type="text"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:border-[#1cff00] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                  <input
                    required
                    type="email"
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:border-[#1cff00] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Portfolio / CV Link *</label>
                  <input
                    required
                    type="url"
                    value={portfolioLink}
                    onChange={(e) => setPortfolioLink(e.target.value)}
                    placeholder="https://linkedin.com/in/janedoe or drive link"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:border-[#1cff00] focus:outline-none"
                  />
                </div>

                <div className="pt-4 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedOpp(null)}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-[#1cff00] hover:bg-[#1cff00] text-slate-950 text-xs font-bold flex items-center gap-2 shadow-lg shadow-[#1cff00]/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Application</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
