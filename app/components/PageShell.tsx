'use client';

import { ReactNode } from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

export default function PageShell({
  children,
  active,
  title,
  lead,
}: {
  children: ReactNode;
  active?: Parameters<typeof SiteHeader>[0]['active'];
  title: string;
  lead?: string;
}) {
  return (
    <main className="innerPage">
      <SiteHeader active={active} />
      <section className="pageHero">
        <div className="wrap">
          <p className="eyebrow">PNJ Projects</p>
          <h1>{title}</h1>
          {lead ? <p className="pageHeroLead">{lead}</p> : null}
        </div>
      </section>
      {children}
      <SiteFooter />
    </main>
  );
}
