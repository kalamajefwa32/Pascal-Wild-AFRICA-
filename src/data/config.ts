export interface BusinessConfig {
  name: string;
  tagline: string;
  category: string;
  phone: string;
  whatsappPhoneClean: string; // for international wa.me links
  email: string;
  location: string;
  mapsUrl: string;
  hours: string;
  social: {
    facebook: string;
    instagram: string;
    youtube: string;
    tiktok: string;
    tripadvisor: string;
  };
}

export const SITE_CONFIG: BusinessConfig = {
  name: 'Pascawildafrica',
  tagline: 'Feel the world, live Africa',
  category: 'Safari Tours, Wildlife Experiences and Excursions',
  phone: '+254 183 761 144',
  whatsappPhoneClean: '254183761144',
  email: 'info@pascawildafrica.com',
  location: 'Tsavo East & Watamu, Kenya',
  mapsUrl: 'https://maps.google.com/?q=Tsavo+East+National+Park+Kenya',
  hours: 'Daily: 06:00 AM – 21:00 PM (EAT)',
  social: {
    facebook: 'https://facebook.com/pascalwildafrica',
    instagram: 'https://instagram.com/pascalwildafrica',
    youtube: 'https://youtube.com/@pascalwildafrica',
    tiktok: 'https://tiktok.com/@pascalwildafrica',
    tripadvisor: 'https://www.tripadvisor.com'
  }
};

/**
 * Generates an instant WhatsApp chat link with an encoded friendly message
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMessage =
    'Hello Pascal, I visited your Pascawildafrica website and would like to enquire about your safari packages.';
  const message = customMessage || defaultMessage;
  return `https://wa.me/${SITE_CONFIG.whatsappPhoneClean}?text=${encodeURIComponent(message)}`;
}
