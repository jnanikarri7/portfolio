import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, TrendingUp, Building2 } from 'lucide-react';

const CareerFocus = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const targetRoles = [
    {
      title: 'Senior Data Engineer',
      description: 'Leading data platform design and implementation',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI Data Engineer',
      description: 'Building AI-ready data infrastructure and pipelines',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI Platform Engineer',
      description: 'Architecting scalable AI/ML platforms',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Cloud Data Engineer',
      description: 'Designing cloud-native data solutions',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Lakehouse Data Engineer',
      description: 'Building modern lakehouse architectures',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Data Engineering Lead',
      description: 'Leading data engineering teams and initiatives',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  const industries = [
    { name: 'FinTech', icon: '💰' },
    { name: 'HealthTech', icon: '🏥' },
    { name: 'Cloud Platforms', icon: '☁️' },
    { name: 'Enterprise Analytics', icon: '📊' },
    { name: 'AI/ML Infrastructure', icon: '🤖' }
  ];

  return (
    <section id="career" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Career Focus</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-16 rounded-full" />

          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-2xl p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-blue-400" size={28} />
                <h3 className="text-2xl font-bold text-white">Currently Targeting</h3>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                I'm actively seeking opportunities where I can leverage my extensive data engineering experience
                to build scalable, AI-ready data platforms. I'm particularly interested in roles that blend
                cloud architecture, modern data stack technologies, and AI/ML infrastructure.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {targetRoles.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${role.gradient} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`} />

                  <div className="relative">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${role.gradient} flex items-center justify-center mb-4`}>
                      <TrendingUp className="text-white" size={20} />
                    </div>

                    <h4 className="text-lg font-bold text-white mb-2">{role.title}</h4>
                    <p className="text-sm text-slate-400">{role.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="text-purple-400" size={28} />
              <h3 className="text-2xl font-bold text-white">Preferred Industries</h3>
            </div>

            <div className="flex flex-wrap gap-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  className="glass rounded-lg px-6 py-3 hover:bg-white/10 transition-all duration-300 flex items-center gap-3"
                >
                  <span className="text-2xl">{industry.icon}</span>
                  <span className="text-white font-semibold">{industry.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerFocus;
