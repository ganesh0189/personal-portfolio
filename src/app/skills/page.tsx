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
        <div className="container py-12 sm:py-16 lg:py-24">
          <h1 className="heading text-balance text-center sm:text-left">Skills & Expertise</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="card card-hover animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-foreground">{category.title}</h2>
                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-foreground font-medium text-sm sm:text-base">{skill.name}</span>
                        <span className="text-primary text-sm sm:text-base">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-section-bg rounded-full h-2 sm:h-2.5 overflow-hidden">
                        <div
                          className="skill-bar bg-gradient-to-r from-primary to-secondary h-2 sm:h-2.5 rounded-full"
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
          <div className="mt-12 sm:mt-16">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-foreground text-center sm:text-left">Additional Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="card card-hover animate-fadeIn" style={{ animationDelay: '400ms' }}>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">Development Tools</h3>
                <ul className="list-disc list-inside text-muted space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>Git Version Control</li>
                  <li>Azure DevOps</li>
                  <li>JIRA</li>
                </ul>
              </div>
              <div className="card card-hover animate-fadeIn" style={{ animationDelay: '500ms' }}>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">Soft Skills</h3>
                <ul className="list-disc list-inside text-muted space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>Team Leadership</li>
                  <li>Project Management</li>
                  <li>Problem Solving</li>
                </ul>
              </div>
              <div className="card card-hover animate-fadeIn" style={{ animationDelay: '600ms' }}>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">Industry Knowledge</h3>
                <ul className="list-disc list-inside text-muted space-y-1 sm:space-y-2 text-sm sm:text-base">
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