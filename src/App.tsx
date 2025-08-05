import Header from '@components/Header/Header.tsx';
import Skills from '@components/Skills/Skills.tsx';
import Intro from '@components/Intro/Intro.tsx';
import Projects from '@components/Projects/Projects.tsx';
import Vision from '@components/Vision/Vision.tsx';
import Footer from '@components/Footer/Footer.tsx';
import { ArrowUp } from "lucide-react";
import './App.css';

const App = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Header />
      <Intro />

      <div className="layout-container">
        <Skills />
        <Projects />
        <Vision />
        <Footer />
      </div>

      <button className="scroll-top" onClick={scrollToTop} aria-label="Наверх">
        <ArrowUp className="scroll-top-icon" />
      </button>
    </div>
  );
};

export default App;
