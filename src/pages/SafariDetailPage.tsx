import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Clock,
  MapPin,
  Car,
  Check,
  X,
  Calendar,
  MessageCircle,
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Share2,
  Sparkles
} from 'lucide-react';
import { SAFARI_PACKAGES } from '../data/safaris';
import { BookingEnquirySection } from '../components/BookingEnquirySection';
import { getWhatsAppUrl } from '../data/config';

export const SafariDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const safari = SAFARI_PACKAGES.find((s) => s.id === id) || SAFARI_PACKAGES[1];
  const [activeDay, setActiveDay] = useState<number>(1);

  const whatsappMsg = `Hello Pascal! I would like to enquire and check availability for the "${safari.title}" (${safari.destination}, ${safari.duration}).`;

  return (
    <div className="bg-[#FAFAF7] min-h-screen pb-20">
      {/* Top Breadcrumb */}
      <div className="bg-white border-b border-neutral-200/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-neutral-500 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-[#153F25]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/safaris" className="hover:text-[#153F25]">Safaris</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-bold text-[#153F25]">{safari.title}</span>
          </div>

          <Link
            to="/safaris"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-[#153F25] hover:text-[#E9A51A]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Packages</span>
          </Link>
        </div>
      </div>

      {/* Hero Header with Destination Photo */}
      <section className="relative h-[380px] md:h-[480px] w-full bg-neutral-900 overflow-hidden">
        <img
          src={safari.image}
          alt={safari.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E9A51A] text-[#153F25] rounded-md text-xs font-extrabold uppercase tracking-wider mb-3">
              <span>{safari.destination}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight uppercase">
              {safari.title}
            </h1>
            <p className="mt-2 text-sm sm:text-base text-white/90 max-w-2xl font-body">
              {safari.shortDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Details on Left (8 cols), Sticky Booking on Right (4 cols) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-10">
            {/* Quick Specs strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-white p-5 rounded-2xl border border-neutral-200/80 shadow-sm text-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#153F25]/10 text-[#153F25] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500">Duration</div>
                  <div className="font-bold text-[#153F25]">{safari.duration}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#153F25]/10 text-[#153F25] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500">Destination</div>
                  <div className="font-bold text-[#153F25] truncate">{safari.destination}</div>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#153F25]/10 text-[#153F25] flex items-center justify-center shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500">Departure</div>
                  <div className="font-bold text-[#153F25] truncate">{safari.departure}</div>
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/80 shadow-sm space-y-4">
              <h2 className="text-2xl font-heading font-extrabold text-[#153F25]">
                Safari Overview
              </h2>
              <p className="text-neutral-700 leading-relaxed font-body text-sm sm:text-base">
                {safari.overview}
              </p>
            </div>

            {/* Safari Highlights */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/80 shadow-sm space-y-4">
              <h2 className="text-2xl font-heading font-extrabold text-[#153F25]">
                Safari Highlights
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {safari.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-700">
                    <div className="w-5 h-5 rounded-full bg-[#E9A51A]/20 text-[#153F25] flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="w-3 h-3 text-[#E9A51A]" />
                    </div>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Day by Day Itinerary */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/80 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-heading font-extrabold text-[#153F25]">
                  Day-by-Day Itinerary
                </h2>
                <span className="text-xs text-neutral-500 font-semibold">
                  Guided personally by Pascal
                </span>
              </div>

              <div className="space-y-4">
                {safari.itinerary.map((day) => (
                  <div
                    key={day.day}
                    className="border border-neutral-200 rounded-xl p-5 hover:border-[#153F25]/40 transition-colors bg-[#FAFAF7]"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2.5 py-1 rounded bg-[#153F25] text-white text-xs font-heading font-bold uppercase tracking-wider">
                        Day {day.day}
                      </span>
                      <h3 className="text-base font-heading font-bold text-[#153F25]">
                        {day.title}
                      </h3>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed font-body pl-1">
                      {day.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inclusions */}
              <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-emerald-800">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-emerald-700" />
                  </div>
                  <h3 className="font-heading font-bold text-base">Package Inclusions</h3>
                </div>
                <ul className="space-y-2 text-xs text-neutral-600">
                  {safari.inclusions.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-neutral-800">
                  <div className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center">
                    <X className="w-4 h-4 text-neutral-500" />
                  </div>
                  <h3 className="font-heading font-bold text-base">Package Exclusions</h3>
                </div>
                <ul className="space-y-2 text-xs text-neutral-600">
                  {safari.exclusions.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <X className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Booking Card */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 bg-white rounded-2xl border border-[#153F25]/15 p-6 shadow-xl space-y-6">
              <div className="border-b border-neutral-100 pb-4">
                <span className="text-xs font-bold text-[#E9A51A] uppercase tracking-wider">
                  Book with Pascal
                </span>
                <h3 className="text-xl font-heading font-extrabold text-[#153F25] mt-1">
                  Enquire About This Safari
                </h3>
                <p className="text-xs text-neutral-500 mt-1">
                  Custom quotes based on your group size, season, and lodge choice.
                </p>
              </div>

              <div className="space-y-3">
                {/* Instant WhatsApp Enquiry button */}
                <a
                  href={getWhatsAppUrl(whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>

                {/* Or scroll to enquiry form */}
                <button
                  onClick={() => {
                    const el = document.getElementById('booking-enquiry');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3 px-4 bg-[#153F25] hover:bg-[#0D2817] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all duration-200"
                >
                  Fill Booking Form Below
                </button>
              </div>

              <div className="p-4 rounded-xl bg-[#F6EBD6]/50 border border-[#E9A51A]/20 space-y-2 text-xs text-neutral-700">
                <div className="flex items-center gap-2 font-bold text-[#153F25]">
                  <ShieldCheck className="w-4 h-4 text-[#153F25]" />
                  <span>The Pascal Guarantee</span>
                </div>
                <p className="text-[11px] leading-relaxed text-neutral-600">
                  Private 4x4 vehicles, guaranteed window seats, flexible photography stops, and transparent pricing with no hidden tourist markups.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Booking Enquiry Section pre-filled with this safari */}
      <div className="mt-16">
        <BookingEnquirySection preselectedTour={safari.title} />
      </div>
    </div>
  );
};
