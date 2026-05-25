import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const techStack = [
  // Cloud & AWS
  { name: 'AWS Glue', level: 95, category: 'Cloud & AWS', color: 'from-orange-400 to-orange-600' },
  { name: 'S3', level: 95, category: 'Cloud & AWS', color: 'from-orange-400 to-orange-600' },
  { name: 'Redshift', level: 90, category: 'Cloud & AWS', color: 'from-orange-400 to-orange-600' },
  { name: 'Lambda', level: 85, category: 'Cloud & AWS', color: 'from-orange-400 to-orange-600' },
  { name: 'Step Functions', level: 85, category: 'Cloud & AWS', color: 'from-orange-400 to-orange-600' },
  { name: 'Athena', level: 90, category: 'Cloud & AWS', color: 'from-orange-400 to-orange-600' },

  // Data Engineering
  { name: 'PySpark', level: 95, category: 'Data Engineering', color: 'from-blue-400 to-blue-600' },
  { name: 'Python', level: 95, category: 'Data Engineering', color: 'from-blue-400 to-blue-600' },
  { name: 'SQL', level: 90, category: 'Data Engineering', color: 'from-blue-400 to-blue-600' },
  { name: 'Apache Iceberg', level: 85, category: 'Data Engineering', color: 'from-blue-400 to-blue-600' },
  { name: 'ETL/ELT', level: 95, category: 'Data Engineering', color: 'from-blue-400 to-blue-600' },

  // Data Quality & ML
  { name: 'Entity Resolution', level: 90, category: 'AI/ML', color: 'from-purple-400 to-purple-600' },
  { name: 'Splink', level: 85, category: 'AI/ML', color: 'from-purple-400 to-purple-600' },
  { name: 'Data Quality', level: 90, category: 'AI/ML', color: 'from-purple-400 to-purple-600' },
  { name: 'Probabilistic Matching', level: 85, category: 'AI/ML', color: 'from-purple-400 to-purple-600' },

  // DevOps & Tools
  { name: 'Git', level: 90, category: 'DevOps', color: 'from-green-400 to-green-600' },
  { name: 'CI/CD', level: 85, category: 'DevOps', color: 'from-green-400 to-green-600' },
  { name: 'Terraform', level: 75, category: 'DevOps', color: 'from-green-400 to-green-600' },
  { name: 'Docker', level: 80, category: 'DevOps', color: 'from-green-400 to-green-600' },
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
        <span className="text-sm text-neutral-300">{skill.name}</span>
        <span className="text-xs text-neutral-500">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
        />
      </div>
    </motion.div>
  );
};

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl italic text-white tracking-tight mb-4">
              Technical Expertise
            </h2>
            <p className="text-neutral-500 max-w-2xl">
              7+ years building production-scale data systems on AWS with PySpark,
              specializing in lakehouse architecture and data quality automation.
            </p>
          </div>

          {/* Skills by category */}
          <div className="space-y-12">
            {categories.map((category, catIndex) => {
              const categorySkills = techStack.filter(s => s.category === category);
              const startIndex = techStack.findIndex(s => s.category === category);

              return (
                <div key={category} className="space-y-6">
                  <h3 className="text-lg font-medium text-neutral-400 flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${categorySkills[0].color}`} />
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
            className="mt-16 glass-card rounded-2xl p-8 md:p-10"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400/20 to-orange-600/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-display italic text-white mb-3">
                  AWS Certified Professional
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-neutral-400">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    Solutions Architect – Professional
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    Data Engineer – Associate
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    Solutions Architect – Associate
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    AI Practitioner
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
