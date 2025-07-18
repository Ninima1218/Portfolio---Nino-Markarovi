import { useEffect } from 'react';
import './Projects.css';
import { projects } from '../projectsData/projectsData';

const Projects = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach(card => observer.observe(card));
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(({ title, description, imageUrl, link, stack }, i) => (
          <div key={i} className="projects-item fade-in">
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>

            {stack && (
              <ul className="project-stack">
                {stack.map((tech: string, index: number) => (
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
};

export default Projects;
