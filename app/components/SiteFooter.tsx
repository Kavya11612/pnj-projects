'use client';

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { COMPANY } from '../data';
import MailLink from './MailLink';

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden fill="currentColor">
      <path d="M14 8.5h2.5V5.2c-.4-.1-1.6-.2-3-.2-3 0-5 1.8-5 5.2v2.3H5.8v3.6H8.5V22h3.6v-5.9h2.7l.5-3.6h-3.2v-2c0-1 .3-1.7 1.9-1.7z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconYoutube() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden fill="currentColor">
      <path d="M22.5 7.8a3.1 3.1 0 0 0-2.2-2.2C18.4 5.2 12 5.2 12 5.2s-6.4 0-8.3.4A3.1 3.1 0 0 0 1.5 7.8 32.6 32.6 0 0 0 1.1 12a32.6 32.6 0 0 0 .4 4.2 3.1 3.1 0 0 0 2.2 2.2c1.9.4 8.3.4 8.3.4s6.4 0 8.3-.4a3.1 3.1 0 0 0 2.2-2.2c.3-1.4.4-2.8.4-4.2a32.6 32.6 0 0 0-.4-4.2zM10 15.2V8.8l5.2 3.2L10 15.2z" />
    </svg>
  );
}

function IconLinkedin() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden fill="currentColor">
      <path d="M6.3 9.3H3.1V20.9h3.2V9.3zM4.7 3.1A1.9 1.9 0 1 0 4.7 6.9 1.9 1.9 0 0 0 4.7 3.1zM20.9 20.9h-3.2v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H10.6V9.3h3.1v1.6h.1c.4-.8 1.5-1.8 3.1-1.8 3.3 0 3.9 2.2 3.9 5v6.8z" />
    </svg>
  );
}

function IconX() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden fill="currentColor">
      <path d="M17.6 3.5h2.8l-6.1 7 7.2 9.5h-5.6l-4.4-5.7-5 5.7H3.6l6.5-7.5L3.2 3.5h5.8l4 5.2 4.6-5.2zm-1 15.2h1.5L7.5 5.1H5.8l10.8 13.6z" />
    </svg>
  );
}

const SOCIALS = [
  { href: COMPANY.social.facebook, label: 'Facebook', Icon: IconFacebook },
  { href: COMPANY.social.instagram, label: 'Instagram', Icon: IconInstagram },
  { href: COMPANY.social.youtube, label: 'YouTube', Icon: IconYoutube },
  { href: COMPANY.social.linkedin, label: 'LinkedIn', Icon: IconLinkedin },
  { href: COMPANY.social.x, label: 'X', Icon: IconX },
] as const;

export default function SiteFooter() {
  return (
    <>
      <footer>
        <div className="wrap footerGrid">
          <div>
            <Link className="logo footerLogo" href="/">
              <img src="/pnj-logo.png" alt="PNJ Projects" />
            </Link>
            <p>{COMPANY.about}</p>
            <div className="footerSocials">
              {SOCIALS.map(({ href, label, Icon }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          <div>
            <small>Contact</small>
            <p>
              <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
              <br />
              <MailLink email={COMPANY.email}>{COMPANY.email}</MailLink>
              <br />
              {COMPANY.address}
            </p>
          </div>
          <div>
            <small>Quick links</small>
            <p>
              <Link href="/projects">Projects</Link>
              <br />
              <Link href="/events">Events</Link>
              <br />
              <Link href="/careers">Careers</Link>
              <br />
              <Link href="/fractional">Fractional investment</Link>
              <br />
              <Link href="/contact">Contact</Link>
              <br />
              <a href="https://pnjinteriors.com/" target="_blank" rel="noopener noreferrer">
                PNJ Interiors
              </a>
              <br />
              <a href="https://pnjfinserv.com/" target="_blank" rel="noopener noreferrer">
                PNJ Finserv
              </a>
            </p>
          </div>
        </div>
        <div className="wrap footBottom">
          <span>{COMPANY.footerLegal}</span>
          <span>{COMPANY.companyLegal}</span>
        </div>
      </footer>
      <a className="wa" href={COMPANY.whatsapp} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
        <MessageCircle size={20} />
      </a>
    </>
  );
}
