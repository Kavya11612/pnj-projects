import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Download, MapPin } from 'lucide-react';
import { COMPANY } from '../../data';
import { getProject, PROJECT_DETAILS } from '../../projects-data';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

export function generateStaticParams() {
  return PROJECT_DETAILS.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <main className="projectDetail">
      <SiteHeader active="projects" />
      <section className="projectHero">
        <img src={project.image} alt={project.name} className="projectHeroImg" />
        <div className="projectHeroShade" />
        <div className="wrap projectHeroContent">
          <p className="eyebrow">{project.type}</p>
          <h1>{project.name}</h1>
          <p className="projectHeroLoc">
            <MapPin size={16} /> {project.location}
          </p>
          <div className="actions">
            {project.brochure ? (
              <a className="goldBtn" href={project.brochure} target="_blank" rel="noreferrer">
                Download Brochure <Download size={16} />
              </a>
            ) : null}
            <a className="goldBtn" href="/contact">
              Request Site Visit <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="wrap projectOverview">
        <div>
          <p className="eyebrow dark">Project Overview</p>
          <h2>About {project.name}</h2>
          <p>{project.overview}</p>
          {project.stats?.length ? (
            <div className="projectStats">
              {project.stats.map((s) => (
                <div key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          ) : null}
          {project.brochure ? (
            <a className="goldBtn" href={project.brochure} target="_blank" rel="noreferrer" style={{ marginTop: 28 }}>
              Download Brochure <Download size={16} />
            </a>
          ) : null}
        </div>
        <aside className="projectSide">
          <p className="projectSideEyebrow">Quick info</p>
          <h3>Project at a glance</h3>
          <p className="projectSideLoc">
            <MapPin size={14} /> {project.location}
          </p>
          <p>{project.summary}</p>
          <a className="goldBtn projectSideCall" href={COMPANY.phoneHref}>
            Call {COMPANY.phone}
          </a>
        </aside>
      </section>

      {project.highlights.length ? (
        <section className="projectHighlights">
          <div className="wrap">
            <p className="eyebrow">Project Highlights</p>
            <h2>Amenities & features</h2>
            <ul className="highlightGrid">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {project.layoutImage ? (
        <section className="wrap projectLayout">
          <p className="eyebrow dark">Project Layout</p>
          <h2>Site / master plan</h2>
          <div className="layoutFrame">
            <img src={project.layoutImage} alt={`${project.name} layout`} />
          </div>
        </section>
      ) : null}

      {project.locationHighlights?.length ? (
        <section className="wrap projectLocBlocks">
          <p className="eyebrow dark">Location Highlights</p>
          <h2>Connectivity & neighbourhood</h2>
          <div className="locGrid">
            {project.locationHighlights.map((block) => (
              <div key={block.title}>
                <h3>{block.title}</h3>
                <ul>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {project.mapEmbed ? (
        <section className="wrap projectMap">
          <p className="eyebrow dark">Project PIN Location</p>
          <h2>Find us on the map</h2>
          <div className="mapFrame">
            <iframe title={`${project.name} map`} src={project.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </section>
      ) : null}

      <section className="projectCta">
        <div className="wrap">
          <h2>Request a site visit</h2>
          <p>Experience {project.name} in person. Our team will guide you through the site, layout and investment options.</p>
          <div className="actions">
            <a className="goldBtn" href="/contact">
              Book a site visit <ArrowUpRight size={16} />
            </a>
            <Link className="lineBtn" href="/projects">
              Back to all projects
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
