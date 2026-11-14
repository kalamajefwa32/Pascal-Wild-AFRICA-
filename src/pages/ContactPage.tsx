import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  HelpCircle,
  CheckCircle,
  Shield,
  CreditCard
} from 'lucide-react';
import { BookingEnquirySection } from '../components/BookingEnquirySection';
import { SITE_CONFIG, getWhatsAppUrl } from '../data/config';

export const ContactPage: React.FC = () => {
  const faqs = [
    {
      q: 'How do I confirm a safari booking with Pascal?',
      a: 'Simply send an enquiry via our form or directly on WhatsApp. Pascal will confirm availability, suggest the best lodges, and provide a transparent quote. Once agreed, booking details are finalized directly.'
    },
    {
      q: 'Where do the safaris depart from?',
      a: 'We provide complimentary door-to-door hotel pick-up and drop-off from any beach resort or villa in Watamu, Malindi, Kilifi, Mombasa, and Diani.'
    },
    {
      q: 'What type of safari vehicles do you use?',
      a: 'We use custom-built 4x4 Toyota Land Cruisers and Safari vans equipped with pop-up viewing roofs, UHF radio communications, charging sockets, and onboard coolers.'
    },
    {
      q: 'What languages does Pascal speak?',
      a: 'Pascal speaks fluent English, Italian, and Swahili, ensuring smooth communication and an enjoyable experience for European and international visitors.'
    },
    {
      q: 'Are park entrance fees and meals included in the packages?',
      a: 'Yes, all our multi-day packages include national park conservation fees, full-board lodge meals, and unlimited drinking water in the safari vehicle.'
    }
  ];

  return (
    <div className="bg-[#FAFAF7] min-h-screen pb-20">
      {/* Header Banner */}
      <section className="relative py-16 md:py-24 bg-[#153F25] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/safari_sunset_cta_1794228728368.jpg')" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E9A51A] text-[#153F25] rounded-md text-xs font-bold uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-white uppercase">
            CONTACT & BOOKING ENQUIRIES
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Reach out to Pascal directly for quick advice, customized itinerary quotes, or immediate WhatsApp planning.
          </p>
        </div>
      </section>

      {/* Main Form and Info */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm hover:border-[#25D366] hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="text-xs text-neutral-500 font-semibold">Fastest Response</div>
            <div className="font-heading font-bold text-base text-[#153F25] mt-0.5">
              WhatsApp Chat
            </div>
            <div className="text-xs text-neutral-600 mt-1">{SITE_CONFIG.phone}</div>
          </a>

          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm hover:border-[#153F25] hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#153F25]/10 text-[#153F25] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <div className="text-xs text-neutral-500 font-semibold">Direct Phone</div>
            <div className="font-heading font-bold text-base text-[#153F25] mt-0.5">
              Call Pascal
            </div>
            <div className="text-xs text-neutral-600 mt-1">{SITE_CONFIG.phone}</div>
          </a>

          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm hover:border-[#E9A51A] hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#E9A51A]/15 text-[#153F25] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div className="text-xs text-neutral-500 font-semibold">Email Enquiries</div>
            <div className="font-heading font-bold text-base text-[#153F25] mt-0.5">
              Send Email
            </div>
            <div className="text-xs text-neutral-600 mt-1 truncate">{SITE_CONFIG.email}</div>
          </a>

          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#153F25]/10 text-[#153F25] flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-xs text-neutral-500 font-semibold">Operating Hours</div>
            <div className="font-heading font-bold text-base text-[#153F25] mt-0.5">
              Daily Service
            </div>
            <div className="text-xs text-neutral-600 mt-1">{SITE_CONFIG.hours}</div>
          </div>
        </div>

        {/* Full Booking Enquiry Form */}
        <BookingEnquirySection />

        {/* Frequently Asked Questions */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-neutral-200/80 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F6EBD6] text-[#153F25] rounded-md text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-[#E9A51A]" />
              <span>Safari Planning Advice</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#153F25]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#FAFAF7] border border-neutral-200/70 space-y-2">
                <h3 className="font-heading font-bold text-sm text-[#153F25] flex items-start gap-2">
                  <span className="text-[#E9A51A] font-black">Q:</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed pl-5 font-body">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
