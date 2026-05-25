import { useState, useEffect } from 'react';
import { profile } from '../data/profile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0a0a0a]/70 backdrop-blur-2xl border-b border-white/[0.04]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[13px] font-medium text-white/90 hover:text-white transition-colors tracking-tight"
          >
            {profile.name}
          </button>

          <div className="hidden md:flex items-center gap-8">
            {['work', 'skills', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-[13px] text-neutral-400 hover:text-white transition-colors duration-300 capitalize"
              >
                {section}
              </button>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] text-white hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
            >
              Resume
            </a>
          </div>

          {/* Status indicator */}
          <div className="flex items-center gap-2 md:hidden">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] text-neutral-500">Available</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
