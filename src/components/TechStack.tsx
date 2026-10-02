import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { profile } from '../data/profile';

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 md:py-32 relative bg-gray-50">
      <div className="relative max-w-[1100px] mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Technical Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              8+ years building production-scale data systems with AWS and PySpark
            </p>
          </div>

          {/* Skills grouped as chips/lists — no self-assessed percentage bars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(profile.skills).map(([category, tools], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: catIndex * 0.08 }}
                className="glass-card rounded-2xl p-7"
              >
                <h3 className="text-base font-semibold text-gray-900 mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[13px] font-medium text-gray-700 px-3 py-1.5 rounded-lg bg-gray-100 border border-gray-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
