import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, CheckCircle2 } from 'lucide-react';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect – Professional',
      issuer: 'Amazon Web Services',
      level: 'Professional',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'AWS Certified Data Engineer – Associate',
      issuer: 'Amazon Web Services',
      level: 'Associate',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      level: 'Associate',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'AWS Certified AI Practitioner',
      issuer: 'Amazon Web Services',
      level: 'Foundational',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Databricks Lakehouse Accreditation',
      issuer: 'Databricks',
      level: 'Accreditation',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Apache Airflow Fundamentals',
      issuer: 'Apache/Astronomer',
      level: 'Certification',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-16 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.color} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`} />

                <div className="relative">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4`}>
                    <Award className="text-white" size={24} />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">{cert.name}</h3>

                  <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                    <CheckCircle2 size={16} className="text-green-400" />
                    <span>{cert.issuer}</span>
                  </div>

                  <div className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${cert.color} text-white`}>
                    {cert.level}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="glass rounded-xl p-6 inline-block">
              <div className="flex items-center gap-3 text-slate-300">
                <Award className="text-blue-400" size={24} />
                <span className="text-lg">
                  <strong className="text-white">AWS 4x Certified</strong> with expertise in Cloud Architecture, Data Engineering & AI
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
