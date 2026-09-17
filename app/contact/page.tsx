'use client';

import { FormEvent, useState } from 'react';
import { ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react';
import PageShell from '../components/PageShell';
import MailLink from '../components/MailLink';
import { COMPANY, MEDIA, SITE_VISIT_PROJECTS } from '../data';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <PageShell
      active="contact"
      title="Contact Us"
      lead="Book a site visit or reach our team for project guidance across Hyderabad."
    >
      <section className="contact">
        <div className="wrap contactGrid">
          <div>
            <p className="eyebrow">Schedule Site Visit</p>
            <h2>
              Book your
              <br />
              <em>site visit.</em>
            </h2>
            <p className="contactLead">{COMPANY.heroCopy}</p>
            <div className="contactCards">
              <a href={COMPANY.phoneHref}>
                <Phone size={16} />
                {COMPANY.phone}
              </a>
              <MailLink email={COMPANY.email}>
                <Mail size={16} />
                {COMPANY.email}
              </MailLink>
              <span>
                <MapPin size={16} />
                {COMPANY.address}
              </span>
            </div>
          </div>
          {sent ? (
            <div className="thanks">
              <p className="eyebrow dark">Received</p>
              <h3>Thank you. We will be in touch shortly.</h3>
              <p>Our team will confirm your site visit slot.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <label>
                Name
                <input name="name" required />
              </label>
              <label>
                Phone Number
                <input name="phone" required />
              </label>
              <label>
                Email
                <input name="email" type="email" required />
              </label>
              <label>
                Project Interest
                <select name="project" defaultValue={SITE_VISIT_PROJECTS[0]}>
                  {SITE_VISIT_PROJECTS.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </label>
              <label className="full">
                Message
                <textarea name="message" rows={3} placeholder="Preferred date / notes" />
              </label>
              <button type="submit">
                Schedule <ArrowUpRight size={16} />
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="services wrap">
        <p className="eyebrow dark">Other Services</p>
        <h2>
          Part of the <em>PNJ group.</em>
        </h2>
        <div className="serviceRow">
          <a href="https://pnjinteriors.com/" target="_blank" rel="noopener noreferrer" className="serviceCard">
            <img src={MEDIA.about} alt="PNJ Interiors" />
            <div>
              <small>Other Services</small>
              <h3>PNJ Interiors</h3>
              <p>PNJ INTERIORS</p>
              <span>
                Visit pnjinteriors.com <ArrowUpRight size={15} />
              </span>
            </div>
          </a>
          <a href="https://pnjfinserv.com/" target="_blank" rel="noopener noreferrer" className="serviceCard">
            <img src={MEDIA.exterior} alt="PNJ Finserv" />
            <div>
              <small>Other Services</small>
              <h3>PNJ Finserv</h3>
              <p>PNJ FINSERV</p>
              <span>
                Visit pnjfinserv.com <ArrowUpRight size={15} />
              </span>
            </div>
          </a>
        </div>
      </section>
    </PageShell>
  );
}
