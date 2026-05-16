import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { profile } from '../data/profile';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-16"
        >
          {/* Title */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight">
            Let me<br />
            introduce<br />
            myself
          </h2>

          {/* Content */}
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
              {profile.about.intro}
            </p>

            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
              {profile.about.current}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/5">
            <div>
              <div className="text-4xl font-light text-white mb-2">7+</div>
              <div className="text-sm text-slate-400">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-light text-white mb-2">4×</div>
              <div className="text-sm text-slate-400">AWS Certified</div>
            </div>
            <div>
              <div className="text-4xl font-light text-white mb-2">6+</div>
              <div className="text-sm text-slate-400">Major Projects</div>
            </div>
            <div>
              <div className="text-4xl font-light text-white mb-2">AI/ML</div>
              <div className="text-sm text-slate-400">Focus Area</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
