import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { profile } from '../data/profile';
import { ArrowUpRight } from 'lucide-react';

const WorkItem = ({ work, index }: { work: typeof profile.selectedWork[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const ArticleWrapper = work.github ? 'a' : 'article';
  const articleProps = work.github ? {
    href: work.github,
    target: '_blank',
    rel: 'noopener noreferrer',
    className: 'group glass-card rounded-2xl p-8 md:p-10 hover-lift cursor-pointer block'
  } : {
    className: 'group glass-card rounded-2xl p-8 md:p-10 hover-lift cursor-default'
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <ArticleWrapper {...articleProps}>
        {/* Top row */}
        <div className="flex items-start justify-between mb-8">
          <div className="space-y-1">
            <span className="text-[11px] text-neutral-500 uppercase tracking-widest font-medium">
              {work.year}
            </span>
            <h3 className="text-2xl md:text-3xl font-display italic text-white tracking-tight">
              {work.title}
            </h3>
          </div>
          {work.github && (
            <div className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowUpRight size={16} className="text-neutral-400" />
            </div>
          )}
        </div>

      {/* Subtitle */}
      <p className="text-base text-neutral-300 font-medium mb-6">
        {work.subtitle}
      </p>

      {/* Description */}
      <div className="space-y-4 mb-8">
        {work.description.map((paragraph, idx) => (
          <p key={idx} className="text-[15px] text-neutral-500 leading-[1.7]">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 pt-6 border-t border-white/[0.04]">
        {work.tech.map((tech) => (
          <span
            key={tech}
            className="text-[11px] text-neutral-400 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] tracking-wide"
          >
            {tech}
          </span>
        ))}
      </div>
      </ArticleWrapper>
    </motion.div>
  );
};

const SelectedWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="font-display text-4xl md:text-5xl italic text-white tracking-tight">
              Selected work
            </h2>
            <span className="hidden md:block text-[12px] text-neutral-600 tracking-wide">
              {profile.selectedWork.length} PROJECTS
            </span>
          </div>

          {/* Work grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {profile.selectedWork.map((work, index) => (
              <WorkItem key={work.id} work={work} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SelectedWork;
