import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { FAQ_ITEMS, FaqItem } from '../data/content';
import { HelpCircle, ChevronDown, Search, Filter, MessageSquare, ArrowRight } from 'lucide-react';

interface FaqPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigateHome, onNavigateContact }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const categories = ['All', 'General', 'Consultations', 'Career & Profiles', 'Media & Production', 'Policies'];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pb-20">
      <PageHeader
        badge="Help & Community Answers"
        title="Frequently Asked Questions"
        description="Find answers to common questions about our consultations, career services, video production, written copy, YouTube resources, and policies."
        onNavigateHome={onNavigateHome}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-8">
        
        {/* Search & Category Filter */}
        <div className="p-6 rounded-3xl bg-white border border-zinc-200 space-y-4 shadow-md">
          <div className="relative">
            <Search className="w-5 h-5 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search frequently asked questions..."
              className="w-full bg-zinc-50 text-zinc-900 placeholder-zinc-400 pl-11 pr-4 py-3 rounded-2xl border border-zinc-200 focus:border-[#228f0c] focus:outline-none text-xs font-medium"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-zinc-900 text-[#228f0c] font-extrabold shadow-sm'
                    : 'bg-zinc-100 text-zinc-700 hover:text-zinc-900 border border-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => (
            <div
              key={faq.id}
              className="rounded-2xl bg-white border border-zinc-200 overflow-hidden transition-all shadow-sm"
            >
              <button
                onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-zinc-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[#228f0c] shrink-0" />
                  <span className="font-extrabold text-zinc-900 text-sm sm:text-base">{faq.question}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-200 ${
                    expandedId === faq.id ? 'rotate-180 text-zinc-900' : ''
                  }`}
                />
              </button>

              {expandedId === faq.id && (
                <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 bg-zinc-50/50 animate-in fade-in duration-150">
                  <p>{faq.answer}</p>
                  <div className="mt-3 pt-3 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-500">
                    <span>Category: <strong className="text-zinc-900">{faq.category}</strong></span>
                    <button
                      onClick={onNavigateContact}
                      className="text-[#228f0c] hover:underline font-extrabold"
                    >
                      Have more questions? Contact Us →
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 bg-white rounded-3xl border border-zinc-200 space-y-3">
              <p className="text-zinc-800 font-bold">No FAQ questions matched "{searchQuery}".</p>
              <p className="text-xs text-zinc-500">Submit your question directly to our advisory team.</p>
              <button
                onClick={onNavigateContact}
                className="px-5 py-2.5 rounded-xl bg-[#1cff00] text-zinc-950 font-extrabold text-xs shadow-md"
              >
                Ask a Question
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
