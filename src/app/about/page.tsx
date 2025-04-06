export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container py-24">
        <h1 className="heading">About Me</h1>
        
        {/* Professional Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
          <p className="text-muted leading-relaxed">
            I am an ETL Developer with expertise in data integration, migration, and Python/SQL development. 
            Currently working at Bendito SoftTech, I specialize in integrating ATS with HCM/HRM systems 
            using Python scripting and SQL to automate ETL processes. My experience includes leading development 
            teams and implementing efficient data workflows using modern technologies.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Professional Experience</h2>
          
          <div className="space-y-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">ETL Developer</h3>
              <p className="text-primary mb-2">Bendito SoftTech • Hyderabad</p>
              <p className="text-muted mb-4">September 2023 - Present</p>
              <ul className="list-disc list-inside text-muted space-y-2">
                <li>Integrated ATS with HCM/HRM systems using Python scripting and SQL</li>
                <li>Utilized PySpark for processing and transforming large datasets</li>
                <li>Developed event notification/webhooks for REST API data handling</li>
                <li>Leveraged Azure for deployment and project management</li>
                <li>Led development teams and managed project lifecycles</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-2">Embedded Engineer Intern</h3>
              <p className="text-primary mb-2">Regami Solutions • Chennai</p>
              <p className="text-muted mb-4">November 2022 - May 2023</p>
              <ul className="list-disc list-inside text-muted space-y-2">
                <li>Worked with 32-bit microcontrollers and BLE devices</li>
                <li>Implemented I2C, SPI, and UART protocols</li>
                <li>Developed USB integrated applications</li>
                <li>Designed and implemented Yocto image for Raspberry Pi</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-2">Machine Learning Intern</h3>
              <p className="text-primary mb-2">IIIT Hyderabad • Hyderabad</p>
              <p className="text-muted mb-4">August 2022 - November 2022</p>
              <ul className="list-disc list-inside text-muted space-y-2">
                <li>Developed and tested machine learning algorithms</li>
                <li>Worked with open-source datasets</li>
                <li>Implemented projects using real-world data</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">B.Tech in Electronics and Communications Engineering</h3>
            <p className="text-primary mb-2">Rajiv Gandhi University of Knowledge Technologies • Ongole</p>
            <p className="text-muted">CGPA: 9.35</p>
          </div>
        </section>
      </div>
    </main>
  );
} 