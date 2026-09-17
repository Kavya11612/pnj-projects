'use client';

import { FormEvent, useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Phone, Send } from 'lucide-react';
import PageShell from '../components/PageShell';
import MailLink from '../components/MailLink';
import { COMPANY, MEDIA } from '../data';

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <PageShell active="contact" hideHero>
      <section className="cuPage">
        <div className="wrap">
          <div className="cuPanel">
            <header className="cuHead">
              <h1>
                Contact <span>us</span>
              </h1>
              <p>Get in touch with us for expert consultation on your real estate needs.</p>
            </header>

            <div className="cuGrid">
              <div className="cuFormCol">
                {sent ? (
                  <div className="cuThanks">
                    <h3>Thank you. We will be in touch shortly.</h3>
                    <p>Our team will get back to you soon.</p>
                  </div>
                ) : (
                  <form className="cuForm" onSubmit={onSubmit}>
                    <label>
                      <span>
                        Full name <em>*</em>
                      </span>
                      <input name="name" placeholder="Your full name" required />
                    </label>
                    <label>
                      <span>
                        Email address <em>*</em>
                      </span>
                      <input name="email" type="email" placeholder="your@email.com" required />
                    </label>
                    <label>
                      <span>
                        Phone number <em>*</em>
                      </span>
                      <input name="phone" type="tel" placeholder="+91" required />
                    </label>
                    <label>
                      <span>
                        Message <em>*</em>
                      </span>
                      <textarea name="message" rows={5} placeholder="How can we help you?" required />
                    </label>
                    <button type="submit">
                      <Send size={16} /> Send message
                    </button>
                  </form>
                )}
              </div>

              <aside className="cuInfoCol">
                <h2>Get in touch</h2>
                <p>We are here to assist you with all your real estate needs.</p>
                <div className="cuInfoList">
                  <a className="cuInfoCard" href={COMPANY.phoneHref}>
                    <span className="cuInfoIcon cuInfoPhone">
                      <Phone size={18} />
                    </span>
                    <span>
                      <small>Call us</small>
                      <strong>{COMPANY.phone}</strong>
                    </span>
                  </a>
                  <a
                    className="cuInfoCard"
                    href={COMPANY.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="cuInfoIcon cuInfoWa">
                      <WhatsAppIcon size={18} />
                    </span>
                    <span>
                      <small>WhatsApp</small>
                      <strong>Chat with us</strong>
                    </span>
                  </a>
                  <MailLink className="cuInfoCard" email={COMPANY.email}>
                    <span className="cuInfoIcon cuInfoMail">
                      <Mail size={18} />
                    </span>
                    <span>
                      <small>Email us</small>
                      <strong>{COMPANY.email}</strong>
                    </span>
                  </MailLink>
                  <div className="cuInfoCard">
                    <span className="cuInfoIcon cuInfoPin">
                      <MapPin size={18} />
                    </span>
                    <span>
                      <small>Visit us</small>
                      <strong>{COMPANY.address}</strong>
                    </span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="services wrap">
        <p className="eyebrow dark">Other services</p>
        <h2>
          Part of the <span>PNJ group.</span>
        </h2>
        <div className="serviceRow">
          <a href="https://pnjinteriors.com/" target="_blank" rel="noopener noreferrer" className="serviceCard">
            <img src={MEDIA.about} alt="PNJ Interiors" />
            <div>
              <small>Other services</small>
              <h3>PNJ Interiors</h3>
              <p>PNJ Interiors</p>
              <span>
                Visit pnjinteriors.com <ArrowUpRight size={15} />
              </span>
            </div>
          </a>
          <a href="https://pnjfinserv.com/" target="_blank" rel="noopener noreferrer" className="serviceCard">
            <img src={MEDIA.exterior} alt="PNJ Finserv" />
            <div>
              <small>Other services</small>
              <h3>PNJ Finserv</h3>
              <p>PNJ Finserv</p>
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
