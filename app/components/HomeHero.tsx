'use client';

import Link from 'next/link';
import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Search, X } from 'lucide-react';
import { COMPANY } from '../data';
import {
  findBestProjectMatch,
  getFeaturedCard,
  ONGOING_HOME,
  resolveProjectType,
} from '../projects-data';

const TYPE_PILLS = ['All', 'Apartments', 'Villas', 'Layouts', 'Farm lands'] as const;

const QUICK_STATS = [
  { num: '20+', label: 'Years Experience' },
  { num: 'RERA', label: 'Compliant Projects' },
  { num: 'End-to-End', label: 'Client Support' },
] as const;

function statusClass(status: string) {
  const s = status.toLowerCase();
  if (s.includes('sold')) return 'soldout';
  if (s.includes('pre')) return 'prelaunch';
  if (s.includes('newly') || s.includes('new')) return 'newly';
  if (s.includes('nearing')) return 'nearing';
  if (s.includes('ready')) return 'ready';
  return 'ongoing';
}

export default function HomeHero() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [activePill, setActivePill] = useState<(typeof TYPE_PILLS)[number]>('All');
  const containerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  const cards = useMemo(() => ONGOING_HOME.map(getFeaturedCard), []);
  const loopCards = useMemo(() => [...cards, ...cards], [cards]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const mq = window.matchMedia('(max-width: 980px)');
    let raf = 0;
    let last = performance.now();
    const speed = 32;

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      // Desktop only: vertical JS scroll. Mobile uses CSS marquee animation.
      if (!mq.matches && !pausedRef.current) {
        const half = container.scrollHeight / 2;
        if (half > 0) {
          container.scrollTop += speed * dt;
          if (container.scrollTop >= half) {
            container.scrollTop -= half;
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const goSearch = (e?: FormEvent) => {
    e?.preventDefault();
    const q = query.trim();

    // Typed a category (apartments / villas / flats…) → only that type
    const typeFromQuery = resolveProjectType(q);
    if (typeFromQuery) {
      setActivePill(
        (TYPE_PILLS as readonly string[]).includes(typeFromQuery)
          ? (typeFromQuery as (typeof TYPE_PILLS)[number])
          : 'All'
      );
      router.push(`/projects?type=${encodeURIComponent(typeFromQuery)}`);
      return;
    }

    // Typed a project name → open that project page directly
    if (q) {
      const match = findBestProjectMatch(q);
      if (match) {
        router.push(`/projects/${match.slug}`);
        return;
      }
    }

    // Ambiguous name search, or pill + free text → filtered list only
    const params = new URLSearchParams();
    if (q) params.set('q', q);
    if (activePill !== 'All') params.set('type', activePill);
    const qs = params.toString();
    router.push(qs ? `/projects?${qs}` : '/projects');
  };

  const onPill = (pill: (typeof TYPE_PILLS)[number]) => {
    setActivePill(pill);
    if (pill === 'All') router.push('/projects');
    else router.push(`/projects?type=${encodeURIComponent(pill)}`);
  };

  return (
    <section id="top" className="hero">
      <div className="heroGrid wrap">
        <div className="heroLeft">
          <div className="heroEyebrowPill">
            <span className="heroEyebrowDot" aria-hidden />
            {COMPANY.companyLegal}
          </div>

          <h1 className="heroHeadline">
            Build Your Future
            <br />
            <span className="heroAccent">With Pnj Projects</span>
          </h1>

          <p className="heroSub">{COMPANY.heroCopy}</p>

          <form className="heroSearchWrap" onSubmit={goSearch}>
            <div className="heroSearchBar">
              <span className="heroSearchIcon" aria-hidden>
                <Search size={15} />
              </span>
              <input
                id="hero-search"
                type="search"
                className="heroSearchInput"
                placeholder="Search project, locality, apartments, villas…"
                aria-label="Search projects"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query ? (
                <button
                  type="button"
                  className="heroClearSearch"
                  aria-label="Clear search"
                  onClick={() => setQuery('')}
                >
                  <X size={14} />
                </button>
              ) : null}
              <button className="heroSearchBtn" type="submit">
                Search
              </button>
            </div>
          </form>

          <div className="heroPills" role="group" aria-label="Property type filter">
            {TYPE_PILLS.map((pill) => (
              <button
                key={pill}
                type="button"
                className={`heroPill${activePill === pill ? ' heroPillActive' : ''}`}
                aria-pressed={activePill === pill}
                onClick={() => onPill(pill)}
              >
                {pill}
              </button>
            ))}
          </div>

          <div className="heroQuickStats">
            {QUICK_STATS.map((s) => (
              <div key={s.label} className="heroQs">
                <span className="heroQsNum">{s.num}</span>
                <span className="heroQsLabel">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="heroRight">
          <div className="heroMarqueeTitle">
            <span className="heroMarqueeTitleDot" aria-hidden />
            Featured Projects
          </div>
          <div className="heroMarqueeContainer" ref={containerRef}>
            <div className="heroMarqueeTrack">
              {loopCards.map((p, i) => (
                <Link
                  key={`${p.slug}-${i}`}
                  href={`/projects/${p.slug}`}
                  className="heroMarqueeCard"
                  style={{
                    backgroundImage: `linear-gradient(rgba(20, 16, 12, 0.28) 0%, rgba(20, 16, 12, 0.88) 100%), url(${p.image})`,
                  }}
                >
                  <div className="heroCardHeader">
                    <span className={`heroCardStatus ${statusClass(p.status)}`} title={`Project status: ${p.status}`}>
                      {p.status}
                    </span>
                    <span className="heroBrandLogoBox" aria-hidden>
                      <img src="/pnj-logo.png" alt="" className="heroBrandLogo" width={40} height={28} />
                    </span>
                  </div>
                  <h3 className="heroCardTitle">{p.name}</h3>
                  <p className="heroCardLocation">
                    <MapPin size={12} /> {p.location}
                  </p>
                  <div className="heroCardFooter">
                    <span className="heroCardSpecs">
                      {p.config} · {p.area}
                    </span>
                    <strong className="heroCardPrice">{p.price}</strong>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
