export interface Excursion {
  id: string;
  title: string;
  location: string;
  duration: string;
  image: string;
  shortDesc: string;
  description: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  bestTime: string;
  whatToBring: string[];
}

export const EXCURSIONS: Excursion[] = [
  {
    id: 'watamu-dhow-excursion',
    title: 'Watamu Dhow Excursion',
    location: 'Watamu',
    duration: 'Half Day',
    image: '/assets/images/watamu_dhow_sailing_1794228728711.jpg',
    shortDesc: 'Sail the turquoise waters of Watamu on an authentic wooden Swahili dhow.',
    description: 'Glide gently across the crystalline turquoise waters of the Indian Ocean aboard an authentic, handcrafted Swahili wooden dhow. Feel the ocean breeze fill the traditional canvas sail as we cruise past pristine white sandbars, secluded islets, and coastal lagoons. Enjoy freshly sliced tropical mangoes, pineapples, and fresh coconut water on deck, followed by an opportunity to swim and snorkel in calm protected waters.',
    highlights: [
      'Authentic handcrafted wooden Swahili dhow sailing experience',
      'Cruise through Watamu marine bays and crystal lagoons',
      'Swim in shallow, warm sandbars at low tide',
      'Fresh tropical fruits and young coconut (madafu) served onboard',
      'Relaxation, sunbathing and breathtaking photo opportunities'
    ],
    inclusions: [
      'Hotel pick-up and drop-off in Watamu area',
      'Boat cruise with licensed Swahili captain and crew',
      'Fresh fruit platter, mineral water and soft drinks',
      'Life jackets and basic snorkeling masks',
      'Marine conservation area levies'
    ],
    exclusions: [
      'Alcoholic beverages (bring your own welcome)',
      'Gratuities for boat crew',
      'Personal towel and sun protection'
    ],
    bestTime: 'Morning (09:00 AM) or Sunset (15:30 PM) depending on tides',
    whatToBring: ['Swimwear & beach towel', 'Sun hat & biodegradable sunscreen', 'Sunglasses', 'Camera / waterproof phone case']
  },
  {
    id: 'snorkeling-marine-park',
    title: 'Snorkeling & Marine Park',
    location: 'Watamu',
    duration: 'Half Day',
    image: '/assets/images/watamu_marine_turtle_1794228750105.jpg',
    shortDesc: 'Encounter sea turtles and colorful coral reefs in a protected UNESCO marine reserve.',
    description: 'Watamu Marine National Park is one of the oldest and most diverse marine protected sanctuaries in East Africa. Slip into the crystal-clear waters to snorkel alongside graceful green and hawksbill sea turtles, vibrant parrotfish, clownfish, manta rays, and intact coral gardens. For travelers who prefer staying dry, our glass-bottom boat provides clear underwater views into the mesmerizing marine ecosystem.',
    highlights: [
      'UNESCO-designated marine biosphere reserve',
      'High probability of swimming with wild green sea turtles',
      'Over 150 species of hard and soft corals and 500 species of fish',
      'Glass-bottom boat option ideal for families and non-swimmers',
      'Guided safety briefing and swimming assistance from Pascal and local crew'
    ],
    inclusions: [
      'Watamu hotel transfers',
      'Kenya Wildlife Service (KWS) marine park entry fees',
      'Glass-bottom or motorized boat excursion',
      'Professional snorkeling equipment (masks, snorkels, fins)',
      'Chilled drinking water and seasonal fruit snacks'
    ],
    exclusions: [
      'Underwater camera rental (available on request)',
      'Tips for crew',
      'Wetsuits (water is naturally 26-29°C year-round)'
    ],
    bestTime: 'During low tide when water clarity is at its peak',
    whatToBring: ['Swimwear & towel', 'Reef-safe sunscreen', 'Underwater camera / GoPro', 'Beach footwear']
  },
  {
    id: 'mida-creek-experience',
    title: 'Mida Creek Experience',
    location: 'Watamu',
    duration: 'Half Day',
    image: '/assets/images/watamu_mida_creek_1794228751209.jpg',
    shortDesc: 'Walk suspended mangrove boardwalks and glide through tranquil tidal creeks.',
    description: 'Mida Creek is a broad tidal marine inlet spanning over 32 square kilometres of lush mangrove forests and mud flats. Walk along the famous suspended wooden canopy boardwalk—often called the "Indiana Jones Bridge"—hanging high above tidal waters and ancient mangrove roots. Afterwards, step into a traditional wooden dugout canoe steered quietly by local community boatmen to spot migrating Greater Flamingos, kingfishers, and herons.',
    highlights: [
      'Walk across the suspended canopy boardwalk with panoramic creek views',
      'Explore one of Africa’s richest mangrove ecosystems with 7 distinct species',
      'World-class birdwatching sanctuary hosting thousands of migratory waders',
      'Peaceful canoe safari through narrow winding mangrove waterways',
      'Directly supports the local community ecotourism and conservation project'
    ],
    inclusions: [
      'Round-trip transport from Watamu or Malindi',
      'Mida Creek conservation boardwalk entrance fee',
      'Guided nature walk with specialized local naturalist guide',
      'Community dugout canoe trip through the channels',
      'Bottled drinking water'
    ],
    exclusions: [
      'Fresh crab samosas at the community restaurant (optional purchase)',
      'Guide tips',
      'Personal souvenirs'
    ],
    bestTime: 'Late afternoon (15:00 - 18:30) for sunset reflections and active birdlife',
    whatToBring: ['Comfortable walking shoes/sandals', 'Insect repellent', 'Binoculars for birdwatching', 'Camera']
  },
  {
    id: 'marafa-hells-kitchen',
    title: 'Marafa "Hell’s Kitchen" Canyon',
    location: 'Marafa (near Malindi)',
    duration: 'Half Day (Sunset)',
    image: '/assets/images/safari_sunset_cta_1794228728368.jpg',
    shortDesc: 'A dramatic sandstone canyon of eroded pillars glowing under African sunset.',
    description: 'Locally known as "Nyari" (the place broken by itself), Marafa Depression is an extraordinary geological wonder formed over millennia by wind and rain eroding sandstone and clay. As late afternoon turns to dusk, the canyon walls and towering pinnacles glow with shifting hues of ochre, burnt orange, vermilion, and deep crimson.',
    highlights: [
      'Spectacular naturally sculpted jagged sandstone cliffs and pinnacles',
      'Unforgettable sunset viewpoint as the rocks glow vivid orange and red',
      'Fascinating Giriama folk legends narrated by local guides',
      'Baboons and birdlife inhabiting the canyon floor'
    ],
    inclusions: [
      'Transport in air-conditioned vehicle from coastal resorts',
      'Canyon entry and community development fees',
      'Guided walking tour through the canyon floor and rim viewpoints',
      'Cold mineral water'
    ],
    exclusions: [
      'Personal drinks and snacks',
      'Tips for local site guides'
    ],
    bestTime: 'Afternoon departure (14:30 PM) arriving for golden hour and sunset',
    whatToBring: ['Sturdy closed walking shoes with grip', 'Sun hat and sunglasses', 'Camera', 'Pocket money for community crafts']
  }
];
