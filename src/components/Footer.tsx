import React from 'react';
import { SocialStrip } from './SocialStrip';
import { COMPANY_INFO } from '../data/content';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { WhatsNextLogo } from './WhatsNextLogo';

interface FooterProps {
  onNavigate: (pageId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-zinc-950 text-zinc-300 border-t border-zinc-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <WhatsNextLogo size="sm" />
              <span className="font-extrabold text-xl text-white">
                What's Next?
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Empowering executives, creators, and ambitious teams through strategic career advisory, profile optimisation, video editing, written copy, graphic design, and YouTube channel growth.
            </p>
            <div className="pt-2">
              <SocialStrip variant="compact" />
            </div>
          </div>

          {/* Career & CVs */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#1cff00]">Career & Consulting</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <button onClick={() => onNavigate('profile-resume')} className="hover:text-[#1cff00] transition-colors text-left">
                  Profile Optimisation, CV & Cover Letters
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('consultations')} className="hover:text-[#1cff00] transition-colors text-left">
                  1-on-1 Consultations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('careers')} className="hover:text-[#1cff00] transition-colors text-left font-bold text-zinc-200">
                  Careers - Become Part of Our Team
                </button>
              </li>
            </ul>
          </div>

          {/* Media & Content Production */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#1cff00]">Media & Content Studio</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <button onClick={() => onNavigate('video-editing-production')} className="hover:text-[#1cff00] transition-colors text-left">
                  Video Editing & Production
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('voiceovers')} className="hover:text-[#1cff00] transition-colors text-left">
                  Voiceovers & Audio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('photography')} className="hover:text-[#1cff00] transition-colors text-left">
                  Photography
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('graphic-design')} className="hover:text-[#1cff00] transition-colors text-left">
                  Graphic & Logo Design, Thumbnails
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('written-content')} className="hover:text-[#1cff00] transition-colors text-left">
                  Written Content & Copywriting
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('translation')} className="hover:text-[#1cff00] transition-colors text-left">
                  Translation & Localisation
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('company-apparel')} className="hover:text-[#1cff00] transition-colors text-left">
                  Company Apparel & Custom Branding
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('social-youtube')} className="hover:text-[#1cff00] transition-colors text-left">
                  Social Media & YouTube Management
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('youtube-resources')} className="hover:text-[#1cff00] transition-colors text-left text-[#1cff00] font-bold">
                  YouTube Shared Resources & Docs
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details & Quick Action */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#1cff00]">Direct Contact</h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#1cff00] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#1cff00] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#1cff00] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
            </ul>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1cff00] hover:bg-[#18e000] text-black text-xs font-extrabold shadow-md shadow-[#1cff00]/20 transition-all"
              >
                <span>Enquire With Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal Links */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} What's Next?. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <button onClick={() => onNavigate('policies')} className="hover:text-zinc-300 transition-colors">
              Policies & Terms
            </button>
            <button onClick={() => onNavigate('faq')} className="hover:text-zinc-300 transition-colors">
              FAQ
            </button>
            <button onClick={() => onNavigate('careers')} className="hover:text-zinc-300 transition-colors">
              Careers
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-zinc-300 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
