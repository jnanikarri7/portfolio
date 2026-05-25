export const profile = {
  name: 'Jnana Karri',
  fullName: 'Jnana Narasimhanand Karri',
  title: 'Senior Data Engineer',
  subtitle: 'AWS Systems Engineer · AI/ML Data Engineering',
  location: 'Frederick, Maryland',
  email: 'jnana.narasimha@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jnana-n',
  github: 'https://github.com/jnanikarri7',

  hero: {
    greeting: "Hello there! My name is Jnana and I'm a Senior Data Engineer based in Frederick, Maryland. In my 7+ years of experience I have designed and built cloud-native data platforms, ETL/ELT pipelines, lakehouse architectures, and data quality systems at companies like MDThink and Macquarie.",
    secondary: "Recently, I've been expanding my work toward AI-driven data quality, entity resolution, and AI/ML data engineering platforms."
  },

  about: {
    intro: "I'm a Data Engineer with 7+ years of experience designing and maintaining cloud-native data systems. My work sits at the intersection of data engineering, cloud architecture, analytics platforms, and data quality. I enjoy building systems that are reliable, observable, and useful for business teams.",
    current: "At MDThink / Maryland Benefits, I work on AWS-based data platforms using Glue, PySpark, Redshift, S3, Step Functions, Lambda, Athena, and Iceberg. My work includes medallion architecture, metadata-driven ETL, Redshift stored procedures, data observability, and analytics-ready gold layer datasets."
  },

  selectedWork: [
    {
      id: 'entity-resolution',
      title: 'AI Entity Resolution Platform',
      subtitle: 'Production-scale deduplication using probabilistic matching • v1.0.0 Released',
      year: '2024 – 2026',
      description: [
        "Built a production-scale entity resolution engine that deduplicates 50M customer records using Fellegi-Sunter probabilistic matching via Splink. Achieved 99.996% comparison reduction (O(n²) → O(n)) through multi-pass blocking while maintaining 92% recall.",
        "Implemented 6 survivorship strategies, comprehensive testing (20+ unit tests), CI/CD pipeline, and full documentation. Released as v1.0.0 with 1,898 lines of production code. Designed for $0.54 per million records on AWS Glue.",
        "→ View on GitHub: github.com/jnanikarri7/ai-entity-resolution-data-quality-platform"
      ],
      tech: ['PySpark', 'Python', 'Splink', 'AWS Glue', 'Apache Iceberg', 'Fellegi-Sunter', 'GitHub Actions', 'pytest'],
      github: 'https://github.com/jnanikarri7/ai-entity-resolution-data-quality-platform'
    },
    {
      id: 'address-validation',
      title: 'AWS Lakehouse Address Validation',
      subtitle: 'High-throughput pipeline with 82% cost reduction • $10.5M annual savings',
      year: '2024 – 2026',
      description: [
        "Developed an address validation pipeline that reduces API costs from $35K to $6.3K per day (82% reduction) through intelligent caching and deduplication. Processes 10M+ addresses daily with DynamoDB caching (70% hit rate) and hash-based deduplication (40% reduction).",
        "Built complete validation engine with SmartyStreets API integration, batch processing (100 addresses per request), exponential backoff retry logic, and production-ready error handling. Includes 35+ tests and CI/CD automation.",
        "→ View on GitHub: github.com/jnanikarri7/aws-lakehouse-address-validation"
      ],
      tech: ['Python', 'PySpark', 'DynamoDB', 'SmartyStreets API', 'AWS Glue', 'Iceberg', 'GitHub Actions'],
      github: 'https://github.com/jnanikarri7/aws-lakehouse-address-validation'
    },
    {
      id: 'mdthink',
      title: 'MDThink / Maryland Benefits',
      subtitle: 'Building cloud-native data platforms for public-sector analytics',
      year: '2021 – Present',
      description: [
        "At MDThink, I work on AWS-based data engineering systems that support large-scale government benefits and healthcare-related analytics. My work involves designing and maintaining Glue/PySpark pipelines, Redshift warehouse layers, metadata-driven stored procedures, and medallion architecture patterns across Bronze, Silver, and Gold layers.",
        "The platform processes millions of records daily, supporting QuickSight dashboards, data analysts, and downstream business intelligence teams. I focus on building reliable, observable, and maintainable data systems that serve public-sector stakeholders."
      ],
      tech: ['AWS Glue', 'PySpark', 'Redshift', 'S3', 'Athena', 'Lambda', 'Step Functions', 'Iceberg', 'QuickSight']
    },
    {
      id: 'observability',
      title: 'Redshift Lakehouse Observability',
      subtitle: 'Making data pipelines observable and reliable',
      year: '2023',
      description: [
        "A Redshift and AWS-based observability workflow for monitoring job metrics, table refreshes, data loads, and pipeline health. The solution uses stored procedures, scheduled queries, Lambda, Step Functions, S3 JSON metrics, and automated alert emails.",
        "This observability layer helps data teams understand pipeline health, diagnose issues quickly, and maintain SLAs for analytics workloads."
      ],
      tech: ['Redshift', 'PL/pgSQL', 'Lambda', 'Step Functions', 'CloudWatch', 'S3']
    }
  ],

  experience: [
    {
      company: 'MDThink / Maryland Benefits',
      role: 'Data Engineer / AWS Systems Engineer',
      period: '2021 – Present',
      url: null
    },
    {
      company: 'Macquarie',
      role: 'Data / BI Engineer',
      period: '2018 – 2021',
      url: null
    }
  ],

  skills: {
    'Cloud & AWS': ['AWS Glue', 'S3', 'Redshift', 'Athena', 'Lambda', 'Step Functions', 'Lake Formation', 'CloudWatch', 'DynamoDB', 'Aurora', 'Kinesis', 'SNS', 'SQS'],
    'Data Engineering': ['PySpark', 'Spark', 'Python', 'SQL', 'ETL/ELT', 'Data Lakes', 'Lakehouse Architecture', 'Apache Iceberg', 'Medallion Architecture', 'CDC', 'Batch Processing', 'Streaming'],
    'Warehousing & Modeling': ['Redshift', 'Star Schema', 'Dimensional Modeling', 'Fact Tables', 'Dimension Tables', 'Stored Procedures', 'PL/pgSQL', 'Query Optimization'],
    'Data Quality & Governance': ['Data Validation', 'Data Observability', 'Data Lineage', 'Metadata-driven Pipelines', 'Data Catalog', 'Rule-based Transformations', 'Monitoring', 'Alerting'],
    'BI & Analytics': ['Tableau', 'Qlik', 'QuickSight', 'Alteryx', 'Talend'],
    'AI/ML Direction': ['Entity Resolution', 'Data Quality Automation', 'Probabilistic Matching', 'Weak Supervision', 'AI-driven ETL', 'LLM/RAG', 'AI Data Platforms'],
    'DevOps & Tools': ['Git', 'Bitbucket', 'GitHub', 'CI/CD', 'Terraform', 'CloudFormation', 'Jupyter Notebook']
  },

  certifications: [
    'AWS Certified Solutions Architect – Professional',
    'AWS Certified Data Engineer – Associate',
    'AWS Certified Solutions Architect – Associate',
    'AWS Certified AI Practitioner',
    'Databricks Lakehouse Accreditation',
    'Apache Airflow Fundamentals'
  ],

  education: {
    degree: 'Master of Science in Information Systems Engineering & Management',
    concentration: 'Artificial Intelligence for Business',
    institution: 'Harrisburg University',
    focus: ['Intelligent Systems', 'AI for Business', 'Data Engineering', 'Enterprise Architecture', 'Applied AI/ML']
  },

  targetRoles: [
    'Senior Data Engineer',
    'AI Data Engineer',
    'AI Platform Engineer',
    'Cloud Data Engineer',
    'Lakehouse Data Engineer',
    'Data Engineering Lead'
  ]
};
