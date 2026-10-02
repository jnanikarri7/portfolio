import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { ArrowUpRight } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-[#fbfbfd] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section header */}
          <div className="mb-16 md:mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6e6e73] mb-4">
              Career
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1d1d1f] tracking-[-0.03em]">
              Experience
            </h2>
          </div>

          {/* Experience timeline */}
          <div className="border-l border-black/[0.08] pl-8 md:pl-12 space-y-2">
            {profile.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative py-6"
              >
                <span className="absolute -left-[37px] md:-left-[53px] top-8 w-2 h-2 rounded-full bg-[#0071e3] ring-4 ring-[#fbfbfd]" />
                <h3 className="text-2xl md:text-3xl font-medium text-[#1d1d1f] tracking-[-0.01em]">
                  {exp.company}
                </h3>
                <p className="text-base text-[#424245] mt-1.5">
                  {exp.role}
                </p>
                <span className="inline-block mt-3 text-xs font-mono uppercase tracking-[0.08em] text-[#6e6e73]">
                  {exp.period}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-24">
            <div className="flex items-center gap-5 mb-10">
              <h3 className="text-xs font-semibold text-[#6e6e73] uppercase tracking-[0.2em]">
                Certifications
              </h3>
              <div className="flex-1 h-px bg-black/[0.08]" />
              <span className="text-xs font-mono text-[#6e6e73]">{profile.certifications.length}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {profile.certifications.map((cert, index) => {
                const verify = 'verify' in cert ? cert.verify : undefined;
                return (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="rounded-2xl bg-white border border-black/[0.08] px-5 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0071e3] mb-4" />
                    <p className="text-[15px] font-medium text-[#1d1d1f] leading-snug">
                      {cert.name}
                    </p>
                    {verify ? (
                      <a
                        href={verify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-3 text-[13px] font-medium text-[#0071e3] hover:text-[#006edb] transition-colors"
                      >
                        Verify
                        <ArrowUpRight size={13} />
                      </a>
                    ) : (
                      <p className="mt-3 text-[13px] text-[#86868b]">Verified credential</p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Education */}
          <div className="mt-24">
            <div className="flex items-center gap-5 mb-10">
              <h3 className="text-xs font-semibold text-[#6e6e73] uppercase tracking-[0.2em]">
                Education
              </h3>
              <div className="flex-1 h-px bg-black/[0.08]" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55 }}
              className="glass-card rounded-3xl p-8 md:p-10"
            >
              <h4 className="text-xl md:text-2xl font-medium text-[#1d1d1f] tracking-[-0.01em]">
                {profile.education.degree}
              </h4>
              <p className="text-[15px] text-[#424245] mt-2">
                {profile.education.institution}
                {profile.education.period ? ` · ${profile.education.period}` : ''}
                {profile.education.gpa ? ` · GPA ${profile.education.gpa}` : ''}
              </p>
              <p className="text-sm text-[#6e6e73] mt-1">
                Concentration: {profile.education.concentration}
              </p>
              <div className="flex flex-wrap gap-2 pt-5">
                {profile.education.focus.map((area) => (
                  <span
                    key={area}
                    className="text-xs font-medium text-[#424245] px-3 py-1 rounded-full bg-[#f5f5f7]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
