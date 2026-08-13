import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import {
  Globe2,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Languages,
  FileText,
  Video,
  FileCheck,
  Smartphone,
  BookOpen,
  Layers,
  Clock,
  ShieldCheck,
  Check
} from 'lucide-react';

interface TranslationPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
}

export const TranslationPage: React.FC<TranslationPageProps> = ({ onNavigateHome, onNavigateContact }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const servicesIncluded = [
    {
      title: 'Website Translation & Localization',
      icon: Globe2,
      features: [
        'Full website translation (all pages, navigation, forms)',
        'CMS integration (WordPress, Webflow, Shopify, etc.)',
        'Cultural adaptation of images, colors, and layouts',
        'SEO localization for local search engines',
        'Ongoing content updates and maintenance',
      ],
    },
    {
      title: 'Written Content Translation',
      icon: FileText,
      features: [
        'Blog posts and articles',
        'Marketing copy and landing pages',
        'Technical documentation and manuals',
        'Legal documents and contracts',
        'Email campaigns and newsletters',
        'Social media content',
      ],
    },
    {
      title: 'Video & Multimedia Localization',
      icon: Video,
      features: [
        'Subtitling and closed captions',
        'Voice-over and dubbing',
        'Video script translation',
        'On-screen text translation',
        'Cultural adaptation of visuals',
        'Audio description for accessibility',
      ],
    },
    {
      title: 'Document Translation',
      icon: FileCheck,
      features: [
        'PDFs, Word documents, and presentations',
        'Certificates and official documents',
        'Reports and whitepapers',
        'Training materials and guides',
        'Forms and templates',
      ],
    },
    {
      title: 'App & Software Localization',
      icon: Smartphone,
      features: [
        'Mobile app translation (iOS and Android)',
        'Software interface localization',
        'Help documentation and tooltips',
        'In-app messaging and notifications',
        'App store optimization (ASO) for local markets',
      ],
    },
    {
      title: 'Additional Localization Services',
      icon: Layers,
      features: [
        'Transcription (audio to text in any language)',
        'Proofreading and editing by native speakers',
        'Desktop publishing and formatting',
        'Cultural consulting and market adaptation',
        'Multilingual SEO strategy',
        'Terminology management and glossaries',
      ],
    },
  ];

  const specializedLanguages = [
    'Afrikaans',
    'Dutch',
    'Danish',
    'Norwegian',
    'Swedish',
    'Finnish',
    'Icelandic',
    'Catalan',
    'Basque',
    'Welsh',
    'Irish Gaelic',
    'Scottish Gaelic',
    'Estonian',
    'Latvian',
    'Lithuanian',
    'Slovenian',
    'Croatian',
    'Serbian',
    'Bosnian',
  ];

  const packages = [
    {
      name: 'Starter Package',
      tagline: 'Ideal for small websites, blogs, or marketing materials',
      turnaround: '5–7 business day turnaround',
      features: [
        'Up to 5,000 words',
        'Website or document translation',
        '1 target language',
        'Native speaker translation',
        'Basic proofreading',
      ],
    },
    {
      name: 'Growth Package',
      tagline: 'Ideal for growing businesses entering new markets',
      turnaround: '7–10 business day turnaround',
      popular: true,
      features: [
        'Up to 20,000 words',
        'Website + content translation',
        'Up to 3 target languages',
        'Native speaker translation + editing',
        'Cultural adaptation consultation',
        'SEO keyword localization',
      ],
    },
    {
      name: 'Enterprise Package',
      tagline: 'Ideal for large websites, e-commerce, and ongoing localization needs',
      turnaround: 'Priority turnaround (3–5 business days)',
      features: [
        'Unlimited word count',
        'Full website and content localization',
        'Unlimited languages',
        'Dedicated project manager',
        'Native translation + editing + proofreading',
        'Cultural adaptation and market research',
        'Multilingual SEO strategy',
        'Ongoing updates and maintenance',
      ],
    },
    {
      name: 'Media Localization Package',
      tagline: 'Ideal for YouTube channels, courses, and promotional videos',
      turnaround: '7–10 business day turnaround',
      features: [
        'Video subtitling and dubbing',
        'Up to 60 minutes of video content',
        'Up to 5 target languages',
        'Native voice talent',
        'Subtitle timing and formatting',
        'Cultural adaptation of visuals',
      ],
    },
  ];

  const whoThisIsFor = [
    'Businesses expanding into international markets',
    'E-commerce brands selling globally',
    'Content creators reaching multilingual audiences',
    'SaaS companies localizing software and apps',
    'Educational platforms and course creators',
    'NGOs and organizations serving diverse communities',
    'Brands targeting specific regional or minority language speakers',
  ];

  const processSteps = [
    { step: '01', title: 'Discovery', desc: 'We discuss your target markets, languages, and content types.' },
    { step: '02', title: 'Analysis', desc: 'We audit your content and provide a detailed quote and timeline.' },
    { step: '03', title: 'Translation', desc: 'Native-speaking translators work on your content with cultural adaptation.' },
    { step: '04', title: 'Review', desc: 'Editing and proofreading by a second native speaker.' },
    { step: '05', title: 'Delivery', desc: 'Final localized content ready for your audience, with ongoing support available.' },
  ];

  const languagePairs = [
    'English ↔ Afrikaans',
    'English ↔ Dutch',
    'English ↔ Danish, Norwegian, Swedish',
    'English ↔ Finnish, Icelandic',
    'English ↔ Catalan, Basque',
    'English ↔ Welsh, Irish, Scottish Gaelic',
    'English ↔ Estonian, Latvian, Lithuanian',
    'English ↔ Slovenian, Croatian, Serbian, Bosnian',
  ];

  const faqs = [
    {
      q: "What's the difference between translation and localization?",
      a: 'Translation converts text from one language to another. Localization goes further by adapting content to fit the cultural, visual, and technical expectations of the target market, including date formats, currencies, images, and more.',
    },
    {
      q: 'Do you use AI or human translators?',
      a: 'We use native-speaking human translators for all projects. AI tools may assist with initial drafts or terminology research, but every project is reviewed and finalized by qualified human translators to ensure accuracy and cultural appropriateness.',
    },
    {
      q: 'How do you handle technical or specialized content?',
      a: 'We match your project with translators who have subject-matter expertise in your industry (tech, medical, legal, marketing, etc.). We also build and maintain terminology glossaries to ensure consistency across all your content.',
    },
    {
      q: 'Can you localize my entire website?',
      a: 'Yes. We handle full website localization including all pages, navigation, forms, meta tags, and SEO elements. We work with all major CMS platforms and can integrate directly with your workflow.',
    },
    {
      q: 'What\'s your typical turnaround time?',
      a: 'Standard projects (up to 5,000 words) are completed in 5–7 business days. Larger projects vary based on word count and languages. Rush services are available for urgent needs.',
    },
    {
      q: 'Do you offer ongoing updates and maintenance?',
      a: 'Absolutely. We offer retainer packages for businesses with regularly updated content (blogs, product pages, etc.). This ensures your localized content stays current across all markets.',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pb-20">
      <PageHeader
        badge="Translation & Localization"
        title="Translation and Localization That Speaks Your Audience's Language"
        description="Websites, videos, documents, and all media types translated and localized for global reach, specializing in common but lesser-spoken languages."
        onNavigateHome={onNavigateHome}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-16">
        
        {/* Hero CTA & What We Do */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-md space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[#1cff00] text-xs font-bold uppercase tracking-wider">
                <Globe2 className="w-3.5 h-3.5" />
                <span>What We Do</span>
              </div>
              <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                At What's Next?, we break language barriers and help your content resonate with local audiences worldwide. From website translation to video localization, document translation, and multimedia adaptation, we specialize in both major languages and common but lesser-spoken languages that many agencies overlook.
              </p>
              <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                Our team combines native-speaking translators with cultural experts to ensure your message lands authentically in every market.
              </p>
            </div>
            <button
              onClick={onNavigateContact}
              className="px-6 py-3.5 rounded-2xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-xs transition-all shadow-lg shadow-[#1cff00]/20 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
            >
              <span>Enquire About Translation Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Services Included */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-zinc-900">Services Included</h2>
            <p className="text-xs sm:text-sm text-zinc-600">End-to-end translation and localization across all media types.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesIncluded.map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-zinc-200 hover:border-zinc-300 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#1cff00]/15 flex items-center justify-center text-[#228f0c]">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-extrabold text-zinc-900">{s.title}</h3>
                  <ul className="space-y-2 pt-2">
                    {s.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-zinc-600">
                        <CheckCircle2 className="w-4 h-4 text-[#228f0c] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Specialized Language Focus */}
        <section className="p-8 sm:p-10 rounded-3xl bg-zinc-900 text-white space-y-6 shadow-2xl">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1cff00]/20 text-[#1cff00] text-xs font-bold uppercase tracking-wider">
              <Languages className="w-3.5 h-3.5" />
              <span>Lesser-Spoken Language Expertise</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Specialized Language Focus</h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              While others stick to standard global languages, What's Next? specializes in common but lesser-spoken, regional, and minority languages to give you true market coverage:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 pt-2">
            {specializedLanguages.map((lang, lIdx) => (
              <div key={lIdx} className="p-3 rounded-2xl bg-zinc-800/80 border border-zinc-700/60 flex items-center gap-2 text-xs font-bold text-zinc-100">
                <Check className="w-3.5 h-3.5 text-[#1cff00] shrink-0" />
                <span>{lang}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-zinc-400 italic pt-2">
            And many more regional and minority languages worldwide.
          </p>
        </section>

        {/* Language Pairs We Specialize In */}
        <section className="p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200 shadow-md space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">Language Pairs We Specialize In</h2>
            <p className="text-xs sm:text-sm text-zinc-600">
              European and regional language pairs with native fluency and cultural accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {languagePairs.map((pair, pIdx) => (
              <div key={pIdx} className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs font-bold text-zinc-800 flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-[#228f0c] shrink-0" />
                <span>{pair}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-[#1cff00]/10 border border-[#1cff00]/30 text-xs text-zinc-800 font-medium flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#228f0c] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Note:</span> What's Next? works with 100+ languages total. If you don't see your target language listed above, contact us and we will confirm availability immediately.
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-zinc-900">Service Packages</h2>
            <p className="text-xs sm:text-sm text-zinc-600">Flexible options for projects of any size and media format.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-3xl border flex flex-col justify-between transition-all relative ${
                  pkg.popular
                    ? 'bg-zinc-900 text-white border-zinc-800 shadow-xl'
                    : 'bg-white text-zinc-900 border-zinc-200 shadow-sm hover:shadow-md'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#1cff00] text-black text-[10px] font-extrabold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className="space-y-4">
                  <div>
                    <h3 className={`text-xl font-extrabold ${pkg.popular ? 'text-white' : 'text-zinc-900'}`}>{pkg.name}</h3>
                    <p className={`text-xs mt-1 ${pkg.popular ? 'text-zinc-300' : 'text-zinc-500'}`}>{pkg.tagline}</p>
                  </div>

                  <div className={`text-xs font-bold px-3 py-1.5 rounded-xl inline-flex items-center gap-1.5 ${
                    pkg.popular ? 'bg-zinc-800 text-[#1cff00]' : 'bg-zinc-100 text-[#228f0c]'
                  }`}>
                    <Clock className="w-3.5 h-3.5" />
                    <span>{pkg.turnaround}</span>
                  </div>

                  <ul className="space-y-2.5 pt-2">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.popular ? 'text-[#1cff00]' : 'text-[#228f0c]'}`} />
                        <span className={pkg.popular ? 'text-zinc-200' : 'text-zinc-600'}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onNavigateContact}
                  className={`mt-6 w-full py-3 rounded-2xl font-extrabold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.popular
                      ? 'bg-[#1cff00] text-black hover:bg-[#18e000]'
                      : 'bg-zinc-900 text-white hover:bg-zinc-800'
                  }`}
                >
                  <span>Select Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Who This Is For */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-md space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">Who This Is For</h2>
            <p className="text-xs sm:text-sm text-zinc-600">Designed for organizations, creators, and brands ready to expand globally.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {whoThisIsFor.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-start gap-3 text-xs font-bold text-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-[#228f0c] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Process Steps */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-zinc-900">Our 5-Step Localization Process</h2>
            <p className="text-xs sm:text-sm text-zinc-600">A rigorous workflow ensuring accuracy, cultural fit, and fast delivery.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-sm space-y-3 relative">
                <div className="text-2xl font-black text-[#228f0c]">{step.step}</div>
                <h3 className="text-sm font-extrabold text-zinc-900">{step.title}</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-md space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-zinc-600">Everything you need to know about our translation and localization services.</p>
          </div>

          <div className="space-y-3 pt-2">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-zinc-200 overflow-hidden transition-all bg-zinc-50/50"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left font-extrabold text-xs sm:text-sm text-zinc-900 flex items-center justify-between gap-4 cursor-pointer hover:bg-zinc-100/80 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-0 text-xs text-zinc-600 leading-relaxed border-t border-zinc-100 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-zinc-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Ready to reach a global audience?
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300">
              Let What's Next? handle your website, video, document, and software localization.
            </p>
          </div>
          <button
            onClick={onNavigateContact}
            className="px-6 py-3.5 rounded-2xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-xs transition-all shadow-lg shadow-[#1cff00]/20 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Contact Us About Translation & Localization</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>

      </div>
    </div>
  );
};
