'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { ONGOING_HOME, PROJECT_DETAILS, PROJECT_TABS } from '../projects-data';

export default function ProjectsPage() {
  const [tab, setTab] = useState<(typeof PROJECT_TABS)[number] | 'All'>('All');
  const listed = useMemo(() => {
    if (tab === 'All') return PROJECT_DETAILS;
    return PROJECT_DETAILS.filter((p) => p.type === tab);
  }, [tab]);

  return (
    <main className="projectsPage">
      <SiteHeader active="projects" />
      <section className="projectsPageHero">
        <div className="wrap">
          <p className="eyebrow">Projects</p>
          <h1>Ongoing Projects</h1>
          <p>
            Explore PNJ Projects across villas, apartments, layouts and more — the same project lineup as our main website.
          </p>
        </div>
      </section>

      <section className="wrap projectsPageFeatured">
        <div className="sectionHead projectsHead">
          <div>
            <p className="eyebrow">Featured</p>
            <h2>Homepage Highlights</h2>
          </div>
          <Link className="goldBtn" href="/#contact">
            Book a site visit <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="ongoingStrip">
          {ONGOING_HOME.map((item) => (
            <Link key={item.slug} className="ongoingCard" href={`/projects/${item.slug}`}>
              <img src={item.image} alt={item.name} decoding="async" />
              <div className="ongoingShade" />
              <div className="ongoingBody">
                <small>{item.type}</small>
                <h3>{item.name}</h3>
                <span>
                  <MapPin size={12} /> {item.location}
                </span>
              </div>
              <span className="ongoingGo" aria-hidden>
                <ArrowUpRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap projectsPageList">
        <div className="sectionHead projectsHead">
          <div>
            <p className="eyebrow">All Projects</p>
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

        <div className="projectRail">
          {listed.map((p, i) => (
            <Link className="project" key={p.slug} href={`/projects/${p.slug}`}>
              <div className="projectImg">
                <img src={p.image} alt={p.name} decoding="async" />
                <div className="projectShade" />
                <span className="projectNum">{String(i + 1).padStart(2, '0')}</span>
                <span className="projectTag">{p.soldOut ? 'Sold Out' : p.type}</span>
                <div className="projectOverlay">
                  <small>{p.type}</small>
                  <h3>{p.name}</h3>
                  <span>
                    <MapPin size={12} /> {p.location}
                  </span>
                </div>
                <span className="projectGo" aria-hidden>
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
