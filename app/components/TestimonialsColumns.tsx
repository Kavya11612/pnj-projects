'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { Review } from '../reviews-data';

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? '')
    .join('');
}

function ReviewCard({ review }: { review: Review }) {
  const role = [review.place, review.project].filter(Boolean).join(' · ');
  return (
    <article className="tColCard">
      <p className="tColText">{review.text}</p>
      <div className="tColAuthor">
        <span className="tColAvatar" aria-hidden>
          {initials(review.name)}
        </span>
        <div className="tColMeta">
          <strong>{review.name}</strong>
          <span>{role}</span>
        </div>
      </div>
    </article>
  );
}

export function TestimonialsColumn({
  testimonials,
  duration = 15,
  className,
}: {
  testimonials: Review[];
  duration?: number;
  className?: string;
}) {
  return (
    <div className={['tCol', className].filter(Boolean).join(' ')}>
      <motion.div
        className="tColTrack"
        animate={{ translateY: '-50%' }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
      >
        {[0, 1].map((dup) => (
          <React.Fragment key={dup}>
            {testimonials.map((review) => (
              <ReviewCard key={`${dup}-${review.name}-${review.place}`} review={review} />
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
