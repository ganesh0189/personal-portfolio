export default function Projects() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="gradient-bg">
        <div className="container py-24">
          <h1 className="heading text-balance">Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="card card-hover animate-fadeIn">
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Migration Project</h2>
                <p className="text-muted mb-4">
                  Led a complex data migration project at Accenture, successfully transferring data from legacy systems to modern cloud infrastructure.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="badge-primary hover:bg-primary-dark transition-colors">Python</span>
                  <span className="badge-primary hover:bg-primary-dark transition-colors">Azure</span>
                  <span className="badge-primary hover:bg-primary-dark transition-colors">SQL</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">Key Highlights:</h3>
                  <ul className="list-disc list-inside text-muted space-y-1">
                    <li>Migrated 100+ TB of data with 99.99% accuracy</li>
                    <li>Reduced processing processing time by 40%</li>
                    <li>Implemented automated validation checks</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="card card-hover animate-fadeIn" style={{ animationDelay: '200ms' }}>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">ETL Pipeline Development</h2>
                <p className="text-muted mb-4">
                  Designed and implemented robust ETL pipelines for processing large-scale financial data.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="badge-primary hover:bg-primary-dark transition-colors">PySpark</span>
                  <span className="badge-primary hover:bg-primary-dark transition-colors">Azure Data Factory</span>
                  <span className="badge-primary hover:bg-primary-dark transition-colors">SQL Server</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">Key Highlights:</h3>
                  <ul className="list-disc list-inside text-muted space-y-1">
                    <li>Processed 1M+ records daily</li>
                    <li>Achieved 99.9% data quality score</li>
                    <li>Reduced manual intervention by 80%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Expertise */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-8 text-foreground">Technical Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card card-hover animate-fadeIn" style={{ animationDelay: '400ms' }}>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Programming</h3>
                <ul className="list-disc list-inside text-muted space-y-2">
                  <li>Python Development</li>
                  <li>SQL & Database Design</li>
                  <li>ETL Development</li>
                </ul>
              </div>
              <div className="card card-hover animate-fadeIn" style={{ animationDelay: '500ms' }}>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Databases</h3>
                <ul className="list-disc list-inside text-muted space-y-2">
                  <li>MySQL</li>
                  <li>SQL Server</li>
                  <li>Data Warehousing</li>
                </ul>
              </div>
              <div className="card card-hover animate-fadeIn" style={{ animationDelay: '600ms' }}>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Tools & Platforms</h3>
                <ul className="list-disc list-inside text-muted space-y-2">
                  <li>Azure Cloud</li>
                  <li>Git & Version Control</li>
                  <li>Azure DevOps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 