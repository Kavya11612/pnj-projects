'use client';

import Link from 'next/link';
import { Suspense, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import FeaturedProjectCard from '../components/FeaturedProjectCard';
import { getFeaturedCard, ONGOING_HOME, PROJECT_DETAILS, PROJECT_TABS } from '../projects-data';

const STATUS_FILTERS = ['All', 'Ongoing', 'Newly launched', 'Pre-launch', 'Sold out'] as const;

function ProjectsContent() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get('type');
  const qParam = searchParams.get('q')?.trim().toLowerCase() ?? '';

  const initialTab =
    typeParam && (PROJECT_TABS as readonly string[]).includes(typeParam)
      ? (typeParam as (typeof PROJECT_TABS)[number])
      : 'All';

  const [tab, setTab] = useState<(typeof PROJECT_TABS)[number] | 'All'>(initialTab);
  const [status, setStatus] = useState<(typeof STATUS_FILTERS)[number]>('All');

  useEffect(() => {
    if (typeParam && (PROJECT_TABS as readonly string[]).includes(typeParam)) {
      setTab(typeParam as (typeof PROJECT_TABS)[number]);
    } else if (!typeParam) {
      setTab('All');
    }
  }, [typeParam]);

  const featured = useMemo(() => {
    const cards = ONGOING_HOME.map(getFeaturedCard);
    if (status === 'All') return cards;
    return cards.filter((p) => p.status === status);
  }, [status]);

  const listed = useMemo(() => {
    let items = tab === 'All' ? PROJECT_DETAILS : PROJECT_DETAILS.filter((p) => p.type === tab);
    if (qParam) {
      items = items.filter(
        (p) =>
          p.name.toLowerCase().includes(qParam) ||
          p.location?.toLowerCase().includes(qParam) ||
          p.type.toLowerCase().includes(qParam) ||
          p.tagline?.toLowerCase().includes(qParam)
      );
    }
    return items;
  }, [tab, qParam]);

  return (
    <>
      <section className="projectsPageHero">
        <div className="wrap">
          <h1>Ongoing projects</h1>
          <p>
            Explore Pnj Projects across villas, apartments, layouts and more — the same project lineup as our main
            website.
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
    </>
  );
}

export default function ProjectsPage() {
  return (
    <main className="projectsPage">
      <SiteHeader active="projects" />
      <Suspense fallback={null}>
        <ProjectsContent />
      </Suspense>
      <SiteFooter />
    </main>
  );
}
