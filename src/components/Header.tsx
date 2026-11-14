import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Compass,
  MapPin,
  Calendar,
  MessageCircle
} from 'lucide-react';
import { Logo } from './Logo';
import { getWhatsAppUrl, SITE_CONFIG } from '../data/config';
import { SAFARI_PACKAGES } from '../data/safaris';
import { EXCURSIONS } from '../data/excursions';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [safarisDropdownOpen, setSafarisDropdownOpen] = useState(false);
  const [excursionsDropdownOpen, setExcursionsDropdownOpen] = useState(false);
  const location = useLocation();

  const safarisRef = useRef<HTMLDivElement>(null);
  const excursionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setSafarisDropdownOpen(false);
    setExcursionsDropdownOpen(false);
  }, [location.pathname]);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (safarisRef.current && !safarisRef.current.contains(event.target as Node)) {
        setSafarisDropdownOpen(false);
      }
      if (excursionsRef.current && !excursionsRef.current.contains(event.target as Node)) {
        setExcursionsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5'
          : 'bg-white border-b border-[#153F25]/10 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Logo size="md" />

        {/* Center: Desktop Navigation Bar */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {/* Home */}
          <Link
            to="/"
            className={`px-3.5 py-1.5 rounded-md text-sm font-semibold transition-all duration-200 ${
              isActive('/')
                ? 'bg-[#153F25] text-white shadow-sm'
                : 'text-[#242424] hover:text-[#153F25] hover:bg-neutral-100/80'
            }`}
          >
            Home
          </Link>

          {/* Safaris Dropdown */}
          <div className="relative" ref={safarisRef}>
            <button
              onClick={() => setSafarisDropdownOpen(!safarisDropdownOpen)}
              onMouseEnter={() => setSafarisDropdownOpen(true)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-semibold transition-all duration-200 ${
                isActive('/safaris')
                  ? 'text-[#153F25] bg-[#E9A51A]/15 font-bold'
                  : 'text-[#242424] hover:text-[#153F25] hover:bg-neutral-100/80'
              }`}
              aria-expanded={safarisDropdownOpen}
            >
              <span>Safaris</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  safarisDropdownOpen ? 'rotate-180 text-[#E9A51A]' : ''
                }`}
              />
            </button>

            {/* Safaris Dropdown Menu */}
            {safarisDropdownOpen && (
              <div
                onMouseLeave={() => setSafarisDropdownOpen(false)}
                className="absolute top-full left-0 mt-1 w-72 rounded-xl bg-white shadow-xl border border-neutral-100 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <div className="px-3 pb-2 border-b border-neutral-100 mb-1.5 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#153F25]">
                    Kenya Safari Packages
                  </span>
                  <Link
                    to="/safaris"
                    className="text-xs font-semibold text-[#E9A51A] hover:underline"
                  >
                    View All
                  </Link>
                </div>
                {SAFARI_PACKAGES.map((pkg) => (
                  <Link
                    key={pkg.id}
                    to={`/safaris/${pkg.id}`}
                    className="flex items-start gap-3 px-3.5 py-2 hover:bg-[#F6EBD6]/40 transition-colors group"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#E9A51A] mt-1.5 shrink-0 group-hover:scale-125 transition-transform" />
                    <div>
                      <div className="text-sm font-bold text-[#153F25] group-hover:text-[#E9A51A] transition-colors">
                        {pkg.title}
                      </div>
                      <div className="text-xs text-neutral-500 line-clamp-1">{pkg.destination}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Excursions Dropdown */}
          <div className="relative" ref={excursionsRef}>
            <button
              onClick={() => setExcursionsDropdownOpen(!excursionsDropdownOpen)}
              onMouseEnter={() => setExcursionsDropdownOpen(true)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-semibold transition-all duration-200 ${
                isActive('/excursions')
                  ? 'text-[#153F25] bg-[#E9A51A]/15 font-bold'
                  : 'text-[#242424] hover:text-[#153F25] hover:bg-neutral-100/80'
              }`}
              aria-expanded={excursionsDropdownOpen}
            >
              <span>Excursions</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  excursionsDropdownOpen ? 'rotate-180 text-[#E9A51A]' : ''
                }`}
              />
            </button>

            {/* Excursions Dropdown Menu */}
            {excursionsDropdownOpen && (
              <div
                onMouseLeave={() => setExcursionsDropdownOpen(false)}
                className="absolute top-full left-0 mt-1 w-72 rounded-xl bg-white shadow-xl border border-neutral-100 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <div className="px-3 pb-2 border-b border-neutral-100 mb-1.5 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#153F25]">
                    Watamu & Coastal Tours
                  </span>
                  <Link
                    to="/excursions"
                    className="text-xs font-semibold text-[#E9A51A] hover:underline"
                  >
                    View All
                  </Link>
                </div>
                {EXCURSIONS.map((exc) => (
                  <Link
                    key={exc.id}
                    to={`/excursions/${exc.id}`}
                    className="flex items-start gap-3 px-3.5 py-2 hover:bg-[#F6EBD6]/40 transition-colors group"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#153F25] mt-1.5 shrink-0 group-hover:scale-125 transition-transform" />
                    <div>
                      <div className="text-sm font-bold text-[#153F25] group-hover:text-[#E9A51A] transition-colors">
                        {exc.title}
                      </div>
                      <div className="text-xs text-neutral-500">{exc.duration}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* My Story */}
          <Link
            to="/my-story"
            className={`px-3.5 py-1.5 rounded-md text-sm font-semibold transition-all duration-200 ${
              isActive('/my-story')
                ? 'bg-[#153F25] text-white shadow-sm'
                : 'text-[#242424] hover:text-[#153F25] hover:bg-neutral-100/80'
            }`}
          >
            My Story
          </Link>

          {/* Reviews */}
          <Link
            to="/reviews"
            className={`px-3.5 py-1.5 rounded-md text-sm font-semibold transition-all duration-200 ${
              isActive('/reviews')
                ? 'bg-[#153F25] text-white shadow-sm'
                : 'text-[#242424] hover:text-[#153F25] hover:bg-neutral-100/80'
            }`}
          >
            Reviews
          </Link>

          {/* Contact Us */}
          <Link
            to="/contact"
            className={`px-3.5 py-1.5 rounded-md text-sm font-semibold transition-all duration-200 ${
              isActive('/contact')
                ? 'bg-[#153F25] text-white shadow-sm'
                : 'text-[#242424] hover:text-[#153F25] hover:bg-neutral-100/80'
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Right: WhatsApp CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm font-bold rounded-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            {/* WhatsApp Icon */}
            <div className="w-5 h-5 flex items-center justify-center">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </div>
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-2 text-white bg-[#25D366] rounded-lg"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#153F25] hover:bg-neutral-100 rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
          <Link
            to="/"
            className={`block px-4 py-2.5 rounded-lg text-base font-semibold ${
              isActive('/') ? 'bg-[#153F25] text-white' : 'text-[#242424] hover:bg-neutral-100'
            }`}
          >
            Home
          </Link>

          {/* Mobile Safaris Accordion */}
          <div className="space-y-1">
            <div className="flex items-center justify-between px-4 py-2.5 rounded-lg text-base font-semibold text-[#242424] hover:bg-neutral-100">
              <Link to="/safaris" className="flex-1 font-bold text-[#153F25]">
                Safaris
              </Link>
              <button
                onClick={() => setSafarisDropdownOpen(!safarisDropdownOpen)}
                className="p-1 text-neutral-500"
              >
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    safarisDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
            {safarisDropdownOpen && (
              <div className="pl-6 pr-2 space-y-1">
                {SAFARI_PACKAGES.map((pkg) => (
                  <Link
                    key={pkg.id}
                    to={`/safaris/${pkg.id}`}
                    className="block py-2 text-sm text-neutral-700 hover:text-[#153F25] font-medium"
                  >
                    • {pkg.title} ({pkg.destination})
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Excursions Accordion */}
          <div className="space-y-1">
            <div className="flex items-center justify-between px-4 py-2.5 rounded-lg text-base font-semibold text-[#242424] hover:bg-neutral-100">
              <Link to="/excursions" className="flex-1 font-bold text-[#153F25]">
                Excursions
              </Link>
              <button
                onClick={() => setExcursionsDropdownOpen(!excursionsDropdownOpen)}
                className="p-1 text-neutral-500"
              >
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    excursionsDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
            {excursionsDropdownOpen && (
              <div className="pl-6 pr-2 space-y-1">
                {EXCURSIONS.map((exc) => (
                  <Link
                    key={exc.id}
                    to={`/excursions/${exc.id}`}
                    className="block py-2 text-sm text-neutral-700 hover:text-[#153F25] font-medium"
                  >
                    • {exc.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/my-story"
            className={`block px-4 py-2.5 rounded-lg text-base font-semibold ${
              isActive('/my-story') ? 'bg-[#153F25] text-white' : 'text-[#242424] hover:bg-neutral-100'
            }`}
          >
            My Story
          </Link>

          <Link
            to="/reviews"
            className={`block px-4 py-2.5 rounded-lg text-base font-semibold ${
              isActive('/reviews') ? 'bg-[#153F25] text-white' : 'text-[#242424] hover:bg-neutral-100'
            }`}
          >
            Reviews
          </Link>

          <Link
            to="/contact"
            className={`block px-4 py-2.5 rounded-lg text-base font-semibold ${
              isActive('/contact') ? 'bg-[#153F25] text-white' : 'text-[#242424] hover:bg-neutral-100'
            }`}
          >
            Contact Us
          </Link>

          <div className="pt-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] text-white font-bold rounded-lg shadow"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp with Pascal</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
