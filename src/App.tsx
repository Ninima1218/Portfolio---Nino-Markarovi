import Header from '@components/Header/Header.tsx';
import Skills from '@components/Skills/Skills.tsx';
import Intro from '@components/Intro/Intro.tsx';
import Projects from '@components/Projects/Projects.tsx';
import Vision from '@components/Vision/Vision.tsx';
import Footer from '@components/Footer/Footer.tsx';
import './App.css';

const App = () => {
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
    </div>
  );
};

export default App;
