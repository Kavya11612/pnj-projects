const img = (path: string) => `https://pnjprojects.com/wp-content/uploads/${path}`;

export type EventItem = {
  slug: string;
  title: string;
  note: string;
  date?: string;
  cover: string;
  images: string[];
};

/** Exact events + galleries from https://pnjprojects.com/events/ */
export const EVENTS: EventItem[] = [
  {
    slug: 'independence-day',
    title: 'Independence Day',
    note: '78th Independence Day Celebrations @ PNJ Office (15-08-2024)',
    date: '15-08-2024',
    cover: img('2024/08/IMG20240815122503-scaled.jpg'),
    images: [
      img('2024/08/IMG20240815122503-scaled.jpg'),
      img('2024/08/IMG20240815122222-scaled.jpg'),
      img('2024/08/IMG20240815121249-scaled.jpg'),
      img('2024/08/IMG20240815121037-scaled.jpg'),
      img('2024/08/IMG20240815121025-scaled.jpg'),
      img('2024/08/IMG20240815121013-scaled.jpg'),
      img('2024/08/IMG-20240815-WA0032.jpg'),
    ],
  },
  {
    slug: 'excellence-award-ceremony',
    title: 'PNJ Excellence Award Ceremony',
    note: 'Excellence Awards Ceremony @ PNJ Office (15-08-2026)',
    date: '15-08-2026',
    cover: img('2026/08/WhatsApp-Image-2026-08-27-at-3.27.59-PM.jpeg'),
    images: [
      img('2026/08/WhatsApp-Image-2026-08-27-at-3.27.59-PM.jpeg'),
      img('2026/08/WhatsApp-Image-2026-08-27-at-3.28.26-PM.jpeg'),
      img('2026/08/IMG-20260815-WA0015.jpg.jpeg'),
      img('2026/08/IMG-20260815-WA0028.jpg.jpeg'),
      img('2026/08/IMG-20260815-WA0030.jpg.jpeg'),
      img('2026/08/IMG_20260815_124016.jpg-scaled.jpeg'),
      img('2026/08/IMG_20260815_123928.jpg-scaled.jpeg'),
      img('2026/08/WhatsApp-Image-2026-08-17-at-6.06.49-PM.jpeg'),
      img('2026/08/WhatsApp-Image-2026-08-17-at-6.06.51-PM-1.jpeg'),
      img('2026/08/WhatsApp-Image-2026-08-17-at-6.06.51-PM.jpeg'),
      img('2026/08/WhatsApp-Image-2026-08-17-at-6.06.50-PM.jpeg'),
      img('2026/08/WhatsApp-Image-2026-08-17-at-6.06.49-PM-1.jpeg'),
      img('2026/08/WhatsApp-Image-2026-08-17-at-6.06.48-PM.jpeg'),
      img('2026/08/WhatsApp-Image-2026-08-17-at-6.06.47-PM.jpeg'),
      img('2026/08/WhatsApp-Image-2026-08-17-at-6.06.46-PM-1.jpeg'),
      img('2026/08/WhatsApp-Image-2026-08-17-at-6.06.46-PM.jpeg'),
    ],
  },
  {
    slug: 'ganesh-chaturthi',
    title: 'Ganesh Chaturthi',
    note: 'Ganesh Chaturthi Celebrations @ PNJ Office (07-09-2024)',
    date: '07-09-2024',
    cover: img('2024/09/IMG_1461-scaled.jpg'),
    images: [
      img('2024/09/IMG_1461-scaled.jpg'),
      img('2024/09/IMG_1464-scaled.jpg'),
      img('2024/09/IMG_1465-scaled.jpg'),
      img('2024/09/IMG_1467-scaled.jpg'),
      img('2024/09/IMG_1474-scaled.jpg'),
      img('2024/09/IMG_1478-scaled.jpg'),
      img('2024/09/IMG_1483-scaled.jpg'),
      img('2024/09/IMG_1496-scaled.jpg'),
      img('2024/09/IMG_1499-scaled.jpg'),
      img('2024/09/IMG-20240908-WA0002-scaled.jpg'),
      img('2024/09/IMG-20240908-WA0008-scaled.jpg'),
      img('2024/09/IMG-20240908-WA0027-scaled.jpg'),
      img('2024/09/IMG-20240908-WA0034-scaled.jpg'),
    ],
  },
  {
    slug: 'ugadi-festival-2024',
    title: 'Ugadi Festival 2024',
    note: 'PNJ Projects ugadi festival 2024 (08-04-2024)',
    date: '08-04-2024',
    cover: img('2024/12/ugadi.jpg'),
    images: [
      img('2024/04/IMG_7267-scaled.jpg'),
      img('2024/04/IMG_7276-scaled.jpg'),
      img('2024/04/IMG_7277-scaled.jpg'),
      img('2024/04/IMG_7278-scaled.jpg'),
      img('2024/04/IMG_7280-scaled.jpg'),
      img('2024/12/ugadi.jpg'),
    ],
  },
  {
    slug: 'leadership-summit',
    title: 'Leadership Summit',
    note: 'Active PNJ Leadership Summit @ ( 06/12/2024)',
    date: '06/12/2024',
    cover: img('2024/12/summit-scaled.jpg'),
    images: [
      img('2024/12/IMG_2707-scaled.jpg'),
      img('2024/12/IMG_2784-scaled.jpg'),
      img('2024/12/IMG_2707-1-scaled.jpg'),
      img('2024/12/IMG_2709-scaled.jpg'),
      img('2024/12/IMG_2715-scaled.jpg'),
      img('2024/12/IMG_2717-scaled.jpg'),
      img('2024/12/IMG_2718-scaled.jpg'),
      img('2024/12/IMG_2735-scaled.jpg'),
      img('2024/12/IMG_2736-scaled.jpg'),
      img('2024/12/IMG_2756-scaled.jpg'),
      img('2024/12/summit-scaled.jpg'),
    ],
  },
  {
    slug: 'new-office',
    title: 'New Office',
    note: 'New Office Opening',
    cover: img('2023/11/WhatsApp-Image-2023-10-13-at-4.38.33-PM.jpeg'),
    images: [
      img('2023/11/WhatsApp-Image-2023-10-13-at-4.38.33-PM.jpeg'),
      img('2023/11/WhatsApp-Image-2023-10-13-at-4.38.35-PM-1.jpeg'),
      img('2023/11/WhatsApp-Image-2023-10-13-at-4.38.36-PM.jpeg'),
      img('2023/11/WhatsApp-Image-2023-10-13-at-4.38.34-PM.jpeg'),
      img('2023/11/WhatsApp-Image-2023-10-13-at-4.38.37-PM-1.jpeg'),
      img('2023/11/WhatsApp-Image-2023-10-13-at-4.38.35-PM-2.jpeg'),
      img('2023/11/WhatsApp-Image-2023-10-13-at-4.38.38-PM.jpeg'),
      img('2023/11/WhatsApp-Image-2023-10-13-at-4.38.34-PM-1.jpeg'),
      img('2023/11/WhatsApp-Image-2023-10-13-at-4.38.37-PM.jpeg'),
    ],
  },
];
