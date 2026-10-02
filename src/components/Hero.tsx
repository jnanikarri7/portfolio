import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-end pb-20 pt-32 relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">

      <div className="relative max-w-[1100px] mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          {/* Left - Name & Identity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-emerald-700 tracking-wide uppercase font-semibold">
                Open to opportunities
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-gray-900">
                {profile.name}
              </h1>
              <p className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-700">
                {profile.title}
              </p>
              <p className="text-base md:text-lg text-gray-600 font-normal max-w-md leading-relaxed">
                {profile.hero.valueProposition}
              </p>
            </div>

            {/* Quick links */}
            <div className="flex items-center gap-3 flex-wrap">
              {[
                { label: 'Email', href: `mailto:${profile.email}` },
                { label: 'LinkedIn', href: profile.linkedin },
                { label: 'GitHub', href: profile.github },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-sm px-5 py-2.5 rounded-xl text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow transition-all duration-300 font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Right - Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg text-gray-700 leading-[1.8] font-normal">
              {profile.hero.greeting}
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-[1.8] font-normal">
              {profile.hero.secondary}
            </p>
          </motion.div>
        </div>

        {/* Proof chips — honest labels (designed / modeled where that is the truth) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 flex flex-wrap gap-3"
        >
          {profile.hero.proofChips.map((chip) => (
            <span
              key={chip}
              className="text-sm font-semibold text-gray-800 px-4 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm"
            >
              {chip}
            </span>
          ))}
        </motion.div>

        {/* Bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent origin-left"
        />
      </div>
    </section>
  );
};

export default Hero;
