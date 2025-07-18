import './Projects.css';
import { projects } from '../projectsData/projectsData';

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2>Projects</h2>
    <div className="projects-grid">
      {projects.map(({ title, description, imageUrl, link }, i) => (
        <div key={i} className="projects-item">
          <img src={imageUrl} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
          {stack && (
            <ul className="project-stack">
              {stack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          )}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              VIEW PROJECT
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
