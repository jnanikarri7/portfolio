import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-16 rounded-full" />

          <div className="glass rounded-2xl p-8 sm:p-12">
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                I am a Data Engineer with <strong className="text-white">7+ years of experience</strong> specializing
                in AWS-based data platforms, PySpark, AWS Glue, Redshift, S3, Athena, Lambda, Step Functions, Iceberg,
                and data lakehouse architecture. I have strong experience designing and optimizing ETL workflows,
                implementing data quality checks, building medallion architecture layers, and supporting analytics-ready
                data platforms.
              </p>

              <p>
                I am <strong className="text-white">AWS 4x certified</strong>, including AWS Solutions Architect Professional,
                AWS Data Engineer Associate, AWS Solutions Architect Associate, and AWS AI Practitioner. I am also pursuing
                a <strong className="text-white">Master's in Information Systems Engineering & Management</strong> with a focus
                on Artificial Intelligence for Business at Harrisburg University.
              </p>

              <p>
                My current career focus is moving toward <strong className="text-white">Senior Data Engineer, AI Data Engineer,
                AI Platform Engineer</strong>, and cloud lakehouse roles. I'm passionate about building intelligent, scalable
                data systems that drive business insights and enable AI/ML capabilities at enterprise scale.
              </p>

              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-blue-400 mb-2">7+</div>
                  <div className="text-sm text-slate-400">Years Experience</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-purple-400 mb-2">4x</div>
                  <div className="text-sm text-slate-400">AWS Certified</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-blue-400 mb-2">6+</div>
                  <div className="text-sm text-slate-400">Major Projects</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
