import './TechGrid.css';
import HTML from '../../assets/techIcons/html.svg';
import CSS from '../../assets/techIcons/css.svg';
import JavaScript from '../../assets/techIcons/javascript.svg';
import TypeScript from '../../assets/techIcons/typescript.svg';
import ReactIcon from '../../assets/techIcons/react.svg';
import Vite from '../../assets/techIcons/vite.svg';
import Sass from '../../assets/techIcons/sass.svg';
import Bootstrap from '../../assets/techIcons/bootstrap.svg';
import Tilda from '../../assets/techIcons/tilda.svg';
import Git from '../../assets/techIcons/git.svg';
import GitHub from '../../assets/techIcons/github.svg';
import Figma from '../../assets/techIcons/figma.svg';
import API from '../../assets/techIcons/api.svg';

const coreWeb = [
  { name: 'HTML', src: HTML },
  { name: 'CSS', src: CSS },
  { name: 'JavaScript', src: JavaScript },
  { name: 'TypeScript', src: TypeScript }
];

const libraries = [
  { name: 'React', src: ReactIcon },
  { name: 'Vite', src: Vite },
  { name: 'Sass', src: Sass },
  { name: 'Bootstrap', src: Bootstrap },
  { name: 'Tilda', src: Tilda }
];

const tools = [
  { name: 'Git', src: Git },
  { name: 'GitHub', src: GitHub },
  { name: 'Figma', src: Figma },
  { name: 'API', src: API }
];

const TechGrid = () => (
  <section className="tech-wrapper">
    <div className="tech-column">
      <h3 className="tech-title">Core Web</h3>
      <div className="tech-grid">
        {coreWeb.map(({ name, src }, i) => (
          <div key={i} className="tech-card">
            <img src={src} alt={name} className="tech-icon" />
            <span className="tech-label">{name}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="tech-column">
      <h3 className="tech-title">Libs</h3>
      <div className="tech-grid">
        {libraries.map(({ name, src }, i) => (
          <div key={i} className="tech-card">
            <img src={src} alt={name} className="tech-icon" />
            <span className="tech-label">{name}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="tech-column">
      <h3 className="tech-title">Tools</h3>
      <div className="tech-grid">
        {tools.map(({ name, src }, i) => (
          <div key={i} className="tech-card">
            <img src={src} alt={name} className="tech-icon" />
            <span className="tech-label">{name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechGrid;
