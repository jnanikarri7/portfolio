import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { profile } from '../data/profile';
import SectionHeader from './SectionHeader';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <SectionHeader title="Education" />

          {/* Education Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-light text-white">
                {profile.education.degree}
              </h3>
              <p className="text-lg text-slate-400">
                {profile.education.concentration}
              </p>
              <p className="text-base text-slate-500">
                {profile.education.institution}
              </p>
            </div>

            <div className="pt-6 space-y-3">
              <p className="text-sm text-slate-500 uppercase tracking-wider">
                Focus Areas
              </p>
              <p className="text-base text-slate-400 leading-relaxed">
                {profile.education.focus.join(' • ')}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
