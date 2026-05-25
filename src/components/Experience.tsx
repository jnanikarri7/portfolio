import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { profile } from '../data/profile';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section header */}
          <h2 className="font-display text-4xl md:text-5xl italic text-white tracking-tight mb-16">
            Experience
          </h2>

          {/* Experience timeline */}
          <div className="space-y-0">
            {profile.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] gap-2 md:gap-8 py-7 border-t border-white/[0.06] items-baseline hover:bg-white/[0.01] -mx-4 px-4 rounded-lg transition-colors"
              >
                <h3 className="text-[15px] font-medium text-white">
                  {exp.company}
                </h3>
                <p className="text-[15px] text-neutral-500">
                  {exp.role}
                </p>
                <span className="text-[13px] text-neutral-600 font-mono">
                  {exp.period}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-24">
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-[12px] font-medium text-neutral-500 uppercase tracking-[0.15em]">
                Certifications
              </h3>
              <div className="flex-1 h-px bg-white/[0.04]" />
              <span className="text-[12px] text-neutral-600">{profile.certifications.length}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {profile.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-3 py-3 px-4 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                >
                  <div className="w-1 h-1 rounded-full bg-neutral-600 flex-shrink-0" />
                  <p className="text-[14px] text-neutral-400">
                    {cert}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mt-24">
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-[12px] font-medium text-neutral-500 uppercase tracking-[0.15em]">
                Tools & Technologies
              </h3>
              <div className="flex-1 h-px bg-white/[0.04]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {Object.entries(profile.skills).map(([category, tools], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                  className="space-y-3"
                >
                  <h4 className="text-[13px] font-medium text-neutral-300 tracking-tight">
                    {category}
                  </h4>
                  <p className="text-[13px] text-neutral-600 leading-relaxed">
                    {tools.join(' · ')}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mt-24">
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-[12px] font-medium text-neutral-500 uppercase tracking-[0.15em]">
                Education
              </h3>
              <div className="flex-1 h-px bg-white/[0.04]" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="glass-card rounded-xl p-6 space-y-3"
            >
              <h4 className="text-[15px] font-medium text-white">
                {profile.education.degree}
              </h4>
              <p className="text-[14px] text-neutral-400">
                {profile.education.institution}
              </p>
              <p className="text-[13px] text-neutral-600">
                Concentration: {profile.education.concentration}
              </p>
              <div className="flex flex-wrap gap-2 pt-3">
                {profile.education.focus.map((area) => (
                  <span
                    key={area}
                    className="text-[11px] text-neutral-500 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.05]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
