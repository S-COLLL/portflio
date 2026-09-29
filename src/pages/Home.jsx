import { Link } from "react-router";
import Reveal from "../components/Reveal.jsx";
import TypedHeadline from "../components/TypedHeadline.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import GalleryGrid from "../components/GalleryGrid.jsx";
import { IMG, PROJECTS, GALLERY, SKILLS } from "../data.js";

const STATS = [["1st", "place at Bid2Pitch"], ["3", "projects built & pitched"], ["2", "certified programmes"], ["6+", "AI & data tools used"]];

export default function Home() {
  const ticker = SKILLS.flatMap(g => g.items);
  return (
    <div>
      <div className="wrap">
        <section className="hero">
          <div className="blob b1"></div><div className="blob b2"></div><div className="blob b3"></div>
          <div>
            <div className="status"><span className="pulse"></span>Open to internships & collaborations</div>
            <TypedHeadline lines={["Code is my language", "for creation."]} />
            <p className="lead">I'm <strong>Shreya Konduskar</strong>, an IT engineering student at DMCE, Navi Mumbai.
              I build AI tools with Python and web apps with React, and I pitch the ideas behind them.</p>
            <div className="cta-row">
              <Link className="btn primary" to="/projects">View my work</Link>
              <Link className="btn ghost" to="/contact">Let's connect</Link>
            </div>
          </div>
          <div className="portrait">
            <div className="portrait-frame"><img src={IMG.miloPitch} alt="Shreya presenting Milo at the Eureka Pitching Competition" /></div>
            <div className="chip c1"><span className="dot" style={{ background: "color-mix(in srgb, var(--gold) 25%, transparent)" }}>🏆</span>
              <span>Bid2Pitch winner<small>Team Code Xperts</small></span></div>
            <div className="chip c2"><span className="dot" style={{ background: "color-mix(in srgb, var(--accent) 20%, transparent)" }}>🚀</span>
              <span>Techfest Ambassador<small>IIT Bombay 2026–27</small></span></div>
          </div>
        </section>

        <div className="stats">
          {STATS.map(([n, l], i) => (
            <Reveal key={l} delay={i * 90} className="stat"><strong className="grad-text">{n}</strong><span>{l}</span></Reveal>
          ))}
        </div>
      </div>

      <div className="ticker" aria-label="Skills">
        <div className="ticker-track">{[...ticker, ...ticker].map((s, i) => <span key={i}>{s}</span>)}</div>
      </div>

      <div className="wrap">
        <section className="section">
          <Reveal className="section-head">
            <h2>Featured work</h2>
            <Link className="more-link" to="/projects">All projects</Link>
          </Reveal>
          <div className="projects">{PROJECTS.slice(0, 3).map((p, i) => <ProjectCard key={p.id} p={p} delay={i * 120} />)}</div>
        </section>

        <section className="section">
          <Reveal className="section-head">
            <h2>Moments & milestones</h2>
            <Link className="more-link" to="/gallery">Open gallery</Link>
          </Reveal>
          <GalleryGrid items={GALLERY.slice(0, 3)} />
        </section>
      </div>
    </div>
  );
}
