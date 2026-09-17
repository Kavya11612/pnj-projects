'use client';

import { FormEvent, useState } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import PageShell from '../components/PageShell';
import { CHANNEL, COMPANY, SITE_VISIT_PROJECTS } from '../data';

export default function ChannelPartnerPage() {
  const [partnerSent, setPartnerSent] = useState(false);
  const onPartnerSubmit = (e: FormEvent) => {
    e.preventDefault();
    setPartnerSent(true);
  };

  return (
    <PageShell active="channel" title="Channel Partner" lead={CHANNEL.body}>
      <section className="channel">
        <div className="wrap channelGrid">
          <div>
            <p className="eyebrow">Channel Partner</p>
            <h2>{CHANNEL.title}</h2>
            <p className="sectionLead light">{CHANNEL.body}</p>
            <p className="channelAddress">
              <MapPin size={16} /> {COMPANY.address}
            </p>
          </div>
          {partnerSent ? (
            <div className="thanks darkThanks">
              <p className="eyebrow">Received</p>
              <h3>Thank you for registering.</h3>
              <p>Our channel partner team will contact you shortly.</p>
            </div>
          ) : (
            <form className="channelForm" onSubmit={onPartnerSubmit}>
              <h4>Channel / Lead Registration</h4>
              <label>
                Full name
                <input name="name" required />
              </label>
              <label>
                Phone
                <input name="phone" required />
              </label>
              <label>
                Email
                <input name="email" type="email" required />
              </label>
              <label>
                Project interest
                <select name="project" defaultValue={SITE_VISIT_PROJECTS[0]}>
                  {SITE_VISIT_PROJECTS.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </label>
              <label>
                Message / Sponsor ID
                <input name="note" placeholder="Optional" />
              </label>
              <button type="submit">
                Submit registration <ArrowUpRight size={16} />
              </button>
            </form>
          )}
        </div>
      </section>
    </PageShell>
  );
}
