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
    <main className="min-h-screen bg-gray-900 text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Skills & Expertise</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills & Certifications */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Additional Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Development Tools</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Git Version Control</li>
                <li>Azure DevOps</li>
                <li>JIRA</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Soft Skills</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Team Leadership</li>
                <li>Project Management</li>
                <li>Problem Solving</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Industry Knowledge</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Data Integration</li>
                <li>System Architecture</li>
                <li>Best Practices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 