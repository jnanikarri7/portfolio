import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Writing from './components/Writing';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen text-gray-900">
      <Navbar />

      <main>
        <Hero />
        <SelectedWork />
        <Experience />
        <TechStack />
        <Writing />
        <Contact />
      </main>

      <footer className="py-12 border-t border-gray-200 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Jnana Karri. All rights reserved.</p>
            <p className="text-gray-400">Built with React & TypeScript</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
