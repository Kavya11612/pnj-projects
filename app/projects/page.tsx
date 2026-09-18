'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import FeaturedProjectCard from '../components/FeaturedProjectCard';
import { getFeaturedCard, ONGOING_HOME, PROJECT_DETAILS, PROJECT_TABS } from '../projects-data';

const STATUS_FILTERS = ['All', 'Ongoing', 'Newly launched', 'Pre-launch', 'Sold out'] as const;

export default function ProjectsPage() {
  const [tab, setTab] = useState<(typeof PROJECT_TABS)[number] | 'All'>('All');
  const [status, setStatus] = useState<(typeof STATUS_FILTERS)[number]>('All');

  const featured = useMemo(() => {
    const cards = ONGOING_HOME.map(getFeaturedCard);
    if (status === 'All') return cards;
    return cards.filter((p) => p.status === status);
  }, [status]);

  const listed = useMemo(() => {
    if (tab === 'All') return PROJECT_DETAILS;
    return PROJECT_DETAILS.filter((p) => p.type === tab);
  }, [tab]);

  return (
    <main className="projectsPage">
      <SiteHeader active="projects" />
      <section className="projectsPageHero">
        <div className="wrap">
          <h1>Ongoing projects</h1>
          <p>
            Explore Pnj Projects across villas, apartments, layouts and more — the same project lineup as our main website.
          </p>
        </div>
      </section>

      <section className="wrap projectsPageFeatured">
        <div className="sectionHead projectsHead">
          <div>
            <h2>Featured projects</h2>
          </div>
          <Link className="goldBtn" href="/contact">
            Book a site visit <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="featFilters">
          {STATUS_FILTERS.map((s) => (
            <button key={s} type="button" className={status === s ? 'on' : ''} onClick={() => setStatus(s)}>
              {s}
            </button>
          ))}
        </div>

        <div className="featGrid">
          {featured.map((item) => (
            <FeaturedProjectCard key={item.slug} project={item} />
          ))}
        </div>
      </section>

      <section className="wrap projectsPageList">
        <div className="sectionHead projectsHead">
          <div>
            <h2>Browse by category</h2>
          </div>
          <div className="filters">
            <button className={tab === 'All' ? 'on' : ''} onClick={() => setTab('All')}>
              All
            </button>
            {PROJECT_TABS.map((t) => (
              <button key={t} className={tab === t ? 'on' : ''} onClick={() => setTab(t)}>
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="featGrid">
          {listed.map((p) => (
            <FeaturedProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
