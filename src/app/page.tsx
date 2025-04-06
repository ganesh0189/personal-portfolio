import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I'm{' '}
              <span className="gradient-text">
                Lakshmi Sai Ganesh
              </span>
            </h1>
            <p className="text-xl text-muted">
              ETL Developer specializing in data integration, migration, and Python/SQL development.
              Transforming complex data challenges into efficient solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary">
                Get in Touch
              </Link>
              <Link href="/projects" className="btn border border-border hover:bg-gray-50 dark:hover:bg-gray-800">
                View Projects
              </Link>
              <a
                href="https://github.com/ganesh0189"
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-border hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </span>
              </a>
            </div>
          </div>
          <div className="relative aspect-square max-w-md mx-auto animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
            <div className="relative rounded-full overflow-hidden border-4 border-background shadow-xl">
              <Image
                src="/images/profile.jpg"
                alt="Lakshmi Sai Ganesh Bollem"
                width={500}
                height={500}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="container py-20 animate-slide-up">
        <h2 className="heading text-center">Core Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { name: 'Python Development', level: 'Advanced' },
            { name: 'SQL & Database Design', level: 'Advanced' },
            { name: 'ETL Pipelines', level: 'Advanced' },
            { name: 'Data Migration', level: 'Advanced' },
            { name: 'Azure Cloud', level: 'Intermediate' },
            { name: 'REST APIs', level: 'Intermediate' },
            { name: 'PySpark', level: 'Intermediate' },
            { name: 'Data Integration', level: 'Advanced' },
          ].map((skill) => (
            <div
              key={skill.name}
              className="card hover:scale-105 transition-transform"
            >
              <h3 className="font-semibold mb-2">{skill.name}</h3>
              <span className="text-sm text-muted">{skill.level}</span>
            </div>
          ))}
        </div>
      </section>

      {/* GitHub Section */}
      <section className="container py-20">
        <div className="card animate-slide-up">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <Image
                src="/images/profile.jpg"
                alt="GitHub Profile"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <div className="flex-grow space-y-4">
              <h2 className="text-2xl font-bold">Open Source Contributions</h2>
              <p className="text-muted">
                Check out my open-source projects and contributions on GitHub. I'm passionate about
                building tools that make data integration and ETL processes more efficient.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/ganesh0189"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View GitHub Profile
                </a>
                <a
                  href="https://github.com/ganesh0189?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn border border-border hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  View Repositories
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <div className="text-center space-y-8 animate-slide-up">
          <h2 className="heading">Let's Work Together</h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Looking for an ETL Developer who can transform your data challenges into opportunities?
            Let's connect and discuss how I can help your organization.
          </p>
          <Link href="/contact" className="btn btn-primary inline-block">
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
} 