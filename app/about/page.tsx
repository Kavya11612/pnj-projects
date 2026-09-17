'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import PageShell from '../components/PageShell';
import { COMPANY, FAQS, MD, MEDIA } from '../data';

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <PageShell
      active="about"
      title="About PNJ Projects"
      lead="A distinguished player in real estate, delivering innovative residential and commercial spaces for over two decades."
    >
      <section className="intro wrap">
        <div>
          <p className="eyebrow dark">Our strength</p>
          <p className="introLead">{COMPANY.about}</p>
        </div>
        <div className="introCopy">
          <img className="familyCutout" src={MEDIA.family} alt="PNJ family" />
          <a href="#md">Know more about PNJ Projects</a>
        </div>
        <div className="introImg">
          <img src={MEDIA.about} alt="PNJ Projects" />
        </div>
      </section>

      <section id="md" className="mdBlock wrap">
        <div className="mdCard">
          <div className="mdPortrait">
            <img src="/md-pavan-kumar.png" alt={MD.name} />
          </div>
          <div className="mdIdentity">
            <h3>{MD.name}</h3>
            <span className="mdLine" />
            <p>Managing director</p>
          </div>
        </div>
        <div className="mdCopy">
          <p className="eyebrow dark">MD message</p>
          <h2>{COMPANY.mdHeading}</h2>
          <blockquote>“{MD.quote}”</blockquote>
          <p className="mdWelcome">{MD.welcome}</p>
          {MD.paragraphs.map((p) => (
            <p key={p.slice(0, 28)}>{p}</p>
          ))}
        </div>
      </section>

      <section className="faqSection wrap">
        <div className="faqSectionHead">
          <h2>FAQ</h2>
        </div>

        <div className="faqPillList">
          {FAQS.map((item, i) => {
            const open = openFaq === i;
            const q = item.q.replace(/^\d+\.\s*/, '');
            return (
              <div key={item.q} className={`faqPill ${open ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faqPillHead"
                  onClick={() => setOpenFaq(open ? -1 : i)}
                  aria-expanded={open}
                >
                  <span>{q}</span>
                  <span className="faqPillIcon" aria-hidden>
                    {open ? <Minus size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      className="faqPillPanel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="faqPillBody">
                        <p>{item.a}</p>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
