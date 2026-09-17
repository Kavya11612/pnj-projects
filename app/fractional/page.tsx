'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageShell from '../components/PageShell';
import { FRACTIONAL } from '../data';

export default function FractionalPage() {
  return (
    <PageShell
      active="fractional"
      title="Fractional Investment"
      lead="Own a share of real estate with PNJ Projects through our SPV investment model."
    >
      <section className="fractional wrap">
        <div className="fracSplit">
          <div className="fracCopy">
            <p className="eyebrow dark">Fractional Investment</p>
            <h2>
              Own a share of <em>real estate.</em>
            </h2>
            <p className="sectionLead">{FRACTIONAL.what}</p>
            <p className="sectionLead">{FRACTIONAL.how}</p>
            <p className="sectionLead">
              <strong>Investment term:</strong> {FRACTIONAL.term}
            </p>
            <div className="fracHighlightRow">
              <div className="fracCard">
                <h4>Investment value</h4>
                <ul>
                  <li>{FRACTIONAL.highlights[0]}</li>
                </ul>
              </div>
              <div className="fracCard">
                <h4>Investor security</h4>
                <ul>
                  <li>{FRACTIONAL.security[0]}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="fracVisual">
            <img
              src="/pnj-media/fractional-visual.png"
              alt="Fractional investment growth"
              decoding="async"
            />
          </div>
        </div>

        <div className="fracGrid">
          <div>
            <h4>Investment value</h4>
            <ul>
              {FRACTIONAL.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Investor security</h4>
            <ul>
              {FRACTIONAL.security.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Property types</h4>
            <ul>
              {FRACTIONAL.propertyTypes.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Returns</h4>
            <ul>
              {FRACTIONAL.returns.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="fracSteps">
          <h4>How to associate with PNJ Projects</h4>
          <ol>
            {FRACTIONAL.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <Link className="goldBtn" href="/contact">
            Enquire about fractional investment <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
