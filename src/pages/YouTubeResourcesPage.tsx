import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { SHARED_DOCUMENTS, SharedDocument } from '../data/content';
import { Download, Youtube, Search, FileText, Share2, Eye, Check, ExternalLink, Sparkles, Filter } from 'lucide-react';

interface YouTubeResourcesPageProps {
  onNavigateHome: () => void;
}

export const YouTubeResourcesPage: React.FC<YouTubeResourcesPageProps> = ({ onNavigateHome }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [previewDoc, setPreviewDoc] = useState<SharedDocument | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [downloadedIds, setDownloadedIds] = useState<string[]>([]);

  const categories = ['All', 'Career & CVs', 'Profile Optimisation', 'YouTube & Media', 'Business & Freelance', 'Audio & Voiceovers'];

  const filteredDocs = SHARED_DOCUMENTS.filter((doc) => {
    const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (docId: string, title: string) => {
    if (!downloadedIds.includes(docId)) {
      setDownloadedIds([...downloadedIds, docId]);
    }
    const element = document.createElement('a');
    const file = new Blob([`What's Next Resource:\n${title}\n\nAccess full resources on https://whatsnextconsultants.com`], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${title.toLowerCase().replace(/[^a-z0-0]/g, '_')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleShareLink = (docId: string) => {
    const shareUrl = `${window.location.origin}/#youtube-resources?doc=${docId}`;
    navigator.clipboard.writeText(shareUrl);
    setCopiedId(docId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pb-20">
      <PageHeader
        badge="YouTube Channel Repository"
        title="YouTube Shared Resources & Docs"
        description="Access and download all documents, templates, cheat sheets, and checklists featured on our YouTube channel. 100% free community access."
        onNavigateHome={onNavigateHome}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-8">
        
        {/* Search & Category Filter Bar */}
        <div className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-md space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-5 h-5 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search resources by keyword or topic..."
                className="w-full bg-zinc-50 text-zinc-900 placeholder-zinc-400 pl-11 pr-4 py-3 rounded-2xl border border-zinc-200 focus:border-[#228f0c] focus:outline-none text-xs font-medium"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              <Filter className="w-4 h-4 text-[#228f0c] shrink-0 hidden sm:inline" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-zinc-900 text-[#228f0c] font-extrabold shadow-sm'
                      : 'bg-zinc-100 text-zinc-700 hover:text-zinc-900 border border-zinc-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="bg-white border border-zinc-200 hover:border-zinc-900 rounded-3xl p-6 flex flex-col justify-between shadow-md transition-all duration-200 group relative"
            >
              <div className="space-y-4">
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-900 bg-[#1cff00] px-2.5 py-1 rounded-lg">
                    {doc.category}
                  </span>
                  <span className="text-xs text-zinc-500 font-mono">
                    {doc.fileSize} • {doc.fileType}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-extrabold text-zinc-900 group-hover:text-[#228f0c] transition-colors leading-snug">
                  {doc.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-zinc-600 leading-relaxed line-clamp-3">
                  {doc.description}
                </p>

                {/* Youtube Reference */}
                {doc.youtubeVideoTitle && (
                  <div className="p-3 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center gap-2 text-xs">
                    <Youtube className="w-4 h-4 text-red-600 shrink-0" />
                    <span className="text-zinc-700 font-semibold truncate">
                      Featured in: {doc.youtubeVideoTitle}
                    </span>
                  </div>
                )}

                {/* Tags */}
                <div className="flex items-center gap-1.5 flex-wrap pt-1">
                  {doc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded-md border border-zinc-200 font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-zinc-100 mt-6 flex items-center justify-between gap-2">
                <button
                  onClick={() => setPreviewDoc(doc)}
                  className="px-3 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-zinc-200 text-xs font-bold flex items-center gap-1.5 transition-all"
                >
                  <Eye className="w-3.5 h-3.5 text-[#228f0c]" />
                  <span>Preview</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleShareLink(doc.id)}
                    className="p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border border-zinc-200 text-xs transition-all"
                    title="Copy Share Link"
                  >
                    {copiedId === doc.id ? <Check className="w-4 h-4 text-[#228f0c]" /> : <Share2 className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={() => handleDownload(doc.id, doc.title)}
                    className={`px-4 py-2 rounded-xl font-extrabold text-xs flex items-center gap-1.5 shadow-md transition-all ${
                      downloadedIds.includes(doc.id)
                        ? 'bg-zinc-100 text-zinc-700 border border-zinc-300'
                        : 'bg-[#1cff00] hover:bg-[#1cff00] text-zinc-950 shadow-[#1cff00]/20'
                    }`}
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{downloadedIds.includes(doc.id) ? 'Downloaded' : 'Download'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDocs.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-zinc-200">
            <FileText className="w-12 h-12 text-zinc-400 mx-auto mb-3" />
            <p className="text-zinc-800 font-bold text-base">No shared documents matched your search.</p>
            <p className="text-xs text-zinc-500 mt-1">Try clearing filters or searching for "CV" or "YouTube".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-zinc-900 text-[#228f0c] text-xs font-extrabold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Document Preview Modal */}
      {previewDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white border border-zinc-200 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-zinc-100 flex items-start justify-between gap-4 bg-zinc-50">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-900 bg-[#1cff00] px-2 py-0.5 rounded">
                  {previewDoc.category}
                </span>
                <h3 className="text-xl font-extrabold text-zinc-900 mt-1">{previewDoc.title}</h3>
              </div>
              <button
                onClick={() => setPreviewDoc(null)}
                className="p-1 text-zinc-400 hover:text-zinc-900 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
              <p className="text-xs text-zinc-600">{previewDoc.description}</p>
              
              <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-200 font-mono text-xs text-zinc-800 whitespace-pre-wrap leading-relaxed">
                {previewDoc.contentPreview || 'Document preview ready. Click Download below to save full file.'}
              </div>

              {previewDoc.youtubeVideoUrl && (
                <a
                  href={previewDoc.youtubeVideoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-[#228f0c] font-bold hover:underline"
                >
                  <Youtube className="w-4 h-4 text-red-600" />
                  <span>Watch YouTube Video Breakdown</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            <div className="p-4 bg-zinc-50 border-t border-zinc-200 flex items-center justify-between">
              <span className="text-xs text-zinc-500 font-mono">Updated: {previewDoc.updatedAt}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPreviewDoc(null)}
                  className="px-4 py-2 rounded-xl bg-zinc-200 text-zinc-800 text-xs font-bold"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    handleDownload(previewDoc.id, previewDoc.title);
                    setPreviewDoc(null);
                  }}
                  className="px-4 py-2 rounded-xl bg-[#1cff00] text-zinc-950 text-xs font-extrabold flex items-center gap-1.5 shadow-md"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Document</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
