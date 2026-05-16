import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { profile } from '../data/profile';
import SectionHeader from './SectionHeader';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <SectionHeader title="Experience" />

          {/* Experience List */}
          <div className="space-y-12">
            {profile.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-3 pb-12 border-b border-white/5 last:border-0"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl font-light text-white">
                    {exp.company}
                  </h3>
                  <span className="text-sm text-slate-500 flex-shrink-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-lg text-slate-400">
                  {exp.role}
                </p>
                <p className="text-base text-slate-400 leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
