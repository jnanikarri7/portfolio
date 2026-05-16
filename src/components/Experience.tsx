import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: 'Data Engineer / AWS Systems Engineer',
      company: 'MDThink / Maryland Benefits',
      location: 'Frederick, MD',
      period: 'Current',
      current: true,
      highlights: [
        'Designed and maintained AWS Glue and PySpark ETL pipelines for large-scale data processing',
        'Built and optimized Redshift stored procedures, data warehouse tables, and medallion architecture layers',
        'Worked with Bronze, Silver, and Gold data layers for enterprise analytics',
        'Implemented metadata-driven ETL frameworks and automated job logging',
        'Supported Iceberg tables on S3 with AWS Glue Data Catalog',
        'Built data observability and monitoring workflows using AWS services',
        'Worked on government benefits and healthcare-related data platforms',
        'Supported QuickSight dataset promotions and analytics validation',
        'Improved pipeline reliability, performance, and data quality'
      ]
    },
    {
      title: 'Data/BI Engineer',
      company: 'Macquarie',
      location: 'Maryland, USA',
      period: 'Previous',
      current: false,
      highlights: [
        'Worked on BI, analytics, and data engineering solutions',
        'Used Qlik, Tableau, Talend, SQL, and data integration tools',
        'Supported business reporting, data transformation, and enterprise analytics use cases',
        'Collaborated with cross-functional teams to deliver data-driven insights',
        'Designed and implemented ETL workflows for financial data processing'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-16 rounded-full" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 relative"
              >
                {exp.current && (
                  <div className="absolute top-8 right-8">
                    <span className="px-3 py-1 text-xs font-semibold bg-green-500/20 text-green-400 border border-green-500/30 rounded-full">
                      Current
                    </span>
                  </div>
                )}

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <div className="text-lg text-blue-400 font-semibold mb-3">{exp.company}</div>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-l-2 border-blue-500/30 pl-6 ml-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Contributions:</h4>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-slate-300 flex items-start gap-3">
                        <span className="text-blue-400 mt-1.5 flex-shrink-0">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
