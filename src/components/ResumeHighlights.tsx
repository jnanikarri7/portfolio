import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Briefcase, Code, Database, Shield, Sparkles } from 'lucide-react';

const ResumeHighlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Briefcase,
      value: '7+',
      label: 'Years of Experience',
      description: 'Data engineering and BI experience',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      value: '4x',
      label: 'AWS Certified',
      description: 'Including Solutions Architect Professional',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Code,
      value: 'Expert',
      label: 'PySpark & AWS Glue',
      description: 'Strong AWS Glue, PySpark, and Redshift experience',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      value: 'Advanced',
      label: 'Lakehouse Architecture',
      description: 'Experience with enterprise lakehouse and medallion architecture',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Sparkles,
      value: 'Strong',
      label: 'Data Quality & Observability',
      description: 'Hands-on experience with data quality, observability, and metadata-driven ETL',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      value: 'Master\'s',
      label: 'AI for Business',
      description: 'Focus on AI, ML, and intelligent systems',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="highlights" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Resume Highlights</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-16 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${highlight.gradient} opacity-10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500`} />

                <div className="relative">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${highlight.gradient} flex items-center justify-center mb-4`}>
                    <highlight.icon className="text-white" size={28} />
                  </div>

                  <div className={`text-3xl font-bold bg-gradient-to-r ${highlight.gradient} bg-clip-text text-transparent mb-2`}>
                    {highlight.value}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{highlight.label}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{highlight.description}</p>
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
            <div className="glass rounded-xl p-8 inline-block max-w-4xl">
              <p className="text-slate-300 text-lg leading-relaxed">
                I bring a unique combination of deep technical expertise in cloud data engineering, practical
                experience with enterprise-scale systems, and a forward-looking focus on AI/ML data platforms.
                I'm passionate about building reliable, scalable data infrastructure that powers intelligent
                business decisions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeHighlights;
