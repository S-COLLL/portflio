import { Link } from "react-router";
import Reveal from "./Reveal.jsx";

export default function ProjectCard({ p, delay }) {
  return (
    <Reveal delay={delay}>
      <Link className="project" to={"/projects/" + p.id}>
        <div className="project-media" style={{ "--accent-bg": p.accentBg || "var(--line)" }}>
          {p.link && <span className="live-badge">Live site</span>}
          {p.image ? <img src={p.image} alt="" loading="lazy" /> : <div className="glyph" aria-hidden="true">{p.glyph}</div>}
        </div>
        <div className="project-body">
          <h3>{p.name}</h3>
          <div className="role">{p.role}</div>
          <p>{p.summary}</p>
          <ul className="tags">{p.stack.map(s => <li key={s}>{s}</li>)}</ul>
        </div>
      </Link>
    </Reveal>
  );
}
