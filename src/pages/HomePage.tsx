import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  PawPrint,
  Handshake,
  Star,
  MapPin,
  ChevronRight,
  Phone,
  MessageCircle,
  Compass,
  CheckCircle,
  Shield,
  Heart
} from 'lucide-react';
import { SafariCard } from '../components/SafariCard';
import { ExcursionCard } from '../components/ExcursionCard';
import { BookingEnquirySection } from '../components/BookingEnquirySection';
import { LightboxModal } from '../components/LightboxModal';
import { SAFARI_PACKAGES } from '../data/safaris';
import { EXCURSIONS } from '../data/excursions';
import { GALLERY_ITEMS, GalleryItem } from '../data/gallery';
import { GUEST_REVIEWS } from '../data/reviews';
import { getWhatsAppUrl, SITE_CONFIG } from '../data/config';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [preselectedTour, setPreselectedTour] = useState<string>('');
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  // Hero carousel slides
  const heroSlides = [
    {
      image: '/assets/images/hero_safari_elephants_1794228726820.jpg',
      title: 'DISCOVER THE MAGIC OF KENYA',
      subtitle:
        'Experience authentic African safaris, breathtaking wildlife and unforgettable adventures with Pascal.'
    },
    {
      image: '/assets/images/safari_sunset_cta_1794228728368.jpg',
      title: 'IMMERSIVE TSAVO EAST SAFARIS',
      subtitle:
        'Witness majestic herds of red-dusted elephants, lions, and leopards across the great African savannah.'
    },
    {
      image: '/assets/images/watamu_dhow_sailing_1794228728711.jpg',
      title: 'WATAMU COASTAL PARADISE',
      subtitle:
        'Sail on traditional Swahili wooden dhows and snorkel with sea turtles in crystal turquoise waters.'
    }
  ];

  const handleEnquire = (tourTitle: string) => {
    setPreselectedTour(tourTitle);
    const element = document.getElementById('booking-enquiry');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* ========================================================= */}
      {/* B. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="relative w-full overflow-hidden bg-neutral-900 min-h-[560px] md:min-h-[640px] lg:min-h-[700px] flex items-center">
        {/* Background Image Carousel */}
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeHeroSlide === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
            {/* Soft gradient scrim matching screenshot (keeping sky and Kilimanjaro bright, with legible text overlay) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60 lg:from-black/10 lg:via-black/25 lg:to-black/70" />
          </div>
        ))}

        {/* Hero Content - Placed with high contrast readability matching screenshot */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24">
          <div className="max-w-2xl lg:ml-auto text-left lg:text-left bg-black/30 lg:bg-black/40 backdrop-blur-sm p-6 sm:p-10 rounded-3xl border border-white/20 shadow-2xl">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E9A51A] text-[#153F25] font-heading font-extrabold text-xs uppercase tracking-wider rounded-md mb-4 shadow-sm">
              <Compass className="w-3.5 h-3.5" />
              <span>Authentic Kenyan Guided Safaris</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-white uppercase drop-shadow-md leading-[1.15]">
              DISCOVER THE <br />
              <span className="text-[#E9A51A]">MAGIC OF KENYA</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-base sm:text-lg text-white/95 font-body leading-relaxed drop-shadow">
              Experience authentic African safaris, breathtaking wildlife and unforgettable adventures with Pascal.
            </p>

            {/* Two Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/safaris"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#153F25] hover:bg-[#0D2817] text-white text-xs sm:text-sm font-heading font-bold uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 border border-white/10"
              >
                <span>EXPLORE SAFARIS</span>
                <ArrowRight className="w-4 h-4 text-[#E9A51A]" />
              </Link>

              <a
                href={getWhatsAppUrl('Hello Pascal! I saw your website and would like to talk to you about planning a safari.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#E9A51A] hover:bg-[#D08F0E] text-[#153F25] text-xs sm:text-sm font-heading font-bold uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>TALK TO PASCAL</span>
                <ArrowRight className="w-4 h-4 text-[#153F25]" />
              </a>
            </div>
          </div>
        </div>

        {/* Carousel slide indicator dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-2.5">
          {heroSlides.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setActiveHeroSlide(dotIdx)}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                activeHeroSlide === dotIdx ? 'w-8 bg-[#E9A51A]' : 'w-2.5 bg-white/60 hover:bg-white'
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* C. MEET PASCAL SECTION                                    */}
      {/* ========================================================= */}
      <section className="py-16 md:py-20 bg-white border-b border-[#153F25]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Large photograph of Pascal in safari clothing */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-[#153F25]/15 aspect-[4/5] max-w-md mx-auto bg-[#F6EBD6]">
                <img
                  src="/assets/aistudio/Smiling_Kenya_Safari_Portrait_5e520567.png"
                  alt="Pascal - Your Safari Companion in Kenya"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-[center_20%] hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 text-white">
                  <div className="font-heading font-bold text-lg text-[#E9A51A]">
                    Pascal
                  </div>
                  <div className="text-xs text-white/90">
                    Founder, Guide & Tour Specialist • Kenya
                  </div>
                </div>
              </div>
              {/* Decorative accent element */}
              <div className="hidden sm:block absolute -bottom-4 -right-4 w-28 h-28 bg-[#F6EBD6] rounded-2xl -z-10 border border-[#E9A51A]/40" />
            </div>

            {/* Right: Pascal's intro and 4 selling points */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#E9A51A]">
                  Authentic Hospitality
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#153F25] mt-1 tracking-tight">
                  Meet Pascal – Your Safari Companion
                </h2>
              </div>

              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-body">
                My name is Pascal William, founder of Pascal Wild Africa, based in Watamu on the stunning coast of Kenya. Driven by a passion for nature, wildlife, and African culture, I speak both Italian and English, committed to making every safari an authentic, welcoming, and unforgettable experience.
              </p>

              {/* Four Selling Points with Icons (matching screenshot) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* 1. Personalised Safaris */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#F6EBD6]/40 border border-[#E9A51A]/20">
                  <div className="w-10 h-10 rounded-full bg-[#153F25] text-[#E9A51A] flex items-center justify-center shrink-0 shadow-sm">
                    <PawPrint className="w-5 h-5" />
                  </div>
                  <span className="font-heading font-bold text-sm text-[#153F25]">
                    Personalised Safaris
                  </span>
                </div>

                {/* 2. Friendly Service */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#F6EBD6]/40 border border-[#E9A51A]/20">
                  <div className="w-10 h-10 rounded-full bg-[#153F25] text-[#E9A51A] flex items-center justify-center shrink-0 shadow-sm">
                    <Handshake className="w-5 h-5" />
                  </div>
                  <span className="font-heading font-bold text-sm text-[#153F25]">
                    Friendly Service
                  </span>
                </div>

                {/* 3. Unforgettable Memories */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#F6EBD6]/40 border border-[#E9A51A]/20">
                  <div className="w-10 h-10 rounded-full bg-[#153F25] text-[#E9A51A] flex items-center justify-center shrink-0 shadow-sm">
                    <Star className="w-5 h-5" />
                  </div>
                  <span className="font-heading font-bold text-sm text-[#153F25]">
                    Unforgettable Memories
                  </span>
                </div>

                {/* 4. Local Expertise */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#F6EBD6]/40 border border-[#E9A51A]/20">
                  <div className="w-10 h-10 rounded-full bg-[#153F25] text-[#E9A51A] flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="font-heading font-bold text-sm text-[#153F25]">
                    Local Expertise
                  </span>
                </div>
              </div>

              {/* READ MY STORY Button */}
              <div className="pt-2">
                <Link
                  to="/my-story"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#153F25] hover:bg-[#0D2817] text-white text-xs sm:text-sm font-heading font-bold uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all group"
                >
                  <span>READ MY STORY</span>
                  <ArrowRight className="w-4 h-4 text-[#E9A51A] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* D. FEATURED SAFARI PACKAGES                               */}
      {/* ========================================================= */}
      <section className="py-16 md:py-20 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading with decorative flank lines */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="hidden sm:block h-[1px] w-20 md:w-32 bg-[#E9A51A]" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#153F25] text-center tracking-tight">
              Explore Our Safari Packages
            </h2>
            <div className="hidden sm:block h-[1px] w-20 md:w-32 bg-[#E9A51A]" />
          </div>

          {/* 4 Cards Grid matching screenshot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Package 1: One Day Safari */}
            <SafariCard
              safari={SAFARI_PACKAGES[0]}
              onEnquire={handleEnquire}
            />

            {/* Package 2: 2 Days / 1 Night (Most Popular) */}
            <SafariCard
              safari={SAFARI_PACKAGES[1]}
              onEnquire={handleEnquire}
            />

            {/* Package 3: 3 Days / 2 Nights */}
            <SafariCard
              safari={SAFARI_PACKAGES[2]}
              onEnquire={handleEnquire}
            />

            {/* Package 4: More Safari Packages card */}
            <div className="group bg-white rounded-xl overflow-hidden border border-[#153F25]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                <img
                  src="/assets/images/safari_sunset_cta_1794228728368.jpg"
                  alt="Custom African Safaris"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-bold uppercase tracking-wider">
                    Tailored Journeys
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between text-center bg-white">
                <div>
                  <h3 className="text-xl font-heading font-bold text-[#153F25]">
                    More Safari Packages
                  </h3>
                  <p className="text-sm font-medium text-neutral-600 mt-1 mb-2">
                    Tailor-made adventures
                  </p>
                  <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                    Discover Amboseli under Kilimanjaro, the Great Migration in Masai Mara, and private conservancies.
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-100">
                  <Link
                    to="/safaris"
                    className="w-full py-2.5 px-4 bg-[#153F25] hover:bg-[#0D2817] text-white text-xs font-bold uppercase tracking-wider rounded-md text-center transition-all duration-200 shadow-sm block"
                  >
                    VIEW ALL SAFARIS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* E. EXCURSIONS SECTION (Watamu and Beyond)                 */}
      {/* ========================================================= */}
      <section className="py-16 md:py-20 bg-white border-t border-[#153F25]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading with decorative flank lines */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="hidden sm:block h-[1px] w-20 md:w-32 bg-[#E9A51A]" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#153F25] text-center tracking-tight">
              Discover Watamu and Beyond
            </h2>
            <div className="hidden sm:block h-[1px] w-20 md:w-32 bg-[#E9A51A]" />
          </div>

          {/* 3 Excursion Cards matching screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EXCURSIONS.slice(0, 3).map((exc) => (
              <ExcursionCard
                key={exc.id}
                excursion={exc}
                onEnquire={handleEnquire}
              />
            ))}
          </div>

          {/* View all excursions secondary link */}
          <div className="mt-8 text-center">
            <Link
              to="/excursions"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#153F25] hover:text-[#E9A51A] underline decoration-[#E9A51A] underline-offset-4 transition-colors"
            >
              <span>Explore all coastal excursions & day trips</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* F. GUEST PHOTO GALLERY & MEMORIES                         */}
      {/* ========================================================= */}
      <section className="py-16 md:py-20 bg-[#FAFAF7] border-t border-[#153F25]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left side: Memories with Pascal (6 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-12 bg-[#E9A51A]" />
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#153F25] tracking-tight">
                  Memories with Pascal
                </h2>
                <div className="h-[1px] w-12 bg-[#E9A51A]" />
              </div>

              {/* 3 Photo Grid matching screenshot */}
              <div className="grid grid-cols-3 gap-3">
                {/* Photo 1: Pascal with guest */}
                <div
                  onClick={() => setSelectedGalleryItem(GALLERY_ITEMS[0])}
                  className="cursor-pointer group relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-neutral-200"
                >
                  <img
                    src={GALLERY_ITEMS[0].image}
                    alt={GALLERY_ITEMS[0].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Photo 2: Guests memory */}
                <div
                  onClick={() => setSelectedGalleryItem(GALLERY_ITEMS[1])}
                  className="cursor-pointer group relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-neutral-200"
                >
                  <img
                    src={GALLERY_ITEMS[1].image}
                    alt={GALLERY_ITEMS[1].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Photo 3: Safari Land Cruiser group */}
                <div
                  onClick={() => setSelectedGalleryItem(GALLERY_ITEMS[3])}
                  className="cursor-pointer group relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-neutral-200"
                >
                  <img
                    src={GALLERY_ITEMS[3].image}
                    alt={GALLERY_ITEMS[3].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              <div>
                <Link
                  to="/my-story"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#153F25] hover:bg-[#0D2817] text-white text-xs font-heading font-bold uppercase tracking-wider rounded-md transition-all shadow-sm group"
                >
                  <span>VIEW MORE PHOTOS</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E9A51A] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right side: What Our Guests Say (5 cols) */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#153F25]/10 shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-10 bg-[#E9A51A]" />
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#153F25]">
                  What Our Guests Say
                </h3>
                <div className="h-[1px] w-10 bg-[#E9A51A]" />
              </div>

              <div className="flex items-center gap-6">
                <div className="flex-1 space-y-3">
                  <p className="text-sm sm:text-base italic text-neutral-700 font-serif leading-relaxed">
                    “An unforgettable safari experience! Pascal was professional, friendly and made our trip truly special.”
                  </p>
                  <div className="flex items-center gap-1 text-[#E9A51A]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="text-xs font-bold text-neutral-800 ml-2 font-heading">
                      – Sarah M., UK
                    </span>
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    Source: Verified Safari Guest Feedback
                  </div>
                </div>

                {/* Circular elephant sunset mask matching screenshot */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shrink-0 border-2 border-[#E9A51A] shadow-md">
                  <img
                    src="/assets/images/safari_tsavo_elephants_1794228728164.jpg"
                    alt="African wildlife encounter"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div>
                <Link
                  to="/reviews"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#153F25] hover:bg-[#0D2817] text-white text-xs font-heading font-bold uppercase tracking-wider rounded-md transition-all shadow-sm group"
                >
                  <span>VIEW MORE REVIEWS</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E9A51A] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* H. CALL TO ACTION BANNER (Full-width African Sunset)     */}
      {/* ========================================================= */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-neutral-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/safari_sunset_cta_1794228728368.jpg"
            alt="African savannah sunset acacia trees"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight uppercase text-white drop-shadow-md">
            READY FOR YOUR AFRICAN ADVENTURE?
          </h2>
          <p className="text-base sm:text-xl text-[#F6EBD6] font-body max-w-2xl mx-auto">
            Let Pascal help you plan an unforgettable safari or excursion in Kenya.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById('booking-enquiry');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#E9A51A] hover:bg-[#D08F0E] text-[#153F25] font-heading font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>BOOK YOUR SAFARI →</span>
            </button>

            <a
              href={getWhatsAppUrl('Hello Pascal! I am ready to plan my Kenya African adventure with you.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              <span>CONTACT PASCAL ON WHATSAPP</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* I. CONTACT AND BOOKING ENQUIRY SECTION                    */}
      {/* ========================================================= */}
      <BookingEnquirySection preselectedTour={preselectedTour} />

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedGalleryItem}
        items={GALLERY_ITEMS}
        onClose={() => setSelectedGalleryItem(null)}
        onSelect={(item) => setSelectedGalleryItem(item)}
      />
    </div>
  );
};
