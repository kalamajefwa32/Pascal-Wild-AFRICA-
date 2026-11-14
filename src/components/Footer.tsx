import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { Logo } from './Logo';
import { SITE_CONFIG, getWhatsAppUrl } from '../data/config';
import { SAFARI_PACKAGES } from '../data/safaris';
import { EXCURSIONS } from '../data/excursions';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#153F25] text-white border-t border-[#E9A51A]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Pascal's Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="dark" size="lg" />
            <p className="text-white/80 text-sm leading-relaxed pr-4">
              Pascawildafrica offers authentic Kenyan wildlife safaris, Tsavo East adventures, and Watamu coastal excursions. Led by Pascal, with years of guiding expertise delivering safe, personal, and unforgettable African journeys.
            </p>
            <div className="flex items-center gap-2 pt-2 text-[#E9A51A] text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#E9A51A]" />
              <span>Licensed Kenya Tour Guide & Operator</span>
            </div>
            {/* Social Icons */}
            <div className="pt-2">
              <span className="text-xs font-bold text-[#E9A51A] block mb-2 tracking-wide">
                @pascalwildafrica
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={SITE_CONFIG.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E9A51A] hover:text-[#153F25] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E9A51A] hover:text-[#153F25] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E9A51A] hover:text-[#153F25] flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp direct"
                className="w-9 h-9 rounded-full bg-[#25D366] text-white hover:opacity-90 flex items-center justify-center transition-opacity"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

          {/* Col 2: Safari Packages (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-heading font-bold text-[#E9A51A] uppercase tracking-wider">
              Safari Packages
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              {SAFARI_PACKAGES.map((pkg) => (
                <li key={pkg.id}>
                  <Link
                    to={`/safaris/${pkg.id}`}
                    className="hover:text-[#E9A51A] hover:translate-x-1 inline-block transition-all"
                  >
                    {pkg.title} <span className="text-white/40 text-xs">({pkg.duration})</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/safaris"
                  className="text-[#E9A51A] text-xs font-bold inline-flex items-center gap-1 hover:underline mt-1"
                >
                  Explore All Safaris →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Excursions (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-base font-heading font-bold text-[#E9A51A] uppercase tracking-wider">
              Excursions
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              {EXCURSIONS.map((exc) => (
                <li key={exc.id}>
                  <Link
                    to={`/excursions/${exc.id}`}
                    className="hover:text-[#E9A51A] hover:translate-x-1 inline-block transition-all"
                  >
                    {exc.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/excursions"
                  className="text-[#E9A51A] text-xs font-bold inline-flex items-center gap-1 hover:underline mt-1"
                >
                  View All Watamu Tours →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Map & Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-heading font-bold text-[#E9A51A] uppercase tracking-wider">
              Location & Contact
            </h4>
            <div className="space-y-2 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E9A51A] shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-white">
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E9A51A] shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E9A51A] shrink-0" />
                <span>{SITE_CONFIG.location}</span>
              </div>
            </div>

            {/* Visual Tsavo East Map Preview card (matching screenshot) */}
            <a
              href={SITE_CONFIG.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative rounded-lg overflow-hidden border border-[#E9A51A]/40 shadow-md group mt-3"
            >
              <div className="h-24 w-full bg-[#E5E9E0] relative flex items-center justify-center overflow-hidden">
                {/* Stylized topographical map pattern */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-35"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 200 100"
                  preserveAspectRatio="none"
                >
                  <path d="M0,20 Q40,5 80,25 T160,20 T200,35 L200,100 L0,100 Z" fill="#9FB594" />
                  <path d="M0,50 Q60,30 110,60 T180,45 T200,60 L200,100 L0,100 Z" fill="#7B9970" />
                  <line x1="20" y1="10" x2="190" y2="85" stroke="#E9A51A" strokeWidth="2" strokeDasharray="4,4" />
                </svg>
                <div className="relative z-10 flex items-center gap-1.5 bg-white/95 text-[#153F25] px-3 py-1.5 rounded-full shadow-md text-xs font-bold border border-red-500/30">
                  <MapPin className="w-3.5 h-3.5 text-red-600 fill-red-600 animate-bounce" />
                  <span>Tsavo East, Kenya</span>
                </div>
              </div>
              <div className="bg-[#0D2817] px-2.5 py-1 text-[11px] text-[#F6EBD6] flex items-center justify-between group-hover:text-[#E9A51A] transition-colors">
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Bar matching screenshot */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-medium">
            <Link to="/" className="hover:text-[#E9A51A] transition-colors">
              Home
            </Link>
            <span className="text-white/30">|</span>
            <Link to="/safaris" className="hover:text-[#E9A51A] transition-colors">
              Safaris
            </Link>
            <span className="text-white/30">|</span>
            <Link to="/excursions" className="hover:text-[#E9A51A] transition-colors">
              Excursions
            </Link>
            <span className="text-white/30">|</span>
            <Link to="/my-story" className="hover:text-[#E9A51A] transition-colors">
              My Story
            </Link>
            <span className="text-white/30">|</span>
            <Link to="/reviews" className="hover:text-[#E9A51A] transition-colors">
              Reviews
            </Link>
            <span className="text-white/30">|</span>
            <Link to="/contact" className="hover:text-[#E9A51A] transition-colors">
              Contact Us
            </Link>
          </nav>

          <p className="text-center">
            © 2026 Pascawildafrica. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
