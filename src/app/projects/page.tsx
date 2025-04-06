'use client';

import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: 'ETL Pipeline Development',
      description: 'Designed and implemented robust ETL pipelines for processing large-scale financial and HR data using Python, MySQL, and Azure cloud services.',
      keyHighlights: [
        'Processed 1M+ records daily with 99.9% data quality score',
        'Reduced manual intervention by 80% through automation',
        'Integrated HR tools with secure, real-time APIs for employee data management',
        'Automated time-tracking and payroll system integration'
      ],
      technicalExpertise: [
        {
          category: 'Languages & Tools',
          skills: ['Python', 'MySQL', 'Azure Data Factory', 'SQL Server']
        },
        {
          category: 'Integration Features',
          skills: [
            'Real-time API Integration',
            'Automated Data Validation',
            'Secure Data Transfer',
            'System Synchronization'
          ]
        }
      ],
      badges: [
        'ETL Pipeline',
        'Data Integration',
        'API Development',
        'Cloud Computing',
        'Automation'
      ]
    },
    {
      title: 'Data Migration Project',
      description: 'Led a complex data migration project at Accenture, successfully transferring data from legacy systems to modern cloud infrastructure.',
      keyHighlights: [
        'Migrated 100+ TB of data with 99.99% accuracy',
        'Reduced processing time by 40%',
        'Implemented automated validation checks'
      ],
      technicalExpertise: [
        {
          category: 'Programming',
          skills: ['Python', 'Azure', 'SQL']
        },
        {
          category: 'Databases',
          skills: ['MySQL', 'SQL Server', 'Data Warehousing']
        },
        {
          category: 'Tools & Platforms',
          skills: ['Azure Cloud', 'Git & Version Control', 'Azure DevOps']
        }
      ],
      badges: [
        'Data Migration',
        'Cloud Computing',
        'SQL Development',
        'Automation'
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="gradient-bg">
        <div className="container py-12 sm:py-16 lg:py-24">
          <h1 className="heading text-balance text-center sm:text-left">Projects</h1>
          
          <div className="grid grid-cols-1 gap-8 mt-8">
            {projects.map((project, index) => (
              <div key={index} className="card card-hover p-6">
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                <p className="text-muted mb-6">{project.description}</p>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Key Highlights:</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted">
                    {project.keyHighlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                {/* Technical Expertise */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Technical Expertise:</h3>
                  <div className="space-y-4">
                    {project.technicalExpertise.map((tech, idx) => (
                      <div key={idx}>
                        <h4 className="font-medium text-primary mb-2">{tech.category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {tech.skills.map((skill, skillIdx) => (
                            <span
                              key={skillIdx}
                              className="px-3 py-1 rounded-full text-sm font-medium bg-card-background border border-border"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 