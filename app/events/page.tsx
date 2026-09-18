'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { EVENTS } from '../events-data';

function EventsContent() {
  const search = useSearchParams();
  const tabParam = search.get('tab');
  const initial = EVENTS.some((e) => e.slug === tabParam) ? tabParam! : EVENTS[0].slug;
  const [active, setActive] = useState(initial);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(9);
  const current = useMemo(() => EVENTS.find((e) => e.slug === active) ?? EVENTS[0], [active]);

  useEffect(() => {
    if (tabParam && EVENTS.some((e) => e.slug === tabParam)) setActive(tabParam);
  }, [tabParam]);

  useEffect(() => {
    setVisibleCount(9);
  }, [active]);

  // Prefetch next batch in background
  useEffect(() => {
    current.images.slice(0, Math.min(visibleCount + 6, current.images.length)).forEach((src) => {
      const img = new window.Image();
      img.decoding = 'async';
      img.src = src;
    });
  }, [current, visibleCount]);

  const shown = current.images.slice(0, visibleCount);

  return (
    <>
      <section className="wrap eventsPageBody">
        <div className="eventTabs" role="tablist" aria-label="Pnj Events">
          {EVENTS.map((ev) => (
            <button
              key={ev.slug}
              type="button"
              role="tab"
              aria-selected={active === ev.slug}
              className={active === ev.slug ? 'on' : ''}
              onClick={() => setActive(ev.slug)}
            >
              {ev.title}
            </button>
          ))}
        </div>

        <div className="eventPanel">
          <div className="eventPanelHead">
            <div>
              <p className="eyebrow dark">{current.date || 'Pnj Projects'}</p>
              <h2>{current.note}</h2>
            </div>
            <Link className="goldBtn" href="/contact">
              Book a site visit <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="eventGallery">
            {shown.map((src, i) => (
              <button
                key={src}
                type="button"
                className="eventGalleryItem"
                onClick={() => setLightbox(current.fullImages[i] || src)}
              >
                <img
                  src={src}
                  alt={current.title}
                  loading={i < 6 ? 'eager' : 'lazy'}
                  decoding="async"
                  fetchPriority={i < 3 ? 'high' : 'auto'}
                />
              </button>
            ))}
          </div>

          {visibleCount < current.images.length ? (
            <button
              type="button"
              className="eventLoadMore"
              onClick={() => setVisibleCount((n) => n + 12)}
            >
              Load more photos
            </button>
          ) : null}
        </div>
      </section>

      {lightbox ? (
        <div className="eventLightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal>
          <img src={lightbox} alt="" onClick={(e) => e.stopPropagation()} decoding="async" />
          <button type="button" className="eventLightboxClose" onClick={() => setLightbox(null)}>
            Close
          </button>
        </div>
      ) : null}
    </>
  );
}

export default function EventsPage() {
  return (
    <main className="eventsPage">
      <SiteHeader />
      <section className="eventsPageHero">
        <div className="wrap">
          <h1>Events</h1>
          <p>Moments from Pnj Projects — celebrations, awards, festivals and milestones.</p>
        </div>
      </section>
      <Suspense fallback={<div className="wrap" style={{ padding: '40px 0', color: '#666' }}>Loading events…</div>}>
        <EventsContent />
      </Suspense>
      <SiteFooter />
    </main>
  );
}
