export interface GuestReview {
  id: string;
  author: string;
  origin: string;
  rating: number;
  tour: string;
  date: string;
  text: string;
  source: 'TripAdvisor' | 'Google Reviews' | 'Direct Feedback';
  highlight?: string;
  isDemoSample: boolean;
}

export const GUEST_REVIEWS: GuestReview[] = [
  {
    id: 'review-1',
    author: 'Sarah M.',
    origin: 'United Kingdom',
    rating: 5,
    tour: '2 Days / 1 Night Tsavo East Safari',
    date: 'February 2026',
    highlight: 'Made our Kenya holiday truly special',
    text: 'An unforgettable safari experience! Pascal was professional, friendly and made our trip truly special. His ability to spot lions hiding in the grass was uncanny, and he took care of every small detail for our family. Truly five stars!',
    source: 'Google Reviews',
    isDemoSample: true
  },
  {
    id: 'review-2',
    author: 'Matteo & Giulia',
    origin: 'Italy',
    rating: 5,
    tour: 'Watamu Dhow & Snorkeling Excursion',
    date: 'January 2026',
    highlight: 'Esperienza straordinaria con Pascal',
    text: 'We spent two weeks in Watamu and booking with Pascal was the absolute best decision. The dhow boat excursion was magical, and snorkeling with green sea turtles left us speechless. Pascal speaks Italian very well, which made us feel right at home!',
    source: 'TripAdvisor',
    isDemoSample: true
  },
  {
    id: 'review-3',
    author: 'David & Christian K.',
    origin: 'Germany',
    rating: 5,
    tour: '3 Days / 2 Nights Tsavo East & West',
    date: 'December 2025',
    highlight: 'Punctual, knowledgeable and passionate guide',
    text: 'From the prompt WhatsApp replies to the impeccably maintained 4x4 cruiser, everything was smooth. Pascal knows the national parks like the back of his hand. We saw four of the Big Five on day one alone. Highly recommended to anyone traveling to Kenya.',
    source: 'Google Reviews',
    isDemoSample: true
  },
  {
    id: 'review-4',
    author: 'Elena R.',
    origin: 'Switzerland',
    rating: 5,
    tour: '1 Day Tsavo East Safari',
    date: 'November 2025',
    highlight: 'The red elephants were breathtaking',
    text: 'Only had one free day between conferences in Mombasa and Pascal organized a faultless day safari to Tsavo East. The lunch lodge with the waterhole view was spectacular. Thank you Pascal for your warm hospitality!',
    source: 'Direct Feedback',
    isDemoSample: true
  },
  {
    id: 'review-5',
    author: 'Liam & Sophie T.',
    origin: 'Australia',
    rating: 5,
    tour: '4 Days Amboseli & Tsavo East',
    date: 'October 2025',
    highlight: 'Kilimanjaro backdrop and giant tuskers',
    text: 'Waking up to elephants walking against Mount Kilimanjaro was a dream come true. Pascal is more than a guide—he is an ambassador for Kenyan wildlife conservation. Respectful, patient with wildlife, and fun.',
    source: 'TripAdvisor',
    isDemoSample: true
  }
];
