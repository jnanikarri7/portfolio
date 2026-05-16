import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Folder, ExternalLink } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'AI-Driven Entity Resolution and Data Quality Platform',
      description: 'Cloud lakehouse-based entity resolution platform using probabilistic matching, supervised ML, weak supervision, and scalable ETL design.',
      tech: ['Python', 'PySpark', 'AWS Glue', 'S3', 'Iceberg', 'Entity Resolution', 'ML'],
      gradient: 'from-purple-500 to-pink-500',
      featured: true
    },
    {
      title: 'MDThink Address Verification API Library',
      description: 'Python/PySpark AWS Glue library for address validation at scale using batching, caching, enrichment, and Iceberg output tables.',
      tech: ['Python', 'PySpark', 'AWS Glue', 'SmartyStreets API', 'Iceberg'],
      gradient: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      title: 'AWS Billing and Cost Analytics Pipeline',
      description: 'Cost and Usage Report processing framework that transforms, enriches, and loads billing data into Iceberg tables for analytics.',
      tech: ['AWS CUR', 'S3', 'Glue', 'PySpark', 'Iceberg', 'Cost Analytics'],
      gradient: 'from-green-500 to-emerald-500',
      featured: false
    },
    {
      title: 'Redshift Lakehouse Observability Pipeline',
      description: 'Automated Redshift observability framework using scheduled queries, Lambda, Step Functions, and alert notifications.',
      tech: ['Redshift', 'PL/pgSQL', 'Lambda', 'Step Functions', 'CloudWatch'],
      gradient: 'from-orange-500 to-red-500',
      featured: false
    },
    {
      title: 'Remote Forest Wildfire Detection System',
      description: 'Intelligent system design for wildfire detection using sensor networks, edge/cloud architecture, and real-time monitoring.',
      tech: ['IoT', 'Edge Computing', 'Cloud Architecture', 'AI Systems'],
      gradient: 'from-yellow-500 to-orange-500',
      featured: false
    },
    {
      title: 'Smart Telehealth Hub for Rural Communities',
      description: 'Enterprise architecture for hybrid telehealth hub using TOGAF/FEAF, service workflows, and SDG alignment.',
      tech: ['Enterprise Architecture', 'TOGAF', 'FEAF', 'Healthcare IT'],
      gradient: 'from-indigo-500 to-purple-500',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
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
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:scale-[1.02] ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0`}>
                    <Folder className="text-white" size={24} />
                  </div>
                  {project.featured && (
                    <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs bg-white/5 border border-white/10 rounded-md text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <button className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200 opacity-0 group-hover:opacity-100">
                  View Details
                  <ExternalLink size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
