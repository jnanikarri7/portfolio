import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SelectedWork from './components/SelectedWork';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <SelectedWork />
        <Experience />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>

      <footer className="py-12 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Jnana Karri</p>
            <p>Frederick, Maryland</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
