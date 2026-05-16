import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { profile } from '../data/profile';
import SectionHeader from './SectionHeader';

const SelectedWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-32"
        >
          <SectionHeader title="Selected work" />

          {/* Work Items */}
          <div className="space-y-32">
            {profile.selectedWork.map((work, index) => (
              <motion.article
                key={work.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-8 pb-16 border-b border-white/5 last:border-0"
              >
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-3xl md:text-4xl font-light text-white">
                      {work.title}
                    </h3>
                    <span className="text-sm text-slate-500 flex-shrink-0">
                      {work.year}
                    </span>
                  </div>
                  <p className="text-lg text-slate-400 font-light">
                    {work.subtitle}
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-6">
                  {work.description.map((paragraph, idx) => (
                    <p key={idx} className="text-lg text-slate-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="pt-4">
                  <div className="flex flex-wrap gap-3">
                    {work.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm text-slate-400 px-3 py-1 rounded-full border border-white/5 hover:border-white/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SelectedWork;
