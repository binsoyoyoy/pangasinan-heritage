import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pangasinan Heritage Digital Showcase',
  description: 'Explore iconic heritage sites across Pangasinan including Hundred Islands, Bolinao Lighthouse, and Balungao Hot Spring.',
  keywords: ['Pangasinan', 'Heritage', 'Tourism', 'Philippines', 'Culture'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}