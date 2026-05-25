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
      {/* Apple-style sophisticated gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.15),transparent)]" />
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-40 w-80 h-80 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>
      {/* Subtle mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d0d0f]/30" />

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/20 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-xl shadow-lg shadow-emerald-500/10">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/70" />
              <span className="text-xs text-emerald-200 tracking-wide uppercase font-semibold">
                Open to opportunities
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
                <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-medium tracking-tight">
                <span className="text-white">{profile.title}</span>
                <span className="text-gray-600 mx-3">·</span>
                <span className="text-gray-400">{profile.location}</span>
              </p>
              <p className="text-lg md:text-xl text-gray-300 font-normal max-w-md leading-relaxed">
                Building production systems at <span className="text-blue-400 font-semibold">50M record scale</span> •
                Proven <span className="text-green-400 font-semibold">$10.5M+ cost optimization</span> •
                <span className="text-purple-400 font-semibold"> AWS & PySpark specialist</span>
              </p>
            </div>

            {/* Quick links */}
            <div className="flex items-center gap-3">
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
                  className="text-sm px-5 py-2.5 rounded-xl text-gray-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 backdrop-blur-sm font-medium"
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
            <p className="text-lg md:text-xl text-gray-200 leading-[1.8] font-normal">
              {profile.hero.greeting}
            </p>
            <p className="text-lg md:text-xl text-gray-400 leading-[1.8] font-normal">
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
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-700" />
            <div className="relative glass-card rounded-3xl p-8 space-y-3 border border-white/[0.08]">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                <CountUp end={50} suffix="M+" duration={2.5} />
              </div>
              <div className="text-sm text-gray-300 uppercase tracking-wider font-semibold">
                Records Processed Daily
              </div>
              <div className="text-xs text-gray-500 font-medium">
                Production-scale data systems
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-700" />
            <div className="relative glass-card rounded-3xl p-8 space-y-3 border border-white/[0.08]">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500 bg-clip-text text-transparent">
                $<CountUp end={10.5} suffix="M" duration={2.5} />
              </div>
              <div className="text-sm text-gray-300 uppercase tracking-wider font-semibold">
                Annual Cost Savings
              </div>
              <div className="text-xs text-gray-500 font-medium">
                Through optimization strategies
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-700" />
            <div className="relative glass-card rounded-3xl p-8 space-y-3 border border-white/[0.08]">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                <CountUp end={99.996} suffix="%" duration={2.5} />
              </div>
              <div className="text-sm text-gray-300 uppercase tracking-wider font-semibold">
                Performance Optimization
              </div>
              <div className="text-xs text-gray-500 font-medium">
                Comparison reduction (O(n²) → O(n))
              </div>
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
