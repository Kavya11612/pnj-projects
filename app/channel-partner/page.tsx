'use client';

import { FormEvent, useState } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import PageShell from '../components/PageShell';
import { CHANNEL, COMPANY } from '../data';

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
            <p className="channelHint">Please Fill and Submit the Channel Registration Form</p>
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
              <h4>Channel Registration Form</h4>
              <div className="channelFormGrid">
                <label>
                  Name
                  <input name="name" placeholder="Name" required />
                </label>
                <label>
                  Email
                  <input name="email" type="email" placeholder="Email" required />
                </label>
                <label>
                  Phone
                  <input name="phone" type="tel" placeholder="Phone" required />
                </label>
                <label>
                  Company Name
                  <input name="company" placeholder="Company Name" />
                </label>
                <label className="channelFull">
                  Registered Address
                  <input name="address" placeholder="Registered Address" required />
                </label>
                <label>
                  Referred by
                  <select name="referredBy" defaultValue="">
                    <option value="" disabled>
                      Referred by
                    </option>
                    {CHANNEL.referredBy.map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Aadhar Number
                  <input name="aadhar" type="number" placeholder="Aadhar Number" />
                </label>
                <label>
                  PAN Number
                  <input name="pan" placeholder="PAN Number" />
                </label>
                <label>
                  Type of Business
                  <select name="businessType" defaultValue="" required>
                    <option value="" disabled>
                      Type of Business
                    </option>
                    {CHANNEL.businessTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  RERA
                  <input name="rera" placeholder="RERA" />
                </label>
              </div>
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
