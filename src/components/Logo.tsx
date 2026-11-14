import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../data/config';

interface LogoProps {
  variant?: 'light' | 'dark';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  showTagline = true,
  size = 'md',
  className = ''
}) => {
  const isDark = variant === 'dark'; // for dark background (like footer)

  const sizeClasses = {
    sm: { img: 'h-9 w-9', text: 'text-lg', tagline: 'text-[10px]' },
    md: { img: 'h-11 w-11', text: 'text-2xl', tagline: 'text-xs' },
    lg: { img: 'h-14 w-14', text: 'text-3xl', tagline: 'text-sm' }
  }[size];

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}>
      {/* Official Circular Safari Badge */}
      <div className="relative">
        <img
          src="/assets/aistudio/logo_ea8dd3a0.jpeg"
          alt="Pascawildafrica Logo Emblem"
          className={`${sizeClasses.img} rounded-full object-cover shadow-sm ring-2 ${
            isDark ? 'ring-[#E9A51A]/70' : 'ring-[#153F25]/20'
          } group-hover:scale-105 transition-transform duration-300`}
        />
      </div>

      <div className="flex flex-col">
        {/* Brand Name */}
        <div className={`font-heading font-extrabold tracking-tight leading-none ${sizeClasses.text}`}>
          <span className={isDark ? 'text-white' : 'text-[#153F25]'}>Pasca</span>
          <span className="text-[#E9A51A]">wild</span>
          <span className={isDark ? 'text-white/90' : 'text-[#244F2E]'}>africa</span>
        </div>

        {/* Tagline */}
        {showTagline && (
          <span
            className={`font-heading font-medium tracking-wider uppercase mt-1 ${
              sizeClasses.tagline
            } ${isDark ? 'text-[#F6EBD6]/80' : 'text-[#153F25]/80'}`}
          >
            {SITE_CONFIG.tagline}
          </span>
        )}
      </div>
    </Link>
  );
};
