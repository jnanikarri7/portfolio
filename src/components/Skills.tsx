import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cloud, Database, Code, Shield, BarChart3, Brain } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: Cloud,
      title: 'Cloud & AWS',
      skills: [
        'AWS Glue',
        'S3',
        'Redshift',
        'Athena',
        'Lambda',
        'Step Functions',
        'Lake Formation',
        'IAM',
        'CloudWatch',
        'DynamoDB',
        'Aurora',
        'Kinesis',
        'SNS',
        'SQS'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Data Engineering',
      skills: [
        'PySpark',
        'Spark',
        'Python',
        'SQL',
        'ETL/ELT',
        'Data Warehousing',
        'Data Lakes',
        'Lakehouse Architecture',
        'Apache Iceberg',
        'Medallion Architecture',
        'CDC',
        'Batch Processing',
        'Streaming Pipelines'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Data Modeling & Warehousing',
      skills: [
        'Redshift',
        'Star Schema',
        'Dimensional Modeling',
        'Fact Tables',
        'Dimension Tables',
        'Stored Procedures',
        'PL/pgSQL',
        'Query Optimization'
      ],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Data Quality & Governance',
      skills: [
        'Data Validation',
        'Data Observability',
        'Data Lineage',
        'Metadata-driven Pipelines',
        'Data Catalog',
        'Rule-based Transformations',
        'Monitoring and Alerting'
      ],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'BI & Analytics',
      skills: [
        'Tableau',
        'Qlik',
        'QuickSight',
        'Alteryx',
        'Talend'
      ],
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Brain,
      title: 'AI/ML Direction',
      skills: [
        'Entity Resolution',
        'Data Quality Automation',
        'Probabilistic Matching',
        'Weak Supervision',
        'AI-driven ETL',
        'LLM/RAG interest',
        'AI Data Platforms'
      ],
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Core Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-16 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4`}>
                  <category.icon className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-slate-300 hover:bg-white/10 hover:text-white transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 glass rounded-xl p-6"
          >
            <div className="flex items-start gap-3">
              <Code className="text-blue-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">DevOps & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Bitbucket', 'GitHub', 'CI/CD', 'Terraform', 'CloudFormation', 'Jupyter Notebook'].map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-slate-300 hover:bg-white/10 hover:text-white transition-colors duration-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
