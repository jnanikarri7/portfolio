import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const links = [
    { label: 'Email', href: `mailto:${profile.email}`, external: false },
    { label: 'LinkedIn', href: profile.linkedin, external: true },
    { label: 'GitHub', href: profile.github, external: true },
    { label: 'Resume', href: '/resume.pdf', external: false },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#fbfbfd] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Large CTA */}
          <div className="text-center space-y-10">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6e6e73]">
                Contact
              </p>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1d1d1f] tracking-[-0.03em]">
                Let's connect
              </h2>
              <p className="text-lg text-[#6e6e73] font-normal max-w-xl mx-auto leading-[1.7]">
                I'm currently focused on Senior Data Engineer, AI Data Engineer, and Cloud Data Engineer roles.
                If my background aligns with what you're building, I'd love to hear from you.
              </p>
            </div>

            {/* Primary email CTA */}
            <div>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-base px-8 py-3.5 rounded-full bg-[#0071e3] text-white font-medium hover:bg-[#0077ed] shadow-sm transition-all duration-300"
              >
                Email me
                <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/[0.08] bg-white/60 backdrop-blur-md text-sm font-medium text-[#424245] hover:text-[#1d1d1f] hover:bg-white hover:border-black/[0.14] transition-all duration-300"
                >
                  {link.label}
                  {link.external && <ArrowUpRight size={13} className="text-[#86868b]" />}
                </a>
              ))}
            </div>

            {/* Target roles */}
            <div className="pt-10 mt-4 border-t border-black/[0.08] max-w-2xl mx-auto">
              <p className="text-[11px] text-[#6e6e73] uppercase tracking-[0.2em] mb-3">
                Open to
              </p>
              <p className="text-sm text-[#424245] leading-relaxed">
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
