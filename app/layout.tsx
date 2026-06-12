import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain-name.com'),
  title: {
    default: 'High-Yield Study Engine | Pareto Principle Exam Analysis',
    template: '%s | High-Yield Engine',
  },
  description: 'Apply the Pareto Principle to your study materials. Our AI analyzes your PDFs to extract high-yield topics and maximize your exam results.',
  keywords: [
    'high-yield study techniques', 
    'pareto principle study method', 
    'exam preparation analysis', 
    'ai study tool'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'High-Yield Study Engine',
    description: 'Maximize your study efficiency with AI-powered Pareto Principle analysis.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}