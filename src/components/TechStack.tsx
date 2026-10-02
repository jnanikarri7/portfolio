import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const TechStack = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative bg-[#f5f5f7] scroll-mt-24">
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section header */}
          <div className="mb-16 md:mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6e6e73] mb-4">
              Toolkit
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1d1d1f] tracking-[-0.03em] mb-5">
              Technical Expertise
            </h2>
            <p className="text-lg text-[#6e6e73] max-w-2xl leading-[1.7]">
              8+ years building production-scale data systems with AWS and PySpark
            </p>
          </div>

          {/* Skills grouped as chips/lists — no self-assessed percentage bars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {Object.entries(profile.skills).map(([category, tools], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: catIndex * 0.07 }}
                className="glass-card rounded-3xl p-7 md:p-8"
              >
                <h3 className="text-base font-semibold text-[#1d1d1f] mb-5 tracking-[-0.01em]">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[13px] font-medium text-[#424245] px-3 py-1 rounded-full bg-[#f5f5f7]"
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
