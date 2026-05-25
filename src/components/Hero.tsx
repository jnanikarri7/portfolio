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
    <section className="min-h-[90vh] flex items-end pb-20 pt-32 relative overflow-hidden">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_50%)]" />

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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02]">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] text-neutral-400 tracking-wide uppercase">
                Open to opportunities
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[0.9] italic">
                {profile.name}
              </h1>
              <p className="text-lg md:text-xl text-neutral-400 font-light tracking-tight">
                {profile.title} <span className="text-neutral-600">·</span> {profile.location}
              </p>
              <p className="text-base md:text-lg text-neutral-500 font-light max-w-md">
                Building production systems at 50M record scale •
                Proven $10.5M+ cost optimization •
                AWS & PySpark specialist
              </p>
            </div>

            {/* Quick links */}
            <div className="flex items-center gap-6">
              {[
                { label: 'Email', href: `mailto:${profile.email}` },
                { label: 'LinkedIn', href: profile.linkedin },
                { label: 'GitHub', href: profile.github },
                { label: 'Resume', href: '/resume.pdf' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-[13px] text-neutral-500 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <p className="text-[17px] md:text-lg text-neutral-300 leading-[1.7] font-light">
              {profile.hero.greeting}
            </p>
            <p className="text-[17px] md:text-lg text-neutral-500 leading-[1.7] font-light">
              {profile.hero.secondary}
            </p>
          </motion.div>
        </div>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              <CountUp end={50} suffix="M+" duration={2.5} />
            </div>
            <div className="text-sm text-neutral-500 uppercase tracking-wider">
              Records Processed Daily
            </div>
            <div className="text-xs text-neutral-600">
              Production-scale data systems
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              $<CountUp end={10.5} suffix="M" duration={2.5} />
            </div>
            <div className="text-sm text-neutral-500 uppercase tracking-wider">
              Annual Cost Savings
            </div>
            <div className="text-xs text-neutral-600">
              Through optimization strategies
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              <CountUp end={99.996} suffix="%" duration={2.5} />
            </div>
            <div className="text-sm text-neutral-500 uppercase tracking-wider">
              Performance Optimization
            </div>
            <div className="text-xs text-neutral-600">
              Comparison reduction (O(n²) → O(n))
            </div>
          </div>
        </motion.div>

        {/* Bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent origin-left"
        />
      </div>
    </section>
  );
};

export default Hero;
