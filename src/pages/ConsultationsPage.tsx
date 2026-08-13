import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { CONSULTATION_PACKAGES, ConsultationPackage } from '../data/content';
import { Check, Clock, Calendar, ArrowRight, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';

interface ConsultationsPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
}

export const ConsultationsPage: React.FC<ConsultationsPageProps> = ({ onNavigateHome, onNavigateContact }) => {
  const [selectedPackage, setSelectedPackage] = useState<ConsultationPackage | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setSelectedPackage(null);
      setClientName('');
      setClientEmail('');
      setPreferredDate('');
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pb-20">
      <PageHeader
        badge="1-on-1 Strategic Advisory"
        title="1-on-1 Consultations & Executive Coaching"
        description="Book high-impact 1-on-1 sessions with our lead consultants for personalised career roadmaps, LinkedIn overhauls, or YouTube media strategy."
        onNavigateHome={onNavigateHome}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CONSULTATION_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 flex flex-col justify-between relative shadow-lg transition-all duration-300 bg-white ${
                pkg.popular
                  ? 'border-2 border-zinc-900 shadow-2xl scale-102'
                  : 'border border-zinc-200 hover:border-zinc-300'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#1cff00] text-zinc-950 font-extrabold text-[10px] uppercase tracking-wider shadow-md border border-zinc-900">
                  Most Popular Choice
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-zinc-900">{pkg.name}</h3>
                  <p className="text-xs text-zinc-500 mt-1">{pkg.tagline}</p>
                </div>

                <div className="flex items-baseline gap-2 py-4 border-y border-zinc-100">
                  <span className="text-4xl font-extrabold text-zinc-900">{pkg.price}</span>
                  <span className="text-xs text-zinc-500 font-mono">/ {pkg.duration}</span>
                </div>

                <div className="space-y-3">
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-zinc-400">Included Deliverables:</div>
                  <ul className="space-y-2.5">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-zinc-700 leading-snug">
                        <Check className="w-4 h-4 text-[#228f0c] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-600 leading-relaxed">
                  <strong className="text-zinc-900 font-bold block mb-1">Ideal For:</strong>
                  {pkg.idealFor}
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => setSelectedPackage(pkg)}
                  className={`w-full py-3.5 rounded-xl font-extrabold text-xs transition-all shadow-md flex items-center justify-center gap-2 ${
                    pkg.popular
                      ? 'bg-[#1cff00] hover:bg-[#1cff00] text-zinc-950 shadow-[#1cff00]/20 hover:scale-102'
                      : 'bg-zinc-900 hover:bg-zinc-800 text-white'
                  }`}
                >
                  <span>Reserve {pkg.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Consultation Request Banner */}
        <div className="p-8 rounded-3xl bg-zinc-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl font-extrabold text-white">Need a customised corporate or channel retainer?</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              We offer bespoke team workshops, ongoing YouTube production retainers, and executive team branding sessions tailored to your organisation.
            </p>
          </div>
          <button
            onClick={onNavigateContact}
            className="px-6 py-3 rounded-2xl bg-[#1cff00] hover:bg-[#1cff00] text-zinc-950 text-xs font-extrabold transition-all shrink-0 shadow-md"
          >
            Request Custom Retainer
          </button>
        </div>

      </div>

      {/* Booking Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-sm">
          <div className="bg-white border border-zinc-200 rounded-3xl w-full max-w-lg p-6 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#228f0c]">Selected Strategy Track</span>
                <h3 className="text-xl font-extrabold text-zinc-900">{selectedPackage.name}</h3>
              </div>
              <button onClick={() => setSelectedPackage(null)} className="text-zinc-400 hover:text-zinc-900 font-bold">✕</button>
            </div>

            {bookingSuccess ? (
              <div className="text-center py-8 space-y-3">
                <ShieldCheck className="w-12 h-12 text-[#228f0c] mx-auto" />
                <h4 className="text-lg font-bold text-zinc-900">Booking Request Confirmed!</h4>
                <p className="text-xs text-zinc-600">We have received your consultation booking. A calendar invitation and confirmation note have been sent to your email.</p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1">Your Full Name *</label>
                  <input
                    required
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Alex Smith"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-zinc-900 focus:border-[#228f0c] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1">Your Email Address *</label>
                  <input
                    required
                    type="email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-zinc-900 focus:border-[#228f0c] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1">Preferred Date & Time *</label>
                  <input
                    required
                    type="datetime-local"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-zinc-900 focus:border-[#228f0c] focus:outline-none"
                  />
                </div>

                <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-600 flex items-center justify-between">
                  <span>Investment Total:</span>
                  <span className="font-extrabold text-zinc-900 text-base">{selectedPackage.price}</span>
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedPackage(null)}
                    className="px-4 py-2.5 rounded-xl bg-zinc-100 text-zinc-700 text-xs font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-[#1cff00] hover:bg-[#1cff00] text-zinc-950 text-xs font-extrabold shadow-md shadow-[#1cff00]/20"
                  >
                    Confirm & Reserve Session
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
