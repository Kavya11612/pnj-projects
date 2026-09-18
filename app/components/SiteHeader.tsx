'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

type Active =
  | 'home'
  | 'about'
  | 'projects'
  | 'events'
  | 'careers'
  | 'channel'
  | 'fractional'
  | 'reviews'
  | 'contact';

type NavKey = Active | 'services';

export default function SiteHeader({ active }: { active?: Active }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<NavKey | null>(null);
  const [lime, setLime] = useState({ left: 0, width: 0, ready: false });
  const navRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<Record<string, HTMLElement | null>>({});
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
                  : pathname.startsWith('/reviews')
                    ? 'reviews'
                    : pathname.startsWith('/contact')
                      ? 'contact'
                      : 'home');

  const focusKey: NavKey = hovered ?? current;
  const is = (key: NavKey) => (focusKey === key ? 'navActive' : undefined);

  const moveLimeTo = useCallback((key: NavKey) => {
    const el = itemRefs.current[key];
    const nav = navRef.current;
    if (!el || !nav) return;
    const navBox = nav.getBoundingClientRect();
    const box = el.getBoundingClientRect();
    const left = box.left - navBox.left;
    const width = box.width;
    setLime((prev) =>
      prev.ready && prev.left === left && prev.width === width
        ? prev
        : { left, width, ready: true }
    );
  }, []);

  useEffect(() => {
    moveLimeTo(focusKey);
  }, [focusKey, pathname, moveLimeTo]);

  useEffect(() => {
    let raf = 0;
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => moveLimeTo(focusKey));
    };
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, [focusKey, moveLimeTo]);

  const setRef = (key: NavKey) => (node: HTMLElement | null) => {
    itemRefs.current[key] = node;
  };

  const hoverHandlers = (key: NavKey) => ({
    onMouseEnter: () => setHovered(key),
    onFocus: () => setHovered(key),
  });

  return (
    <header className="nav">
      <Link className="logo" href="/">
        <img src="/pnj-logo.png" alt="Pnj Projects" />
      </Link>

      <nav
        className="limelightNav"
        ref={navRef}
        onMouseLeave={() => setHovered(null)}
      >
        <span
          className={`limelight${lime.ready ? ' on' : ''}`}
          aria-hidden
          style={
            lime.ready
              ? { transform: `translate3d(${lime.left}px,0,0)`, width: lime.width }
              : undefined
          }
        />

        <Link
          href="/"
          className={is('home')}
          ref={setRef('home')}
          prefetch
          {...hoverHandlers('home')}
        >
          Home
        </Link>

        <div className="navDrop" ref={setRef('about')} {...hoverHandlers('about')}>
          <Link href="/about" className={is('about')} prefetch>
            About <ChevronDown size={14} />
          </Link>
          <div className="navDropMenu">
            <Link href="/about">About Pnj</Link>
            <Link href="/about#md">MD message</Link>
            <Link href="/contact">Contact us</Link>
          </div>
        </div>

        <div className="navDrop" ref={setRef('projects')} {...hoverHandlers('projects')}>
          <Link href="/projects" className={is('projects')} prefetch>
            Projects <ChevronDown size={14} />
          </Link>
          <div className="navDropMenu">
            <Link href="/projects">Ongoing projects</Link>
            <Link href="/projects">Layouts</Link>
            <Link href="/projects">Apartments</Link>
            <Link href="/projects">Villas</Link>
          </div>
        </div>

        <div className="navDrop" ref={setRef('channel')} {...hoverHandlers('channel')}>
          <Link href="/channel-partner" className={is('channel')} prefetch>
            Channel partner <ChevronDown size={14} />
          </Link>
          <div className="navDropMenu">
            <Link href="/channel-partner">Channel partner registration</Link>
            <Link href="/channel-partner-lead-registration">Channel partner lead registration</Link>
          </div>
        </div>

        <Link
          href="/events"
          className={is('events')}
          ref={setRef('events')}
          prefetch
          {...hoverHandlers('events')}
        >
          Events
        </Link>
        <Link
          href="/careers"
          className={is('careers')}
          ref={setRef('careers')}
          prefetch
          {...hoverHandlers('careers')}
        >
          Careers
        </Link>

        <div className="navDrop" ref={setRef('services')} {...hoverHandlers('services')}>
          <span className={`navDropTrigger ${is('services') || ''}`}>
            Other services <ChevronDown size={14} />
          </span>
          <div className="navDropMenu">
            <a href="https://pnjinteriors.com/" target="_blank" rel="noopener noreferrer">
              Pnj Interiors
            </a>
            <a href="https://pnjfinserv.com/" target="_blank" rel="noopener noreferrer">
              Pnj Finserv
            </a>
          </div>
        </div>

        <Link
          href="/fractional"
          className={is('fractional')}
          ref={setRef('fractional')}
          prefetch
          {...hoverHandlers('fractional')}
        >
          Fractional investment
        </Link>
        <Link
          href="/reviews"
          className={is('reviews')}
          ref={setRef('reviews')}
          prefetch
          {...hoverHandlers('reviews')}
        >
          Reviews
        </Link>
        <Link
          href="/contact"
          className={is('contact')}
          ref={setRef('contact')}
          prefetch
          {...hoverHandlers('contact')}
        >
          Contact
        </Link>
      </nav>

      <button className="menu" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open ? (
        <div className="mobileNav">
          {[
            ['/', 'Home'],
            ['/about', 'About'],
            ['/projects', 'Projects'],
            ['/events', 'Events'],
            ['/careers', 'Careers'],
            ['/channel-partner', 'Channel partner registration'],
            ['/channel-partner-lead-registration', 'Channel partner lead registration'],
            ['/fractional', 'Fractional investment'],
            ['/reviews', 'Reviews'],
            ['/contact', 'Contact'],
          ].map(([href, label]) => (
            <Link key={href} href={href} onClick={close} prefetch>
              {label}
            </Link>
          ))}
          <a href="https://pnjinteriors.com/" target="_blank" rel="noopener noreferrer" onClick={close}>
            Pnj Interiors
          </a>
          <a href="https://pnjfinserv.com/" target="_blank" rel="noopener noreferrer" onClick={close}>
            Pnj Finserv
          </a>
        </div>
      ) : null}
    </header>
  );
}
