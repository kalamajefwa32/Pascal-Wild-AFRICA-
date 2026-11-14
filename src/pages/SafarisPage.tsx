import React, { useState } from 'react';
import { SafariCard } from '../components/SafariCard';
import { SAFARI_PACKAGES } from '../data/safaris';
import { Compass, ShieldCheck, Heart, Sparkles, Filter } from 'lucide-react';
import { getWhatsAppUrl } from '../data/config';

export const SafarisPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredSafaris =
    activeCategory === 'all'
      ? SAFARI_PACKAGES
      : SAFARI_PACKAGES.filter((s) => s.category === activeCategory);

  return (
    <div className="bg-[#FAFAF7] min-h-screen pb-20">
      {/* Header Banner */}
      <section className="relative py-16 md:py-24 bg-[#153F25] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/hero_safari_elephants_1794228726820.jpg')" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E9A51A] text-[#153F25] rounded-md text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Wild Kenya Expeditions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-white uppercase">
            EXPLORE OUR SAFARI PACKAGES
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            From quick full-day game drives to multi-day immersive expeditions across Tsavo East, Amboseli, and the Masai Mara. Every package is thoughtfully crafted and accompanied personally by Pascal.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <div className="flex items-center gap-2 p-1.5 bg-white rounded-xl border border-neutral-200/80 shadow-sm overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-[#153F25] text-white shadow-sm'
                  : 'text-neutral-600 hover:text-[#153F25] hover:bg-neutral-100'
              }`}
            >
              All Safaris ({SAFARI_PACKAGES.length})
            </button>
            <button
              onClick={() => setActiveCategory('1-day')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeCategory === '1-day'
                  ? 'bg-[#153F25] text-white shadow-sm'
                  : 'text-neutral-600 hover:text-[#153F25] hover:bg-neutral-100'
              }`}
            >
              One-Day Safaris
            </button>
            <button
              onClick={() => setActiveCategory('2-day')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeCategory === '2-day'
                  ? 'bg-[#153F25] text-white shadow-sm'
                  : 'text-neutral-600 hover:text-[#153F25] hover:bg-neutral-100'
              }`}
            >
              2 Days / 1 Night
            </button>
            <button
              onClick={() => setActiveCategory('3-day')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeCategory === '3-day'
                  ? 'bg-[#153F25] text-white shadow-sm'
                  : 'text-neutral-600 hover:text-[#153F25] hover:bg-neutral-100'
              }`}
            >
              3 Days / 2 Nights
            </button>
            <button
              onClick={() => setActiveCategory('longer')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeCategory === 'longer'
                  ? 'bg-[#153F25] text-white shadow-sm'
                  : 'text-neutral-600 hover:text-[#153F25] hover:bg-neutral-100'
              }`}
            >
              Amboseli & Mara
            </button>
          </div>
        </div>

        {/* Safari Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSafaris.map((safari) => (
            <SafariCard key={safari.id} safari={safari} />
          ))}
        </div>

        {/* Tailor-made Safari Banner */}
        <div className="mt-16 bg-[#F6EBD6] rounded-2xl p-8 sm:p-10 border border-[#E9A51A]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-heading font-extrabold text-[#153F25]">
              Looking for a Custom or Family Itinerary?
            </h3>
            <p className="text-sm text-neutral-700 max-w-xl">
              We frequently customize safari itineraries for couples on honeymoon, families with young children, birdwatchers, and professional wildlife photographers.
            </p>
          </div>
          <a
            href={getWhatsAppUrl('Hello Pascal, I would like to design a custom tailor-made safari package for my trip to Kenya.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-[#153F25] hover:bg-[#0D2817] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg shadow-md whitespace-nowrap shrink-0 transition-transform hover:-translate-y-0.5"
          >
            Design Custom Safari with Pascal →
          </a>
        </div>
      </main>
    </div>
  );
};
