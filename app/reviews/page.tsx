'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { TestimonialsColumn } from '../components/TestimonialsColumns';
import { REVIEWS } from '../reviews-data';

const firstColumn = REVIEWS.slice(0, 4);
const secondColumn = REVIEWS.slice(4, 7);
const thirdColumn = REVIEWS.slice(7, 10);

export default function ReviewsPage() {
  return (
    <main className="reviewsPage">
      <SiteHeader active="reviews" />

      <section className="reviewsSection">
        <div className="wrap reviewsInner">
          <motion.div
            className="reviewsIntro"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <div className="reviewsBadge">Reviews</div>
            <h1>What our clients say</h1>
            <p>
              Positive feedback from clients of Pnj Projects Private Limited — site visits, bookings
              and investment experiences across Hyderabad.
            </p>
          </motion.div>

          <div className="reviewsColumns">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn
              testimonials={secondColumn}
              duration={19}
              className="tColMd"
            />
            <TestimonialsColumn
              testimonials={thirdColumn}
              duration={17}
              className="tColLg"
            />
          </div>

          <div className="reviewsCta">
            <p>Planning a site visit or investment? Our team is happy to help.</p>
            <Link className="goldBtn" href="/contact">
              Contact us <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
