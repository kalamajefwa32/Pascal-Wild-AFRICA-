import React from 'react';
import { ExcursionCard } from '../components/ExcursionCard';
import { EXCURSIONS } from '../data/excursions';
import { Anchor, Waves, Sun, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../data/config';

export const ExcursionsPage: React.FC = () => {
  return (
    <div className="bg-[#FAFAF7] min-h-screen pb-20">
      {/* Header Banner */}
      <section className="relative py-16 md:py-24 bg-[#153F25] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/watamu_dhow_sailing_1794228728711.jpg')" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E9A51A] text-[#153F25] rounded-md text-xs font-bold uppercase tracking-wider">
            <Waves className="w-3.5 h-3.5" />
            <span>Watamu & Kenya Coast</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-white uppercase">
            DISCOVER WATAMU AND BEYOND
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Pristine turquoise waters, protected coral reefs with wild turtles, traditional Swahili sailing dhows, and suspended mangrove bridges. Experience the tropical wonders of the Kenyan coast with Pascal.
          </p>
        </div>
      </section>

      {/* Excursion Cards Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXCURSIONS.map((excursion) => (
            <ExcursionCard key={excursion.id} excursion={excursion} />
          ))}
        </div>

        {/* Custom coastal day trip banner */}
        <div className="mt-16 bg-[#F6EBD6] rounded-2xl p-8 sm:p-10 border border-[#E9A51A]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-heading font-extrabold text-[#153F25]">
              Looking for a Combo Safari & Beach Excursion?
            </h3>
            <p className="text-sm text-neutral-700 max-w-xl">
              Many guests love pairing a 2-day Tsavo East wildlife safari with a relaxing Watamu dhow cruise and coral reef snorkeling day. Talk to Pascal to arrange seamless pickups directly from your beach resort.
            </p>
          </div>
          <a
            href={getWhatsAppUrl('Hello Pascal, I would like to book a combined Safari and Watamu Excursion package.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-[#153F25] hover:bg-[#0D2817] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg shadow-md whitespace-nowrap shrink-0 transition-transform hover:-translate-y-0.5"
          >
            Chat with Pascal on WhatsApp →
          </a>
        </div>
      </main>
    </div>
  );
};
