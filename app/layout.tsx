import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Quicksand } from 'next/font/google';

/* Same fonts as https://pnjprojects.com/ — Poppins body, Quicksand headings */
const sans = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PNJ Projects — Residences, Villas & Land in Hyderabad',
  description:
    'PNJ Projects crafts villas, apartments and plotted communities in Hyderabad — considered real estate for families and long-term investors.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
