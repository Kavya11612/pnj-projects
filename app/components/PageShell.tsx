'use client';

import { ReactNode } from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

export default function PageShell({
  children,
  active,
  title,
  lead,
  hideHero,
}: {
  children: ReactNode;
  active?: Parameters<typeof SiteHeader>[0]['active'];
  title?: string;
  lead?: string;
  hideHero?: boolean;
}) {
  return (
    <main className={`innerPage${hideHero ? ' noPageHero' : ''}`}>
      <SiteHeader active={active} />
      {!hideHero && title ? (
        <section className="pageHero">
          <div className="wrap">
            {!/pnj projects/i.test(title) ? <p className="eyebrow">PNJ Projects</p> : null}
            <h1>{title}</h1>
            {lead ? <p className="pageHeroLead">{lead}</p> : null}
          </div>
        </section>
      ) : null}
      {children}
      <SiteFooter />
    </main>
  );
}
