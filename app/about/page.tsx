'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
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
          <p className="eyebrow dark">Our Strength</p>
          <p className="introLead">{COMPANY.about}</p>
        </div>
        <div className="introCopy">
          <img className="familyCutout" src={MEDIA.family} alt="PNJ family" />
          <a href="#md">
            Know more about PNJ Projects
          </a>
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
            <p>Managing Director</p>
          </div>
        </div>
        <div className="mdCopy">
          <p className="eyebrow dark">MD Message</p>
          <h2>{COMPANY.mdHeading}</h2>
          <blockquote>“{MD.quote}”</blockquote>
          <p className="mdWelcome">{MD.welcome}</p>
          {MD.paragraphs.map((p) => (
            <p key={p.slice(0, 28)}>{p}</p>
          ))}
        </div>
      </section>

      <section className="faq wrap">
        <div>
          <p className="eyebrow dark">Know more about PNJ Projects</p>
          <h2>Know more about PNJ Projects</h2>
          <p className="sectionLead">{COMPANY.about}</p>
          <h3 className="faqSub">{COMPANY.mdHeading}</h3>
          <p className="sectionLead">
            <strong>PNJ Projects</strong>
            <br />
            {COMPANY.landmark}
          </p>
        </div>
        <div className="faqList">
          {FAQS.map((item, i) => (
            <button
              key={item.q}
              type="button"
              className={`faqItem ${openFaq === i ? 'open' : ''}`}
              onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
            >
              <span>{item.q}</span>
              <ChevronDown size={18} />
              {openFaq === i && <p>{item.a}</p>}
            </button>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
