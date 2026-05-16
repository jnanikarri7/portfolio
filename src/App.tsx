import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'certifications', 'projects', 'education', 'contact'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation activeSection={activeSection} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>

      <footer className="py-8 border-t border-white/10 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
            <div>
              <p>&copy; {new Date().getFullYear()} Jnana Karri. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/jnana-n" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/jnanikarri7/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                GitHub
              </a>
              <a href="mailto:jnana.narasimha@gmail.com" className="hover:text-blue-400 transition-colors">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
