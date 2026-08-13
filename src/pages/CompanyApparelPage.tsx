import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import {
  Shirt,
  QrCode,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Package,
  Printer,
  Palette,
  Tag,
  Layers,
  Compass,
  Zap,
  Users,
  BarChart,
  Link,
  ShieldCheck,
  Scissors
} from 'lucide-react';

interface CompanyApparelPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
}

export const CompanyApparelPage: React.FC<CompanyApparelPageProps> = ({
  onNavigateHome,
  onNavigateContact,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const servicesIncluded = [
    {
      title: 'Custom Apparel Design',
      icon: Palette,
      items: [
        'Logo placement and branding consultation',
        'Custom graphics and artwork creation',
        'Color matching to your brand palette',
        'Typography and tagline integration',
        'Mockups and digital proofs before production',
      ],
    },
    {
      title: 'Apparel Options',
      icon: Shirt,
      items: [
        'T-shirts (crew neck, V-neck, long sleeve)',
        'Hoodies and sweatshirts',
        'Polo shirts and button-ups',
        'Caps, beanies, and headwear',
        'Jackets and outerwear',
        'Workwear and uniforms',
        'Tote bags and accessories',
        'Tank tops and athletic wear',
      ],
    },
    {
      title: 'Printing & Embroidery Methods',
      icon: Printer,
      items: [
        'Screen printing (bulk orders, vibrant colors)',
        'Embroidery (premium look, long-lasting)',
        'Heat transfer (detailed graphics, photos)',
        'Direct-to-garment (DTG) printing (complex designs, small batches)',
        'Patch and label application',
        'Custom woven labels and tags',
      ],
    },
    {
      title: 'QR Code Integration',
      icon: QrCode,
      items: [
        'Unique QR code design and placement',
        'Custom QR code styling (brand colors, logo integration)',
        'Destination URL setup (website, landing page, social media, vCard)',
        'Dynamic QR codes (editable destination after printing)',
        'Analytics and scan tracking (optional)',
        'Placement options: sleeve patches, garment labels, hang tags, or direct print',
      ],
    },
    {
      title: 'Branding Strategy',
      icon: Compass,
      items: [
        'Brand voice alignment in apparel design',
        'Target audience considerations',
        'Use case planning (staff uniforms, events, giveaways, retail)',
        'Quantity recommendations and budgeting',
        'Seasonal and collection planning',
      ],
    },
    {
      title: 'Additional Services',
      icon: Package,
      items: [
        'Logo digitizing for embroidery',
        'Sample production before bulk orders',
        'Size runs and fitting guides',
        'Inventory management and reordering',
        'Bulk packaging and distribution',
        'Rush production available',
      ],
    },
  ];

  const packages = [
    {
      name: 'Starter Package',
      badge: 'Small Teams & Startups',
      items: [
        '10 custom T-shirts or 5 hoodies',
        '1-color logo printing or embroidery',
        'Basic design consultation',
        'Digital mockup included',
        'Free logo digitizing',
        'Standard turnaround (7–10 business days)',
      ],
      idealFor: 'Small teams, startups, and events',
    },
    {
      name: 'Business Package',
      badge: 'Most Popular',
      popular: true,
      items: [
        '25 custom apparel items (mix of T-shirts, hoodies, caps)',
        'Up to 3-color printing or embroidery',
        'Custom design support',
        'QR code integration on all items',
        'Digital mockups and revisions',
        'Free logo digitizing',
        'Priority turnaround (5–7 business days)',
      ],
      idealFor: 'Growing businesses and staff uniforms',
    },
    {
      name: 'Premium Package',
      badge: 'Large Teams & Retail',
      items: [
        '50+ custom apparel items (full mix of products)',
        'Unlimited colors and printing methods',
        'Full custom design service',
        'QR code integration with analytics',
        'Multiple mockups and unlimited revisions',
        'Sample production before bulk',
        'Dedicated account manager',
        'Rush turnaround (3–5 business days)',
      ],
      idealFor: 'Large teams, corporate events, and retail merch',
    },
  ];

  const qrAddOn = {
    name: 'QR Code Add-On',
    subtitle: 'Can be added to any package',
    items: [
      'Custom QR code design and integration',
      'Destination URL setup and testing',
      'Dynamic QR code (editable after printing)',
      'Scan analytics dashboard (30-day tracking)',
      'Placement consultation (labels, patches, tags, or print)',
    ],
  };

  const whoThisIsFor = [
    'Small businesses outfitting staff or teams',
    'Startups launching branded merchandise',
    'Companies creating event or conference apparel',
    'Brands building retail merch lines',
    'Gyms, salons, cafés, and service businesses',
    'Contractors and trade professionals',
    'Content creators and influencers selling merch',
    'Corporate teams and office environments',
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      desc: 'We discuss your brand, goals, apparel needs, and budget.',
    },
    {
      step: '02',
      title: 'Design',
      desc: 'We create mockups with your logo, colors, and QR code integration.',
    },
    {
      step: '03',
      title: 'Approval',
      desc: 'You review and approve the final design before production.',
    },
    {
      step: '04',
      title: 'Production',
      desc: 'We print or embroider your apparel with quality control checks.',
    },
    {
      step: '05',
      title: 'Delivery',
      desc: 'Finished items shipped to you, ready to wear and share.',
    },
  ];

  const qrCodeLinkOptions = [
    'Your company website or homepage',
    'Dedicated landing page or promotion',
    'Social media profiles (Instagram, TikTok, LinkedIn)',
    'Online store or product page',
    'Contact vCard (save contact info instantly)',
    'Video content or brand story',
    'Customer feedback or review form',
    'Event registration or signup page',
  ];

  const qrCodeBenefits = [
    'Turns clothing into interactive marketing',
    'Drives traffic to your website or socials',
    'Tracks engagement and scan analytics',
    'Provides instant access to your brand',
    'Creates memorable, shareable experiences',
    'Updates content dynamically (with dynamic QR codes)',
  ];

  const placementOptions = [
    { title: 'Woven garment labels', desc: 'Inside neck or side seam' },
    { title: 'Hang tags', desc: 'Removable, high visibility' },
    { title: 'Sleeve or chest patches', desc: 'Permanent, premium look' },
    { title: 'Direct print on garment', desc: 'Front, back, or sleeve' },
    { title: 'Custom packaging or bags', desc: 'Unboxing experience' },
  ];

  const faqs = [
    {
      q: "What's the minimum order quantity?",
      a: 'Our Starter Package begins at 5–10 items. For custom orders outside packages, minimums vary by product (typically 10 units for T-shirts, 5 for hoodies). No minimum on QR code add-ons.',
    },
    {
      q: 'How long does production take?',
      a: 'Standard turnaround is 7–10 business days. Rush options available for 3–5 day delivery. Timeline varies based on order size and complexity.',
    },
    {
      q: 'Can I mix different apparel items in one order?',
      a: 'Absolutely. Our Business and Premium packages allow you to mix T-shirts, hoodies, caps, and other items. Custom orders can also mix products to meet quantity requirements.',
    },
    {
      q: 'Do you provide design services or do I need to supply artwork?',
      a: 'We offer both. If you have a print-ready logo, we can use that. If not, our design team can create or refine your artwork, mockups, and QR code integration for an additional fee (included in Premium Package).',
    },
    {
      q: 'How do QR codes work on clothing?',
      a: 'We generate a custom QR code that links to your chosen URL (website, social media, etc.). The QR code is printed, embroidered, or applied as a patch/label on your apparel. When scanned with a smartphone, it directs people instantly to your link. Dynamic QR codes can be updated even after printing.',
    },
    {
      q: 'Can I reorder the same apparel later?',
      a: 'Yes. We keep your design files on record for easy reordering. You can reorder any quantity, even single pieces, after your initial order.',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pb-20">
      {/* 1. HERO SECTION */}
      <PageHeader
        badge="Company Apparel & Custom Branding"
        title="Company Apparel and Custom Branding That Wears Your Brand Proudly"
        description="Custom clothing and apparel for companies and small businesses, featuring your branding, voice, and a unique QR code that directs people to your website."
        onNavigateHome={onNavigateHome}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-16">
        {/* HERO CTA & OVERVIEW / WHAT WE DO SECTION */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-md space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[#1cff00] text-xs font-bold uppercase tracking-wider">
                <Shirt className="w-3.5 h-3.5" />
                <span>What We Do</span>
              </div>
              <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                We create custom apparel that turns your team into walking brand ambassadors. From T-shirts and hoodies to caps and workwear, every piece is professionally designed, printed, or embroidered with your logo and brand identity. Plus, we integrate unique QR codes on each garment that scan directly to your website, turning every outfit into a marketing opportunity.
              </p>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                Whether you're outfitting staff, launching a merch line, or creating promotional giveaways, we handle everything from design to delivery with quality that reflects your brand.
              </p>
            </div>
            <button
              type="button"
              onClick={onNavigateContact}
              className="px-6 py-3.5 rounded-2xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-xs transition-all shadow-lg shadow-[#1cff00]/20 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
            >
              <span>Inquire About Custom Apparel</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* 3. SERVICES INCLUDED SECTION */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-zinc-900">Services Included</h2>
            <p className="text-xs sm:text-sm text-zinc-600">
              Full-service apparel design, production, embroidery, and interactive QR code integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesIncluded.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={idx} className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-sm space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="p-3 rounded-2xl bg-black text-[#1cff00] w-fit">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900">{s.title}</h3>
                    <ul className="space-y-2">
                      {s.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2 text-xs text-zinc-600 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#228f0c] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. PACKAGES SECTION */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-zinc-900">Apparel Packages</h2>
            <p className="text-xs sm:text-sm text-zinc-600">
              Tailored custom apparel packages for startups, growing businesses, and large teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all ${
                  pkg.popular
                    ? 'bg-zinc-900 text-white border-zinc-800 shadow-2xl relative'
                    : 'bg-white text-zinc-900 border-zinc-200 shadow-md'
                }`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${
                        pkg.popular ? 'bg-[#1cff00] text-black' : 'bg-black text-[#1cff00]'
                      }`}
                    >
                      {pkg.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className={`text-xl font-extrabold ${pkg.popular ? 'text-white' : 'text-zinc-900'}`}>
                      {pkg.name}
                    </h3>
                  </div>

                  <ul className="space-y-3 pt-2">
                    {pkg.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 text-xs leading-relaxed">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            pkg.popular ? 'text-[#1cff00]' : 'text-[#228f0c]'
                          }`}
                        />
                        <span className={pkg.popular ? 'text-zinc-300' : 'text-zinc-600'}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`p-3 rounded-xl text-xs font-semibold ${
                    pkg.popular ? 'bg-zinc-800 text-zinc-200' : 'bg-zinc-100 text-zinc-700'
                  }`}>
                    <strong>Ideal for:</strong> {pkg.idealFor}
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="button"
                    onClick={onNavigateContact}
                    className={`w-full py-3 rounded-2xl text-xs font-extrabold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      pkg.popular
                        ? 'bg-[#1cff00] hover:bg-[#18e000] text-black shadow-lg shadow-[#1cff00]/20'
                        : 'bg-black hover:bg-zinc-800 text-white'
                    }`}
                  >
                    <span>Inquire About Package</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* QR Code Add-On Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-black text-[#1cff00]">
                  <QrCode className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-lg font-extrabold text-zinc-900">{qrAddOn.name}</h3>
                  <span className="text-xs font-bold text-[#228f0c]">{qrAddOn.subtitle}</span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {qrAddOn.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#228f0c] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={onNavigateContact}
              className="px-5 py-3 rounded-2xl bg-black hover:bg-zinc-800 text-white font-extrabold text-xs transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
            >
              <span>Add QR Code to Order</span>
              <ArrowRight className="w-4 h-4 text-[#1cff00]" />
            </button>
          </div>
        </section>

        {/* 5. WHO THIS IS FOR SECTION */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-md space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">Who This Is For</h2>
            <p className="text-xs sm:text-sm text-zinc-600">
              Designed for companies, small businesses, creators, and teams wanting professional, interactive branding.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whoThisIsFor.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
                <CheckCircle2 className="w-5 h-5 text-[#228f0c] shrink-0" />
                <span className="text-xs font-bold text-zinc-800 leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 6. PROCESS SECTION */}
        <section className="p-8 sm:p-12 rounded-3xl bg-zinc-900 text-white space-y-8 shadow-2xl">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Our 5-Step Process</h2>
            <p className="text-xs text-zinc-400">
              Seamless step-by-step handling from initial strategy and design mockup to delivery.
            </p>
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

        {/* 7. QR CODE FEATURES SECTION */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-zinc-900">Interactive QR Code Integration</h2>
            <p className="text-xs sm:text-sm text-zinc-600">
              Transform your clothing into dynamic, scannable marketing touchpoints.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* What Can Your QR Code Link To? */}
            <div className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-md space-y-4">
              <div className="flex items-center gap-2 text-zinc-900">
                <div className="p-2.5 rounded-2xl bg-black text-[#1cff00]">
                  <Link className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold">What Can Your QR Code Link To?</h3>
              </div>
              <ul className="space-y-2.5 pt-1">
                {qrCodeLinkOptions.map((opt, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-zinc-700 leading-relaxed">
                    <Zap className="w-3.5 h-3.5 text-[#228f0c] shrink-0 mt-0.5" />
                    <span>{opt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Add QR Codes to Apparel? */}
            <div className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-md space-y-4">
              <div className="flex items-center gap-2 text-zinc-900">
                <div className="p-2.5 rounded-2xl bg-black text-[#1cff00]">
                  <BarChart className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold">Why Add QR Codes to Apparel?</h3>
              </div>
              <ul className="space-y-2.5 pt-1">
                {qrCodeBenefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-zinc-700 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#228f0c] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Placement Options */}
            <div className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-md space-y-4">
              <div className="flex items-center gap-2 text-zinc-900">
                <div className="p-2.5 rounded-2xl bg-black text-[#1cff00]">
                  <Tag className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold">Placement Options</h3>
              </div>
              <div className="space-y-3 pt-1">
                {placementOptions.map((p, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-0.5">
                    <div className="text-xs font-bold text-zinc-900">{p.title}</div>
                    <div className="text-[11px] text-zinc-500">{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. FAQs SECTION */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-md space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold text-zinc-900">Frequently Asked Questions</h2>
            <p className="text-xs text-zinc-600">Everything you need to know about our custom apparel and QR code services.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-2xl border border-zinc-200 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-left font-bold text-xs sm:text-sm text-zinc-900 bg-zinc-50 hover:bg-zinc-100 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-500 transition-transform ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
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

        {/* 9. CTA SECTION */}
        <section className="p-8 sm:p-12 rounded-3xl bg-black text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to outfit your team with branded apparel?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300">
              Transform your clothing into walking brand ambassadors with high-quality printing, embroidery, and QR code integration.
            </p>
          </div>
          <button
            type="button"
            onClick={onNavigateContact}
            className="px-6 py-3.5 rounded-2xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-xs transition-all shadow-lg shadow-[#1cff00]/20 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Contact Us About Custom Apparel</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>
      </div>
    </div>
  );
};
