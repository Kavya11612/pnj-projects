export type Category = 'Layouts' | 'Apartments' | 'Villas';

export type Project = {
  name: string;
  type: Category;
  soldOut?: boolean;
  image?: string;
  location?: string;
};

const media = (file: string) => `/pnj-media/${file}`;

export const MEDIA = {
  hero: media('hero-home.jpg'),
  about: media('Entrance_day_02-min-1.jpg'),
  family: media('family.png'),
  symbol: media('ethet-150x150.png'),
  logoMark: media('30.png'),
  exterior: media('Exterior_Cam_16-min-1.jpg'),
  location: 'https://pnjprojects.com/wp-content/uploads/2023/11/PNJ_Location.png',
};

export const COMPANY = {
  name: 'PNJ Projects',
  phone: '+91 98957 89578',
  phoneHref: 'tel:+919895789578',
  email: 'info@pnjprojects.com',
  emailHref: 'mailto:info@pnjprojects.com',
  hrEmail: 'hr@pnjprojects.com',
  hrEmailHref: 'mailto:hr@pnjprojects.com',
  whatsapp: 'https://wa.me/919895789578',
  social: {
    facebook: 'https://www.facebook.com/PNJProjects',
    instagram: 'https://www.instagram.com/pnjgroupofficial/',
    linkedin: 'https://www.linkedin.com/company/pnj-projects/',
    youtube: 'https://www.youtube.com/@PNJProjects',
    x: 'https://x.com/pnjprojects',
  },
  address:
    '3rd Floor, Santoshi Arcade, Plot No: 167, Kavuri Hills, Madhapur, Hyderabad, Telangana 500081',
  tagline: 'Build Your Future With PNJ Projects',
  heroCopy:
    'From apartments to villas to open plots – PNJ Projects offers trusted real estate solutions for every dream and investment.',
  about:
    'PNJ Projects is a distinguished player in the real estate industry, renowned for its commitment to excellence. With a track record spanning over two decades, PNJ Projects has consistently delivered innovative and high-quality residential and commercial spaces.',
  landmark: 'A Landmark Name in Real Estate, Delivering Exceptional Lifestyle Experiences.',
  knowMoreTitle: 'Know more about PNJ Projects',
  mdHeading: 'Guiding Projects and Clients with 5+ Years of Industry Insight',
  footerLegal: 'Copyrighted © 2025 Reserved by PNJ Projects',
  companyLegal: 'PNJ Projects Private Limited',
};

export const APPROACH = [
  {
    n: '01',
    t: 'VISION',
    d: 'We imagine spaces that inspire everyday living.',
    image: media('Entrance_day_02-min-1.jpg'),
  },
  {
    n: '02',
    t: 'VALUE',
    d: 'We create lasting value for every investment.',
    image: media('Exterior_Cam_16-min-1.jpg'),
  },
  {
    n: '03',
    t: 'LIVING',
    d: 'We shape better lives through thoughtful homes.',
    image: media('slide1-1.jpg'),
  },
];

export const PROJECTS: Project[] = [
  { name: 'PNJ Tuxedo', type: 'Layouts', location: 'Hyderabad', image: media('plot-01.jpg') },
  { name: 'PNJ Serene City', type: 'Layouts', location: 'Visakhapatnam', image: media('plot-02.jpg') },
  { name: 'PNJ Dukes County', type: 'Layouts', soldOut: true, location: 'Vizianagaram', image: media('plot-03.jpg') },
  { name: 'Dukes Urban Village', type: 'Layouts', soldOut: true, location: 'Visakhapatnam', image: media('plot-04.jpg') },
  { name: 'Dukes Health City', type: 'Layouts', location: 'Vizianagaram', image: media('plot-05.jpg') },
  { name: 'Dukes OHANA', type: 'Layouts', location: 'Hyderabad', image: media('plot-06.jpg') },
  { name: 'PNJ Meadows', type: 'Layouts', location: 'Hyderabad', image: media('plot-07.jpg') },
  { name: 'PNJ Signature', type: 'Layouts', location: 'Hyderabad', image: media('plot-08.jpg') },
  { name: 'Thapovan Hill County', type: 'Layouts', location: 'Hyderabad', image: media('plot-09.jpg') },
  { name: 'UTOPIA', type: 'Layouts', location: 'Hyderabad', image: media('plot-10.jpg') },
  { name: 'SLNS Hills', type: 'Layouts', location: 'Hyderabad', image: media('plot-11.jpg') },
  { name: 'Dukes Western County', type: 'Layouts', location: 'Vizianagaram', image: media('dukes-1.jpg') },
  { name: 'PNJ Nine West', type: 'Layouts', location: 'Hyderabad', image: media('plot-12.jpg') },
  { name: 'Sunrise Gateway', type: 'Apartments', location: 'Hyderabad', image: media('Entrance_day_02-min-1.jpg') },
  { name: 'PNJ League Luxes', type: 'Apartments', location: 'Hyderabad', image: media('slide1-1.jpg') },
  { name: 'PNJ Forest Edge', type: 'Apartments', location: 'Hyderabad', image: media('apt-01.jpg') },
  { name: 'PNJ Solitaire Unity', type: 'Apartments', location: 'Hyderabad', image: media('apt-02.jpg') },
  { name: 'PNJ Galaxy', type: 'Apartments', location: 'Hyderabad', image: media('apt-03.jpg') },
  { name: 'PNJ Candeur Twins', type: 'Apartments', location: 'Hyderabad', image: media('pnjTwinslide.jpg') },
  { name: 'SKY-49', type: 'Apartments', location: 'Hyderabad', image: media('high9-1.jpg') },
  { name: 'PNJ Cyberwoods', type: 'Apartments', soldOut: true, location: 'Hyderabad', image: media('apt-04.jpg') },
  { name: 'PNJ NCD', type: 'Apartments', location: 'Hyderabad', image: media('apt-05.jpg') },
  { name: 'PNJ Shubham', type: 'Apartments', location: 'Hyderabad', image: media('apt-06.jpg') },
  { name: 'Marvella', type: 'Apartments', location: 'Hyderabad', image: media('marvella.jpg') },
  { name: 'PNJ Beams and Columns', type: 'Apartments', location: 'Visakhapatnam', image: media('beamSlide1.jpg') },
  { name: 'PNJ Lakecity', type: 'Apartments', location: 'Hyderabad', image: media('apt-07.jpg') },
  { name: 'PNJ Epsilon Villas', type: 'Villas', location: 'Hyderabad', image: media('villa-01.jpg') },
  { name: 'PNJ Cadence', type: 'Villas', location: 'Hyderabad', image: media('villa-02.jpg') },
  { name: 'PNJ Riverscape Villas', type: 'Villas', location: 'Hyderabad', image: media('villa-03.jpg') },
  { name: 'PNJ Velora', type: 'Villas', location: 'Hyderabad', image: media('villa-04.jpg') },
  { name: 'PNJ RSR Villas', type: 'Villas', location: 'Hyderabad', image: media('villa-05.jpg') },
  { name: 'PNJ Kotas', type: 'Villas', location: 'Hyderabad', image: media('kotas.jpg') },
  { name: 'PNJ Green Valley', type: 'Villas', location: 'Hyderabad', image: media('villa-06.jpg') },
  { name: 'Bella Vista', type: 'Villas', location: 'Hyderabad', image: media('villa-07.jpg') },
  { name: 'PNJ Green Meadows', type: 'Villas', location: 'Hyderabad', image: media('villa-08.jpg') },
  { name: 'PNJ Lotus', type: 'Villas', location: 'Hyderabad', image: media('villa-09.jpg') },
];

export const ONGOING_FEATURED = [
  { name: 'PNJ Cyberwoods', type: 'Apartments' as Category, location: 'Hyderabad', image: media('apt-04.jpg') },
  { name: 'Marvella', type: 'Apartments' as Category, location: 'Hyderabad', image: media('marvella.jpg') },
  { name: 'Beams & Columns', type: 'Apartments' as Category, location: 'Visakhapatnam', image: media('beamSlide1.jpg') },
  { name: 'Dukes Western County', type: 'Layouts' as Category, location: 'Vizianagaram', image: media('dukes-1.jpg') },
  { name: 'Candeur Twins', type: 'Apartments' as Category, location: 'Hyderabad', image: media('pnjTwinslide.jpg') },
  { name: 'High9', type: 'Apartments' as Category, location: 'Hyderabad', image: media('high9-1.jpg') },
  { name: 'PNJ Kotas', type: 'Villas' as Category, location: 'Hyderabad', image: media('kotas.jpg') },
];

export const FAQS = [
  {
    q: '1. Why to invest with PNJ Projects ?',
    a: 'Affordable, Reliable & Trusted partner',
  },
  {
    q: '2. Is PNJ Projects RERA Certified ?',
    a: 'YES, PNJ Projects are RERA Certified Company.',
  },
  {
    q: '3. Is the Money Invested in PNJ Project are Safe?',
    a: 'We have Spot Registration with all Legal & Government Permissions in Place. You Pay, We Register.',
  },
  {
    q: '4. How the Money Invested in PNJ Projects can double in 3-5 Years?',
    a: 'All Our Projects are in Prime Locations in Hyderabad, We are very confident that the your investment get doubled in 3-5 Years.',
  },
  {
    q: '5. Can Investor with small Investment, Invest in a Big Project of PNJ ?',
    a: 'Yes, Under PNJ Projects, Fractional Investment Model every small investor can get benefited.',
  },
];

export const MD = {
  name: 'AVV Pavan Kumar',
  title: 'Managing Director',
  quote: 'Nothing is impossible with hard work, sincerity and dedication.',
  welcome: 'We extend a warm welcome to all our clients, investors, and business partners!',
  paragraphs: [
    'In my many years as a focused real estate Individual, PNJ Projects Real Estate has established a strong presence in the real estate market. PNJ Projects Real Estate Development sees its property development business as a major thrust area. The Hyderabad property development sector is already amongst the fastest growing in the state and in the coming years, is likely to emerge as one of the largest in the country. PNJ Projects Real Estate group firmly believes that it is uniquely positioned to take advantage of the increased need for excellence in real estate.',
    '“Nothing is impossible with hard work, sincerity and dedication.” Operating on this philosophy, we, at PNJ Projects Real Estate Group, have been working forward to create unique properties for our customers & investors. While promoting, we not only analyze every property growth but create a conducive place for creating best Return on Investments (ROI). We have entered into major areas in Real Estate Development, Consultancy, Selling & Leasing; as a result, we have transformed our company into a well-organized group. The journey from start till today has been very challenging. Thanks to our loyal team of Business Associates and professionals, we have succeeded in proving that we can deliver on our promises, rise to the challenge, and excel in our performance to the satisfaction of our clients & investors.',
    'So, let us join hands and explore the opportunity of a pristine way of property development, Consultancy, Construction, Real Estate Selling and Leasing with PNJ Projects Real Estate Group.',
    'Wish you all the best, Managing Director',
  ],
};

export const CAREERS = [
  {
    role: 'Sales Manager',
    dept: 'Sales Department',
    exp: '3 – 4 Years',
    summary:
      'The candidate should be a Graduate /MBA with 3 years’ experience in Direct Sales of living Plots, Apartments, Villa as a Manager',
    points: [
      'Develop and implement effective sales strategies to achieve organizational goals.',
      'Lead, coach, and mentor a team of real estate sales professionals to maximize their potential.',
      'Analyse market trends and competitors to identify opportunities for growth.',
      'Build and maintain strong relationships with clients, ensuring exceptional customer satisfaction.',
      'Collaborate with marketing and other departments to create compelling sales campaigns.',
      'Monitor and analyse sales performance metrics to identify areas for improvement.',
      'Conduct regular training sessions to enhance the skills of the sales team.',
      'Stay updated on industry regulations and market trends to make informed decisions.',
      'Prepare and present regular reports on sales performance to senior management.',
      'Foster a positive and collaborative work environment that encourages teamwork and achievement.',
    ],
  },
  {
    role: 'Sales Executive',
    dept: 'Sales Department',
    exp: '1 – 2 Years',
    summary:
      'The candidate should have with 2 years’ experience in Direct Sales of living Plots, Apartments, Villa as a Executive',
    points: [
      'Build and maintain strong, long-lasting relationships with clients.',
      'Understand clients’ needs and preferences to provide personalized and effective solutions.',
      'Actively promote and market real estate properties to potential clients.',
      'Develop effective sales strategies to achieve and exceed sales targets.',
      'Utilize various marketing channels, both online and offline, to generate leads and attract potential buyers.',
      'Negotiate terms and conditions with buyers to secure profitable and satisfactory deals.',
      'Collaborate with colleagues, including real estate agents, brokers, and marketing professionals, to enhance overall team performance.',
    ],
  },
  {
    role: 'Telecaller',
    dept: 'Sales Department',
    exp: '0 – 1 Years',
    summary: 'Outbound Calling: Initiate outbound calls to potential real estate clients, effectively communicating property offerings and services.',
    points: [
      'Lead Qualification: Proactively qualify leads through strategic questioning, ensuring accurate data collection on potential clients’ preferences and requirements.',
      'Client Relationship Management: Build and maintain positive relationships with clients through regular follow-ups.',
      'Data Management: Keep meticulous records of client interactions, updating the CRM system with accurate and detailed information.',
      'Target Achievement: Meet and exceed weekly/monthly targets for lead generation and conversion',
    ],
  },
];

export const CHANNEL = {
  title: 'PARTNER WITH US FOR ATTRACTIVE RETURNS',
  body: 'We, at PNJ Projects, work closely with our network of Channel Partners to create a smarter, more connected business community. With access to our large portfolio of award-winning enterprise-class products and services, our Channel Partners deliver, implement, support, and enhance our offerings through their industry expertise and proven sales and technical knowledge.',
  referredBy: [
    'ANITHA',
    'SAI KALYAN',
    'DIVYA',
    'SNEHA',
    'SUSHMA',
    'KALYANI',
    'PRIYANKA',
    'VAMSHI',
    'ABHINAY',
    'SATISH',
    'NAREN',
    'HEMA PAVANI',
    'M KRISHNA',
    'VENKATESHWAR RAO',
    'KISHORE (Director)',
    'PAVAN KUMAR (MD)',
    'OTHERS',
  ],
  businessTypes: ['Public Limited', 'Individual'],
  leadProjects: [
    'PNJ GALAXY',
    'PNJ SOLITAIRE UNITY',
    'PNJ FOREST EDGE',
    'PNJ ELITE',
    'PNJ SOLITAIRE PLF',
    'PNJ PRITHVI TOWERS',
    'PNJ SUNRISE GATEWAY',
    'PNJ TRIBUJHA',
    'PNJ EPSILON',
    'PNJ MIRACLE',
    'PNJ RIVERSCAPE',
    'PNJ NCD',
    'PNJ VELORA',
    'DUKES OHANA',
    'DUKES WESTERN COUNTY',
    'SK-49',
    'NINE WEST',
    'PNJ LOTUS',
    'PNJ GREEN MEADOWS',
    'BELLA VISTA',
    'PNJ KOTAS',
    'PNJ OXY',
    'DUKES COUNTY',
    'MARVELLA',
    'PNJ UTOPIA',
    'PNJ LFARM',
    'PNJ TULIP',
    'PNJ MEADOWS',
    'PNJ SIGNATURE',
    'TAPOVANAM HILL COUNTY',
  ],
  leadReferenceBy: [
    'ANITHA',
    'SAI KALYAN',
    'DIVYA',
    'SNEHA',
    'KALYANI',
    'PRIYANKA',
    'VAMSHI',
    'SATISH',
    'NAREN',
    'HEMA PAVANI',
    'VENKATESHWAR RAO',
    'PAVAN',
    'PAVAN KUMAR (MD)',
  ],
};

export const FRACTIONAL = {
  what: 'Fractional Investing allows a person to own a fraction or a share, of an asset. In other words, it typically refers to small investment holdings of real estate assets.',
  why: 'Many experts believe that fractional ownership has an edge over all other investmet options in terms of safety, stability and outcome. Fractional Ownership is a hard asset and the returns from it do not fluctuate with the market thus ensuring a safe and stable form if investment.',
  how: 'PNJ Projects, pools a group of Investors and forms them into a company through the incorporation of a Special Purpose Vehicle Company (SPV). This SPV then acts as a legal entity and invests in the real estate projects.',
  term: 'The term of every opportunity is different. Generally, our investment termranges from a minimum of 36 months to a maximum of 60 months. Youcan find more details about the term on our website when the listing goeslive.',
  highlights: [
    'Minimum Investment: INR 10,00,000/- ( Ten Lakhs Only)',
    'Maximum Investment: No Limit',
    'Number of Shares allotted for 10 lakhs Investment: 1 share',
    'Number of Shares in an SPV: 100 Shares.',
    'Total Portfolio Value of an SPV: INR 10 Crores',
    'Investment Tenure: 36 Months.',
  ],
  security: [
    'Share Holder Certificate will be issued for every allotted share.',
    'Property worth 10 Cr will be registered to the SPV.',
    'Quarterly Updates of the Registered Property will be provided to all shareholders.',
    'Top 2 Investors in the SPV will be the directors of the company',
  ],
  propertyTypes: ['LANDS (HMDA / DTCP / AGRCULTURE)', 'COMMERCIAL PROPERTIES.', 'VILLAS.', 'APARTMENTS'],
  returns: [
    'Monthly Dividend of 1% will be paid to Investors on 10th of Every Quarter.',
    '4 PDC’s of the Dividend will be provided in advance for the respective year.',
    'INR 6,40,000/- will be paid end of the Tenure of 36 Months.',
    'Investor can Continue or Exit at the End of the Tenure.',
    'In case Investor decides to Exit, a total of 16,40,000/- will be paid end of the Tenure.',
  ],
  steps: [
    'Complete the KYC Online or by Filling the INVESTOR KYC FORM available at our Office.',
    'Pay Non-Refundable Amount of INR 10,000/- (Ten Thousand Only) and register your position in the SPV.',
    'The Balance amount need to be paid within a period of 2 months from the date of KYCRegistration',
    'Share Certificate will be issued within 2 weeks once the Total Payment is done',
    'The Dividend Calculation will start from the date of receipt of Payment & Share Certificate.',
  ],
};

export const SITE_VISIT_PROJECTS = [
  'Dukes Health City',
  'Dukes Urban Village',
  'Dukes OHANA',
  'PNJ Medows',
  'PNJ Signature',
  'Thapovan Hill County',
  'UTOPIA',
  'SLNS Hills',
  'Dukes Western County',
  'PNJ Nine West',
  'PNJ High 9',
  'PNJ Candeur Twins',
  'PNJ Cyberwoods',
  'Marvella',
  'PNJ Beams and Colums',
  'PNJ Velora',
  'Bella Vista',
  'PNJ Green Meadows',
  'PNJ Lotus',
  'PNJ Kotas',
];
