'use client';

import { FormEvent, useState } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { CHANNEL, COMPANY } from '../data';

export default function ChannelPartnerPage() {
  const [partnerSent, setPartnerSent] = useState(false);
  const onPartnerSubmit = (e: FormEvent) => {
    e.preventDefault();
    setPartnerSent(true);
  };

  return (
    <main className="innerPage noPageHero">
      <SiteHeader active="channel" />
      <section className="channel channelTop">
        <div className="wrap channelGrid">
          <div>
            <h2>{CHANNEL.title}</h2>
            <p className="sectionLead light">{CHANNEL.body}</p>
            <p className="channelHint">Please fill and submit the channel registration form</p>
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
              <h4>Channel registration form</h4>
              <div className="channelFormGrid">
                <label>
                  <span className="fieldLabel">
                    Name <span className="reqStar">*</span>
                  </span>
                  <input name="name" placeholder="Name" required />
                </label>
                <label>
                  <span className="fieldLabel">Email</span>
                  <input name="email" type="email" placeholder="Email" required />
                </label>
                <label>
                  <span className="fieldLabel">
                    Phone <span className="reqStar">*</span>
                  </span>
                  <input name="phone" type="tel" placeholder="Phone" required />
                </label>
                <label>
                  <span className="fieldLabel">
                    Company name <span className="reqStar">*</span>
                  </span>
                  <input name="company" placeholder="Company name" required />
                </label>
                <label className="channelFull">
                  <span className="fieldLabel">Registered address</span>
                  <input name="address" placeholder="Registered address" required />
                </label>
                <label>
                  <span className="fieldLabel">Referred by</span>
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
                  <span className="fieldLabel">Aadhar number</span>
                  <input name="aadhar" type="number" placeholder="Aadhar number" />
                </label>
                <label>
                  <span className="fieldLabel">PAN number</span>
                  <input name="pan" placeholder="PAN number" />
                </label>
                <label>
                  <span className="fieldLabel">Type of business</span>
                  <select name="businessType" defaultValue="" required>
                    <option value="" disabled>
                      Type of business
                    </option>
                    {CHANNEL.businessTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  <span className="fieldLabel">RERA</span>
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
      <SiteFooter />
    </main>
  );
}
