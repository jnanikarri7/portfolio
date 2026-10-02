import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { ArrowUpRight } from 'lucide-react';

const Writing = () => {
  return (
    <section id="writing" className="py-24 md:py-32 bg-[#fbfbfd] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-14 md:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6e6e73] mb-4">
              Notes
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1d1d1f] tracking-[-0.03em] mb-5">
              Writing
            </h2>
            <p className="text-lg text-[#6e6e73] max-w-2xl leading-[1.7]">
              Technical notes on data engineering at scale
            </p>
          </div>

          <div className="space-y-4 max-w-3xl">
            {profile.writing.map((post) => (
              <a
                key={post.url}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-3xl px-7 py-7 md:px-8 md:py-8 flex items-center justify-between gap-5 group block"
              >
                <div className="space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6e6e73]">
                    {post.source}
                  </p>
                  <h3 className="text-xl md:text-2xl font-medium text-[#1d1d1f] tracking-[-0.01em] group-hover:text-[#0071e3] transition-colors">
                    {post.title}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-black/[0.08] bg-[#f5f5f7] flex items-center justify-center flex-shrink-0 group-hover:border-[#0071e3]/30 transition-all duration-300">
                  <ArrowUpRight size={17} className="text-[#6e6e73] group-hover:text-[#0071e3] transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Writing;
