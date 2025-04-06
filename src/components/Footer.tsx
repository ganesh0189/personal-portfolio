'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-muted">
              Email: ganesh.bollem189@gmail.com<br />
              Location: Ongole, Andhra Pradesh
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="nav-link">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className="nav-link">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://linkedin.com/in/ganesh-bollem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ganesh0189"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-muted">
          <p>&copy; {new Date().getFullYear()} Lakshmi Sai Ganesh Bollem. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 