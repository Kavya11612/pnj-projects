'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { ONGOING_HOME } from '../projects-data';

export default function OngoingCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = ONGOING_HOME.length;
  const item = ONGOING_HOME[index];

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 4200);
    return () => window.clearInterval(id);
  }, [paused, total]);

  useEffect(() => {
    const next = ONGOING_HOME[(index + 1) % total];
    const prev = ONGOING_HOME[(index - 1 + total) % total];
    [next, prev].forEach((p) => {
      if (!p?.image) return;
      const img = new window.Image();
      img.src = p.image;
    });
  }, [index, total]);

  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

  return (
    <div
      className="ongoingCarousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="ongoingStage">
        <AnimatePresence mode="wait">
          <motion.div
            key={item.slug}
            className="ongoingSlide"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href={`/projects/${item.slug}`} className="ongoingSlideLink">
              <img
                src={item.image}
                alt={item.name}
                decoding="async"
                fetchPriority="high"
                width={1180}
                height={420}
              />
              <div className="ongoingShade" />
              <div className="ongoingBody">
                <small>{item.type}</small>
                <h3>{item.name}</h3>
                <span>{item.location}</span>
              </div>
              <span className="ongoingGo" aria-hidden>
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </motion.div>
        </AnimatePresence>

        <button type="button" className="ongoingNav prev" onClick={goPrev} aria-label="Previous project">
          <ArrowLeft size={18} />
        </button>
        <button type="button" className="ongoingNav next" onClick={goNext} aria-label="Next project">
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="ongoingDots" role="tablist" aria-label="Ongoing projects">
        {ONGOING_HOME.map((p, i) => (
          <button
            key={p.slug}
            type="button"
            role="tab"
            aria-selected={i === index}
            className={i === index ? 'on' : ''}
            onClick={() => setIndex(i)}
            aria-label={p.name}
          />
        ))}
      </div>

      <div className="ongoingThumbs">
        {ONGOING_HOME.map((p, i) => (
          <button
            key={p.slug}
            type="button"
            className={`ongoingThumb ${i === index ? 'on' : ''}`}
            onClick={() => setIndex(i)}
          >
            <img src={p.image} alt="" loading="lazy" decoding="async" width={160} height={72} />
            <span>{p.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
