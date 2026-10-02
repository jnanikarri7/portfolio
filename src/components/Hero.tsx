import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#fbfbfd]">
      {/* Subtle backdrop: fine radial accent wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_50%_at_50%_0%,rgba(0,113,227,0.06),transparent_70%)]"
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 w-full pt-40 md:pt-48 pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-14 lg:gap-20 items-center">
          {/* Left - Name & Identity */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-9"
          >
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/[0.08] bg-white/60 backdrop-blur-md">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0071e3] animate-pulse" />
              <span className="text-[11px] text-[#0071e3] tracking-[0.14em] uppercase font-semibold">
                Open to opportunities
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.02] text-[#1d1d1f]">
                {profile.name}
              </h1>
              <p className="text-2xl md:text-3xl font-medium tracking-[-0.01em] text-[#424245]">
                {profile.title}
              </p>
              <p className="text-[17px] md:text-lg text-[#6e6e73] font-normal max-w-xl leading-[1.7]">
                {profile.hero.valueProposition}
              </p>
            </div>

            {/* Quick links */}
            <div className="flex items-center gap-3 flex-wrap pt-1">
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('work');
                  if (el) {
                    const offsetPosition = el.getBoundingClientRect().top + window.pageYOffset - 88;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="text-sm px-6 py-2.5 rounded-full bg-[#0071e3] text-white font-medium hover:bg-[#0077ed] shadow-sm transition-all duration-300"
              >
                View work
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-6 py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-black/[0.08] text-[#1d1d1f] font-medium hover:bg-white hover:border-black/[0.14] transition-all duration-300"
              >
                Resume
              </a>
            </div>
          </motion.div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src="/profile.jpg"
              alt={`${profile.name}, ${profile.title} — Arlington, Virginia`}
              width={420}
              height={420}
              className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] object-cover rounded-[2rem] ring-1 ring-black/10 shadow-xl shadow-black/[0.06]"
              loading="eager"
            />
          </motion.div>
        </div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 md:mt-24 max-w-3xl space-y-5"
        >
          <p className="text-[17px] md:text-lg text-[#424245] leading-[1.75] font-normal">
            {profile.hero.greeting}
          </p>
          <p className="text-[17px] md:text-lg text-[#6e6e73] leading-[1.75] font-normal">
            {profile.hero.secondary}
          </p>
        </motion.div>

        {/* Proof chips — honest labels (designed / modeled where that is the truth) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-wrap gap-3"
        >
          {profile.hero.proofChips.map((chip) => (
            <span
              key={chip}
              className="text-sm font-medium text-[#1d1d1f] px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-black/[0.08]"
            >
              {chip}
            </span>
          ))}
        </motion.div>

        {/* Bottom hairline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 h-px bg-black/[0.08] origin-left"
        />
      </div>
    </section>
  );
};

export default Hero;
