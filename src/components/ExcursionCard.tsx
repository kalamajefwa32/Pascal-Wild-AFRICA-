import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock } from 'lucide-react';
import { Excursion } from '../data/excursions';
import { getWhatsAppUrl } from '../data/config';

interface ExcursionCardProps {
  excursion: Excursion;
  onEnquire?: (title: string) => void;
}

export const ExcursionCard: React.FC<ExcursionCardProps> = ({ excursion, onEnquire }) => {
  const whatsappMsg = `Hello Pascal, I would like to enquire about the "${excursion.title}" excursion in ${excursion.location}.`;

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-[#153F25]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      {/* Excursion Photo */}
      <Link to={`/excursions/${excursion.id}`} className="relative aspect-[16/10] overflow-hidden bg-neutral-100 block">
        <img
          src={excursion.image}
          alt={excursion.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <span className="text-white text-xs font-bold underline decoration-[#E9A51A] underline-offset-4">
            View Itinerary & Details →
          </span>
        </div>
      </Link>

      {/* Excursion Info */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <Link to={`/excursions/${excursion.id}`}>
            <h3 className="text-lg font-heading font-bold text-[#153F25] group-hover:text-[#E9A51A] transition-colors">
              {excursion.title}
            </h3>
          </Link>
          <p className="text-xs text-neutral-500 mt-1 line-clamp-2 leading-relaxed">
            {excursion.shortDesc}
          </p>
        </div>

        {/* Footer row: Location + Duration + Enquire button */}
        <div className="flex items-center justify-between gap-3 mt-4 pt-3 border-t border-neutral-100">
          <div className="flex items-center gap-3 text-xs text-neutral-600 font-medium">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#153F25]" />
              {excursion.location}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#E9A51A]" />
              {excursion.duration}
            </span>
          </div>

          {onEnquire ? (
            <button
              onClick={() => onEnquire(excursion.title)}
              className="py-2 px-3.5 bg-[#153F25] hover:bg-[#0D2817] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors shadow-sm shrink-0"
            >
              ENQUIRE NOW
            </button>
          ) : (
            <a
              href={getWhatsAppUrl(whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3.5 bg-[#153F25] hover:bg-[#0D2817] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors shadow-sm shrink-0"
            >
              ENQUIRE NOW
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
