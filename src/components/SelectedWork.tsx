import { motion } from 'framer-motion';
import { useRef } from 'react';
import { profile } from '../data/profile';
import { ArrowUpRight } from 'lucide-react';
import { EntityResolutionDiagram } from './diagrams/EntityResolutionDiagram';
import { AddressValidationDiagram } from './diagrams/AddressValidationDiagram';
import { PerformanceChart } from './charts/PerformanceChart';
import { CostSavingsChart } from './charts/CostSavingsChart';

const CaseStudyField = ({ label, value }: { label: string; value?: string }) => {
  if (!value) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-6">
      <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6e6e73] sm:pt-1">
        {label}
      </h4>
      <p className="text-[15px] text-[#424245] leading-[1.75]">
        {value}
      </p>
    </div>
  );
};

type WorkItemData = {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  description: string[];
  problem?: string;
  ownership?: string;
  architecture?: string;
  approach?: string;
  results?: string;
  tech: string[];
  github?: string;
};

const WorkItem = ({ work, index }: { work: WorkItemData; index: number }) => {
  const ref = useRef(null);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card rounded-3xl p-8 md:p-12"
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-display text-3xl md:text-4xl font-semibold text-[#1d1d1f] tracking-[-0.02em]">
          {work.title}
        </h3>
        <span className="text-xs font-mono uppercase tracking-[0.08em] text-[#6e6e73] whitespace-nowrap ml-4 pt-2">
          {work.year}
        </span>
      </div>

      {/* Subtitle */}
      <p className="text-base text-[#424245] font-medium mb-10 max-w-3xl">
        {work.subtitle}
      </p>

      {/* Case study fields */}
      <div className="space-y-7">
        <CaseStudyField label="Problem" value={work.problem} />
        <CaseStudyField label="Ownership" value={work.ownership} />
        <CaseStudyField label="Architecture" value={work.architecture} />
        {work.id === 'entity-resolution' && (
          <div className="rounded-2xl bg-[#f5f5f7] p-5 md:p-6 space-y-5">
            <EntityResolutionDiagram />
            <PerformanceChart />
          </div>
        )}
        {work.id === 'address-validation' && (
          <div className="rounded-2xl bg-[#f5f5f7] p-5 md:p-6 space-y-5">
            <AddressValidationDiagram />
            <CostSavingsChart />
          </div>
        )}
        <CaseStudyField label="Approach" value={work.approach} />
        <CaseStudyField label="Results" value={work.results} />
      </div>

      <div className="my-10 h-px bg-black/[0.08]" />

      {/* Full description (all paragraphs) */}
      <div className="space-y-4">
        {work.description.map((para, i) => (
          <p key={i} className="text-base text-[#424245] leading-[1.75]">
            {para}
          </p>
        ))}
      </div>

      {/* GitHub link */}
      {work.github && (
        <a
          href={work.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-8 text-sm font-medium text-[#0071e3] hover:text-[#006edb] transition-colors"
        >
          View on GitHub
          <ArrowUpRight size={15} />
        </a>
      )}

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 pt-8 mt-8 border-t border-black/[0.08]">
        {work.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium text-[#424245] px-3 py-1 rounded-full bg-[#f5f5f7] border border-black/[0.04]"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

const SelectedWork = () => {
  return (
    <section id="work" className="py-24 md:py-32 relative bg-[#fbfbfd] scroll-mt-24">
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section header */}
          <div className="mb-16 md:mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6e6e73] mb-4">
              Selected work
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1d1d1f] tracking-[-0.03em] mb-5">
              Selected Projects
            </h2>
            <p className="text-lg text-[#6e6e73] max-w-2xl leading-[1.7]">
              Case studies: problem, ownership, architecture, approach, and results
            </p>
          </div>

          {/* Work list */}
          <div className="space-y-8">
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
