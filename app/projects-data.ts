import type { Category } from './data';

const media = (file: string) => `/pnj-media/${file}`;
const pnj = (path: string) => `https://pnjprojects.com${path}`;

export type ProjectDetail = {
  slug: string;
  name: string;
  type: Category | 'Farm lands' | 'DTCP - RERA';
  location: string;
  image: string;
  summary: string;
  overview: string;
  soldOut?: boolean;
  brochure?: string;
  mapEmbed?: string;
  layoutImage?: string;
  highlights: string[];
  locationHighlights?: { title: string; items: string[] }[];
  stats?: { label: string; value: string }[];
  tagline?: string;
  status?: 'Ongoing' | 'Sold out' | 'Pre-launch' | 'Newly launched';
  config?: string;
  area?: string;
  price?: string;
};

const mapQ = (q: string, z = 12) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(q)}&t=m&z=${z}&output=embed&iwloc=near`;

export const PROJECT_DETAILS: ProjectDetail[] = [
  {
    slug: 'cyber-woods',
    name: 'Pnj Cyberwoods',
    type: 'Apartments',
    location: 'Osman Nagar, Hyderabad',
    image: media('Exterior_Cam_16-min-1.jpg'),
    soldOut: true,
    summary: 'Luxury apartments adjacent to TSIIC’s IT corridor on Gachibowli–Osman Nagar Road.',
    overview:
      'Cyberwoods Luxury Apartments are located in the heart of Southern India’s rapidly growing IT infrastructure. It is located adjacent to TSIIC’s newly projected IT corridor on Gachibowli-Osman Nagar Road, hence the CYBER in the name.',
    brochure: pnj('/wp-content/uploads/2024/08/PNJ-_-Cyberwood-Brochure-WB.pdf'),
    mapEmbed: mapQ('Cyber Woods - Bricks Infratech', 13),
    layoutImage: pnj('/wp-content/uploads/2024/08/PNJ-_-Cyberwood-Brochure-WB-18-scaled.jpg'),
    highlights: ['Entrance Lobby', 'Club House', 'Indoor Games', 'Outdoor Games', 'Modern Amenities', 'Lift Lobby'],
    stats: [
      { label: 'Type', value: 'Apartments' },
      { label: 'Status', value: 'Sold out' },
    ],
  },
  {
    slug: 'marvella',
    name: 'Marvella',
    type: 'Apartments',
    location: '100ft Road, Tellapur, Hyderabad',
    image: media('marvella.jpg'),
    summary:
      'Spanning 4.5 acres with two 32-floor towers offering luxurious 2, 2.5, 3 and 4 BHK apartments.',
    overview:
      'Greetings from Pnj Projects Marvella! We are excited to introduce our latest project, Marvella, located on the prestigious 100ft Road in Tellapur, Hyderabad. Spanning across 4.5 acres, Marvella features two sky-high towers, each with 32 floors, offering a variety of luxurious 2, 2.5, 3, and 4 BHK apartments. The clubhouse, spread over 42,000 SFT and spanning G+5 levels, provides an array of world-class amenities. Apartment sizes range from 1385 SFT for a 2BHK to 3570 SFT for a 4BHK, with units facing East, West, and North. Marvella’s impressive amenities include a children’s play area, swimming pool, cricket practice pitch, meditation, and yoga center, basketball court, cycling and jogging track, elders seating area, gymnasium and spa, dogs’ corner, tennis court, indoor games, and an amphitheater, ensuring a perfect blend of comfort, luxury, and convenience.',
    brochure: pnj('/wp-content/uploads/2024/06/MARVELLA-TELLAPUR.pdf'),
    mapEmbed: mapQ('Tellapur Hyderabad', 13),
    layoutImage: pnj('/wp-content/uploads/2024/06/1-Site-Plan_page-0001-scaled.jpg'),
    highlights: [
      'Badminton Court',
      'Cricket Practice Pitch',
      'Cycling and Jogging Track',
      'Basketball Court',
      'Fully Loaded Clubhouse',
      "Children's Play Area",
      'Gymnasium and Spa',
      'Meditation and Yoga Center',
      'Swimming Pool',
    ],
    stats: [
      { label: 'Acres', value: '4.5' },
      { label: 'Towers', value: '2' },
      { label: 'Floors', value: '32' },
    ],
  },
  {
    slug: 'pnj-beams-and-columns',
    name: 'Pnj Beams & Columns',
    type: 'Apartments',
    location: 'Suchitra, Kompally',
    image: media('beamSlide1.jpg'),
    summary: 'Premium apartment living with fully loaded clubhouse and thoughtfully planned blocks.',
    overview:
      'Pnj Beams & Columns offers premium homes surrounded by greenery, with carefully planned blocks and a fully loaded club house designed for modern family living.',
    brochure: pnj('/wp-content/uploads/2025/10/BC-Brochure-Final-PDF.pdf'),
    mapEmbed: mapQ('Suchitra Kompally Hyderabad', 12),
    layoutImage: pnj('/wp-content/uploads/2024/09/1.jpg'),
    highlights: ['Fully Loaded Club House', 'Landscaped Greenery', 'Modern Amenities', "Children's Play Area"],
  },
  {
    slug: 'dukes-western-county',
    name: 'Dukes Western County',
    type: 'Layouts',
    location: 'Shankarpally, Hyderabad',
    image: media('dukes-1.jpg'),
    summary: 'HMDA & RERA approved premium villa plots across 16 acres in Shankarpally.',
    overview:
      'Dukes Western County is a premium real estate development located in Shankarpally, Hyderabad. The project is spread over 16 acres and consists of 176 plots ranging from 183 – 267 Sq. Yds. The development offers a wide range of residential plots in a fully integrated community with HMDA & RERA Approved Layout, Vaastu Compliant planning, 30’ & 40’ wide cement roads with kerb stones, Avenue Plantation, Overhead Water Tank, Provision For Underground Drainage, Provision For Underground Electricity and Parks & Play Areas.',
    brochure: pnj('/wp-content/uploads/2023/12/PNJ-Western-County3_c.pdf'),
    mapEmbed: mapQ('Dukes western county', 10),
    layoutImage: pnj('/wp-content/uploads/2023/11/DWC_Layout_A0_Print_compressed_page-0001-1-1536x1079-1.jpg'),
    highlights: [
      'Grand Entrance Arch',
      "40' & 30' CC Roads",
      'Avenue Plantation',
      "Children's Play Area",
      '24 Hours Security',
      'Under Ground Electricity',
      'Overhead Water Tank',
    ],
    stats: [
      { label: 'Acres', value: '16' },
      { label: 'Plots', value: '176' },
    ],
  },
  {
    slug: 'pnj-candeur-twins',
    name: 'Pnj Candeur Twins',
    type: 'Apartments',
    location: 'Miyapur Main Road, Hyderabad',
    image: media('pnjTwinslide.jpg'),
    summary: '47-storey hi-rise 3 BHK apartments with elevated city views on Miyapur Main Road.',
    overview:
      'Pnj Candeur TWINS is home to a collection of Three bedroom apartments. Designed to take advantage of the elevated position, looking East and North towards the City and South over the ever-developing skyline, they offer some of the finest far-reaching views at TWINS. The 47 storied hi-rise apartments feature open plan layouts and generously sized balconies. Apartment Sizes: 3BHK Flats which have 1591sft -2059sft. Facing: East, West.',
    brochure: pnj('/wp-content/uploads/2025/09/PNJ-TWINS.pdf'),
    mapEmbed: mapQ('Candeur Twins', 10),
    layoutImage: pnj('/wp-content/uploads/2025/09/floorPlanTwins.jpg'),
    highlights: [
      "Children's Play Area",
      'Swimming Pool',
      'Cricket Practice Pitch',
      'Meditation & Yoga Centre',
      'Basketball Court',
      'Cycling & Jogging Track',
      'Elders Seating Area',
      'Gymnasium & Spa',
      "Dogs' Corner",
      'Tennis Court',
      'Indoor Games',
      'Amphitheatre',
    ],
    locationHighlights: [
      {
        title: 'Landmarks',
        items: ['100 Meters from D-Mart', '700 Meters Miyapur crossroads'],
      },
      {
        title: 'Connectivity',
        items: ['8 mins ORR', '5 Kms Lingampally Railway', '2 Kms Miyapur Railway', '5 Kms JNTUH'],
      },
    ],
    stats: [
      { label: 'Floors', value: '47' },
      { label: 'Typology', value: '3 BHK' },
    ],
  },
  {
    slug: 'pnj-high9',
    name: 'Pnj High 9',
    type: 'Apartments',
    location: 'Hyderabad',
    image: media('high9-1.jpg'),
    summary:
      'High 9 emphasizes uncluttered 80% open green spaces, traffic-free podium-level aesthetics and rich activity zones.',
    overview:
      'The extraordinary emerges out of every extra layer of thought. High 9 emphasizes on uncluttered 80% open green spaces, traffic-free podium-level aesthetics, mind-boggling activity zones and connectivity beyond imagination!',
    mapEmbed: mapQ('Hyderabad', 11),
    highlights: ['Open Green Spaces', 'Podium Amenities', 'Activity Zones', 'Strong Connectivity'],
  },
  {
    slug: 'pnj-kotas',
    name: 'Pnj Kotas',
    type: 'Villas',
    location: 'Medchal, Hyderabad',
    image: media('kotas.jpg'),
    summary: 'Ready-to-move villa enclave across 10 acres with 113 meticulously crafted villas.',
    overview:
      'Step into a world of luxury and tranquility at Pnj Kotas, an exclusive ready-to-move villa enclave spread across 10 acres in Medchal. Designed for those who seek elegance and convenience, this premium gated community offers a seamless blend of space, comfort, and nature. With just 113 meticulously crafted villas, each home is a masterpiece of design, ensuring privacy and exclusivity. Choose from spacious sizes ranging from 1500 to 3500 SFT, set on plot sizes from 120 to 340 sq. yards, giving you the flexibility to match your dream lifestyle.',
    brochure: pnj('/wp-content/uploads/2025/09/Kotas-Brochure.pdf'),
    mapEmbed: mapQ('Virginia City Medchal', 10),
    layoutImage: pnj('/wp-content/uploads/2025/02/master_plan.jpg'),
    highlights: [
      'Grand Entrance Arch',
      'Club House',
      'Games',
      'Kids Play Area',
      'Avenue Plantation',
      'Intercom facility',
      'Landscape Garden',
    ],
    locationHighlights: [
      {
        title: 'Connectivity',
        items: [
          '6 Lane Nagpur Highway NH44 – 5 Min',
          'ORR Junction – 15 Min',
          'Rajiv Gandhi International Airport – 60 Min',
        ],
      },
      {
        title: 'Education',
        items: [
          'Mallareddy Engineering College – 10 Min',
          'Vignan Global School – 03 Min',
          'The Creek Planet School – 05 Min',
        ],
      },
      {
        title: 'Health care',
        items: ['Medinova Super Specialty – 05 Min', 'Pragnya Super Specialty Hospital – 10 Min'],
      },
    ],
    stats: [
      { label: 'Acres', value: '10' },
      { label: 'Villas', value: '113' },
    ],
  },
  {
    slug: 'pnj-velora',
    name: 'Pnj Velora',
    type: 'Villas',
    location: 'Tukkuguda near Srisailam Highway, Hyderabad',
    image: media('villa-01.jpg'),
    summary: 'Exclusive villa community near Srisailam Highway with modern amenities and serene living.',
    overview:
      'Introducing Bricks Velora, an exclusive villa community project located in Tukkuguda near Srisailam Highway, Hyderabad. Developed by Bricks Elite Infra, known for its integrity and excellence, Bricks Velora offers residents a peaceful escape from the city’s hustle and bustle, while maintaining proximity to the airport and several key landmarks. Velora boasts modern amenities, making it the ideal choice for those seeking a serene and convenient lifestyle.',
    mapEmbed: mapQ('Tukkuguda Hyderabad', 12),
    highlights: ['Gated Community', 'Modern Amenities', 'Airport Proximity', 'Peaceful Neighbourhood'],
  },
  {
    slug: 'pnj-green-meadows',
    name: 'Pnj Green Meadows',
    type: 'Villas',
    location: 'Isnapur (Exit – 3), Hyderabad',
    image: media('villa-02.jpg'),
    summary: 'Luxury G+2 villas, 3 BHK, East & West facing at Isnapur Exit-3.',
    overview:
      'Luxury Redefined: Experience the Finest Living at a Villas in Isnapur (Exit – 3), Villa Type – G+2 , Unit Type – 3 BHK and available Facing East & West.',
    mapEmbed: mapQ('Isnapur Hyderabad', 12),
    highlights: ['G+2 Villas', '3 BHK', 'East & West Facing', 'Premium Amenities'],
  },
  {
    slug: 'pnj-lotus',
    name: 'Pnj Lotus',
    type: 'Villas',
    location: 'Bhanuru, Hyderabad',
    image: media('villa-03.jpg'),
    summary: '71 luxuriously designed villas across 6.12 acres in green Bhanuru.',
    overview:
      'Blue Lotus is a luxurious villa gated community, located on the green neighbourhood of Bhanuru, Hyderabad. Surrounded by flourishing residential communities and educational institutes, more than 71 beautifully made villas are encompassed in 6.12 acres. Villas are uniquely designed with contemporary flair, overlooking tranquil verdant.',
    mapEmbed: mapQ('Bhanuru Hyderabad', 12),
    highlights: ['Gated Community', 'Contemporary Design', 'Green Neighbourhood', '71 Villas'],
    stats: [
      { label: 'Acres', value: '6.12' },
      { label: 'Villas', value: '71' },
    ],
  },
  {
    slug: 'bella-vista',
    name: 'Bella Vista',
    type: 'Villas',
    location: 'Hyderabad',
    image: media('villa-04.jpg'),
    summary: 'Exquisitely designed across 10 acres of lush greenery for unparalleled living.',
    overview:
      'Bella Vista is designed exquisitely in 10 acres of lush greenery. An inclusive design where life comes alive, from the architectural planning to the smallest comfort, every little detail has been carefully thought out to give you an unparalleled living experience.',
    mapEmbed: mapQ('Hyderabad', 11),
    highlights: ['10 Acres Greenery', 'Thoughtful Architecture', 'Community Living'],
    stats: [{ label: 'Acres', value: '10' }],
  },
  {
    slug: 'harinda-harivillu',
    name: 'Harinda Harivillu',
    type: 'Apartments',
    location: 'Kompally, Hyderabad',
    image: media('apt-01.jpg'),
    summary: 'Ready-to-move apartments on 1 acre with 8 floors and 88 units in Kompally.',
    overview:
      'Introducing Harinda Harivillu, where luxury meets convenience in Kompally. Spanning across 1 acre of prime land, this ready-to-move apartment complex stands tall with 8 floors housing 88 meticulously designed units.',
    mapEmbed: mapQ('Kompally Hyderabad', 12),
    highlights: ['Ready to Move', '8 Floors', '88 Units', 'Prime Kompally Location'],
    stats: [
      { label: 'Acres', value: '1' },
      { label: 'Units', value: '88' },
      { label: 'Floors', value: '8' },
    ],
  },
  {
    slug: 'one-time-payment-tellapur',
    name: 'One-time-payment Tellapur',
    type: 'Apartments',
    location: 'Tellapur, Hyderabad',
    image: media('apt-02.jpg'),
    summary: 'Upcoming 3 & 4 BHK apartments in Tellapur with multiple size options.',
    overview:
      'In Tellapur, we are going to launch a New Apartment soon… Apartment Sizes: 3BHK & 4BHK: 1848, 1891, 1922, 2013, 2032, 2045, 2050, 2161, 2192, 2193, 2227, 2242, 2602, 2746, 3545, 3549, 3559, 3582 SFT, 3 and 4 BHK Apartments.',
    mapEmbed: mapQ('Tellapur Hyderabad', 13),
    highlights: ['3 & 4 BHK', 'Tellapur Location', 'Multiple Unit Sizes'],
  },
  {
    slug: 'dukes-ohana',
    name: 'Dukes OHANA',
    type: 'Layouts',
    location: 'Kompally, Hyderabad',
    image: media('plot-01.jpg'),
    summary: 'Premium villa plots across 13+ acres in Kompally, Hyderabad.',
    overview:
      'Spread across space of 13+ Acres, Premium villa plots for sale in Kompally, Hyderabad. Dukes OHANA is located in Kompally in Telangana close to Hyderabad.',
    mapEmbed: mapQ('Kompally Hyderabad', 12),
    highlights: ['Premium Villa Plots', '13+ Acres', 'Kompally Location'],
    stats: [{ label: 'Acres', value: '13+' }],
  },
  {
    slug: 'pnj-meadows',
    name: 'Pnj Meadows',
    type: 'Layouts',
    location: 'Kothur near Bangalore Highway',
    image: media('plot-02.jpg'),
    summary: 'HMDA-approved plots across 7 acres with 109 plots from 130–270 sq. yards.',
    overview:
      'Exceptional investment opportunity with Pnj Projects at Pnj MEADOWS, offering HMDA-approved plots in the prime location of Kothur, near Bangalore Highway. Spanning across 7 acres with 109 plots ranging from 130 to 270 square yards.',
    mapEmbed: mapQ('Kothur Hyderabad', 12),
    highlights: ['HMDA Approved', '7 Acres', '109 Plots', 'Bangalore Highway Proximity'],
    stats: [
      { label: 'Acres', value: '7' },
      { label: 'Plots', value: '109' },
    ],
  },
  {
    slug: 'pnj-signature',
    name: 'Pnj Signature',
    type: 'Layouts',
    location: 'Nandigama',
    image: media('plot-03.jpg'),
    summary: 'Eco-friendly villa plots strategically located in Nandigama.',
    overview:
      'Pnj Projects invites you to explore our latest offering—Pnj Signature Eco-Friendly Villa Plots. Strategically located in Nandigama.',
    mapEmbed: mapQ('Nandigama Hyderabad', 11),
    highlights: ['Eco-Friendly Villa Plots', 'Strategic Location'],
  },
  {
    slug: 'dukes-urban-village',
    name: 'Dukes Urban Village',
    type: 'Layouts',
    location: 'Kothur, Hyderabad',
    image: media('plot-04.jpg'),
    soldOut: true,
    summary: 'Premium villa plots spread across 60 acres in Kothur, Hyderabad.',
    overview: 'Spread across space of 60 Acres, Premium villa plots for sale in Kothur, Hyderabad.',
    mapEmbed: mapQ('Kothur Hyderabad', 12),
    highlights: ['Premium Villa Plots', '60 Acres'],
    stats: [{ label: 'Acres', value: '60' }],
  },
  {
    slug: 'slns-hills',
    name: 'SLNS Hills',
    type: 'Layouts',
    location: 'Bhuvanagiri Town',
    image: media('plot-05.jpg'),
    summary: 'Prestigious Dukes layout on a hillock beside the main road in Bhuvanagiri.',
    overview:
      'SLNS Hills, a prestigious project by DUKES, stands as a testament to luxury and discerning lifestyle. Nestled on a hillock adjacent to the main road in the heart of Bhuvanagiri Town.',
    mapEmbed: mapQ('Bhuvanagiri Telangana', 12),
    highlights: ['Hillock Location', 'Main Road Access', 'Premium Lifestyle'],
  },
  {
    slug: 'utopia',
    name: 'UTOPIA',
    type: 'Farm lands',
    location: 'Kadthal, Hyderabad',
    image: media('plot-06.jpg'),
    summary: 'Premium development across 17 acres with plots from 120 to 180 sq. yds.',
    overview:
      'Thapovan Hill County is a premium development located in Kadthal, Hyderabad. The project is spread over 17 acres and consists of 70 plots ranging from 120 to 180 sq. yds.',
    mapEmbed: mapQ('Kadthal Hyderabad', 11),
    highlights: ['17 Acres', '70 Plots', '120–180 Sq. Yds'],
    stats: [
      { label: 'Acres', value: '17' },
      { label: 'Plots', value: '70' },
    ],
  },
  {
    slug: 'tapovan-hill-county',
    name: 'Tapovan Hill County',
    type: 'DTCP - RERA',
    location: 'Kadthal, Hyderabad',
    image: media('plot-07.jpg'),
    summary: 'DTCP-RERA premium plots across 17 acres in Kadthal, Hyderabad.',
    overview:
      'Thapovan Hill County is a premium development located in Kadthal, Hyderabad. The project is spread over 17 acres and consists of 70 plots ranging from 120 to 180 sq. yds.',
    mapEmbed: mapQ('Kadthal Hyderabad', 11),
    highlights: ['DTCP - RERA', '17 Acres', '70 Plots'],
    stats: [
      { label: 'Acres', value: '17' },
      { label: 'Plots', value: '70' },
    ],
  },
];

export const ONGOING_HOME = [
  'cyber-woods',
  'marvella',
  'pnj-beams-and-columns',
  'dukes-western-county',
  'pnj-candeur-twins',
  'pnj-high9',
  'pnj-kotas',
].map((slug) => PROJECT_DETAILS.find((p) => p.slug === slug)!);

const CARD_META: Record<
  string,
  { tagline: string; status: NonNullable<ProjectDetail['status']>; config: string; area: string; price: string }
> = {
  'cyber-woods': {
    tagline: 'IT Corridor Living',
    status: 'Sold out',
    config: 'Apartments',
    area: 'Premium units',
    price: 'Sold out',
  },
  marvella: {
    tagline: 'Skyline Residences',
    status: 'Ongoing',
    config: '2–4 BHK',
    area: '1,385–3,570 sqft',
    price: 'On request',
  },
  'pnj-beams-and-columns': {
    tagline: 'Urban Apartments',
    status: 'Ongoing',
    config: 'Apartments',
    area: 'Suchitra',
    price: 'On request',
  },
  'dukes-western-county': {
    tagline: 'Premium Township',
    status: 'Ongoing',
    config: 'Plots',
    area: 'Open plots',
    price: 'On request',
  },
  'pnj-candeur-twins': {
    tagline: 'Twin Tower Living',
    status: 'Newly launched',
    config: 'Apartments',
    area: 'Premium',
    price: 'On request',
  },
  'pnj-high9': {
    tagline: 'High-Rise Living',
    status: 'Ongoing',
    config: 'Apartments',
    area: 'High-rise',
    price: 'On request',
  },
  'pnj-kotas': {
    tagline: 'Plotted Community',
    status: 'Ongoing',
    config: 'Layouts',
    area: 'Open plots',
    price: 'On request',
  },
};

export function getFeaturedCard(p: ProjectDetail) {
  const meta = CARD_META[p.slug];
  return {
    ...p,
    tagline: p.tagline || meta?.tagline || p.type,
    status: p.status || meta?.status || (p.soldOut ? 'Sold out' : 'Ongoing'),
    config: p.config || meta?.config || p.type,
    area: p.area || meta?.area || p.location,
    price: p.price || meta?.price || 'On request',
  };
}

export const PROJECT_TABS = ['Villas', 'Apartments', 'Layouts', 'Farm lands', 'DTCP - RERA'] as const;

export function getProject(slug: string) {
  return PROJECT_DETAILS.find((p) => p.slug === slug);
}

export function projectsByTab(tab: string) {
  return PROJECT_DETAILS.filter((p) => p.type === tab);
}

const TYPE_ALIASES: Record<string, (typeof PROJECT_TABS)[number]> = {
  apartment: 'Apartments',
  apartments: 'Apartments',
  flat: 'Apartments',
  flats: 'Apartments',
  villa: 'Villas',
  villas: 'Villas',
  layout: 'Layouts',
  layouts: 'Layouts',
  'farm land': 'Farm lands',
  'farm lands': 'Farm lands',
  farmland: 'Farm lands',
  farmlands: 'Farm lands',
  dtcp: 'DTCP - RERA',
  rera: 'DTCP - RERA',
  'dtcp - rera': 'DTCP - RERA',
  'dtcp rera': 'DTCP - RERA',
};

export function resolveProjectType(query: string): (typeof PROJECT_TABS)[number] | null {
  const q = query.trim().toLowerCase();
  if (!q) return null;
  if ((PROJECT_TABS as readonly string[]).includes(query.trim())) {
    return query.trim() as (typeof PROJECT_TABS)[number];
  }
  return TYPE_ALIASES[q] ?? null;
}

/** Best single project match for a search query, or null if ambiguous / none. */
export function findBestProjectMatch(query: string): ProjectDetail | null {
  const q = query.trim().toLowerCase();
  if (!q || resolveProjectType(q)) return null;

  const exact = PROJECT_DETAILS.find((p) => p.name.toLowerCase() === q);
  if (exact) return exact;

  const slugExact = PROJECT_DETAILS.find((p) => p.slug === q || p.slug.replace(/-/g, ' ') === q);
  if (slugExact) return slugExact;

  const matches = PROJECT_DETAILS.filter((p) => {
    const name = p.name.toLowerCase();
    const slug = p.slug.replace(/-/g, ' ');
    return name.includes(q) || q.includes(name) || slug.includes(q);
  });

  if (matches.length === 1) return matches[0];

  // Prefer shortest name that starts with the query (e.g. "pnj high" → High 9)
  const starts = matches.filter((p) => p.name.toLowerCase().startsWith(q) || p.slug.replace(/-/g, ' ').startsWith(q));
  if (starts.length === 1) return starts[0];

  return null;
}
