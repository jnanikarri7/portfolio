import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Award, FolderOpen, Sparkles } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: Briefcase,
      value: '7+',
      label: 'Years Experience',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      value: '4x',
      label: 'AWS Certified',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FolderOpen,
      value: '6+',
      label: 'Major Projects',
      color: 'from-emerald-500 to-green-500'
    },
    {
      icon: Sparkles,
      value: 'AI/ML',
      label: 'Focus Area',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-900/50">
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
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Summary */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-white/10 backdrop-blur-sm">
                <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                  <p>
                    I am a Data Engineer with <strong className="text-white">7+ years of experience</strong> specializing
                    in AWS-based data platforms, PySpark, AWS Glue, Redshift, S3, Athena, Lambda, Step Functions, Iceberg,
                    and data lakehouse architecture.
                  </p>

                  <p>
                    I have strong experience designing and optimizing ETL workflows, implementing data quality checks,
                    building medallion architecture layers, and supporting analytics-ready data platforms.
                  </p>

                  <p>
                    I am <strong className="text-white">AWS 4x certified</strong>, including AWS Solutions Architect Professional,
                    AWS Data Engineer Associate, AWS Solutions Architect Associate, and AWS AI Practitioner.
                  </p>

                  <p>
                    Currently pursuing a <strong className="text-white">Master's in Information Systems Engineering & Management</strong> with
                    a focus on Artificial Intelligence for Business at Harrisburg University.
                  </p>

                  <p className="text-blue-400 font-medium">
                    My current career focus is moving toward Senior Data Engineer, AI Data Engineer, AI Platform Engineer,
                    and cloud lakehouse roles.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                    <stat.icon className="text-white" size={24} />
                  </div>
                  <div className={`text-3xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
