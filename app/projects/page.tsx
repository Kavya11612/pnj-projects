'use client';

import Link from 'next/link';
import { Suspense, useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import FeaturedProjectCard from '../components/FeaturedProjectCard';
import { getFeaturedCard, ONGOING_HOME, PROJECT_DETAILS, PROJECT_TABS } from '../projects-data';

const STATUS_FILTERS = ['All', 'Ongoing', 'Newly launched', 'Pre-launch', 'Sold out'] as const;

function ProjectsContent() {
  const router = useRouter();
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

  const setCategory = (next: (typeof PROJECT_TABS)[number] | 'All') => {
    setTab(next);
    if (next === 'All') {
      if (qParam) router.push(`/projects?q=${encodeURIComponent(searchParams.get('q')!)}`);
      else router.push('/projects');
    } else {
      const params = new URLSearchParams();
      params.set('type', next);
      if (qParam) params.set('q', searchParams.get('q')!);
      router.push(`/projects?${params.toString()}`);
    }
  };

  const isFiltered = tab !== 'All' || Boolean(qParam);

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

  const listTitle =
    tab !== 'All' ? `${tab} projects` : qParam ? `Results for “${searchParams.get('q')}”` : 'Browse by category';

  return (
    <>
      <section className="projectsPageHero">
        <div className="wrap">
          <h1>{isFiltered ? listTitle : 'Ongoing projects'}</h1>
          <p>
            {isFiltered
              ? tab !== 'All'
                ? `Showing only ${tab.toLowerCase()} from the Pnj Projects lineup.`
                : 'Projects matching your search.'
              : 'Explore Pnj Projects across villas, apartments, layouts and more — the same project lineup as our main website.'}
          </p>
        </div>
      </section>

      {/* When type/search is active, hide featured + other categories — only matching projects */}
      {!isFiltered && (
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
      )}

      <section className="wrap projectsPageList">
        <div className="sectionHead projectsHead">
          <div>
            <h2>{isFiltered ? listTitle : 'Browse by category'}</h2>
          </div>
          <div className="filters">
            <button className={tab === 'All' ? 'on' : ''} onClick={() => setCategory('All')}>
              All
            </button>
            {PROJECT_TABS.map((t) => (
              <button key={t} className={tab === t ? 'on' : ''} onClick={() => setCategory(t)}>
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
        {listed.length === 0 && <p className="projectsEmpty">No projects match this filter.</p>}
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
