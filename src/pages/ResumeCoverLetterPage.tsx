import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { FileText, Sparkles, CheckCircle2, ArrowRight, ChevronDown, Award, Mail, Layers } from 'lucide-react';

interface ResumeCoverLetterPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
}

export const ResumeCoverLetterPage: React.FC<ResumeCoverLetterPageProps> = ({ onNavigateHome, onNavigateContact }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const servicesIncluded = [
    {
      title: 'CV Writing & Remodelling',
      desc: 'ATS-optimised layout and formatting; Achievement-driven bullet points with metric impact; Executive summary copywriting; Custom design for visual impact; Editable DOCX and PDF delivery.',
      icon: FileText,
    },
    {
      title: 'Cover Letter Writing',
      desc: 'Customised cover letters tailored to specific roles or industries; Persuasive storytelling and narrative angle; Flexible templates for multiple applications; Matching design to your CV.',
      icon: Mail,
    },
    {
      title: 'Career Asset Bundles',
      desc: 'Full career makeover (CV + Cover Letter + LinkedIn profile); Thank-you letter templates; Follow-up message scripts.',
      icon: Layers,
    },
  ];

  const whoThisIsFor = [
    'Professionals hunting for their next career move',
    'Executive-level candidates needing polished assets',
    'Career changers needing to frame transferable skills',
    'Recent graduates entering the job market',
  ];

  const processSteps = [
    { step: '01', title: 'Discovery', desc: 'We collect your background, target roles, and work history.' },
    { step: '02', title: 'Drafting', desc: 'We write ATS-optimised copy and layout.' },
    { step: '03', title: 'Review & Feedback', desc: 'You review draft files and request adjustments.' },
    { step: '04', title: 'Final Delivery', desc: 'Delivery in DOCX, PDF, and plain text formats.' },
  ];

  const faqs = [
    {
      q: 'What is ATS and why does it matter?',
      a: 'Applicant Tracking Systems (ATS) are software tools used by employers to screen CVs before a human sees them. Our CVs are engineered to pass ATS filters while remaining visual and readable for hiring managers.',
    },
    {
      q: 'How long does the process take?',
      a: 'First drafts are delivered within 3–5 business days. Revisions are completed within 24–48 hours.',
    },
    {
      q: 'Do I need a separate cover letter for every job?',
      a: 'We provide a core cover letter along with a flexible template and guidelines so you can easily customise it for specific applications in minutes.',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pb-20">
      <PageHeader
        badge="CVs & Cover Letters"
        title="CVs and Cover Letters That Win Interviews"
        description="Professional CV writing, ATS optimisation, and compelling cover letters that showcase your true value."
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
                We rewrite and remodel your professional documents into ATS-friendly, high-impact career assets. Whether you're hunting for a new role, pivoting careers, or applying for executive positions, we craft CVs and cover letters that get you past the filters and into the interview room.
              </p>
            </div>
            <button
              onClick={onNavigateContact}
              className="px-6 py-3.5 rounded-2xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-xs transition-all shadow-lg shadow-[#1cff00]/20 flex items-center justify-center gap-2 shrink-0"
            >
              <span>Enquire About CV Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Services Included */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-zinc-900">Services Included</h2>
            <p className="text-xs sm:text-sm text-zinc-600">Complete CV and cover letter writing services.</p>
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Our Process</h2>
            <p className="text-xs text-zinc-400">Streamlined workflow from background collection to final assets.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
              Ready to land more interviews?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300">
              Get an ATS-optimised CV and personalised cover letter.
            </p>
          </div>
          <button
            onClick={onNavigateContact}
            className="px-6 py-3.5 rounded-2xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-xs transition-all shadow-lg shadow-[#1cff00]/20 flex items-center justify-center gap-2 shrink-0"
          >
            <span>Contact Us About CV & Cover Letter Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>

      </div>
    </div>
  );
};

