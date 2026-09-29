import Reveal from "../components/Reveal.jsx";
import { useLightbox } from "../components/Lightbox.jsx";
import { EXPERIENCE } from "../data.js";

export default function Experience() {
  const open = useLightbox();
  return (
    <div className="wrap">
      <Reveal><h1 className="page-title">Experience</h1>
        <p className="page-intro">Roles where I've learned by doing, most recent first. Tap a certificate to view it.</p></Reveal>
      <ol className="timeline">
        {EXPERIENCE.map((e, i) => (
          <Reveal as="li" key={i} delay={i * 80}>
            <div className="tl-card">
              <div>
                <span className="when">{e.when}</span>
                <h3>{e.title}</h3>
                <div className="org">{e.org}</div>
                <p>{e.text}</p>
                {e.link && <a className="more-link" href={e.link} target="_blank" rel="noopener"
                  style={{ display: "inline-block", marginTop: ".7rem" }}>See the live site ↗</a>}
              </div>
              {e.proof && <button className="proof" onClick={() => open(e.proof)} aria-label={"View " + e.proof.caption}>
                <img src={e.proof.src} alt="" loading="lazy" /></button>}
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
