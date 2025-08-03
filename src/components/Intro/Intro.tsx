import './Intro.css';

const Intro = () => {
  return (
    <section className="intro">
      <img src="/src/assets/myphoto.webp" alt="Intro background" className="intro-bg" />
      <div className="intro-content">
        <h1>Nino Markarovi</h1> 
        <h3>Frontend Developer</h3>
        <p className='intro-p'>Hello! I'm Nino, a frontend developer from Tbilisi, Georgia, with a keen eye for design and a passion for creating stylish and functional web applications. </p>
        <a href="mailto:ninima1218@gmail.com" className="intro-button">
          GET IN TOUCH
        </a>
      </div>
    </section>
  );
};

export default Intro;