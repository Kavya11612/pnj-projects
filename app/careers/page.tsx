'use client';

import { ArrowUpRight } from 'lucide-react';
import PageShell from '../components/PageShell';
import MailLink from '../components/MailLink';
import { CAREERS, COMPANY } from '../data';

export default function CareersPage() {
  return (
    <PageShell
      active="careers"
      title="Careers"
      lead="Work with a pioneer. PNJ Projects is an emerging player in the real estate industry with strong parentage."
    >
      <section className="careers wrap">
        <div className="sectionHead">
          <div>
            <p className="eyebrow dark">Join us</p>
            <h2>
              Work with a <span>pioneer.</span>
            </h2>
            <p className="sectionLead">
              Interested? Mail your resume to{' '}
              <MailLink email={COMPANY.hrEmail} subject="Job application - PNJ Projects">
                {COMPANY.hrEmail}
              </MailLink>
            </p>
          </div>
        </div>
        <div className="careerGrid">
          {CAREERS.map((job) => (
            <article key={job.role} className="careerCard">
              <small>
                {job.dept} · {job.exp}
              </small>
              <h3>{job.role}</h3>
              <p>{job.summary}</p>
              <ul>
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <MailLink className="textLink" email={COMPANY.hrEmail} subject={`Application - ${job.role}`}>
                Apply now <ArrowUpRight size={15} />
              </MailLink>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
