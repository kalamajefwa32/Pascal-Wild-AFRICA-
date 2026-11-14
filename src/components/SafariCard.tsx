import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import { SafariPackage } from '../data/safaris';
import { getWhatsAppUrl } from '../data/config';

interface SafariCardProps {
  safari: SafariPackage;
  onEnquire?: (safariTitle: string) => void;
}

export const SafariCard: React.FC<SafariCardProps> = ({ safari, onEnquire }) => {
  const whatsappMsg = `Hello Pascal, I would like to enquire about your "${safari.title}" (${safari.destination}, ${safari.duration}).`;

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-[#153F25]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      {/* Image Container with Badge */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
        <img
          src={safari.image}
          alt={safari.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Most Popular Badge */}
        {safari.popular && (
          <div className="absolute top-3 right-3 w-14 h-14 rounded-full bg-red-600 text-white flex flex-col items-center justify-center text-center p-1 font-heading font-black text-[11px] leading-tight shadow-md ring-2 ring-white transform rotate-6">
            <span>Most</span>
            <span>Popular</span>
          </div>
        )}

        {/* Duration badge on image */}
        <div className="absolute bottom-3 left-3 bg-[#153F25]/90 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 shadow-sm">
          <Clock className="w-3.5 h-3.5 text-[#E9A51A]" />
          <span>{safari.duration}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between text-center bg-white">
        <div>
          <h3 className="text-xl font-heading font-bold text-[#153F25] group-hover:text-[#244F2E] transition-colors">
            {safari.title}
          </h3>
          <p className="text-sm font-medium text-neutral-600 mt-1 mb-2">
            {safari.destination}
          </p>
          <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
            {safari.shortDesc}
          </p>
        </div>

        {/* Action Buttons matching screenshot */}
        <div className="grid grid-cols-2 gap-2.5 mt-5 pt-3 border-t border-neutral-100">
          <Link
            to={`/safaris/${safari.id}`}
            className="w-full py-2.5 px-3 bg-[#153F25] hover:bg-[#0D2817] text-white text-xs font-bold uppercase tracking-wider rounded-md text-center transition-all duration-200 shadow-sm"
          >
            VIEW DETAILS
          </Link>

          {onEnquire ? (
            <button
              onClick={() => onEnquire(safari.title)}
              className="w-full py-2.5 px-3 bg-[#E9A51A] hover:bg-[#D08F0E] text-[#153F25] text-xs font-bold uppercase tracking-wider rounded-md text-center transition-all duration-200 shadow-sm"
            >
              ENQUIRE NOW
            </button>
          ) : (
            <a
              href={getWhatsAppUrl(whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 bg-[#E9A51A] hover:bg-[#D08F0E] text-[#153F25] text-xs font-bold uppercase tracking-wider rounded-md text-center transition-all duration-200 shadow-sm inline-flex items-center justify-center gap-1"
            >
              <span>ENQUIRE NOW</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
