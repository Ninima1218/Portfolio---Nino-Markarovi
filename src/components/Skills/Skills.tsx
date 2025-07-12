import Image from '@assets/backgrounds/back.jpg';
import { ClockLoader } from 'react-spinners';
import './Skills.css';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'MobX',
  'API', 'Github', 'Figma', 'Tilda', 'BEM', 'Sass',
];

const Skills = () => (
  <section id="skills" className="skills-container">
    <div className="skills-list">
      <h3>Skills and Expertise</h3>
      <ul>
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
      <div className="learning">
        <p>Learning: Next.js, TypeScript ...</p>
        <ClockLoader size={30} color="#cdc9c9" />
      </div>
    </div>

    <div className="image-text-wrapper">
      <div className="skills-summary">
        <p>
          I excel at creating responsive, cross-browser compatible,
          valid, and semantic websites and applications.
        </p>
      </div>
      <img src={Image} alt="skills illustration" className="skills-image" />
    </div>
  </section>
);

export default Skills;
