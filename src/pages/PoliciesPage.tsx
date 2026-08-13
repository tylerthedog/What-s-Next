import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ShieldCheck, FileText, Lock, RefreshCw, CheckCircle2 } from 'lucide-react';

interface PoliciesPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
}

export const PoliciesPage: React.FC<PoliciesPageProps> = ({ onNavigateHome, onNavigateContact }) => {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pb-20">
      <PageHeader
        badge="Governance & Terms"
        title="Policies & Terms of Service"
        description="Our client agreements, confidentiality commitments, service delivery milestones, and refund policies."
        onNavigateHome={onNavigateHome}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-10">
        
        {/* Service Agreement */}
        <div className="p-8 rounded-3xl bg-white border border-zinc-200 space-y-4 shadow-md">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-[#228f0c]" />
            <h2 className="text-2xl font-extrabold text-zinc-900">1. Service Delivery & Scope</h2>
          </div>
          <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
            What's Next delivers bespoke consulting, profile optimisation, CV writing, video production, and YouTube channel management services as defined in individual client agreements or package selections. All deliverable timelines begin following the receipt of complete intake details and initial discovery calls.
          </p>
        </div>

        {/* Confidentiality & Privacy */}
        <div className="p-8 rounded-3xl bg-white border border-zinc-200 space-y-4 shadow-md">
          <div className="flex items-center gap-3">
            <Lock className="w-6 h-6 text-[#228f0c]" />
            <h2 className="text-2xl font-extrabold text-zinc-900">2. Privacy & Confidentiality</h2>
          </div>
          <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
            We hold client privacy in the highest regard. Personal data, career histories, contact information, raw video footage, and proprietary strategies shared with What's Next will never be sold, leased, or publicly disclosed without explicit written consent.
          </p>
        </div>

        {/* Rescheduling & Cancellations */}
        <div className="p-8 rounded-3xl bg-white border border-zinc-200 space-y-4 shadow-md">
          <div className="flex items-center gap-3">
            <RefreshCw className="w-6 h-6 text-[#228f0c]" />
            <h2 className="text-2xl font-extrabold text-zinc-900">3. Cancellations & Rescheduling Policy</h2>
          </div>
          <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
            1-on-1 Consultation sessions may be rescheduled up to 24 hours prior to the scheduled start time at no additional fee. Cancellations made with less than 24 hours notice or missed appointments may incur a £50 rescheduling fee. Custom media and video production contracts follow milestone-based work sign-offs as specified in custom client agreements.
          </p>
        </div>

        {/* Intellectual Property */}
        <div className="p-8 rounded-3xl bg-white border border-zinc-200 space-y-4 shadow-md">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#228f0c]" />
            <h2 className="text-2xl font-extrabold text-zinc-900">4. Intellectual Property Rights</h2>
          </div>
          <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
            Upon final payment completion for custom work (CVs, website builds, video edits, voiceovers), all full ownership rights to the final deliverables transfer entirely to the client. Shared documents on our YouTube Resources page remain free for community personal and educational use.
          </p>
        </div>

        {/* Questions Banner */}
        <div className="p-6 rounded-2xl bg-white border border-zinc-200 text-center space-y-2 shadow-xs">
          <p className="text-xs text-zinc-500">Have specific policy or legal questions regarding a corporate contract?</p>
          <button
            onClick={onNavigateContact}
            className="text-xs text-[#228f0c] hover:underline font-extrabold"
          >
            Contact Legal & Client Relations →
          </button>
        </div>

      </div>
    </div>
  );
};
