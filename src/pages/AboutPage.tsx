import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Compass,
  ShieldCheck,
  Star,
  Users,
  Camera,
  MapPin,
  MessageCircle,
  ArrowRight,
  ZoomIn
} from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/gallery';
import { LightboxModal } from '../components/LightboxModal';
import { getWhatsAppUrl } from '../data/config';

export const AboutPage: React.FC = () => {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  return (
    <div className="bg-[#FAFAF7] min-h-screen pb-20">
      {/* Header Banner */}
      <section className="relative py-16 md:py-24 bg-[#153F25] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/safari_tsavo_elephants_1794228728164.jpg')" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E9A51A] text-[#153F25] rounded-md text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Meet Your Host & Guide</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-white uppercase">
            MY STORY – MEET PASCAL
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            A passionate safari guide and tour operator dedicated to showing you the true, authentic heart of Kenya.
          </p>
        </div>
      </section>

      {/* Main Profile Story */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* Story Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 sm:p-12 rounded-3xl border border-[#153F25]/10 shadow-sm">
          {/* Pascal's Photograph */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-xl ring-1 ring-[#153F25]/15 bg-[#F6EBD6]">
              <img
                src="/assets/aistudio/Safari_Group_Selfie_Adventure_e9de962f.png"
                alt="Pascal with Safari Guests on Adventure in Kenya"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-[75%_center] hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#153F25] text-[#E9A51A] px-4 py-2 rounded-xl text-xs font-heading font-bold shadow-lg flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Pascal • Certified Safari Guide</span>
            </div>
          </div>

          {/* Story Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E9A51A]">
              Karibu Kenya • My Story
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#153F25]">
              Pascal William – Founder of Pascal Wild Africa
            </h2>
            <div className="space-y-4 text-neutral-700 text-sm sm:text-base leading-relaxed font-body">
              <p className="font-medium text-neutral-800">
                My name is Pascal William, founder of Pascal Wild Africa, based in Watamu on the stunning coast of Kenya.
              </p>
              <p>
                Driven by a passion for nature, wildlife, and African culture, I love sharing the beauty of Kenya with travelers from all over the world.
              </p>
              <p>
                I speak both Italian and English, and my goal is to make every safari an authentic, welcoming, and unforgettable experience.
              </p>
              <div className="p-4 rounded-xl bg-[#F6EBD6]/60 border-l-4 border-[#E9A51A] text-[#153F25] space-y-1">
                <p className="font-serif italic text-base sm:text-lg font-semibold">
                  “Africa is not just a destination; it is an experience to be lived.”
                </p>
                <p className="text-xs font-bold uppercase tracking-wider text-[#E9A51A]">
                  Pascal Wild Africa – Feel the Wild, Live Africa
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={getWhatsAppUrl('Hello Pascal! I read your story and would love to chat with you about exploring Kenya.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Pascal on WhatsApp</span>
              </a>
              <Link
                to="/safaris"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#153F25] hover:bg-[#0D2817] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-transform hover:-translate-y-0.5"
              >
                <span>View Safari Packages</span>
                <ArrowRight className="w-4 h-4 text-[#E9A51A]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Why Travel With Pascal? */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-heading font-extrabold text-[#153F25]">
              Why Travel with Pascal?
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              The difference between an ordinary tour and a transformative African experience lies in the guide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#153F25] text-[#E9A51A] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#153F25]">
                Deep Local Knowledge
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Intimate understanding of animal migratory patterns, bird species, and historical Kenyan coastal culture.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#153F25] text-[#E9A51A] flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#153F25]">
                Personal & Attentive
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Never rushed. We tailor our pace so you have ample time to watch animals interact and take great photographs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#153F25] text-[#E9A51A] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#153F25]">
                Safety First
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Licensed driver-guide operating well-maintained 4x4 safari vehicles with certified safety equipment and communications.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#153F25] text-[#E9A51A] flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#153F25]">
                Responsible Tourism
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Strict adherence to park conservation guidelines, supporting local Swahili and Giriama communities and ethical wildlife viewing.
              </p>
            </div>
          </div>
        </div>

        {/* Guest Memories Gallery Section */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-neutral-200/80 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#E9A51A]/15 text-[#153F25] rounded text-[11px] font-bold uppercase tracking-wider mb-1">
                <span>Authentic Guest Moments</span>
              </div>
              <h3 className="text-2xl font-heading font-extrabold text-[#153F25]">
                Memories in the Field
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Authentic safari and excursion memories with Pascal, his guests, and Kenya's breathtaking landscapes.
              </p>
            </div>
            <Link
              to="/reviews"
              className="text-xs font-bold text-[#E9A51A] hover:underline whitespace-nowrap"
            >
              Read Guest Reviews →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {GALLERY_ITEMS.slice(0, 4).map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedGalleryItem(item)}
                className="group relative flex flex-col bg-[#FAFAF7] rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2 rounded-full bg-white/90 text-[#153F25] shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                      <ZoomIn className="w-5 h-5" />
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded font-medium flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#E9A51A]" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="p-3.5 flex-1 flex flex-col justify-between">
                  <h4 className="font-heading font-bold text-xs text-[#153F25] group-hover:text-[#E9A51A] transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-neutral-600 mt-1 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Fullscreen Lightbox Modal */}
      <LightboxModal
        item={selectedGalleryItem}
        items={GALLERY_ITEMS}
        onClose={() => setSelectedGalleryItem(null)}
        onSelect={(item) => setSelectedGalleryItem(item)}
      />
    </div>
  );
};
