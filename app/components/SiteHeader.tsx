'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

type Active =
  | 'home'
  | 'about'
  | 'projects'
  | 'events'
  | 'careers'
  | 'channel'
  | 'fractional'
  | 'contact';

export default function SiteHeader({ active }: { active?: Active }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const current: Active =
    active ||
    (pathname === '/'
      ? 'home'
      : pathname.startsWith('/about')
        ? 'about'
        : pathname.startsWith('/projects')
          ? 'projects'
          : pathname.startsWith('/events')
            ? 'events'
            : pathname.startsWith('/careers')
              ? 'careers'
              : pathname.startsWith('/channel')
                ? 'channel'
                : pathname.startsWith('/fractional')
                  ? 'fractional'
                  : pathname.startsWith('/contact')
                    ? 'contact'
                    : 'home');

  const is = (key: Active) => (current === key ? 'navActive' : undefined);

  return (
    <header className="nav">
      <Link className="logo" href="/">
        <img src="/pnj-logo.png" alt="PNJ Projects" />
      </Link>
      <nav>
        <Link href="/" className={is('home')}>
          Home
        </Link>
        <div className="navDrop">
          <Link href="/about" className={is('about')}>
            About <ChevronDown size={14} />
          </Link>
          <div className="navDropMenu">
            <Link href="/about">About PNJ</Link>
            <Link href="/about#md">MD message</Link>
            <Link href="/contact">Contact us</Link>
          </div>
        </div>
        <div className="navDrop">
          <Link href="/projects" className={is('projects')}>
            Projects <ChevronDown size={14} />
          </Link>
          <div className="navDropMenu">
            <Link href="/projects">Ongoing projects</Link>
            <Link href="/projects">Layouts</Link>
            <Link href="/projects">Apartments</Link>
            <Link href="/projects">Villas</Link>
          </div>
        </div>
        <div className="navDrop">
          <Link href="/channel-partner" className={is('channel')}>
            Channel partner <ChevronDown size={14} />
          </Link>
          <div className="navDropMenu">
            <Link href="/channel-partner">Channel partner registration</Link>
            <Link href="/channel-partner-lead-registration">Channel partner lead registration</Link>
          </div>
        </div>
        <Link href="/events" className={is('events')}>
          Events
        </Link>
        <Link href="/careers" className={is('careers')}>
          Careers
        </Link>
        <div className="navDrop">
          <span className="navDropTrigger">
            Other services <ChevronDown size={14} />
          </span>
          <div className="navDropMenu">
            <a href="https://pnjinteriors.com/" target="_blank" rel="noopener noreferrer">
              PNJ Interiors
            </a>
            <a href="https://pnjfinserv.com/" target="_blank" rel="noopener noreferrer">
              PNJ Finserv
            </a>
          </div>
        </div>
        <Link href="/fractional" className={is('fractional')}>
          Fractional investment
        </Link>
        <Link href="/contact" className={is('contact')}>
          Contact
        </Link>
      </nav>
      <button className="menu" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div className="mobileNav" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {[
              ['/', 'Home'],
              ['/about', 'About'],
              ['/projects', 'Projects'],
              ['/events', 'Events'],
              ['/careers', 'Careers'],
              ['/channel-partner', 'Channel partner registration'],
              ['/channel-partner-lead-registration', 'Channel partner lead registration'],
              ['/fractional', 'Fractional investment'],
              ['/contact', 'Contact'],
            ].map(([href, label]) => (
              <Link key={href} href={href} onClick={close}>
                {label}
              </Link>
            ))}
            <a href="https://pnjinteriors.com/" target="_blank" rel="noopener noreferrer" onClick={close}>
              PNJ Interiors
            </a>
            <a href="https://pnjfinserv.com/" target="_blank" rel="noopener noreferrer" onClick={close}>
              PNJ Finserv
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
