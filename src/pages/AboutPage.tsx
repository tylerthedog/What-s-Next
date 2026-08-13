import React from 'react';
import { PageHeader } from '../components/PageHeader';
import {
  Video,
  Mic,
  Share2,
  PenTool,
  Globe,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  Target,
  Sparkles,
  Zap,
  Users,
  ShieldCheck,
  TrendingUp,
  Award
} from 'lucide-react';

interface AboutPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
  onNavigateServices: (serviceId?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateHome,
  onNavigateContact,
  onNavigateServices,
}) => {
  const whatWeDoList = [
    {
      title: 'Video & Photo Production',
      desc: 'Professional editing, filming, motion graphics, and photography for brands and creators.',
      icon: Video,
    },
    {
      title: 'Voice & Audio',
      desc: 'Broadcast-quality voice-overs, audio editing, and sound design.',
      icon: Mic,
    },
    {
      title: 'Social Media & YouTube',
      desc: 'Strategy, content creation, posting, and growth management across all platforms.',
      icon: Share2,
    },
    {
      title: 'Written Content',
      desc: 'SEO-optimised blog posts, website copy, YouTube descriptions, and scripts.',
      icon: PenTool,
    },
    {
      title: 'Design & Development',
      desc: 'Logos, branding, thumbnails, websites, and apps built for performance.',
      icon: Globe,
    },
    {
      title: 'Career Services',
      desc: 'Profile optimisation, CVs, and cover letters that get you noticed.',
      icon: UserCheck,
    },
  ];

  const processSteps = [
    { step: '01', title: 'Discovery', desc: 'We start by understanding your goals, audience, and vision.' },
    { step: '02', title: 'Strategy', desc: 'We build a plan tailored to your needs and budget.' },
    { step: '03', title: 'Production', desc: 'Our team creates high-quality content across all formats.' },
    { step: '04', title: 'Optimisation', desc: 'We refine and adjust based on performance and feedback.' },
    { step: '05', title: 'Growth', desc: 'We support ongoing management and scaling.' },
  ];

  const values = [
    {
      title: 'Quality First',
      desc: "We don't cut corners. Every project meets our standards for visual and technical excellence.",
      icon: Award,
    },
    {
      title: 'Clear Communication',
      desc: 'We keep you informed at every stage. No surprises, no delays.',
      icon: ShieldCheck,
    },
    {
      title: 'Results-Driven',
      desc: 'We create content designed to perform, not just look good.',
      icon: TrendingUp,
    },
    {
      title: 'One Team, Full Service',
      desc: 'You get one point of contact for everything. No juggling multiple freelancers.',
      icon: Users,
    },
  ];

  const whoWeWorkWith = [
    'Brands launching or scaling content production',
    'Creators growing YouTube and social channels',
    'Businesses needing websites, apps, or design',
    'Agencies requiring white-label production',
    'Professionals optimising profiles and CVs',
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pb-20">
      <PageHeader
        badge="Full-Service Creative Agency"
        title="About What's Next?"
        description="We're a full-service creative production agency built for the modern creator economy."
        onNavigateHome={onNavigateHome}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* Who We Are */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-md space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[#1cff00] text-xs font-extrabold uppercase tracking-wider">
            <Target className="w-3.5 h-3.5" />
            <span>Who We Are</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">
            All Your Creative Workflows Under One Roof
          </h2>
          <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
            What's Next? is a creative agency handling video editing, filming, photography, voice-overs, social media management, YouTube channel support, content writing, graphic design, and web development, all under one roof.
          </p>
          <p className="text-zinc-600 text-base leading-relaxed">
            We partner with brands, creators, and businesses to create content that looks professional and performs well. From concept to publishing, we manage every stage of production so you can focus on what matters most.
          </p>
        </section>

        {/* What We Do */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[#1cff00] text-xs font-bold uppercase tracking-wider">
              <span>Our Capabilities</span>
            </div>
            <h2 className="text-3xl font-extrabold text-zinc-900">What We Do</h2>
            <p className="text-sm text-zinc-600">
              End-to-end creative production and strategic services for growing brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDoList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-sm space-y-3">
                  <div className="p-3 rounded-2xl bg-black text-[#1cff00] w-fit">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900">{item.title}</h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* How We Work (5 Steps) */}
        <section className="p-8 sm:p-12 rounded-3xl bg-zinc-900 text-white space-y-8 shadow-2xl">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1cff00]/10 text-[#1cff00] text-xs font-bold uppercase tracking-wider border border-[#1cff00]/20">
              <span>Proven Method</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">How We Work</h2>
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

        {/* Our Values */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[#1cff00] text-xs font-bold uppercase tracking-wider">
              <span>Core Principles</span>
            </div>
            <h2 className="text-3xl font-extrabold text-zinc-900">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-sm space-y-3">
                  <div className="p-3 rounded-2xl bg-black text-[#1cff00] w-fit">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-zinc-900">{v.title}</h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Who We Work With */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-md space-y-6">
          <h2 className="text-2xl font-extrabold text-zinc-900">Who We Work With</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whoWeWorkWith.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200">
                <CheckCircle2 className="w-5 h-5 text-[#228f0c] shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-zinc-800">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="p-8 sm:p-12 rounded-3xl bg-black text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to see what's next for your brand?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300">
              Get in touch with our creative team to launch your next project or campaign.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={onNavigateContact}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-xs transition-all shadow-lg shadow-[#1cff00]/20 flex items-center justify-center gap-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigateServices()}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs transition-all border border-zinc-700"
            >
              Explore Our Services
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
