import { Link, useParams } from "react-router";
import Reveal from "../components/Reveal.jsx";
import { useLightbox } from "../components/Lightbox.jsx";
import NotFound from "./NotFound.jsx";
import { PROJECTS } from "../data.js";

export default function ProjectDetail() {
  const { id } = useParams();
  const open = useLightbox();
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return <NotFound />;
  return (
    <div className="wrap">
      <Link className="back" to="/projects">← All projects</Link>
      <h1 className="page-title">{p.name}</h1>
      <p className="page-intro">{p.summary}</p>
      {p.link && <div className="cta-row" style={{ margin: "-1.2rem 0 2.5rem" }}>
        <a className="btn primary" href={p.link} target="_blank" rel="noopener">Visit live site ↗</a></div>}
      {p.image && <Reveal className="detail-hero"><img src={p.image} alt={p.name + " team presenting"} /></Reveal>}
      <div className="detail">
        <Reveal>
          <h2>What I did</h2>
          <ul className="points">{p.points.map((t, i) => <li key={i}>{t}</li>)}</ul>
        </Reveal>
        <Reveal delay={120} as="dl" className="aside">
          <dt>Role</dt><dd>{p.role}</dd>
          <dt>Built with</dt>
          <dd><ul className="tags">{p.stack.map(s => <li key={s}>{s}</li>)}</ul></dd>
          {p.proof.length > 0 && <>
            <dt>Evidence</dt>
            <dd style={{ display: "flex", gap: ".6rem", flexWrap: "wrap", marginTop: ".4rem" }}>
              {p.proof.map(src => <button key={src} className="proof" style={{ width: "110px" }}
                onClick={() => open({ src, caption: p.name })} aria-label={"View " + p.name + " image"}><img src={src} alt="" /></button>)}
            </dd>
          </>}
        </Reveal>
      </div>
    </div>
  );
}
