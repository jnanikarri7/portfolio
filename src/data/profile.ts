export const profile = {
  name: 'Jnana Karri',
  fullName: 'Jnana Narasimhanand Karri',
  title: 'Senior Data Engineer',
  subtitle: 'AWS Systems Engineer | AI/ML Data Engineering',
  location: 'Frederick, Maryland, USA',
  email: 'jnana.narasimha@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jnana-n',
  github: 'https://github.com/jnanikarri7',

  hero: {
    greeting: "Hello, I'm Jnana — a cloud-native Data Engineer based in Frederick, Maryland. I build scalable data platforms, ETL pipelines, and lakehouse architectures across AWS, Spark, Redshift, and modern data engineering ecosystems.",
    secondary: "Recently, I've been expanding my work toward AI-driven data quality, entity resolution, and AI/ML data engineering platforms."
  },

  about: {
    intro: "I'm a Data Engineer with 7+ years of experience designing and maintaining cloud-native data systems. My work sits at the intersection of data engineering, cloud architecture, analytics platforms, and data quality. I enjoy building systems that are reliable, observable, and useful for business teams.",
    current: "At MDThink / Maryland Benefits, I work on AWS-based data platforms using Glue, PySpark, Redshift, S3, Step Functions, Lambda, Athena, and Iceberg. My work includes medallion architecture, metadata-driven ETL, Redshift stored procedures, data observability, and analytics-ready gold layer datasets."
  },

  selectedWork: [
    {
      id: 'mdthink',
      title: 'MDThink / Maryland Benefits',
      subtitle: 'Building cloud-native data platforms for public-sector analytics',
      year: 'Current',
      description: [
        "At MDThink, I work on AWS-based data engineering systems that support large-scale government benefits and healthcare-related analytics. My work involves designing and maintaining Glue/PySpark pipelines, Redshift warehouse layers, metadata-driven stored procedures, and medallion architecture patterns across Bronze, Silver, and Gold layers.",
        "The platform processes millions of records daily, supporting QuickSight dashboards, data analysts, and downstream business intelligence teams. I focus on building reliable, observable, and maintainable data systems that serve public-sector stakeholders."
      ],
      tech: ['AWS Glue', 'PySpark', 'Redshift', 'S3', 'Athena', 'Lambda', 'Step Functions', 'Iceberg', 'QuickSight']
    },
    {
      id: 'entity-resolution',
      title: 'AI-Driven Entity Resolution and Data Quality Platform',
      subtitle: 'Exploring AI-driven data quality and entity resolution',
      year: '2024',
      description: [
        "A flagship AI/ML data engineering project focused on cloud lakehouse-based entity resolution and data quality automation. The goal is to combine probabilistic matching, supervised learning, weak supervision, and scalable PySpark processing to improve duplicate detection, record linkage, and trust in analytics platforms.",
        "This project explores how machine learning can augment traditional data quality workflows, making entity resolution more accurate and scalable for enterprise data platforms."
      ],
      tech: ['PySpark', 'Python', 'AWS Glue', 'Iceberg', 'Entity Resolution', 'ML Pipelines', 'Data Quality']
    },
    {
      id: 'address-verification',
      title: 'Address Verification API Library',
      subtitle: 'Standardizing and validating address data at scale',
      year: '2023',
      description: [
        "A Python/PySpark AWS Glue library integrating address validation APIs to standardize, validate, and enrich address records. The design uses batching, caching, and structured enrichment to reduce API calls and improve downstream data quality.",
        "The library processes millions of addresses efficiently while maintaining data quality standards and reducing costs through intelligent batching strategies."
      ],
      tech: ['Python', 'PySpark', 'AWS Glue', 'SmartyStreets API', 'Iceberg', 'S3']
    },
    {
      id: 'observability',
      title: 'Redshift Lakehouse Observability Pipeline',
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
      period: 'Current',
      description: 'Building AWS-based data platforms for government benefits and healthcare analytics using Glue, PySpark, Redshift, and lakehouse architecture patterns.'
    },
    {
      company: 'Macquarie',
      role: 'Data / BI Engineer',
      period: '2018 - 2021',
      description: 'Developed BI and analytics solutions for financial data processing using Qlik, Tableau, Talend, and SQL.'
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
