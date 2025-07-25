
import { useEffect, useRef } from 'react';
import './Projects.css';
import { projects } from '../projectsData/projectsData';

const Projects = () => {
    const projectsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const projectItems = projectsRef.current?.querySelectorAll('.projects-item');
        if (projectItems) {
            projectItems.forEach((item) => observer.observe(item));
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="projects-section" id="projects">
            <div className="projects-content">
                <h2>Projects</h2>
                <div className="projects-grid" ref={projectsRef}>
                    {projects.map((project, index) => (
                        <div key={index} className="projects-item fade-in">
                            <img src={project.imageUrl} alt={project.title} />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <ul className="project-stack">
                                {project.stack.map((tech, techIndex) => (
                                    <li key={techIndex}>{tech}</li>
                                ))}
                            </ul>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
