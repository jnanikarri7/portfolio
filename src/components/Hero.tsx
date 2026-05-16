import { motion } from 'framer-motion';
import { Mail, FileText, MapPin, Briefcase, Award, Sparkles, Target } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Name & Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block text-white mb-2">Jnana Karri</span>
                <span className="gradient-text">Senior Data Engineer</span>
              </h1>
              <p className="text-xl text-slate-400">
                AWS Systems Engineer | AI/ML Data Engineering
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin size={18} />
              <span>Frederick, Maryland, USA</span>
            </div>

            {/* Summary */}
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Cloud-native Data Engineer with 7+ years of experience building scalable ETL/ELT pipelines,
              lakehouse architectures, and analytics platforms. Expanding into AI-driven data quality and entity resolution.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <Briefcase size={16} />
                <span className="text-sm font-medium">7+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <Award size={16} />
                <span className="text-sm font-medium">AWS 4x Certified</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Target size={16} />
                <span className="text-sm font-medium">Senior Data Engineer</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Sparkles size={16} />
                <span className="text-sm font-medium">AI/ML Data Engineering</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-medium text-white transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                <FileText size={20} />
                View Resume
              </a>
              <a
                href="https://www.linkedin.com/in/jnana-n"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl font-medium text-white transition-all duration-200 backdrop-blur-sm"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Connect on LinkedIn
              </a>
              <a
                href="mailto:jnana.narasimha@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl font-medium text-white transition-all duration-200 backdrop-blur-sm"
              >
                <Mail size={20} />
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right Column - Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur-xl overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />

                {/* Content */}
                <div className="relative space-y-6">
                  {/* Tech Stack Highlights */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Tech Stack</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        <span className="text-slate-300">AWS Glue • Redshift • S3 • Athena</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                        <span className="text-slate-300">PySpark • Python • SQL</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-slate-300">Lakehouse • Iceberg • Medallion Architecture</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-400" />
                        <span className="text-slate-300">Entity Resolution • Data Quality • AI/ML</span>
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-6">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-2xl font-bold text-blue-400">7+</div>
                      <div className="text-sm text-slate-400">Years Experience</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-2xl font-bold text-purple-400">4x</div>
                      <div className="text-sm text-slate-400">AWS Certified</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-2xl font-bold text-emerald-400">6+</div>
                      <div className="text-sm text-slate-400">Major Projects</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-2xl font-bold text-cyan-400">AI/ML</div>
                      <div className="text-sm text-slate-400">Focus Area</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
