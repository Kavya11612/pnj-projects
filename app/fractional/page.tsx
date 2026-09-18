'use client';

import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CalendarDays,
  CircleDollarSign,
  Clock3,
  FileCheck2,
  Home,
  IndianRupee,
  Info,
  LandPlot,
  Percent,
  PieChart,
  ShieldCheck,
  TrendingUp,
  UserRound,
  Users,
  WalletCards,
} from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { MEDIA } from '../data';

const SUMMARY = [
  {
    Icon: CircleDollarSign,
    value: '₹10L',
    title: 'Minimum investment',
    note: 'INR 10,00,000 (Ten lakhs only)',
  },
  {
    Icon: Clock3,
    value: '36 months',
    title: 'Investment tenure',
    note: 'Fixed term',
  },
  {
    Icon: PieChart,
    value: '100 shares / SPV',
    title: 'Number of shares',
    note: 'In a single SPV',
  },
  {
    Icon: Home,
    value: '₹10 Cr',
    title: 'Property value',
    note: 'Total portfolio value of the SPV',
  },
];

const STEPS = [
  {
    Icon: UserRound,
    title: 'KYC online',
    note: 'Complete the KYC process by filling the required form.',
  },
  {
    Icon: WalletCards,
    title: 'Pay ₹10,000',
    note: 'Non-refundable registration amount to secure your position.',
  },
  {
    Icon: FileCheck2,
    title: 'Complete investment',
    note: 'Provide remaining amount within 2 months.',
  },
  {
    Icon: TrendingUp,
    title: 'Receive returns / exit',
    note: 'Get monthly dividends and exit at 36 months.',
  },
];

const JOURNEY = [
  { value: '₹10,00,000', label: 'Investment amount', sub: 'One time', Icon: IndianRupee },
  { value: '1%', label: 'Monthly dividend', sub: 'On investment amount', Icon: Percent },
  { value: 'Quarterly', label: 'Payouts', sub: 'Every 3 months', Icon: CalendarDays },
  { value: '₹16,40,000', label: 'Total on exit', sub: 'After 36 months', Icon: CircleDollarSign },
];

const SECURITY = [
  {
    Icon: FileCheck2,
    title: 'Share holder certificate',
    note: 'Issued to every allotted share.',
  },
  {
    Icon: ShieldCheck,
    title: 'Property registered to SPV',
    note: 'Legally owned by the SPV.',
  },
  {
    Icon: CalendarDays,
    title: 'Quarterly updates',
    note: 'On the registered property will be provided to all shareholders.',
  },
  {
    Icon: Users,
    title: 'Top 2 investors as directors',
    note: 'Directors in the SPV company.',
  },
];

const TYPES = [
  { label: 'Lands', image: '/pnj-media/plot-02.jpg', Icon: LandPlot },
  { label: 'Commercial properties', image: MEDIA.exterior, Icon: Building2 },
  { label: 'Villas', image: '/pnj-media/villa-02.jpg', Icon: Home },
  { label: 'Apartments', image: '/pnj-media/marvella.jpg', Icon: Building2 },
];

export default function FractionalPage() {
  return (
    <main className="fracPage">
      <SiteHeader active="fractional" />

      <section className="fracHero">
        <div className="fracHeroGlow" aria-hidden />
        <div className="wrap fracHeroGrid">
          <div className="fracHeroCopy">
            <p className="fracLabel">Fractional investment</p>
            <h1>Own a share of real estate.</h1>
            <p>
              Fractional investing allows you to own a fraction or a share of an asset. A simple way
              to invest in high-value real estate, together.
            </p>
            <Link className="fracCta" href="#summary">
              Explore investment <ArrowRight size={16} />
            </Link>
          </div>
          <div className="fracHeroVisual">
            <div className="fracHeroFrame">
              <div className="fracHeroImgWrap">
                <img src="/pnj-media/fractional-visual.jpg" alt="Real estate investment" decoding="async" />
              </div>
              <span className="fracHeroBadge">
                <TrendingUp size={14} /> Real estate
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="summary" className="fracSection">
        <div className="wrap">
          <div className="fracSectionHead">
            <p className="fracLabel">Investment summary</p>
            <h2>Key numbers at a glance.</h2>
            <p>A transparent structure designed for smart investors.</p>
          </div>
          <div className="fracSummaryGrid">
            {SUMMARY.map(({ Icon, value, title, note }) => (
              <article key={title} className="fracSumCard">
                <span className="fracIcon">
                  <Icon size={22} />
                </span>
                <strong>{value}</strong>
                <h3>{title}</h3>
                <p>{note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fracSection fracSectionAlt">
        <div className="wrap">
          <div className="fracSectionHead">
            <p className="fracLabel">How it works</p>
            <h2>Simple steps to get started.</h2>
            <p>A smooth and transparent process, from registration to returns.</p>
          </div>
          <div className="fracStepsRow">
            {STEPS.map(({ Icon, title, note }, i) => (
              <div key={title} className="fracStep">
                <div className="fracStepIcon">
                  <Icon size={22} />
                </div>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{note}</p>
                {i < STEPS.length - 1 ? <i className="fracStepArrow" aria-hidden /> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fracSection">
        <div className="wrap">
          <div className="fracSectionHead">
            <p className="fracLabel">Your investment journey</p>
            <h2>Example returns (as per offer terms).</h2>
            <p>
              This is an illustrative example to help you understand the potential flow. Returns are
              not guaranteed.
            </p>
          </div>
          <div className="fracJourneyBox">
            <div className="fracJourney">
              {JOURNEY.map(({ value, label, sub, Icon }) => (
                <div key={label} className="fracJourneyItem">
                  <span className="fracIcon">
                    <Icon size={20} />
                  </span>
                  <strong>{value}</strong>
                  <h3>{label}</h3>
                  <p>{sub}</p>
                </div>
              ))}
            </div>
            <div className="fracDisclaimer">
              <Info size={16} />
              These returns are stated as an example in the offer terms and are not guaranteed.
            </div>
          </div>
        </div>
      </section>

      <section className="fracSection fracSectionAlt">
        <div className="wrap">
          <div className="fracSectionHead">
            <p className="fracLabel">Investor security</p>
            <h2>Your investment, our priority.</h2>
            <p>Built on transparency, legal structure and strong governance.</p>
          </div>
          <div className="fracSummaryGrid">
            {SECURITY.map(({ Icon, title, note }) => (
              <article key={title} className="fracSumCard">
                <span className="fracIcon">
                  <Icon size={22} />
                </span>
                <h3>{title}</h3>
                <p>{note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fracSection">
        <div className="wrap">
          <div className="fracSectionHead">
            <p className="fracLabel">Property types</p>
            <h2>Diversified real estate, one opportunity.</h2>
            <p>We invest across high-quality asset classes to create long-term value.</p>
          </div>
          <div className="fracTypesGrid">
            {TYPES.map(({ label, image, Icon }) => (
              <article key={label} className="fracTypeCard">
                <img src={image} alt={label} loading="lazy" decoding="async" />
                <span>
                  <Icon size={14} /> {label}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fracCtaBand">
        <div className="wrap fracCtaInner">
          <svg className="fracSkyline" viewBox="0 0 120 48" aria-hidden>
            <path
              d="M4 44V28h10v16M18 44V18h12v26M34 44V24h8v20M46 44V12h14v32M64 44V22h10v22M78 44V8h16v36M98 44V26h10v18M112 44V30h6v14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <div>
            <h2>Build wealth through real estate.</h2>
            <p>Join Pnj Projects and be a part of our growth story.</p>
          </div>
          <Link className="fracCta" href="/contact">
            Explore investment <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
