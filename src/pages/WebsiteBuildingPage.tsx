import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Globe, Sparkles, CheckCircle2, ArrowRight, ChevronDown, Layout, Code, Wrench } from 'lucide-react';

interface WebsiteBuildingPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
}

export const WebsiteBuildingPage: React.FC<WebsiteBuildingPageProps> = ({ onNavigateHome, onNavigateContact }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const servicesIncluded = [
    {
      title: 'Custom Website Development',
      desc: 'Responsive design (desktop, tablet, mobile); Landing pages and sales funnels; Business websites and portfolios; E-commerce store buildout (Shopify, WooCommerce, custom).',
      icon: Layout,
    },
    {
      title: 'Web Application Development',
      desc: 'Custom web apps and client portals; API integrations and third-party tools; User authentication and database setup; Performance optimisation and speed tuning.',
      icon: Code,
    },
    {
      title: 'Website Maintenance & Optimisation',
      desc: 'Core Web Vitals and speed optimisation; Security updates and backups; Content updates and page additions; SEO technical audits and fixes.',
      icon: Wrench,
    },
  ];

  const whoThisIsFor = [
    'Businesses needing a modern, high-converting website',
    'E-commerce brands building or redesigning stores',
    'Creators and influencers launching personal brand sites',
    'Startups building web applications or MVPs',
  ];

  const processSteps = [
    { step: '01', title: 'Discovery & Strategy', desc: 'We map out page structure, goals, and tech stack.' },
    { step: '02', title: 'Design & Wireframing', desc: 'We design visual layouts for key pages.' },
    { step: '03', title: 'Development', desc: 'We code the site with fast, modern frameworks.' },
    { step: '04', title: 'Content & Testing', desc: 'We populate copy, test functionality, and optimise speed.' },
    { step: '05', title: 'Launch & Handoff', desc: 'We deploy your site and provide training for updates.' },
  ];

  const faqs = [
    {
      q: 'What platforms do you build websites on?',
      a: 'We build on React, Next.js, WordPress, Shopify, Webflow, and custom tech stacks depending on your project needs.',
    },
    {
      q: 'How long does a website build take?',
      a: 'Simple landing pages take 1–2 weeks; custom multi-page sites take 3–6 weeks depending on complexity.',
    },
    {
      q: 'Will my website be mobile-friendly and fast?',
      a: 'Yes. Every site we build is mobile-responsive, optimised for speed, and structured for search engines.',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pb-20">
      <PageHeader
        badge="Website & App Development"
        title="Websites and Web Apps Built to Convert"
        description="Custom websites, landing pages, e-commerce stores, and web apps designed for performance and growth."
        onNavigateHome={onNavigateHome}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-16">
        
        {/* Hero CTA & Overview */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-md space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[#1cff00] text-xs font-bold uppercase tracking-wider">
                <Globe className="w-3.5 h-3.5" />
                <span>What We Do</span>
              </div>
              <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                We design and build fast, responsive, and high-converting websites and web apps tailored to your business goals. From simple landing pages to complex custom applications, we handle design, development, content integration, and optimisation end-to-end.
              </p>
            </div>
            <button
              onClick={onNavigateContact}
              className="px-6 py-3.5 rounded-2xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-xs transition-all shadow-lg shadow-[#1cff00]/20 flex items-center justify-center gap-2 shrink-0"
            >
              <span>Enquire About Web Development</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Services Included */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-zinc-900">Services Included</h2>
            <p className="text-xs sm:text-sm text-zinc-600">Tailored digital engineering and development solutions.</p>
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
            <p className="text-xs text-zinc-400">Structured development process from wireframe to deployment.</p>
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
              Ready to build or upgrade your website?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300">
              Let's create a digital experience that converts visitors into customers.
            </p>
          </div>
          <button
            onClick={onNavigateContact}
            className="px-6 py-3.5 rounded-2xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-xs transition-all shadow-lg shadow-[#1cff00]/20 flex items-center justify-center gap-2 shrink-0"
          >
            <span>Contact Us About Web Development</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>

      </div>
    </div>
  );
};

