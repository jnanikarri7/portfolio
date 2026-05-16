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
    <section id="certifications" className="py-24 relative bg-slate-900/50">
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
              Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4`}>
                  <Award className="text-white" size={28} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2 leading-snug min-h-[3.5rem]">
                  {cert.name}
                </h3>

                <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                  <CheckCircle2 size={16} className="text-green-400 flex-shrink-0" />
                  <span>{cert.issuer}</span>
                </div>

                <div className={`inline-block px-3 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r ${cert.color} text-white`}>
                  {cert.level}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur-sm">
              <Award className="text-blue-400" size={24} />
              <span className="text-lg text-slate-300">
                <strong className="text-white">AWS 4x Certified</strong> with expertise in Cloud Architecture, Data Engineering & AI
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
