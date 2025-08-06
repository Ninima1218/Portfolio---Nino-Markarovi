import './Intro.css';
import myPhoto from '../../../src/assets/myphoto.webp';

const Intro = () => {
  return (
    <section className="intro">
      <img src={myPhoto} alt="Intro background" className="intro-bg" />
      <div className="intro-content">
        <h1>Nino Markarovi</h1> 
        <h3>Frontend Developer</h3>
        <p className='intro-p'>Hi, I’m Nino — crafting harmony through clean code and pixel precision from the heart of Tbilisi. </p>
        <a
          href="https://mail.google.com/mail/?view=cm&to=ninima1218@gmail.com"
          className="intro-button"
          role="button"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send email to Nino"
        >
          GET IN TOUCH
        </a>
      </div>
    </section>
  );
};

export default Intro;