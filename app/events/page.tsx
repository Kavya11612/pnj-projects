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
  const current = useMemo(() => EVENTS.find((e) => e.slug === active) ?? EVENTS[0], [active]);

  useEffect(() => {
    if (tabParam && EVENTS.some((e) => e.slug === tabParam)) setActive(tabParam);
  }, [tabParam]);

  return (
    <>
      <section className="wrap eventsPageBody">
        <div className="eventTabs" role="tablist" aria-label="PNJ Events">
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
              <p className="eyebrow dark">{current.date || 'PNJ Projects'}</p>
              <h2>{current.note}</h2>
            </div>
            <Link className="goldBtn" href="/contact">
              Book a site visit <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="eventGallery">
            {current.images.map((src) => (
              <button key={src} type="button" className="eventGalleryItem" onClick={() => setLightbox(src)}>
                <img src={src} alt={current.title} loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox ? (
        <div className="eventLightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal>
          <img src={lightbox} alt="" onClick={(e) => e.stopPropagation()} />
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
          <p className="eyebrow">Events</p>
          <h1>Events</h1>
          <p>Moments from PNJ Projects — celebrations, awards, festivals and milestones.</p>
        </div>
      </section>
      <Suspense fallback={<div className="wrap" style={{ padding: '40px 0', color: '#666' }}>Loading events…</div>}>
        <EventsContent />
      </Suspense>
      <SiteFooter />
    </main>
  );
}
