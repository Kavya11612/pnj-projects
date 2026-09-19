'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { APPROACH, COMPANY, MEDIA, SITE_VISIT_PROJECTS } from './data';
import { EVENTS } from './events-data';
import HomeHero from './components/HomeHero';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';

const fade = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquirySent, setEnquirySent] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setEnquiryOpen(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = enquiryOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [enquiryOpen]);

  const onEnquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    setEnquirySent(true);
  };

  return (
    <main>
      <AnimatePresence>
        {enquiryOpen && (
          <motion.div
            className="enquiryOverlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setEnquiryOpen(false)}
          >
            <motion.div
              className="enquiryModal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="enquiry-title"
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="enquiryClose" type="button" aria-label="Close" onClick={() => setEnquiryOpen(false)}>
                <X size={20} />
              </button>
              <div className="enquiryVisual">
                <img src={MEDIA.about} alt="" />
                <div>
                  <img className="enquiryBrand" src="/pnj-logo.png" alt="Pnj Projects" />
                  <h3 id="enquiry-title">Tell us what you are looking for.</h3>
                </div>
              </div>
              <div className="enquiryBody">
                {enquirySent ? (
                  <div className="enquiryThanks">
                    <p className="eyebrow dark">Received</p>
                    <h4>Thank you. Our team will call you shortly.</h4>
                    <p>A Pnj advisor typically responds within one working day.</p>
                    <button type="button" className="goldBtn" onClick={() => setEnquiryOpen(false)}>
                      Continue browsing <ArrowUpRight size={16} />
                    </button>
                  </div>
                ) : (
                  <form className="enquiryForm" onSubmit={onEnquirySubmit}>
                    <p className="eyebrow dark">Quick enquiry</p>
                    <h4>Get project details & visit slots</h4>
                    <label>
                      Full name
                      <input name="name" required placeholder="Your name" />
                    </label>
                    <label>
                      Phone
                      <input name="phone" required placeholder="+91" />
                    </label>
                    <label>
                      Email
                      <input name="email" type="email" placeholder="you@email.com" />
                    </label>
                    <label>
                      Project interest
                      <select name="interest" defaultValue={SITE_VISIT_PROJECTS[0]}>
                        {SITE_VISIT_PROJECTS.map((p) => (
                          <option key={p}>{p}</option>
                        ))}
                      </select>
                    </label>
                    <button type="submit">
                      Submit <ArrowUpRight size={16} />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <SiteHeader active="home" />

      <HomeHero />

      <div className="ticker" aria-hidden>
        <div>
          {Array.from({ length: 2 }).map((_, i) => (
            <p key={i}>
              Layouts <span>/</span> Apartments <span>/</span> Villas <span>/</span> Fractional investment <span>/</span> Channel partners{' '}
              <span>/</span> Interiors <span>/</span> Finserv <span>/</span>
            </p>
          ))}
        </div>
      </div>

      <section className="intro wrap">
        <div>
          <p className="introLead">{COMPANY.about}</p>
        </div>
        <div className="introCopy">
          <img className="familyCutout" src={MEDIA.family} alt="Pnj family" />
          <Link href="/about">
            Know more about Pnj Projects <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="introImg">
          <img src={MEDIA.about} alt="Pnj Projects" />
        </div>
      </section>

      <section className="values">
        <div className="wrap">
          <div className="approachHead">
            <h2>Building more than properties.</h2>
            <span className="approachRule" aria-hidden />
          </div>
          <div className="valueGrid three">
            {APPROACH.map((s) => (
              <Value key={s.n} n={s.n} t={s.t} d={s.d} image={s.image} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="types">
        <div className="wrap">
          <div className="sectionHead projectsHead">
            <h2 className="typesTitle">
              Layouts, apartments & <span>villas.</span>
            </h2>
            <Link className="goldBtn" href="/projects">
              View all projects <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="typeList">
            {[
              ['Villas', '/pnj-media/villa-02.jpg'],
              ['Apartments', '/pnj-media/marvella.jpg'],
            ].map(([t, img]) => (
              <Link className="type" href="/projects" key={t}>
                <img src={img} alt={t} />
                <div>
                  <h3>{t}</h3>
                </div>
                <ArrowUpRight />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="events">
        <div className="wrap">
          <div className="sectionHead projectsHead">
            <div>
              <h2>Events</h2>
            </div>
            <Link className="goldBtn" href="/events">
              View all galleries <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="eventGrid">
            {EVENTS.map((ev) => (
              <Link key={ev.slug} className="eventCard" href={`/events?tab=${ev.slug}`}>
                <img src={ev.cover} alt={ev.title} loading="lazy" decoding="async" />
                <div>
                  <small>{ev.date || 'Pnj Events'}</small>
                  <h3>{ev.title}</h3>
                  <p>{ev.note}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function Value({ n, t, d, image }: { n: string; t: string; d: string; image: string }) {
  return (
    <div className="value">
      <span className="valueNum">{n}</span>
      <h3>{t}</h3>
      <div className="valueMedia">
        <img src={image} alt={t} decoding="async" />
      </div>
      <p>{d}</p>
    </div>
  );
}
