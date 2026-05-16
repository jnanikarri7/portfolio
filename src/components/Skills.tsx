import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cloud, Database, Code, Shield, BarChart3, Brain, GitBranch } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: Cloud,
      title: 'Cloud & AWS',
      skills: ['AWS Glue', 'S3', 'Redshift', 'Athena', 'Lambda', 'Step Functions', 'Lake Formation', 'IAM', 'CloudWatch', 'DynamoDB', 'Aurora', 'Kinesis', 'SNS', 'SQS'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Data Engineering',
      skills: ['PySpark', 'Spark', 'Python', 'SQL', 'ETL/ELT', 'Data Warehousing', 'Data Lakes', 'Lakehouse Architecture', 'Apache Iceberg', 'Medallion Architecture', 'CDC', 'Batch Processing', 'Streaming'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Data Modeling & Warehousing',
      skills: ['Star Schema', 'Dimensional Modeling', 'Fact Tables', 'Dimension Tables', 'Stored Procedures', 'PL/pgSQL', 'Query Optimization', 'Performance Tuning'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Data Quality & Governance',
      skills: ['Data Validation', 'Data Observability', 'Data Lineage', 'Metadata-driven Pipelines', 'Data Catalog', 'Rule-based Transformations', 'Monitoring', 'Alerting'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'BI & Analytics',
      skills: ['Tableau', 'Qlik', 'QuickSight', 'Alteryx', 'Talend', 'Data Visualization', 'Reporting', 'Analytics'],
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Brain,
      title: 'AI/ML Direction',
      skills: ['Entity Resolution', 'Data Quality Automation', 'Probabilistic Matching', 'Weak Supervision', 'AI-driven ETL', 'LLM/RAG', 'AI Data Platforms', 'ML Pipelines'],
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: GitBranch,
      title: 'DevOps & Tools',
      skills: ['Git', 'Bitbucket', 'GitHub', 'CI/CD', 'Terraform', 'CloudFormation', 'Jupyter Notebook', 'Docker'],
      gradient: 'from-slate-500 to-gray-500'
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
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
              Core Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center flex-shrink-0`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 rounded-lg text-slate-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
