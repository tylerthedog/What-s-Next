import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ChevronDown, MessageSquare } from 'lucide-react';
import { SocialStrip } from '../components/SocialStrip';

interface ContactPageProps {
  onNavigateHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigateHome }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyChannel, setCompanyChannel] = useState('');
  const [service, setService] = useState('General Enquiry');
  const [budget, setBudget] = useState('Custom / Not Sure');
  const [message, setMessage] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setCompanyChannel('');
      setMessage('');
    }, 4000);
  };

  const faqs = [
    {
      q: 'How quickly will I get a response?',
      a: 'We respond to all enquiries within 24 business hours (Monday to Friday).',
    },
    {
      q: 'Do you work with clients outside the United Kingdom?',
      a: 'Yes. We work with creators, brands, and businesses globally across all time zones.',
    },
    {
      q: 'How do custom project quotes work?',
      a: "After receiving your enquiry, we'll set up a brief discovery call or send a customised project proposal based on your specific needs and scope.",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pb-20">
      <PageHeader
        badge="Contact Us"
        title="Let's Build Something Great Together"
        description="Have a project in mind, need a quote, or want to discuss how we can help your brand grow? Get in touch with us today."
        onNavigateHome={onNavigateHome}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-16">
        
        {/* Contact Overview & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Contact Info & Details */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[#1cff00] text-xs font-bold uppercase tracking-wider">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Get in Touch</span>
              </div>
              <p className="text-zinc-700 text-base leading-relaxed">
                We'd love to hear from you. Fill out the form below or reach out directly through email, phone, or social media. Our team typically responds within 24 business hours.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white border border-zinc-200 flex items-start gap-4 shadow-sm">
                <div className="p-3 rounded-xl bg-black text-[#1cff00]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-500">Email Address</div>
                  <div className="text-base font-extrabold text-zinc-900 mt-0.5">enquiries@whatsnextagency.com</div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-zinc-200 flex items-start gap-4 shadow-sm">
                <div className="p-3 rounded-xl bg-black text-[#1cff00]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-500">Phone Number</div>
                  <div className="text-base font-extrabold text-zinc-900 mt-0.5">+44 (0)20 7946 0912</div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-zinc-200 flex items-start gap-4 shadow-sm">
                <div className="p-3 rounded-xl bg-black text-[#1cff00]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-500">Studio Hours</div>
                  <div className="text-sm font-bold text-zinc-900 mt-0.5">Monday to Friday, 9:00 AM to 6:00 PM GMT</div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-zinc-200 flex items-start gap-4 shadow-sm">
                <div className="p-3 rounded-xl bg-black text-[#1cff00]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-500">Office Location</div>
                  <div className="text-sm font-bold text-zinc-900 mt-0.5">London, UK (Available worldwide remotely)</div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-zinc-200 space-y-3 shadow-sm">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-zinc-900">Connect Across Social Channels</h3>
              <p className="text-xs text-zinc-600">Follow What's Next? across social media for daily updates and creative insights:</p>
              <div className="pt-2">
                <SocialStrip variant="compact" />
              </div>
            </div>
          </div>

          {/* Right Column: Send Us a Message Form */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200 shadow-xl space-y-6">
            <h3 className="text-2xl font-extrabold text-zinc-900 border-b border-zinc-100 pb-4">Send Us a Message</h3>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#228f0c] mx-auto animate-bounce" />
                <h4 className="text-2xl font-bold text-zinc-900">Message Delivered Successfully!</h4>
                <p className="text-xs text-zinc-600 max-w-sm mx-auto">
                  Thank you for reaching out to What's Next? Our team will review your message and reply within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1">Full Name *</label>
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-zinc-900 focus:border-[#228f0c] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1">Email Address *</label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-zinc-900 focus:border-[#228f0c] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1">Company / Channel Name</label>
                  <input
                    type="text"
                    value={companyChannel}
                    onChange={(e) => setCompanyChannel(e.target.value)}
                    placeholder="Your Brand or Channel"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-zinc-900 focus:border-[#228f0c] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1">Service Interested In *</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-zinc-900 focus:border-[#228f0c] focus:outline-none font-medium"
                  >
                    <option value="Video Editing & Production">Video Editing & Production</option>
                    <option value="Photography">Photography</option>
                    <option value="Voice-Overs & Audio">Voice-Overs & Audio</option>
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="YouTube Channel Management">YouTube Channel Management</option>
                    <option value="Profile & Social Media Optimization">Profile & Social Media Optimisation</option>
                    <option value="Resumes & Cover Letters">CVs & Cover Letters</option>
                    <option value="Written Content & Copywriting">Written Content & Copywriting</option>
                    <option value="Translation & Localisation Services">Translation & Localisation Services</option>
                    <option value="Website & App Development">Website & App Development</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="General Inquiry">General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1">Estimated Budget *</label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-zinc-900 focus:border-[#228f0c] focus:outline-none font-medium"
                  >
                    <option value="Under £1,000">Under £1,000</option>
                    <option value="£1,000 – £5,000">£1,000 – £5,000</option>
                    <option value="£5,000 – £10,000">£5,000 – £10,000</option>
                    <option value="£10,000+">£10,000+</option>
                    <option value="Custom / Not Sure">Custom / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1">Tell Us About Your Project *</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your goals, current challenges, timeline, or specific requirements..."
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-zinc-900 focus:border-[#228f0c] focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-xs shadow-lg shadow-[#1cff00]/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Enquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

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

      </div>
    </div>
  );
};

