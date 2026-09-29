import Reveal from "../components/Reveal.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { PROJECTS } from "../data.js";

export default function Projects() {
  return (
    <div className="wrap">
      <Reveal><h1 className="page-title">Projects</h1>
        <p className="page-intro">Things I've built, pitched and shipped. Open one to see how it works.</p></Reveal>
      <div className="projects">{PROJECTS.map((p, i) => <ProjectCard key={p.id} p={p} delay={i * 120} />)}</div>
    </div>
  );
}
