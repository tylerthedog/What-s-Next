import React from 'react';

interface WhatsNextLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showCheckeredBg?: boolean;
  className?: string;
}

export const WhatsNextLogo: React.FC<WhatsNextLogoProps> = ({
  size = 'md',
  className = '',
}) => {
  const dimensions = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-28 h-28',
    xl: 'w-44 h-44',
  }[size];

  return (
    <div
      className={`relative rounded-2xl overflow-hidden border border-[#1cff00]/50 shadow-md flex items-center justify-center bg-black select-none shrink-0 ${dimensions} ${className}`}
      title="Logo Placeholder"
    >
      <div className="flex flex-col items-center justify-center w-full h-full bg-black text-[#1cff00] p-1.5">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="20" fill="#000000" />
          <path d="M18 28L34 72L50 42L66 72L82 28" stroke="#1cff00" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="82" cy="78" r="6" fill="#1cff00" />
        </svg>
      </div>
    </div>
  );
};

