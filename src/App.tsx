import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Writing from './components/Writing';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f]">
      <Navbar />

      <main>
        <Hero />
        <SelectedWork />
        <Experience />
        <TechStack />
        <Writing />
        <Contact />
      </main>

      <footer className="border-t border-black/[0.08] bg-[#fbfbfd]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#6e6e73]">
            <p>&copy; {new Date().getFullYear()} Jnana Karri · Arlington, Virginia</p>
            <p className="text-[#86868b]">Built with React & TypeScript</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
