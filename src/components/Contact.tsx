import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, FileText, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-16 rounded-full" />

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-2xl p-8 sm:p-12 text-center"
            >
              <Send className="text-blue-400 mx-auto mb-6" size={48} />

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Interested in connecting about Senior Data Engineer, AI Data Engineer, or Cloud Data Platform roles?
              </h3>

              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                I'm open to discussing opportunities where I can leverage my expertise in AWS data engineering,
                lakehouse architecture, and AI/ML data platforms to drive meaningful business impact.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <a
                  href="mailto:jnana.narasimha@gmail.com"
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium text-white flex items-center gap-2 transition-colors duration-300"
                >
                  <Mail size={20} />
                  Email Me
                </a>
                <a
                  href="www.linkedin.com/in/jnana-n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glass-hover px-6 py-3 rounded-lg font-medium text-white flex items-center gap-2"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/jnanikarri7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glass-hover px-6 py-3 rounded-lg font-medium text-white flex items-center gap-2"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a
                  href="/resume.pdf"
                  className="glass glass-hover px-6 py-3 rounded-lg font-medium text-white flex items-center gap-2"
                >
                  <FileText size={20} />
                  Download Resume
                </a>
              </div>

              <div className="border-t border-white/10 pt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                  <div className="flex items-start gap-3">
                    <Mail className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="text-sm text-slate-400 mb-1">Email</div>
                      <a
                        href="mailto:jnana.narasimha@gmail.com"
                        className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
                      >
                        jnana.narasimha@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="text-sm text-slate-400 mb-1">Location</div>
                      <div className="text-white font-medium">Frederick, Maryland, USA</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="text-blue-400 flex-shrink-0 mt-1" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <div>
                      <div className="text-sm text-slate-400 mb-1">LinkedIn</div>
                      <a
                        href="www.linkedin.com/in/jnana-n"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
                      >
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="text-blue-400 flex-shrink-0 mt-1" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <div>
                      <div className="text-sm text-slate-400 mb-1">GitHub</div>
                      <a
                        href="https://github.com/jnanikarri7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
                      >
                        View My GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 text-center text-slate-400"
            >
              <p>Open to opportunities in FinTech, HealthTech, Cloud Platforms, and AI/ML Infrastructure</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
