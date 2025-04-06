export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "C", level: 75 },
        { name: "PySpark", level: 85 },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "SQL Server", level: 80 },
        { name: "Data Warehousing", level: 75 },
      ]
    },
    {
      title: "Cloud & Tools",
      skills: [
        { name: "Microsoft Azure", level: 80 },
        { name: "REST APIs", level: 85 },
        { name: "MS Excel", level: 75 },
      ]
    },
    {
      title: "ETL & Data Integration",
      skills: [
        { name: "Data Migration", level: 90 },
        { name: "ETL Processes", level: 85 },
        { name: "Data Integration", level: 85 },
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="gradient-bg">
        <div className="container py-24">
          <h1 className="heading text-balance">Skills & Expertise</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="card card-hover animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
                <h2 className="text-2xl font-semibold mb-4 gradient-text">{category.title}</h2>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-primary">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-section-bg rounded-full h-2.5 overflow-hidden">
                        <div
                          className="skill-bar bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full"
                          style={{ 
                            width: `${skill.level}%`,
                            '--skill-percentage': `${skill.level}%`
                          } as React.CSSProperties}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills & Certifications */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-8 gradient-text">Additional Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card card-hover animate-fadeIn" style={{ animationDelay: '400ms' }}>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Development Tools</h3>
                <ul className="list-disc list-inside text-muted space-y-2">
                  <li>Git Version Control</li>
                  <li>Azure DevOps</li>
                  <li>JIRA</li>
                </ul>
              </div>
              <div className="card card-hover animate-fadeIn" style={{ animationDelay: '500ms' }}>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Soft Skills</h3>
                <ul className="list-disc list-inside text-muted space-y-2">
                  <li>Team Leadership</li>
                  <li>Project Management</li>
                  <li>Problem Solving</li>
                </ul>
              </div>
              <div className="card card-hover animate-fadeIn" style={{ animationDelay: '600ms' }}>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Industry Knowledge</h3>
                <ul className="list-disc list-inside text-muted space-y-2">
                  <li>Data Integration</li>
                  <li>System Architecture</li>
                  <li>Best Practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 