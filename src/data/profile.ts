export const profile = {
  name: 'Jnana Karri',
  fullName: 'Jnana Karri',
  title: 'Senior Data Engineer',
  subtitle: 'AWS Lakehouse Platforms · Python / PySpark · Azure Databricks Certified (DP-750)',
  location: 'Arlington, Virginia',
  email: 'jnana.narasimha@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jnana-n',
  github: 'https://github.com/jnanikarri7',

  hero: {
    greeting: "Hello there! My name is Jnana and I'm a Senior Data Engineer based in Arlington, Virginia. In my 8+ years of experience I have designed and built cloud-native data platforms, ETL/ELT pipelines, lakehouse architectures, and data quality systems at companies like MDThink and Macquarie.",
    secondary: "Recently, I've been expanding my work toward AI-driven data quality, entity resolution, and AI/ML data engineering platforms.",
    valueProposition: 'AWS lakehouse platforms with Python/PySpark, now Azure Databricks certified (DP-750). Government benefits and financial-services domains.',
    proofChips: [
      '8+ years experience',
      'AWS 4x + DP-750',
      'Lakehouse platforms designed for 50M+ record scale'
    ]
  },

  about: {
    intro: "I'm a Data Engineer with 8+ years of experience designing and maintaining cloud-native data systems. My work sits at the intersection of data engineering, cloud architecture, analytics platforms, and data quality. I enjoy building systems that are reliable, observable, and useful for business teams.",
    current: "At MDThink / Maryland Benefits, I work on AWS-based data platforms using Glue, PySpark, Redshift, S3, Step Functions, Lambda, Athena, and Iceberg. My work includes medallion architecture, metadata-driven ETL, Redshift stored procedures, data observability, and analytics-ready gold layer datasets."
  },

  selectedWork: [
    {
      id: 'entity-resolution',
      title: 'AI Entity Resolution Platform',
      subtitle: 'Probabilistic deduplication designed for 50M+ records (Fellegi-Sunter / Splink) • v1.0.0 Released',
      year: '2024 – 2026',
      description: [
        "Designed a production-scale entity resolution engine to deduplicate 50M+ customer records using Fellegi-Sunter probabilistic matching via Splink. The multi-pass blocking design reduces the comparison space from O(n²) toward O(n). Precision and recall figures in the project documentation are design targets, not measured production results.",
        "Implemented 6 survivorship strategies, comprehensive testing (20+ unit tests), CI/CD pipeline, and full documentation. Released as v1.0.0. Designed for approximately $0.54 per million records on AWS Glue (modeled from current AWS pricing).",
        "→ View on GitHub: github.com/jnanikarri7/ai-entity-resolution-data-quality-platform"
      ],
      problem: 'Deduplicating tens of millions of customer records is infeasible with naive pairwise comparison and requires probabilistic matching with a scalable blocking strategy.',
      ownership: 'Designed and built the full platform: data standardization, multi-pass blocking, Splink matching model, survivorship rules, testing, CI/CD, and documentation. Released as v1.0.0.',
      architecture: 'Raw data → Standardize → Multi-pass Blocking → Splink (Fellegi-Sunter) Matching → Golden Records. Built on PySpark and Python, designed to run on AWS Glue with Apache Iceberg tables.',
      approach: 'Fellegi-Sunter probabilistic matching via Splink with multi-pass blocking to cut the comparison space. Six survivorship strategies for golden-record creation. 20+ unit tests with pytest and GitHub Actions CI.',
      results: 'Design targets: process 50M+ records with target precision/recall defined in the project documentation (not measured production results). Modeled cost of approximately $0.54 per million records on AWS Glue. 1,898 lines of production code.',
      tech: ['PySpark', 'Python', 'Splink', 'AWS Glue', 'Apache Iceberg', 'Fellegi-Sunter', 'GitHub Actions', 'pytest'],
      github: 'https://github.com/jnanikarri7/ai-entity-resolution-data-quality-platform'
    },
    {
      id: 'address-validation',
      title: 'AWS Lakehouse Address Validation',
      subtitle: 'High-throughput pipeline — 82% modeled API-cost reduction (modeled from API pricing)',
      year: '2024 – 2026',
      description: [
        "Developed an address validation pipeline designed to reduce API costs from $35K to $6.3K per day (82% reduction, modeled from API pricing) through intelligent caching and deduplication. Designed to process 10M+ addresses daily with DynamoDB caching (70% target hit rate) and hash-based deduplication (40% target reduction).",
        "Built complete validation engine with SmartyStreets API integration, batch processing (100 addresses per request), exponential backoff retry logic, and production-ready error handling. Includes 35+ tests and CI/CD automation. Cost figures are modeled from API pricing, not measured production savings.",
        "→ View on GitHub: github.com/jnanikarri7/aws-lakehouse-address-validation"
      ],
      problem: 'Validating millions of addresses per day against a paid API is cost-prohibitive without caching and deduplication.',
      ownership: 'Designed and built the validation engine end to end: standardization, deduplication, DynamoDB cache layer, SmartyStreets integration, batching, retries, tests, and CI/CD.',
      architecture: 'Input → Standardize → Dedupe (hash-based) → Cache check (DynamoDB) → SmartyStreets API (cache misses only) → Validated output on an AWS lakehouse (AWS Glue, Iceberg).',
      approach: 'Hash-based deduplication before any API call, DynamoDB caching with a 70% target hit rate, batch processing (100 addresses per request), and exponential-backoff retry logic.',
      results: 'Modeled from API pricing: 82% API-cost reduction ($35K/day → $6.3K/day; $10.5M modeled annual savings). Not measured production savings. 35+ tests with CI/CD automation.',
      tech: ['Python', 'PySpark', 'DynamoDB', 'SmartyStreets API', 'AWS Glue', 'Iceberg', 'GitHub Actions'],
      github: 'https://github.com/jnanikarri7/aws-lakehouse-address-validation'
    },
    {
      id: 'mdthink',
      title: 'MDThink / Maryland Benefits',
      subtitle: 'Building cloud-native data platforms for public-sector analytics',
      year: 'Mar 2024 – Present',
      description: [
        "At MDThink, I work on AWS-based data engineering systems that support large-scale government benefits and healthcare-related analytics. My work involves designing and maintaining Glue/PySpark pipelines, Redshift warehouse layers, metadata-driven stored procedures, and medallion architecture patterns across Bronze, Silver, and Gold layers.",
        "The platform processes millions of records daily, supporting QuickSight dashboards, data analysts, and downstream business intelligence teams. I focus on building reliable, observable, and maintainable data systems that serve public-sector stakeholders."
      ],
      problem: 'Government benefits and healthcare analytics need reliable, governed pipelines that turn operational data into analytics-ready datasets for dashboards and reporting.',
      ownership: 'Senior Data Engineer (contract) at State of Maryland / MDThink since March 2024. Own Glue/PySpark pipeline design and maintenance, Redshift warehouse layers, and medallion architecture implementation.',
      architecture: 'AWS medallion lakehouse: S3 (Bronze/Silver/Gold), AWS Glue and PySpark for ETL, Redshift warehouse layer with stored procedures, Athena for ad hoc query, Lambda and Step Functions for orchestration, Iceberg table format.',
      approach: 'Metadata-driven ETL, Redshift stored procedures, data observability practices, and analytics-ready gold-layer datasets.',
      results: 'Platform processes millions of records daily, supporting QuickSight dashboards, data analysts, and downstream BI teams in the public sector.',
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
      problem: 'Without pipeline observability, data teams cannot quickly diagnose load failures or defend analytics SLAs.',
      ownership: 'Built the observability workflow: metrics capture, scheduled health checks, and automated alerting for Redshift lakehouse pipelines.',
      architecture: 'Redshift stored procedures and scheduled queries → S3 JSON metrics → Lambda and Step Functions orchestration → CloudWatch monitoring with automated alert emails.',
      approach: 'Stored procedures for job/table metrics, scheduled queries for refresh monitoring, Lambda/Step Functions for the monitoring workflow.',
      results: 'Data teams can see pipeline health, diagnose issues faster, and maintain SLAs for analytics workloads.',
      tech: ['Redshift', 'PL/pgSQL', 'Lambda', 'Step Functions', 'CloudWatch', 'S3']
    }
  ],

  experience: [
    {
      company: 'State of Maryland / MDThink',
      role: 'Senior Data Engineer (contract)',
      period: 'Mar 2024 – Present',
      url: null
    },
    {
      company: 'Macquarie Group',
      role: 'Data Engineer, AWS / Python (contract)',
      period: 'Aug 2021 – Jan 2024',
      url: null
    },
    {
      company: 'Yokogawa Pvt Ltd, Bangalore',
      role: 'Python Developer',
      period: 'Aug 2017 – Jan 2020',
      url: null
    }
  ],

  skills: {
    'Cloud & AWS': ['AWS Glue', 'S3', 'Redshift', 'Athena', 'Lambda', 'Step Functions', 'DynamoDB'],
    'Data Engineering': ['Python', 'PySpark', 'Apache Spark', 'SQL', 'ETL/ELT', 'Lakehouse Architecture', 'Apache Iceberg', 'dbt', 'Apache Airflow', 'Kafka'],
    'Platforms & Databases': ['Databricks', 'PostgreSQL'],
    'DevOps & Tools': ['CI/CD', 'Git', 'GitHub', 'Terraform', 'Jupyter Notebook']
  },

  certifications: [
    { name: 'AWS Certified Solutions Architect – Professional' },
    { name: 'AWS Certified Data Engineer – Associate' },
    { name: 'AWS Certified AI Practitioner' },
    { name: 'AWS Certified Solutions Architect – Associate' },
    {
      name: 'Microsoft Certified: Azure Databricks Data Engineer Associate (DP-750)',
      verify: 'https://learn.microsoft.com/api/credentials/share/en-us/JnanaKarri-8499/182E60638DDB9DBA?sharingId=4DA9C66A88C1FE54'
    },
    { name: 'Apache Flink (Ververica)' },
    { name: 'Databricks Fundamentals' },
    { name: 'Astronomer Airflow' },
    { name: 'Kaggle Python' },
    { name: 'Kaggle Advanced SQL' }
  ],

  education: {
    degree: "Master's in Computer Engineering (ML/Deep Learning)",
    concentration: 'ML / Deep Learning',
    institution: 'University of Colorado Denver',
    period: '2020 – 2021',
    gpa: '3.71',
    focus: ['Machine Learning', 'Deep Learning', 'Data Engineering', 'Applied AI/ML']
  },

  writing: [
    {
      title: 'Partition pruning in Spark and data lakehouses',
      url: 'https://www.linkedin.com/feed/update/urn:li:activity:7511146944023687168/',
      source: 'LinkedIn'
    }
  ],

  targetRoles: [
    'Senior Data Engineer',
    'AI Data Engineer',
    'AI Platform Engineer',
    'Cloud Data Engineer',
    'Lakehouse Data Engineer',
    'Data Engineering Lead'
  ]
};
