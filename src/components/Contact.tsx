import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { profile } from '../data/profile';
import { Mail, FileText } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-white">
            Let's connect
          </h2>

          {/* Content */}
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light max-w-3xl">
              I'm currently focused on Senior Data Engineer, AI Data Engineer, AI Platform Engineer, and cloud lakehouse roles.
              If my background aligns with your team, I'd be happy to connect.
            </p>

            {/* Contact Links */}
            <div className="flex flex-wrap gap-8 pt-8">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-base">Email</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="group-hover:scale-110 transition-transform">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-base">LinkedIn</span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="group-hover:scale-110 transition-transform">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-base">GitHub</span>
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <FileText size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-base">Resume</span>
              </a>
            </div>

            {/* Target Roles */}
            <div className="pt-12 border-t border-white/5">
              <p className="text-sm text-slate-500 mb-4">
                Open to opportunities in
              </p>
              <p className="text-base text-slate-400">
                {profile.targetRoles.join(' • ')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
