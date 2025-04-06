import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lakshmi Sai Ganesh Bollem - ETL Developer',
  description: 'Professional portfolio of Lakshmi Sai Ganesh Bollem, an ETL Developer specializing in data integration, migration, and Python/SQL development.',
  keywords: 'ETL Developer, Data Integration, Python, SQL, PySpark, Azure, REST APIs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
} 