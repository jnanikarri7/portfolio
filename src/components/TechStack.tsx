import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const techStack = [
  // Cloud & AWS
  { name: 'AWS Glue', level: 95, category: 'Cloud & AWS', color: 'from-orange-400 via-orange-500 to-amber-600' },
  { name: 'S3', level: 95, category: 'Cloud & AWS', color: 'from-orange-400 via-orange-500 to-amber-600' },
  { name: 'Redshift', level: 90, category: 'Cloud & AWS', color: 'from-orange-400 via-orange-500 to-amber-600' },
  { name: 'Lambda', level: 85, category: 'Cloud & AWS', color: 'from-orange-400 via-orange-500 to-amber-600' },
  { name: 'Step Functions', level: 85, category: 'Cloud & AWS', color: 'from-orange-400 via-orange-500 to-amber-600' },
  { name: 'Athena', level: 90, category: 'Cloud & AWS', color: 'from-orange-400 via-orange-500 to-amber-600' },

  // Data Engineering
  { name: 'PySpark', level: 95, category: 'Data Engineering', color: 'from-blue-400 via-blue-500 to-cyan-600' },
  { name: 'Python', level: 95, category: 'Data Engineering', color: 'from-blue-400 via-blue-500 to-cyan-600' },
  { name: 'SQL', level: 90, category: 'Data Engineering', color: 'from-blue-400 via-blue-500 to-cyan-600' },
  { name: 'Apache Iceberg', level: 85, category: 'Data Engineering', color: 'from-blue-400 via-blue-500 to-cyan-600' },
  { name: 'ETL/ELT', level: 95, category: 'Data Engineering', color: 'from-blue-400 via-blue-500 to-cyan-600' },

  // Data Quality & ML
  { name: 'Entity Resolution', level: 90, category: 'AI/ML', color: 'from-purple-400 via-purple-500 to-pink-600' },
  { name: 'Splink', level: 85, category: 'AI/ML', color: 'from-purple-400 via-purple-500 to-pink-600' },
  { name: 'Data Quality', level: 90, category: 'AI/ML', color: 'from-purple-400 via-purple-500 to-pink-600' },
  { name: 'Probabilistic Matching', level: 85, category: 'AI/ML', color: 'from-purple-400 via-purple-500 to-pink-600' },

  // DevOps & Tools
  { name: 'Git', level: 90, category: 'DevOps', color: 'from-green-400 via-emerald-500 to-teal-600' },
  { name: 'CI/CD', level: 85, category: 'DevOps', color: 'from-green-400 via-emerald-500 to-teal-600' },
  { name: 'Terraform', level: 75, category: 'DevOps', color: 'from-green-400 via-emerald-500 to-teal-600' },
  { name: 'Docker', level: 80, category: 'DevOps', color: 'from-green-400 via-emerald-500 to-teal-600' },
];

const categories = Array.from(new Set(techStack.map(t => t.category)));

const SkillBar = ({ skill, index }: { skill: typeof techStack[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-baseline">
        <span className="text-sm font-medium text-gray-200">{skill.name}</span>
        <span className="text-xs font-semibold text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-2 bg-white/[0.08] rounded-full overflow-hidden backdrop-blur-sm">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-lg`}
          style={{
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)'
          }}
        />
      </div>
    </motion.div>
  );
};

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      {/* Subtle section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.02] to-transparent pointer-events-none" />
      <div className="relative max-w-[1100px] mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="mb-16">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Technical Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              7+ years building production-scale data systems on AWS with PySpark,
              specializing in <span className="text-blue-400 font-semibold">lakehouse architecture</span> and <span className="text-purple-400 font-semibold">data quality automation</span>.
            </p>
          </div>

          {/* Skills by category */}
          <div className="space-y-12">
            {categories.map((category) => {
              const categorySkills = techStack.filter(s => s.category === category);
              const startIndex = techStack.findIndex(s => s.category === category);

              return (
                <div key={category} className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-200 flex items-center gap-3">
                    <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${categorySkills[0].color} shadow-lg`} />
                    {category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categorySkills.map((skill, idx) => (
                      <SkillBar
                        key={skill.name}
                        skill={skill}
                        index={startIndex + idx}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Certifications callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-700" />
            <div className="relative glass-card rounded-3xl p-8 md:p-10 border border-white/[0.08]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center shadow-2xl shadow-orange-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-display font-bold text-white mb-5">
                    AWS Certified Professional
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base text-gray-300">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 shadow-lg shadow-orange-400/40" />
                      <span className="font-medium">Solutions Architect – Professional</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 shadow-lg shadow-orange-400/40" />
                      <span className="font-medium">Data Engineer – Associate</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 shadow-lg shadow-orange-400/40" />
                      <span className="font-medium">Solutions Architect – Associate</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 shadow-lg shadow-orange-400/40" />
                      <span className="font-medium">AI Practitioner</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
