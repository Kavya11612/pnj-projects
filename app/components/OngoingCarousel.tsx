'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { getFeaturedCard, ONGOING_HOME } from '../projects-data';

const cards = ONGOING_HOME.slice(0, 3).map(getFeaturedCard);

function statusClass(status: string) {
  if (status === 'Sold out') return 'sold';
  if (status === 'Pre-launch') return 'pre';
  if (status === 'Newly launched') return 'new';
  return 'ongoing';
}

export default function OngoingCarousel() {
  return (
    <div className="homeFeatStack">
      <div className="homeFeatList">
        {cards.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, x: 140 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25 + i * 0.22,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link className="homeFeatCard" href={`/projects/${p.slug}`}>
              <img
                src={p.image}
                alt={p.name}
                decoding="async"
                fetchPriority={i === 0 ? 'high' : 'low'}
              />
              <div className="homeFeatShade" />
              <div className="homeFeatTop">
                <span className={`homeFeatStatus ${statusClass(p.status)}`}>
                  <span className="homeFeatDot" /> {p.status}
                </span>
                <span className="homeFeatLogo" aria-hidden>
                  <img src="/pnj-logo.png" alt="" width={28} height={28} decoding="async" />
                </span>
              </div>
              <div className="homeFeatBody">
                <h3>{p.name}</h3>
                <p>
                  <MapPin size={13} /> {p.location}
                </p>
                <div className="homeFeatMeta">
                  <span>
                    {p.config} · {p.area}
                  </span>
                  <strong>{p.price}</strong>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
