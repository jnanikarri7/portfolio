import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { profile } from '../data/profile';
import { ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const links = [
    { label: 'Email', href: `mailto:${profile.email}`, external: false },
    { label: 'LinkedIn', href: profile.linkedin, external: true },
    { label: 'GitHub', href: profile.github, external: true },
    { label: 'Resume', href: '/resume.pdf', external: false },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Large CTA */}
          <div className="glass-card rounded-3xl p-10 md:p-16 text-center space-y-10">
            <div className="space-y-4">
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
                Let's connect
              </h2>
              <p className="text-base md:text-lg text-gray-600 font-normal max-w-xl mx-auto leading-relaxed">
                I'm currently focused on Senior Data Engineer, AI Data Engineer, and Cloud Data Engineer roles.
                If my background aligns with what you're building, I'd love to hear from you.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 bg-white text-[13px] font-medium text-gray-700 hover:text-gray-900 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                >
                  {link.label}
                  {link.external && <ArrowUpRight size={12} className="text-gray-400" />}
                </a>
              ))}
            </div>

            {/* Target roles */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-[11px] text-gray-500 uppercase tracking-[0.15em] mb-3">
                Open to
              </p>
              <p className="text-[13px] text-gray-600">
                {profile.targetRoles.join(' · ')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
