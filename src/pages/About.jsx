import Reveal from "../components/Reveal.jsx";
import { SKILLS, WINS } from "../data.js";

export default function About() {
  return (
    <div className="wrap">
      <Reveal><h1 className="page-title">About me</h1></Reveal>
      <div className="about-grid">
        <Reveal>
          <p>I'm an IT engineering student who sees code as a language for creation. I'm steadily mastering the
            fundamentals (Python, Java and C) alongside modern web tools like React, TypeScript and Tailwind CSS.</p>
          <p>What pulls me in is the "why" behind the logic. Every lab and personal project is a chance to turn a blank
            screen into a working solution. I'm looking to connect with mentors and peers who love clean code, smart design
            and big ideas.</p>
          <h2 style={{ fontSize: "1.6rem", margin: "2.4rem 0 1.3rem" }}>Skills</h2>
          {SKILLS.map(g => (
            <div className="skill-group" key={g.group}>
              <h3>{g.group}</h3>
              <ul className="tags">{g.items.map(s => <li key={s}>{s}</li>)}</ul>
            </div>
          ))}
        </Reveal>
        <div>
          <Reveal className="card" delay={100}>
            <h2>Highlights</h2>
            <ul className="wins">{WINS.map(w => <li key={w.title}><span className="ico" aria-hidden="true">{w.ico}</span>
              <div><strong>{w.title}</strong><span>{w.text}</span></div></li>)}</ul>
          </Reveal>
          <Reveal className="card" delay={200}>
            <h2>Education</h2>
            <dl className="edu">
              <dt>B.E. Information Technology</dt>
              <dd>Datta Meghe College of Engineering, Navi Mumbai · Direct second-year admission</dd>
              <dt>Higher Secondary (Science) · 85.25%</dt>
              <dd style={{ marginBottom: 0 }}>Seventh Day Adventist Higher Secondary School</dd>
            </dl>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
