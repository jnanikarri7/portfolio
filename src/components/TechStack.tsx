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
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-xs font-semibold text-gray-500">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
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
              7+ years building production-scale data systems with AWS and PySpark
            </p>
          </div>

          {/* Skills by category */}
          <div className="space-y-12">
            {categories.map((category) => {
              const categorySkills = techStack.filter(s => s.category === category);
              const startIndex = techStack.findIndex(s => s.category === category);

              return (
                <div key={category} className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-3">
                    <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${categorySkills[0].color}`} />
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

        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
