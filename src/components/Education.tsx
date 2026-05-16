import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-16 rounded-full" />

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 opacity-5 rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-700" />

              <div className="relative">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Master of Science in Information Systems Engineering & Management
                    </h3>
                    <div className="text-lg text-blue-400 font-semibold mb-3">
                      Harrisburg University of Science and Technology
                    </div>
                    <div className="inline-block px-4 py-1.5 text-sm font-semibold bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-full">
                      Concentration: Artificial Intelligence for Business
                    </div>
                  </div>
                </div>

                <div className="border-l-2 border-blue-500/30 pl-6 ml-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <BookOpen className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Focus Areas</h4>
                      <p className="text-slate-300 leading-relaxed">
                        Focused on intelligent systems, AI for business, data engineering, enterprise architecture,
                        and applied AI/ML use cases. Specialized coursework in machine learning, deep learning,
                        AI system design, cloud computing, and enterprise data management.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Competencies Developed</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'AI System Design',
                        'Machine Learning',
                        'Enterprise Architecture',
                        'Cloud Computing',
                        'Data Engineering',
                        'Intelligent Systems',
                        'Business Intelligence',
                        'AI Strategy'
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-slate-300 hover:bg-white/10 hover:text-white transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
