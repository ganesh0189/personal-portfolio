export default function Projects() {
  const projects = [
    {
      title: "ATS-HCM Integration System",
      description: "Developed an automated integration system between Applicant Tracking System (ATS) and Human Capital Management (HCM) systems using Python and SQL.",
      technologies: ["Python", "SQL", "REST APIs", "Azure"],
      highlights: [
        "Implemented ETL processes for seamless data migration",
        "Developed webhook system for real-time data synchronization",
        "Optimized data processing using PySpark",
        "Achieved 99.9% data accuracy in migrations"
      ]
    },
    {
      title: "Data Migration Automation",
      description: "Created an automated data migration pipeline for transferring historical data between HR systems.",
      technologies: ["Python", "PySpark", "Azure", "SQL"],
      highlights: [
        "Built scalable data processing pipeline",
        "Implemented data validation and error handling",
        "Reduced migration time by 60%",
        "Handled complex data transformations"
      ]
    },
    {
      title: "Real-time Integration Framework",
      description: "Developed a framework for real-time data integration between multiple HR systems.",
      technologies: ["Python", "REST APIs", "Azure", "SQL"],
      highlights: [
        "Created event-driven architecture",
        "Implemented robust error handling",
        "Achieved sub-second data synchronization",
        "Built monitoring and alerting system"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Projects & Case Studies</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h3 className="text-lg font-medium mb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Key Highlights</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Programming</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Python</li>
                <li>C</li>
                <li>PySpark</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Databases</h3>
              <ul className="text-gray-300 space-y-2">
                <li>MySQL</li>
                <li>SQL Server</li>
                <li>Data Warehousing</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Tools & Platforms</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Microsoft Azure</li>
                <li>REST APIs</li>
                <li>MS Excel</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 