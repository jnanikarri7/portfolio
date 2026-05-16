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
      description: 'A flagship AI/ML data engineering project focused on building a cloud lakehouse-based entity resolution and data quality platform using probabilistic matching, supervised ML, weak supervision, PySpark, and scalable ETL design.',
      tech: ['Python', 'PySpark', 'AWS Glue', 'S3', 'Iceberg', 'Entity Resolution', 'Data Quality', 'Machine Learning'],
      gradient: 'from-purple-500 to-pink-500',
      featured: true
    },
    {
      title: 'MDThink Address Verification API Library',
      description: 'Python/PySpark AWS Glue library integrating address validation APIs for standardizing and validating address data at scale, using batching, caching, enrichment, and Iceberg output tables.',
      tech: ['Python', 'PySpark', 'AWS Glue', 'SmartyStreets API', 'S3', 'Iceberg'],
      gradient: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      title: 'AWS Billing and Cost Analytics Pipeline',
      description: 'AWS Cost and Usage Report processing framework that transforms, enriches, tags, and loads billing data into Iceberg tables for cost allocation and analytics.',
      tech: ['AWS CUR', 'S3', 'Glue', 'PySpark', 'Iceberg', 'Cost Analytics'],
      gradient: 'from-green-500 to-emerald-500',
      featured: false
    },
    {
      title: 'Redshift Lakehouse Observability Pipeline',
      description: 'Automated Redshift data observability and notification framework using scheduled queries, stored procedures, Lambda, Step Functions, Glue metrics, S3 JSON metrics, and alert emails.',
      tech: ['Redshift', 'PL/pgSQL', 'Lambda', 'Step Functions', 'S3', 'CloudWatch'],
      gradient: 'from-orange-500 to-red-500',
      featured: false
    },
    {
      title: 'Remote Forest Monitoring and Wildfire Detection System',
      description: 'Academic intelligent system design for wildfire detection using sensor networks, edge/cloud architecture, real-time alerts, and dashboard-based monitoring.',
      tech: ['IoT', 'Edge Computing', 'Cloud Architecture', 'AI Systems', 'Dashboarding'],
      gradient: 'from-yellow-500 to-orange-500',
      featured: false
    },
    {
      title: 'Smart Telehealth Hub for Rural Indigenous Communities',
      description: 'Enterprise architecture project proposing a hybrid telehealth hub for rural communities in Chiapas Highlands, Mexico, using TOGAF/FEAF, service workflows, SDG alignment, and portal design.',
      tech: ['Enterprise Architecture', 'TOGAF', 'FEAF', 'Healthcare IT', 'Telehealth'],
      gradient: 'from-indigo-500 to-purple-500',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-16 rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
              >
                {project.featured && (
                  <div className="absolute top-6 right-6">
                    <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full">
                      Featured
                    </span>
                  </div>
                )}

                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.gradient} opacity-5 rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-700`} />

                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0`}>
                      <Folder className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
                        {project.title}
                      </h3>
                    </div>
                    <button className="text-slate-400 hover:text-blue-400 transition-colors duration-200 opacity-0 group-hover:opacity-100">
                      <ExternalLink size={20} />
                    </button>
                  </div>

                  <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-slate-400 hover:text-white hover:border-white/20 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Projects;
