import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { profile } from '../data/profile';
import { ArrowUpRight } from 'lucide-react';

const Writing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="writing" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Writing
            </h2>
            <p className="text-lg text-gray-600">Technical notes on data engineering at scale</p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {profile.writing.map((post) => (
              <a
                key={post.url}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-6 md:p-7 flex items-center justify-between gap-4 group block"
              >
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500">Published on {post.source}</p>
                </div>
                <div className="w-10 h-10 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:border-blue-500 transition-all duration-300">
                  <ArrowUpRight size={18} className="text-gray-600 group-hover:text-blue-600 transition-colors" />
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
