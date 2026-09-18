export type Review = {
  name: string;
  place: string;
  rating: 5;
  text: string;
  project?: string;
};

/** Positive client reviews for Pnj Projects Private Limited */
export const REVIEWS: Review[] = [
  {
    name: 'Rajesh Kumar',
    place: 'Hyderabad',
    rating: 5,
    project: 'Marvella',
    text: 'Very smooth site visit and clear documentation. The team explained every detail patiently and helped us finalise a flat in Tellapur without any pressure.',
  },
  {
    name: 'Sneha Reddy',
    place: 'Gachibowli',
    rating: 5,
    project: 'Cyberwoods',
    text: 'Excellent experience with Pnj Projects. Transparent pricing, RERA clarity and timely follow-ups. Highly recommend for anyone looking at Hyderabad apartments.',
  },
  {
    name: 'Anil Varma',
    place: 'Madhapur',
    rating: 5,
    project: 'Dukes Western County',
    text: 'Bought a plot through Pnj Projects and the registration process was quick. Staff was professional and always available on call. Positive and trustworthy team.',
  },
  {
    name: 'Priya Sharma',
    place: 'Kondapur',
    rating: 5,
    project: 'Pnj Candeur Twins',
    text: 'From enquiry to booking, everything felt organised. The project location and amenities matched what was promised. Grateful for the guidance.',
  },
  {
    name: 'Vikram Rao',
    place: 'Miyapur',
    rating: 5,
    project: 'Fractional investment',
    text: 'Fractional investment was explained simply with clear tenure and payout details. Happy with the transparency and quarterly updates.',
  },
  {
    name: 'Lakshmi Devi',
    place: 'Kompally',
    rating: 5,
    project: 'Pnj Beams & Columns',
    text: 'Wonderful team. They arranged a comfortable site visit and answered all our family questions. We felt confident investing with Pnj Projects.',
  },
  {
    name: 'Suresh Babu',
    place: 'Kukatpally',
    rating: 5,
    project: 'Pnj Kotas',
    text: 'Villa community visit was impressive. Clean layouts, good connectivity and supportive sales advisors. A truly positive buying journey.',
  },
  {
    name: 'Meena Iyer',
    place: 'Hitec City',
    rating: 5,
    text: 'Pnj Projects Private Limited delivers on trust. Spot registration support and legal clarity made the process stress-free for first-time buyers like us.',
  },
  {
    name: 'Arjun Naidu',
    place: 'Secunderabad',
    rating: 5,
    project: 'Pnj High 9',
    text: 'Great communication and follow-through. The team helped compare options and never rushed us. Five-star service throughout.',
  },
  {
    name: 'Deepika Reddy',
    place: 'Tellapur',
    rating: 5,
    project: 'Marvella',
    text: 'Loved the clubhouse and project planning. Booking support was friendly and professional. Would recommend Pnj Projects to friends and family.',
  },
];
