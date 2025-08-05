import './TechGrid.css';

const coreWeb = [
  { name: 'HTML', src: './src/assets/techIcons/html.svg' },
  { name: 'CSS', src: './src/assets/techIcons/css.svg' },
  { name: 'JavaScript', src: './src/assets/techIcons/javascript.svg' },
  { name: 'TypeScript', src: './src/assets/techIcons/typescript.svg' }
];

const libraries = [
  { name: 'React', src: './src/assets/techIcons/react.svg' },
  { name: 'Vite', src: './src/assets/techIcons/vite.svg' },
  { name: 'Sass', src: './src/assets/techIcons/sass.svg' },
  { name: 'Bootstrap', src: './src/assets/techIcons/bootstrap.svg' },
  { name: 'Tilda', src: './src/assets/techIcons/tilda.svg' }
];

const tools = [
  { name: 'Git', src: './src/assets/techIcons/git.svg' },
  { name: 'GitHub', src: './src/assets/techIcons/github.svg' },
  { name: 'Figma', src: './src/assets/techIcons/figma.svg' },
  { name: 'API', src: './src/assets/techIcons/api.svg' }
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
