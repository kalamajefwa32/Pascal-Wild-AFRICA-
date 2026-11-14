export interface GalleryItem {
  id: string;
  title: string;
  category: 'Safaris' | 'Guests' | 'Excursions' | 'Wildlife';
  image: string;
  caption: string;
  location: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Maasai Shuka Experience with Pascal',
    category: 'Guests',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-05_at_09.09.57_4589e01d.jpeg',
    caption: 'Pascal in traditional red Maasai shuka cloth sharing memorable moments with safari guests in the Tsavo savannah.',
    location: 'Tsavo East, Kenya'
  },
  {
    id: 'gal-2',
    title: 'Family Safari at Tsavo East Gate',
    category: 'Guests',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-05_at_09.09.55_a1346da4.jpeg',
    caption: 'Welcoming a wonderful visiting family under the official Tsavo East National Park entrance gate.',
    location: 'Tsavo East National Park'
  },
  {
    id: 'gal-3',
    title: 'Watamu Coastal Excursion Boat',
    category: 'Excursions',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-05_at_09.10.05__1__bb08635d.jpeg',
    caption: 'Pascal with happy guests enjoying a coastal Swahili boat trip and ocean breeze in Watamu.',
    location: 'Watamu Coast'
  },
  {
    id: 'gal-4',
    title: 'Safari Celebration with Land Cruiser',
    category: 'Guests',
    image: '/assets/aistudio/Safari_Group_Selfie_Adventure_e9de962f.png',
    caption: 'Thumbs up with international safari adventurers after an exhilarating morning game drive with Pascal.',
    location: 'Kenya Safari Wilderness'
  },
  {
    id: 'gal-pascal',
    title: 'Pascal – Your Safari Companion',
    category: 'Guests',
    image: '/assets/aistudio/Smiling_Kenya_Safari_Portrait_5e520567.png',
    caption: 'Pascal ready to welcome you with authentic Kenyan hospitality and unforgettable wildlife experiences.',
    location: 'Kenya'
  },
  {
    id: 'gal-5',
    title: 'Sunset over Tsavo Savannah',
    category: 'Safaris',
    image: '/assets/images/safari_sunset_cta_1794228728368.jpg',
    caption: 'Golden hour twilight with silhouette acacia trees and distant mountains.',
    location: 'Tsavo Wilderness'
  },
  {
    id: 'gal-6',
    title: 'Watamu Traditional Dhow Sailing',
    category: 'Excursions',
    image: '/assets/images/watamu_dhow_sailing_1794228728711.jpg',
    caption: 'Swahili wooden dhow sailing through the turquoise waters of Watamu marine bay.',
    location: 'Watamu Coast'
  },
  {
    id: 'gal-7',
    title: 'Snorkeling with Sea Turtles',
    category: 'Excursions',
    image: '/assets/images/watamu_marine_turtle_1794228750105.jpg',
    caption: 'Peaceful encounter with a wild green sea turtle in Watamu Marine National Park.',
    location: 'Watamu Marine Reserve'
  },
  {
    id: 'gal-8',
    title: 'Mida Creek Mangrove Boardwalk',
    category: 'Excursions',
    image: '/assets/images/watamu_mida_creek_1794228751209.jpg',
    caption: 'Suspended wooden boardwalk bridge through towering tidal mangrove channels.',
    location: 'Mida Creek, Watamu'
  },
  {
    id: 'gal-9',
    title: 'Savannah Giraffes in Golden Grass',
    category: 'Wildlife',
    image: '/assets/images/safari_giraffes_savannah_1794228749354.jpg',
    caption: 'Tall Maasai giraffes ambling across open Kenyan plains.',
    location: 'Kenya Safari Plains'
  },
  {
    id: 'gal-10',
    title: 'King of the Mara Savannah',
    category: 'Wildlife',
    image: '/assets/images/safari_lion_portrait_1794228749539.jpg',
    caption: 'Magnificent male lion with a full dark mane resting in golden morning light.',
    location: 'Kenya Wilderness'
  }
];
