import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Sparkles } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const focusAreas = [
    'Intelligent Systems',
    'AI for Business',
    'Data Engineering',
    'Enterprise Architecture',
    'Machine Learning',
    'Cloud Computing'
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          </div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm">
              {/* Header */}
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    Master of Science in Information Systems Engineering & Management
                  </h3>
                  <div className="text-lg text-blue-400 font-semibold mb-3">
                    Harrisburg University of Science and Technology
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <Sparkles size={16} className="text-purple-400" />
                    <span className="text-sm font-semibold text-purple-400">
                      Concentration: Artificial Intelligence for Business
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="ml-22 space-y-6">
                <p className="text-slate-300 leading-relaxed">
                  Focused on intelligent systems, AI for business, data engineering, enterprise architecture,
                  and applied AI/ML use cases. Specialized coursework in machine learning, deep learning,
                  AI system design, cloud computing, and enterprise data management.
                </p>

                {/* Focus Areas */}
                <div>
                  <h4 className="text-base font-semibold text-white mb-3">Focus Areas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {focusAreas.map((area) => (
                      <span
                        key={area}
                        className="px-3 py-1.5 text-sm bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 font-medium"
                      >
                        {area}
                      </span>
                    ))}
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

export default Education;
