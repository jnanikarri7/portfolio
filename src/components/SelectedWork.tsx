import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
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
    <div className="space-y-1.5">
      <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
        {label}
      </h4>
      <p className="text-[15px] text-gray-600 leading-[1.8]">
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
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card rounded-2xl p-8 md:p-10"
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 tracking-tight">
          {work.title}
        </h3>
        <span className="text-[13px] text-gray-500 font-mono whitespace-nowrap ml-4 pt-1">
          {work.year}
        </span>
      </div>

      {/* Subtitle */}
      <p className="text-base text-gray-700 font-medium mb-8">
        {work.subtitle}
      </p>

      {/* Case study fields */}
      <div className="space-y-6">
        <CaseStudyField label="Problem" value={work.problem} />
        <CaseStudyField label="Ownership" value={work.ownership} />
        <CaseStudyField label="Architecture" value={work.architecture} />
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
        <CaseStudyField label="Approach" value={work.approach} />
        <CaseStudyField label="Results" value={work.results} />
      </div>

      {/* Full description (all paragraphs) */}
      <div className="mt-6 space-y-4">
        {work.description.map((para, i) => (
          <p key={i} className="text-base text-gray-600 leading-[1.8]">
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
          className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
        >
          View on GitHub
          <ArrowUpRight size={16} />
        </a>
      )}

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-gray-100">
        {work.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium text-gray-700 px-3 py-1.5 rounded-lg bg-gray-100 border border-gray-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
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
            <p className="text-lg text-gray-600">Case studies: problem, ownership, architecture, results</p>
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
