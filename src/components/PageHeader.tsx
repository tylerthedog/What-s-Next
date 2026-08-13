import React from 'react';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  badge: string;
  title: string;
  description: string;
  onNavigateHome?: () => void;
  ctaText?: string;
  onCtaClick?: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  description,
  onNavigateHome,
  ctaText,
  onCtaClick,
}) => {
  return (
    <div className="relative bg-white border-b border-zinc-200 py-10 lg:py-14 shadow-2xs">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        {onNavigateHome && (
          <nav className="flex items-center gap-2 text-xs text-zinc-500 mb-3">
            <button
              onClick={onNavigateHome}
              className="hover:text-zinc-900 transition-colors font-medium"
            >
              Home
            </button>
            <ChevronRight className="w-3 h-3 text-zinc-400" />
            <span className="text-zinc-900 font-bold">{title}</span>
          </nav>
        )}

        {/* Badge & Title */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[#1cff00] text-xs font-extrabold uppercase tracking-wider shadow-sm border border-[#228f0c]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1cff00]"></span>
            {badge}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
            {title}
          </h1>

          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
            {description}
          </p>

          {ctaText && onCtaClick && (
            <div className="pt-2">
              <button
                onClick={onCtaClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1cff00] hover:bg-[#18e000] text-black font-extrabold text-xs shadow-md shadow-[#1cff00]/20 transition-all hover:scale-105"
              >
                <span>{ctaText}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
