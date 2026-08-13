import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin, Briefcase, Video } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/content';

export const SocialStrip: React.FC<{ variant?: 'top' | 'compact' | 'footer' }> = ({ variant = 'top' }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Facebook':
        return <Facebook className="w-3.5 h-3.5" />;
      case 'Instagram':
        return <Instagram className="w-3.5 h-3.5" />;
      case 'Youtube':
        return <Youtube className="w-3.5 h-3.5" />;
      case 'Linkedin':
        return <Linkedin className="w-3.5 h-3.5" />;
      case 'Briefcase':
        return <Briefcase className="w-3.5 h-3.5" />;
      case 'Video':
        return <Video className="w-3.5 h-3.5" />;
      default:
        return <Video className="w-3.5 h-3.5" />;
    }
  };

  if (variant === 'top') {
    return (
      <div className="bg-zinc-950 text-zinc-300 py-1.5 px-4 text-xs border-b border-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3 text-zinc-400 text-[11px]">
            <span className="inline-flex items-center gap-1.5 font-bold text-white">
              <span className="w-2 h-2 rounded-full bg-[#1cff00] animate-pulse"></span>
              What's Next?
            </span>
            <span className="hidden md:inline text-zinc-700">|</span>
            <span className="hidden md:inline text-zinc-400">Creative Production Agency</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-zinc-400 font-semibold text-[11px] mr-1 hidden sm:inline">Follow Our Channels:</span>
            <div className="flex items-center gap-1">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-1 rounded-lg text-zinc-400 hover:text-[#1cff00] hover:bg-zinc-900 transition-all duration-150"
                  title={link.name}
                  aria-label={link.name}
                >
                  {getIcon(link.iconName)}
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white hover:bg-zinc-900 text-zinc-800 hover:text-[#1cff00] border border-zinc-200 hover:border-zinc-900 text-xs font-bold transition-all shadow-2xs"
        >
          {getIcon(link.iconName)}
          <span>{link.name}</span>
        </a>
      ))}
    </div>
  );
};
