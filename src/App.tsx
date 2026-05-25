import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <main>
        <Hero />
        <SelectedWork />
        <TechStack />
        <Experience />
        <Contact />
      </main>

      <footer className="py-12 border-t border-white/[0.06]">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <p>&copy; {new Date().getFullYear()} Jnana Karri. All rights reserved.</p>
            <p className="text-neutral-600">Built with React & TypeScript</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
