export interface SafariPackage {
  id: string;
  title: string;
  destination: string;
  duration: string;
  image: string;
  shortDesc: string;
  overview: string;
  popular?: boolean;
  departure: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  inclusions: string[];
  exclusions: string[];
  category: '1-day' | '2-day' | '3-day' | 'longer';
}

export const SAFARI_PACKAGES: SafariPackage[] = [
  {
    id: 'one-day-safari',
    title: 'One Day Safari',
    destination: 'Tsavo East National Park',
    duration: '1 Day',
    image: '/assets/images/safari_giraffes_savannah_1794228749354.jpg',
    shortDesc: "Discover Kenya's wildlife on an unforgettable single-day adventure.",
    overview: 'Ideal for travelers staying in Watamu, Malindi, or Mombasa with limited time who still dream of encountering majestic African wildlife in their authentic natural habitat. Tsavo East is renowned for its vast open savannahs, vibrant red dust, and high concentration of iconic wildlife.',
    departure: 'Watamu / Malindi / Mombasa / Diani (Pick-up from your resort)',
    category: '1-day',
    highlights: [
      'Early morning pick-up in custom safari vehicle with pop-up roof',
      'Extensive morning game drive across Tsavo East savannah',
      'Spot famous red-dusted elephants, giraffes, zebras, gazelles, and birdlife',
      'Buffet lunch at scenic safari lodge overlooking waterholes frequented by animals',
      'Afternoon game drive as animals become active before heading back'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Dawn Coastal Departure & Full Day Game Drive',
        description: 'Pick up from your hotel at 05:30 AM. Drive along scenic countryside and arrive at Tsavo East Bachuma Gate around 08:30 AM. Commence your first game drive spotting elephants, buffaloes, and antelopes. At 13:00 PM, enjoy a delicious buffet lunch at Voi Safari Lodge or Ashnil Aruba Lodge while watching wildlife drink at the waterhole. Embark on an afternoon game drive from 14:30 PM to 16:00 PM, then journey back to your coastal resort in time for dinner.'
      }
    ],
    inclusions: [
      'Hotel pick-up and drop-off in private 4x4 safari vehicle',
      'All Tsavo East National Park entrance fees and government levies',
      'Full-day game drives with professional guide Pascal',
      'Hearty buffet lunch at a safari lodge inside the park',
      'Unlimited chilled mineral drinking water during the game drives',
      'Binoculars and wildlife identification books in vehicle'
    ],
    exclusions: [
      'Alcoholic drinks and soft drinks at lunch',
      'Tips & gratuities for driver-guide (discretionary)',
      'Personal travel insurance and souvenirs'
    ]
  },
  {
    id: 'tsavo-east-2-days-1-night',
    title: '2 Days / 1 Night',
    destination: 'Tsavo East Safari',
    duration: '2 Days / 1 Night',
    popular: true,
    image: '/assets/images/safari_tsavo_elephants_1794228728164.jpg',
    shortDesc: 'Tsavo East Safari – our most popular overnight wildlife adventure.',
    overview: "Our signature and most sought-after Kenya safari experience. Immerse yourself in the wild red plains of Tsavo East, Kenya's largest national park. Spending the night inside the park allows you to experience prime predator activity at dusk and dawn, alongside a magical starry African night.",
    departure: 'Watamu, Malindi, Mombasa or Kilifi Resorts',
    category: '2-day',
    highlights: [
      'Overnight stay at a scenic savannah lodge with floodlit waterhole',
      'Multiple game drives during golden morning and late afternoon hours',
      'Witness the world-famous red elephants, prides of lions, cheetahs & hippos',
      'Breathtaking African sunrise and sunset across the vast Yatta Plateau',
      'Personalized guiding and storytelling from Pascal'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Coast to Tsavo East & Afternoon Golden Hour Drive',
        description: 'Depart coastal hotel at 06:00 AM heading inland to Tsavo East National Park. Enter through the gate and begin an exciting game drive tracking elephants, giraffes, zebras, and predators. Check in at your lodge by 12:30 PM for lunch and rest. At 16:00 PM, set out on a late-afternoon game drive to Aruba Dam and Mudanda Rock as lions and leopards begin to hunt. Return to the lodge for dinner and overnight under the African night sky.'
      },
      {
        day: 2,
        title: 'Sunrise Game Drive & Return to the Coast',
        description: 'Awaken to the sounds of the African bush at 06:00 AM. Embark on an early morning game drive to catch active nocturnal animals and predators before the midday heat. Return to the lodge for a full breakfast, check out, and take a final leisurely game drive towards the park gate. Stop for lunch at a scenic restaurant and arrive back at your hotel around 17:00 PM.'
      }
    ],
    inclusions: [
      'Round-trip transport from hotel in comfortable 4x4 Land Cruiser with pop-up roof',
      '1 Night full-board accommodation at safari lodge / camp in Tsavo East',
      'All meals: Day 1 Lunch & Dinner; Day 2 Breakfast & Lunch',
      'All Tsavo East National Park conservation fees',
      'Comprehensive game drives guided personally by Pascal',
      'Complimentary chilled drinking water in the vehicle'
    ],
    exclusions: [
      'Bar drinks, cocktails & personal beverages',
      'Tips for guide and lodge staff',
      'Laundry and personal shopping'
    ]
  },
  {
    id: 'tsavo-east-west-3-days-2-nights',
    title: '3 Days / 2 Nights',
    destination: 'Tsavo East & Tsavo West / Taita Hills',
    duration: '3 Days / 2 Nights',
    image: '/assets/images/safari_lion_portrait_1794228749539.jpg',
    shortDesc: 'Wildlife & Adventure – discover the diverse landscapes of Tsavo.',
    overview: 'An unforgettable three-day exploration combining the open red savannah plains of Tsavo East with either the dramatic volcanic hills and springs of Tsavo West or the private sanctuary of Taita Hills Salt Lick with its famous stilt lodges over wildlife salt licks.',
    departure: 'Watamu / Malindi / Mombasa / Diani',
    category: '3-day',
    highlights: [
      'Experience two distinctly different Kenyan national parks in one journey',
      'Visit Mzima Springs to view hippos and crocodiles through an underwater glass observatory',
      'High probability of seeing lions, leopards, rhinos, and large elephant families',
      'Stay at two world-class safari lodges nestled right inside the wildlife corridors',
      'Night game drive opportunities in private conservancies'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Coast to Tsavo East National Park',
        description: 'Pick up at 06:00 AM. Enter Tsavo East with mid-morning game viewing. Lunch at Voi Wildlife Lodge. Afternoon game drive searching for lion prides, cheetahs, and elephants. Dinner and overnight at the lodge.'
      },
      {
        day: 2,
        title: 'Tsavo East to Tsavo West / Taita Hills',
        description: 'Early morning breakfast and departure towards Tsavo West. Visit Mzima Springs, Shetani Lava flow, and the Rhino sanctuary. Check in at Sarova Salt Lick Lodge or Kilaguni Serena for lunch. Afternoon game drive until sunset followed by dinner.'
      },
      {
        day: 3,
        title: 'Morning Safari & Journey Back to Coast',
        description: 'Sunrise game drive observing wildlife at dawn. Return for a hearty breakfast, followed by a final mid-morning game drive as you exit the park. Enjoy lunch on the return route and arrive back at your coastal hotel by late afternoon.'
      }
    ],
    inclusions: [
      'All transfers in private customized 4x4 safari cruiser',
      '2 Nights luxury lodge accommodation on full-board basis',
      'All park entrance and conservation fees for Tsavo East & West',
      'Expert guiding and tracking by Pascal',
      'Daily bottled mineral water'
    ],
    exclusions: [
      'Personal bar purchases',
      'Gratuities and tips',
      'Travel insurance'
    ]
  },
  {
    id: 'amboseli-kilimanjaro-4-days',
    title: '4 Days / 3 Nights Amboseli & Tsavo',
    destination: 'Amboseli (Mt. Kilimanjaro) & Tsavo East',
    duration: '4 Days / 3 Nights',
    image: '/assets/images/hero_safari_elephants_1794228726820.jpg',
    shortDesc: 'Marvel at giant elephant herds against the snow-capped peak of Kilimanjaro.',
    overview: 'A bucket-list safari capturing iconic postcard views of Mount Kilimanjaro towering above Amboseli swamps where hundreds of elephants bathe, combined with the red earth wilderness of Tsavo East.',
    departure: 'Watamu / Malindi / Mombasa / Nairobi',
    category: 'longer',
    highlights: [
      'Unrivalled panoramic views of Mount Kilimanjaro (weather permitting)',
      'Observation Hill walk offering 360-degree views of Amboseli swamps',
      'Vast herds of big tusked elephants up close',
      'Maasai cultural village visit (optional)',
      'Comprehensive safari across two premier Kenyan parks'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Coast to Tsavo East Wilderness',
        description: 'Morning drive to Tsavo East, game drive, lunch and overnight at lodge.'
      },
      {
        day: 2,
        title: 'Tsavo East to Amboseli National Park',
        description: 'Drive towards the slopes of Mount Kilimanjaro. Arrive in Amboseli for lunch. Afternoon game drive watching elephants cross the marshlands with the mountain backdrop.'
      },
      {
        day: 3,
        title: 'Full Day Wildlife Exploration in Amboseli',
        description: 'Full day in Amboseli with dawn and dusk game drives, picnic lunch, and prime photography opportunities.'
      },
      {
        day: 4,
        title: 'Final Safari & Return to Coastal Resort',
        description: 'Morning game drive as you exit Amboseli, lunch en route, and scenic drive back to your coastal resort or transfer to airport.'
      }
    ],
    inclusions: [
      'Full 4-day private 4x4 safari Land Cruiser with open viewing roof',
      '3 Nights lodge accommodation with full board',
      'All park entrance fees for Amboseli and Tsavo',
      'Guiding by Pascal with rich local wildlife insights',
      'Chilled mineral water throughout'
    ],
    exclusions: [
      'Optional Maasai village visit fee ($25-$30)',
      'Drinks & personal expenses',
      'Tips & gratuities'
    ]
  },
  {
    id: 'masai-mara-classic-5-days',
    title: '5 Days / 4 Nights Masai Mara & Rift Valley',
    destination: 'Masai Mara & Lake Nakuru / Naivasha',
    duration: '5 Days / 4 Nights',
    image: '/assets/images/safari_sunset_cta_1794228728368.jpg',
    shortDesc: 'Experience the world-renowned Masai Mara, home to the Big Five.',
    overview: 'The pinnacle of African safaris. Explore the golden savannahs of the legendary Masai Mara, home to lions, cheetahs, leopards, and millions of wildebeest and zebras during migration season, paired with the Great Rift Valley.',
    departure: 'Nairobi or Coastal Connection (Flight or Drive)',
    category: 'longer',
    highlights: [
      'Unmatched predator action and Big Five viewing',
      'Game drives along the Mara River with resident hippos and giant Nile crocodiles',
      'Boat safari on freshwater Lake Naivasha to see fish eagles and waterbirds',
      'Stunning Rift Valley viewpoints'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Journey to the Great Rift Valley & Lake Naivasha',
        description: 'Departure and scenic descent down the Rift Valley escarpment. Boat safari and overnight near the lake.'
      },
      {
        day: 2,
        title: 'Naivasha to the Legendary Masai Mara',
        description: 'Travel into the heart of the Mara plains. Afternoon game drive introducing you to Africa’s greatest wildlife sanctuary.'
      },
      {
        day: 3,
        title: 'Full Day Game Drive in Masai Mara',
        description: 'Full day spent tracking big cats, elephants, giraffes, and exploring the Mara River.'
      },
      {
        day: 4,
        title: 'Sunrise Game Drive & Mara Exploration',
        description: 'Second full day exploring different sectors of the reserve.'
      },
      {
        day: 5,
        title: 'Morning Safari & Farewell',
        description: 'Final sunrise game drive, hearty breakfast, and return journey.'
      }
    ],
    inclusions: [
      'Safari Land Cruiser transportation throughout',
      '4 Nights lodge/tented camp accommodation',
      'All park entrance fees',
      'Personal guiding services',
      'Drinking water during all game drives'
    ],
    exclusions: [
      'International flights',
      'Hot air balloon safari ($450 optional)',
      'Personal tips and insurance'
    ]
  }
];
