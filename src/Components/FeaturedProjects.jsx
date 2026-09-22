import styled from "styled-components";
import { featuredProjects } from "../data/featuredProjects";
import { ProjectCard } from "./ProjectCard";

export function FeaturedProjects() {
  return (
    <Container>
      <section
        className="projects section"
        id="projects"
        aria-labelledby="projects-title"
      >
        <h2 className="section__title" id="projects-title">
          Featured Projects
        </h2>
        <p className="section__subtitle">
          Backend and cloud work first — Node.js, TypeScript, AWS, and SQL —
          with Flutter and Bluetooth Low Energy as a secondary focus.
        </p>
        <div className="projects__grid container grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </Container>
  );
}

const Container = styled.div`
  .projects__grid {
    gap: 2rem;
  }

  @media screen and (min-width: 1024px) {
    .projects__grid {
      gap: 2.5rem;
    }
  }
`;
