import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar, ArrowRight } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: 'Data Engineer / AWS Systems Engineer',
      company: 'MDThink / Maryland Benefits',
      location: 'Frederick, MD',
      period: '2021 - Present',
      current: true,
      highlights: [
        'Designed and maintained AWS Glue and PySpark ETL pipelines for large-scale data processing',
        'Built and optimized Redshift stored procedures and data warehouse tables',
        'Implemented Bronze, Silver, and Gold medallion architecture layers for enterprise analytics',
        'Developed metadata-driven ETL frameworks with automated job logging',
        'Supported Iceberg tables on S3 with AWS Glue Data Catalog integration',
        'Built data observability and monitoring workflows using AWS CloudWatch and Step Functions'
      ],
      techStack: ['AWS Glue', 'PySpark', 'Redshift', 'S3', 'Iceberg', 'Lambda', 'Step Functions', 'CloudWatch']
    },
    {
      title: 'Data/BI Engineer',
      company: 'Macquarie',
      location: 'Maryland, USA',
      period: '2018 - 2021',
      current: false,
      highlights: [
        'Developed BI and analytics solutions for financial data processing',
        'Implemented ETL workflows using Qlik, Tableau, Talend, and SQL',
        'Supported business reporting and data transformation for enterprise analytics',
        'Collaborated with cross-functional teams to deliver data-driven insights',
        'Designed and optimized SQL queries for performance and scalability'
      ],
      techStack: ['Qlik', 'Tableau', 'Talend', 'SQL', 'ETL', 'Data Integration']
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          </div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                        <div className="text-lg text-blue-400 font-semibold">{exp.company}</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-slate-400 ml-16">
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

                  {exp.current && (
                    <span className="px-4 py-1.5 text-sm font-semibold bg-green-500/20 text-green-400 border border-green-500/30 rounded-full w-fit">
                      Current
                    </span>
                  )}
                </div>

                {/* Highlights */}
                <div className="ml-16 space-y-6">
                  <div>
                    <h4 className="text-base font-semibold text-white mb-3">Key Contributions:</h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-300">
                          <ArrowRight className="text-blue-400 flex-shrink-0 mt-0.5" size={18} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
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
