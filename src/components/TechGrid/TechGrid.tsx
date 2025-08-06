import './TechGrid.css';
import htmlIcon from '../../assets/techIcons/html.svg';
import cssIcon from '../../assets/techIcons/css.svg';
import jsIcon from '../../assets/techIcons/javascript.svg';
import tsIcon from '../../assets/techIcons/typescript.svg';

import reactIcon from '../../assets/techIcons/react.svg';
import viteIcon from '../../assets/techIcons/vite.svg';
import sassIcon from '../../assets/techIcons/sass.svg';
import bootstrapIcon from '../../assets/techIcons/bootstrap.svg';
import tildaIcon from '../../assets/techIcons/tilda.svg';

import gitIcon from '../../assets/techIcons/git.svg';
import githubIcon from '../../assets/techIcons/github.svg';
import figmaIcon from '../../assets/techIcons/figma.svg';
import apiIcon from '../../assets/techIcons/api.svg';

const coreWeb = [
  { name: 'HTML', src: htmlIcon },
  { name: 'CSS', src: cssIcon },
  { name: 'JavaScript', src: jsIcon },
  { name: 'TypeScript', src: tsIcon }
];

const libraries = [
  { name: 'React', src: reactIcon },
  { name: 'Vite', src: viteIcon },
  { name: 'Sass', src: sassIcon },
  { name: 'Bootstrap', src: bootstrapIcon },
  { name: 'Tilda', src: tildaIcon }
];

const tools = [
  { name: 'Git', src: gitIcon },
  { name: 'GitHub', src: githubIcon },
  { name: 'Figma', src: figmaIcon },
  { name: 'API', src: apiIcon }
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