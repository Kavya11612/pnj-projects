'use client';

import { FormEvent, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { CHANNEL } from '../data';

export default function ChannelPartnerLeadPage() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="innerPage noPageHero">
      <SiteHeader active="channel" />
      <section className="channel channelTop">
        <div className="wrap channelGrid">
          <div>
            <p className="eyebrow">Channel Partner</p>
            <h2>Become a Channel Partner Lead?</h2>
            <p className="sectionLead light">
              Please Enter your Lead Information below to Register.
            </p>
          </div>
          {sent ? (
            <div className="thanks darkThanks">
              <p className="eyebrow">Received</p>
              <h3>Thank you for registering the lead.</h3>
              <p>Our channel partner team will contact you shortly.</p>
            </div>
          ) : (
            <form className="channelForm" onSubmit={onSubmit}>
              <h4>Lead Registration</h4>
              <div className="channelFormGrid">
                <label>
                  Sponsor ID
                  <input name="sponsorId" placeholder="Sponsor ID" required />
                </label>
                <label>
                  Customer Name
                  <input name="customerName" placeholder="Customer Name" required />
                </label>
                <label>
                  Customer Phone Number
                  <input name="customerPhone" type="tel" placeholder="Customer Phone Number" required />
                </label>
                <label>
                  Email
                  <input name="email" type="email" placeholder="Email" />
                </label>
                <label className="channelFull">
                  Project Interest In
                  <select name="project" defaultValue="" required>
                    <option value="" disabled>
                      Project Interested In
                    </option>
                    {CHANNEL.leadProjects.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="channelFull">
                  Reference by
                  <select name="referenceBy" defaultValue="" required>
                    <option value="" disabled>
                      Reference by
                    </option>
                    {CHANNEL.leadReferenceBy.map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <button type="submit">
                Submit <ArrowUpRight size={16} />
              </button>
            </form>
          )}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
