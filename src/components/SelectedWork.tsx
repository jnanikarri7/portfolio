import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { profile } from '../data/profile';
import { ArrowUpRight } from 'lucide-react';
import { CostSavingsChart } from './charts/CostSavingsChart';
import { PerformanceChart } from './charts/PerformanceChart';
import { EntityResolutionDiagram } from './diagrams/EntityResolutionDiagram';
import { AddressValidationDiagram } from './diagrams/AddressValidationDiagram';

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
          <div className="space-y-2">
            <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
              {work.year}
            </span>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
              {work.title}
            </h3>
          </div>
          {work.github && (
            <div className="w-12 h-12 rounded-xl border border-white/[0.15] bg-white/[0.05] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-blue-400/50">
              <ArrowUpRight size={18} className="text-gray-300 group-hover:text-blue-400 transition-colors" />
            </div>
          )}
        </div>

      {/* Subtitle */}
      <p className="text-lg text-gray-200 font-semibold mb-6">
        {work.subtitle}
      </p>

      {/* Description */}
      <div className="space-y-4 mb-8">
        {work.description.map((paragraph, idx) => (
          <p key={idx} className="text-base text-gray-300 leading-[1.8]">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Visual Diagrams and Charts */}
      {work.id === 'entity-resolution' && (
        <>
          <EntityResolutionDiagram />
          <PerformanceChart />
        </>
      )}
      {work.id === 'address-validation' && (
        <>
          <AddressValidationDiagram />
          <CostSavingsChart />
        </>
      )}

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 pt-6 border-t border-white/[0.08]">
        {work.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium text-gray-300 px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.1] hover:border-white/[0.2] hover:bg-white/[0.08] transition-all duration-300"
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
    <section id="work" className="py-24 md:py-32 relative">
      {/* Subtle section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent pointer-events-none" />
      <div className="relative max-w-[1100px] mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white tracking-tight">
              Selected work
            </h2>
            <span className="hidden md:block text-sm text-gray-400 tracking-wide font-semibold">
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
