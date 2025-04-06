export default function Projects() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="gradient-bg">
        <div className="container py-12 sm:py-16 lg:py-24">
          <h1 className="heading text-balance text-center sm:text-left">Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Project 1 */}
            <div className="card card-hover animate-fadeIn">
              <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-foreground">Data Migration Project</h2>
                <p className="text-muted mb-3 sm:mb-4 text-sm sm:text-base">
                  Led a complex data migration project at Accenture, successfully transferring data from legacy systems to modern cloud infrastructure.
                </p>
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  <span className="badge-primary hover:bg-primary-dark transition-colors text-xs sm:text-sm">Python</span>
                  <span className="badge-primary hover:bg-primary-dark transition-colors text-xs sm:text-sm">Azure</span>
                  <span className="badge-primary hover:bg-primary-dark transition-colors text-xs sm:text-sm">SQL</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">Key Highlights:</h3>
                  <ul className="list-disc list-inside text-muted space-y-1 text-sm sm:text-base">
                    <li>Migrated 100+ TB of data with 99.99% accuracy</li>
                    <li>Reduced processing time by 40%</li>
                    <li>Implemented automated validation checks</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="card card-hover animate-fadeIn" style={{ animationDelay: '200ms' }}>
              <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-foreground">ETL Pipeline Development</h2>
                <p className="text-muted mb-3 sm:mb-4 text-sm sm:text-base">
                  Designed and implemented robust ETL pipelines for processing large-scale financial data.
                </p>
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  <span className="badge-primary hover:bg-primary-dark transition-colors text-xs sm:text-sm">PySpark</span>
                  <span className="badge-primary hover:bg-primary-dark transition-colors text-xs sm:text-sm">Azure Data Factory</span>
                  <span className="badge-primary hover:bg-primary-dark transition-colors text-xs sm:text-sm">SQL Server</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">Key Highlights:</h3>
                  <ul className="list-disc list-inside text-muted space-y-1 text-sm sm:text-base">
                    <li>Processed 1M+ records daily</li>
                    <li>Achieved 99.9% data quality score</li>
                    <li>Reduced manual intervention by 80%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Expertise */}
          <div className="mt-12 sm:mt-16">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-foreground text-center sm:text-left">Technical Expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="card card-hover animate-fadeIn" style={{ animationDelay: '400ms' }}>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">Programming</h3>
                <ul className="list-disc list-inside text-muted space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>Python Development</li>
                  <li>SQL & Database Design</li>
                  <li>ETL Development</li>
                </ul>
              </div>
              <div className="card card-hover animate-fadeIn" style={{ animationDelay: '500ms' }}>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">Databases</h3>
                <ul className="list-disc list-inside text-muted space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>MySQL</li>
                  <li>SQL Server</li>
                  <li>Data Warehousing</li>
                </ul>
              </div>
              <div className="card card-hover animate-fadeIn" style={{ animationDelay: '600ms' }}>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">Tools & Platforms</h3>
                <ul className="list-disc list-inside text-muted space-y-1 sm:space-y-2 text-sm sm:text-base">
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