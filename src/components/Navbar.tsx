import { useState, useEffect } from 'react';
import { profile } from '../data/profile';

const links = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 88;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4">
      <nav
        className={`max-w-6xl mx-auto rounded-full border border-black/[0.08] bg-white/70 backdrop-blur-xl transition-all duration-500 ${
          isScrolled ? 'shadow-md shadow-black/[0.04]' : 'shadow-sm shadow-black/[0.02]'
        }`}
      >
        <div className="flex items-center justify-between h-12 px-5 sm:px-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm font-semibold text-[#1d1d1f] hover:text-[#0071e3] transition-colors tracking-tight whitespace-nowrap"
          >
            {profile.name}
          </button>

          <div className="hidden md:flex items-center gap-7">
            {links.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="text-[13px] font-medium text-[#424245] hover:text-[#1d1d1f] relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#0071e3] after:transition-all after:duration-300 hover:after:w-full transition-colors duration-300"
              >
                {section.label}
              </button>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] px-4 py-1.5 rounded-full bg-[#0071e3] text-white font-medium hover:bg-[#0077ed] shadow-sm transition-all duration-300"
            >
              Resume
            </a>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 -mr-2 text-[#1d1d1f]"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-black/[0.06] px-6 py-4">
            <div className="flex flex-col gap-1">
              {links.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="text-left text-sm font-medium text-[#424245] py-2 hover:text-[#0071e3] transition-colors"
                >
                  {section.label}
                </button>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#0071e3] py-2"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
