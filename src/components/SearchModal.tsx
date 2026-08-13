import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, FileText, Video, Briefcase, HelpCircle, Sparkles, BookOpen } from 'lucide-react';
import { NAVIGATION_PAGES, SHARED_DOCUMENTS, FAQ_ITEMS, CONSULTATION_PACKAGES } from '../data/content';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (pageId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  const matchedPages = NAVIGATION_PAGES.filter(
    (page) => page.name.toLowerCase().includes(normalizedQuery) || page.id.includes(normalizedQuery)
  );

  const matchedDocs = SHARED_DOCUMENTS.filter(
    (doc) =>
      doc.title.toLowerCase().includes(normalizedQuery) ||
      doc.description.toLowerCase().includes(normalizedQuery) ||
      doc.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery))
  );

  const matchedFaqs = FAQ_ITEMS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(normalizedQuery) ||
      faq.answer.toLowerCase().includes(normalizedQuery)
  );

  const matchedPackages = CONSULTATION_PACKAGES.filter(
    (pkg) =>
      pkg.name.toLowerCase().includes(normalizedQuery) ||
      pkg.tagline.toLowerCase().includes(normalizedQuery)
  );

  const totalResults = matchedPages.length + matchedDocs.length + matchedFaqs.length + matchedPackages.length;

  const handleSelectPage = (pageId: string) => {
    onNavigate(pageId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-zinc-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-white border border-zinc-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-zinc-200 flex items-center gap-3 bg-zinc-50">
          <Search className="w-5 h-5 text-zinc-700 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services, YouTube shared docs, FAQs, or pages..."
            className="w-full bg-transparent text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-zinc-400 hover:text-zinc-900 p-1 rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-bold bg-zinc-200 hover:bg-zinc-300 text-zinc-800 rounded-lg transition-colors"
          >
            Esc
          </button>
        </div>

        {/* Results Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {!normalizedQuery && (
            <div className="text-center py-8">
              <BookOpen className="w-10 h-10 text-[#228f0c] mx-auto mb-3" />
              <p className="text-zinc-800 font-bold text-sm">Type anything to search across What's Next?</p>
              <p className="text-xs text-zinc-500 mt-1">Try searching "CV", "YouTube", "Video", "FAQ", "Graphic Design" or "Written Content"</p>
            </div>
          )}

          {normalizedQuery && totalResults === 0 && (
            <div className="text-center py-10">
              <p className="text-zinc-700 text-sm font-semibold">No results found for "{query}".</p>
              <p className="text-xs text-zinc-500 mt-1">Try another keyword or browse our main navigation pages.</p>
            </div>
          )}

          {/* Matched Pages */}
          {matchedPages.length > 0 && (
            <div>
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#228f0c] mb-2 px-1">
                Pages ({matchedPages.length})
              </div>
              <div className="space-y-1">
                {matchedPages.map((page) => (
                  <button
                    key={page.id}
                    onClick={() => handleSelectPage(page.id)}
                    className="w-full text-left p-3 rounded-xl bg-zinc-50 hover:bg-zinc-900 hover:text-white border border-zinc-200 flex items-center justify-between group transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-4 h-4 text-[#228f0c]" />
                      <span className="font-bold text-xs">{page.name}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-[#1cff00] group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched YouTube Shared Docs */}
          {matchedDocs.length > 0 && (
            <div>
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#228f0c] mb-2 px-1">
                YouTube Shared Resources ({matchedDocs.length})
              </div>
              <div className="space-y-2">
                {matchedDocs.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => handleSelectPage('youtube-resources')}
                    className="w-full text-left p-3 rounded-xl bg-zinc-50 hover:bg-zinc-900 hover:text-white border border-zinc-200 group transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#228f0c] shrink-0" />
                        <span className="font-bold text-xs">{doc.title}</span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-white bg-[#228f0c] px-2 py-0.5 rounded">
                        {doc.fileType}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500 group-hover:text-zinc-300 mt-1 line-clamp-1">{doc.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched Consultations */}
          {matchedPackages.length > 0 && (
            <div>
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#228f0c] mb-2 px-1">
                Consultation Plans ({matchedPackages.length})
              </div>
              <div className="space-y-2">
                {matchedPackages.map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => handleSelectPage('consultations')}
                    className="w-full text-left p-3 rounded-xl bg-zinc-50 hover:bg-zinc-900 hover:text-white border border-zinc-200 group transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs">{pkg.name}</span>
                      <span className="text-xs font-extrabold text-[#228f0c] group-hover:text-[#1cff00]">{pkg.price}</span>
                    </div>
                    <p className="text-xs text-zinc-500 group-hover:text-zinc-300 mt-0.5">{pkg.tagline}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched FAQs */}
          {matchedFaqs.length > 0 && (
            <div>
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#228f0c] mb-2 px-1">
                Frequently Asked Questions ({matchedFaqs.length})
              </div>
              <div className="space-y-2">
                {matchedFaqs.map((faq) => (
                  <button
                    key={faq.id}
                    onClick={() => handleSelectPage('faq')}
                    className="w-full text-left p-3 rounded-xl bg-zinc-50 hover:bg-zinc-900 hover:text-white border border-zinc-200 group transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-[#228f0c] shrink-0" />
                      <span className="font-bold text-xs">{faq.question}</span>
                    </div>
                    <p className="text-xs text-zinc-500 group-hover:text-zinc-300 mt-1 line-clamp-1">{faq.answer}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-zinc-50 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-500">
          <span>Press <strong>Esc</strong> to exit</span>
          <span className="text-zinc-900 font-extrabold">What's Next?</span>
        </div>
      </div>
    </div>
  );
};
