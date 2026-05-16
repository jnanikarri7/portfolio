import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeader = ({ title, subtitle, align = 'left' }: SectionHeaderProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className={align === 'center' ? 'text-center' : ''}
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-slate-400 max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
