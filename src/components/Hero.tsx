import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { profile } from '../data/profile';

const CountUp = ({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

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
                Building production systems at 50M+ record scale with proven cost optimization and AWS expertise
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

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="glass-card rounded-2xl p-8 space-y-2 border border-blue-100 bg-gradient-to-br from-blue-50 to-white">
            <div className="text-5xl md:text-6xl font-bold text-blue-600">
              <CountUp end={50} suffix="M+" duration={2.5} />
            </div>
            <div className="text-sm text-gray-700 font-semibold">
              Records Processed
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 space-y-2 border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white">
            <div className="text-5xl md:text-6xl font-bold text-emerald-600">
              $<CountUp end={10.5} suffix="M" duration={2.5} />
            </div>
            <div className="text-sm text-gray-700 font-semibold">
              Cost Savings
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 space-y-2 border border-purple-100 bg-gradient-to-br from-purple-50 to-white">
            <div className="text-5xl md:text-6xl font-bold text-purple-600">
              <CountUp end={99.996} suffix="%" duration={2.5} />
            </div>
            <div className="text-sm text-gray-700 font-semibold">
              Optimization
            </div>
          </div>
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
