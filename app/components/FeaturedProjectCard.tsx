'use client';

import Link from 'next/link';
import { BedDouble, MapPin, Maximize2 } from 'lucide-react';
import { getFeaturedCard, type ProjectDetail } from '../projects-data';

export default function FeaturedProjectCard({ project }: { project: ProjectDetail }) {
  const p = getFeaturedCard(project);
  const statusClass =
    p.status === 'Sold out'
      ? 'sold'
      : p.status === 'Pre-launch'
        ? 'pre'
        : p.status === 'Newly launched'
          ? 'new'
          : 'ongoing';

  return (
    <Link className="featCard" href={`/projects/${p.slug}`}>
      <div className="featMedia">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          width={640}
          height={420}
        />
        <span className="featTag">{p.tagline}</span>
        <span className="featLogo" aria-hidden>
          <img src="/pnj-logo.png" alt="" width={34} height={34} decoding="async" />
        </span>
        <span className={`featStatus ${statusClass}`}>
          <span className="featStatusDot" /> {p.status}
        </span>
      </div>
      <div className="featBody">
        <p className="featLoc">
          <MapPin size={14} /> {p.location}
        </p>
        <h3>{p.name}</h3>
        <div className="featSpecs">
          <span>
            <BedDouble size={14} /> {p.config}
          </span>
          <span>
            <Maximize2 size={14} /> {p.area}
          </span>
        </div>
        <div className="featFoot">
          <div>
            <strong>{p.price}</strong>
            {p.price !== 'Sold out' ? <small>onwards</small> : null}
          </div>
          <span className="featView">View</span>
        </div>
      </div>
    </Link>
  );
}
