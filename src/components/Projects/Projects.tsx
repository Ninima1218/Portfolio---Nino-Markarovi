import Justice from '@assets/projects/justice.png';
import LanguageApp from '@assets/projects/language-app.png';
import './Projects.css';

const projects = [
  {
    title: 'Responsive Website for a Law Firm',
    description: 'Elegant and functional site showcasing services and contact information. Built with HTML, CSS, and JS for seamless cross-device experience.',
    imageUrl: Justice,
    link: 'https://project-itgirlschool.github.io/fr83_justice/#services',
  },
  {
    title: 'Speak Up: Language Learning Platform',
    description: 'Self-directed template using React + MobX. Features grammar, vocabulary themes, and listening components for immersive learning.',
    imageUrl: LanguageApp,
    link: 'https://github.com/Ninima1218/language-app/tree/mobx',
  },
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2>Projects</h2>
    <div className="projects-grid">
      {projects.map(({ title, description, imageUrl, link }, i) => (
        <div key={i} className="projects-item">
          <img src={imageUrl} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            VIEW PROJECT
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
