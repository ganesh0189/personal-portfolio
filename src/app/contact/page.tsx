'use client';

import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="gradient-bg">
        <div className="container py-12 sm:py-16 lg:py-24">
          <h1 className="heading text-balance text-center sm:text-left">Contact Me</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="card card-hover p-6">
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-primary text-2xl" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Email</h3>
                    <a
                      href="mailto:ganeshbollem0189@gmail.com"
                      className="text-muted hover:text-primary transition-colors"
                    >
                      ganeshbollem0189@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="card card-hover p-6">
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-primary text-2xl" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Phone</h3>
                    <a
                      href="tel:+918688473961"
                      className="text-muted hover:text-primary transition-colors"
                    >
                      +91 8688473961
                    </a>
                  </div>
                </div>
              </div>

              <div className="card card-hover p-6">
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-primary text-2xl" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Location</h3>
                    <p className="text-muted">Hyderabad, India</p>
                  </div>
                </div>
              </div>

              <div className="card card-hover p-6">
                <div className="flex items-center space-x-4">
                  <FaLinkedin className="text-primary text-2xl" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/ganesh-bollem-0189/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-primary transition-colors"
                    >
                      linkedin.com/in/ganesh-bollem-0189
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Message */}
            <div className="card card-hover p-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Get in Touch</h2>
                <p className="text-muted">
                  Feel free to reach out to me through email or phone. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
                <div className="space-y-2">
                  <p className="text-muted">
                    <span className="font-medium text-foreground">Email:</span>{' '}
                    <a
                      href="mailto:ganeshbollem0189@gmail.com"
                      className="text-primary hover:underline"
                    >
                      ganeshbollem0189@gmail.com
                    </a>
                  </p>
                  <p className="text-muted">
                    <span className="font-medium text-foreground">Phone:</span>{' '}
                    <a
                      href="tel:+918688473961"
                      className="text-primary hover:underline"
                    >
                      +91 8688473961
                    </a>
                  </p>
                </div>
                <p className="text-muted">
                  I typically respond within 24 hours. Looking forward to hearing from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 