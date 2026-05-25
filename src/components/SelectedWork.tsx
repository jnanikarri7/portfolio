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
        <div className="flex items-start justify-between mb-6">
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 tracking-tight">
              {work.title}
            </h3>
          </div>
          {work.github && (
            <div className="w-10 h-10 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-blue-500">
              <ArrowUpRight size={18} className="text-gray-600 group-hover:text-blue-600 transition-colors" />
            </div>
          )}
        </div>

      {/* Subtitle */}
      <p className="text-base text-gray-700 font-medium mb-6">
        {work.subtitle}
      </p>

      {/* Description - show only first paragraph */}
      <div className="mb-6">
        <p className="text-base text-gray-600 leading-[1.8]">
          {work.description[0]}
        </p>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100">
        {work.tech.slice(0, 6).map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium text-gray-700 px-3 py-1.5 rounded-lg bg-gray-100 border border-gray-200"
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
    <section id="work" className="py-24 md:py-32 relative bg-white">
      <div className="relative max-w-[1100px] mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Selected Projects
            </h2>
            <p className="text-lg text-gray-600">Production systems at scale</p>
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
