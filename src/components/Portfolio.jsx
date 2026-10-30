
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
import "./Portfolio.css";
import Reveal from "./Reveal";

function Portfolio() {
  return (
    <section className="portfolio section-padding" id="work">
      <Reveal>
        <div className="section-heading portfolio__heading">
          <p className="section-eyebrow">SELECTED PROJECTS</p>

          <h2>Work that tells a story.</h2>

          <p>
            A selection of editing styles, formats, and creative approaches.
          </p>
        </div>
      </Reveal>

      <div className="portfolio__grid">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.12}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <p className="portfolio__note">
          Some professional projects are subject to confidentiality restrictions.
          Only approved work is displayed here.
        </p>
      </Reveal>
    </section>
  );
}

export default Portfolio;
