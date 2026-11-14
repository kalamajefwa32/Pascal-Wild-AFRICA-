import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Users,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Instagram,
  Facebook,
  Youtube,
  MessageSquare
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../data/config';
import { SAFARI_PACKAGES } from '../data/safaris';
import { EXCURSIONS } from '../data/excursions';

interface BookingEnquirySectionProps {
  preselectedTour?: string;
}

export const BookingEnquirySection: React.FC<BookingEnquirySectionProps> = ({
  preselectedTour
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    selectedTour: preselectedTour || '',
    travelDate: '',
    guests: '2 Guests',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.selectedTour) errs.selectedTour = 'Please select a safari or excursion';
    if (!formData.travelDate) errs.travelDate = 'Please select an estimated travel date';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const getCustomWhatsAppText = () => {
    return `Hello Pascal! I submitted an enquiry via Pascawildafrica:
- Name: ${formData.fullName}
- Tour: ${formData.selectedTour}
- Date: ${formData.travelDate}
- Guests: ${formData.guests}
- Email: ${formData.email}
${formData.message ? `- Notes: ${formData.message}` : ''}`;
  };

  return (
    <section id="booking-enquiry" className="py-16 bg-[#F6EBD6]/50 border-t border-[#153F25]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Column 1: Talk to Pascal (3.5 cols) */}
          <div className="lg:col-span-3 space-y-6 bg-white p-6 rounded-2xl border border-[#153F25]/10 shadow-sm">
            <div>
              <h3 className="text-2xl font-heading font-extrabold text-[#153F25]">
                Talk to Pascal
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Have questions or need a custom itinerary? Get in touch directly.
              </p>
            </div>

            <div className="space-y-4 text-sm">
              {/* Telephone */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#153F25]/10 flex items-center justify-center shrink-0 text-[#153F25]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500">Phone Call</div>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="font-bold text-[#153F25] hover:text-[#E9A51A] transition-colors"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#25D366]/15 flex items-center justify-center shrink-0 text-[#25D366]">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500">WhatsApp Direct</div>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#153F25] hover:text-[#25D366] transition-colors"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#153F25]/10 flex items-center justify-center shrink-0 text-[#153F25]">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-neutral-500">Email Address</div>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="font-bold text-[#153F25] hover:text-[#E9A51A] transition-colors text-xs truncate block"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#153F25]/10 flex items-center justify-center shrink-0 text-[#153F25]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500">Base Location</div>
                  <div className="font-bold text-[#153F25]">{SITE_CONFIG.location}</div>
                </div>
              </div>
            </div>

            {/* View on Google Maps Button (matching screenshot) */}
            <a
              href={SITE_CONFIG.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 text-xs font-bold shadow-sm transition-all group"
            >
              <MapPin className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
              <span>View on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
            </a>
          </div>

          {/* Column 2: Booking Enquiry Form (6.5 cols) */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#153F25]/10 shadow-sm">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E9A51A]">
                Personalized Service
              </span>
              <h3 className="text-2xl font-heading font-extrabold text-[#153F25]">
                Booking Enquiry Form
              </h3>
              <p className="text-xs text-neutral-600 mt-1">
                Tell us about your dream adventure. Pascal will reply promptly with custom options.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <div>
                  <h4 className="text-lg font-bold text-emerald-900">Enquiry Received!</h4>
                  <p className="text-xs text-emerald-700 mt-1">
                    Thank you, <span className="font-semibold">{formData.fullName}</span>. Your enquiry for{' '}
                    <span className="font-semibold">{formData.selectedTour}</span> has been noted.
                  </p>
                </div>
                <div className="p-3 bg-white/80 rounded-lg text-xs text-neutral-600 border border-emerald-100">
                  <span className="font-semibold text-neutral-800">Fastest response:</span> You can also forward your details straight to Pascal on WhatsApp right now:
                </div>
                <a
                  href={getWhatsAppUrl(getCustomWhatsAppText())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp to Pascal</span>
                </a>
                <div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        selectedTour: '',
                        travelDate: '',
                        guests: '2 Guests',
                        message: ''
                      });
                    }}
                    className="text-xs text-neutral-500 hover:text-neutral-700 underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sarah Miller"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                        errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-neutral-300'
                      } focus:outline-none focus:ring-2 focus:ring-[#153F25]/20 focus:border-[#153F25] transition-all`}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-red-600 mt-0.5 block">{errors.fullName}</span>
                    )}
                  </div>

                  {/* Travel Date */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Travel Date *
                    </label>
                    <input
                      type="date"
                      value={formData.travelDate}
                      onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                        errors.travelDate ? 'border-red-500 bg-red-50/30' : 'border-neutral-300'
                      } focus:outline-none focus:ring-2 focus:ring-[#153F25]/20 focus:border-[#153F25] transition-all`}
                    />
                    {errors.travelDate && (
                      <span className="text-[11px] text-red-600 mt-0.5 block">{errors.travelDate}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                        errors.email ? 'border-red-500 bg-red-50/30' : 'border-neutral-300'
                      } focus:outline-none focus:ring-2 focus:ring-[#153F25]/20 focus:border-[#153F25] transition-all`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-600 mt-0.5 block">{errors.email}</span>
                    )}
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Number of Guests
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#153F25]/20 focus:border-[#153F25] transition-all bg-white"
                    >
                      <option value="1 Guest (Solo)">1 Guest (Solo)</option>
                      <option value="2 Guests (Couple)">2 Guests (Couple)</option>
                      <option value="3-4 Guests (Small Family/Group)">3-4 Guests (Small Group)</option>
                      <option value="5-8 Guests (Group)">5-8 Guests (Group)</option>
                      <option value="9+ Guests (Large Tour)">9+ Guests (Large Tour)</option>
                    </select>
                  </div>
                </div>

                {/* Safari or Excursion Select */}
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Safari or Excursion *
                  </label>
                  <select
                    value={formData.selectedTour}
                    onChange={(e) => setFormData({ ...formData, selectedTour: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                      errors.selectedTour ? 'border-red-500 bg-red-50/30' : 'border-neutral-300'
                    } focus:outline-none focus:ring-2 focus:ring-[#153F25]/20 focus:border-[#153F25] transition-all bg-white`}
                  >
                    <option value="">-- Choose Safari Package or Excursion --</option>
                    <optgroup label="Safari Packages">
                      {SAFARI_PACKAGES.map((p) => (
                        <option key={p.id} value={p.title}>
                          {p.title} – {p.destination} ({p.duration})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Watamu & Coastal Excursions">
                      {EXCURSIONS.map((ex) => (
                        <option key={ex.id} value={ex.title}>
                          {ex.title} – {ex.location} ({ex.duration})
                        </option>
                      ))}
                    </optgroup>
                    <option value="Tailor-made Custom Safari">Custom Safari Itinerary</option>
                  </select>
                  {errors.selectedTour && (
                    <span className="text-[11px] text-red-600 mt-0.5 block">{errors.selectedTour}</span>
                  )}
                </div>

                {/* Your Message */}
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Your Message / Special Requests
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your preferred hotel pick-up location, language preferences, dietary needs, or dream wildlife sightings..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#153F25]/20 focus:border-[#153F25] transition-all"
                  />
                </div>

                {/* Send Enquiry Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-[#153F25] hover:bg-[#0D2817] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>SENDING ENQUIRY...</span>
                  ) : (
                    <>
                      <span>SEND ENQUIRY</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                <p className="text-[11px] text-neutral-400 text-center">
                  Direct personal communication. No automated spam or third-party brokers.
                </p>
              </form>
            )}
          </div>

          {/* Column 3: Follow Us & Tourism stamp (2.5 cols) */}
          <div className="lg:col-span-3 space-y-6 bg-white p-6 rounded-2xl border border-[#153F25]/10 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-heading font-extrabold text-[#153F25]">
                Follow Us
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Watch daily safari sightings and guest adventures.
              </p>
              <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#153F25]/10 rounded-lg text-xs font-bold text-[#153F25]">
                <span>@pascalwildafrica</span>
              </div>

              {/* Social Icons row matching screenshot */}
              <div className="flex items-center gap-3 mt-4">
                <a
                  href={SITE_CONFIG.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#C13584] text-white flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href={SITE_CONFIG.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Kenya Tourism Badge / Magical Kenya Graphic */}
            <div className="pt-6 border-t border-neutral-100 flex flex-col items-center text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-black" />
              </div>
              <div className="font-heading font-extrabold text-[#153F25] text-lg tracking-tight">
                Kenya
              </div>
              <div className="text-xs font-serif italic text-neutral-500">
                — Magical Kenya —
              </div>
              <p className="text-[11px] text-neutral-400 mt-2">
                Proudly operating in Tsavo, Amboseli, Masai Mara and the Kenyan Swahili Coast.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
