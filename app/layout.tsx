import type { Metadata } from 'next';
import { Orbitron } from 'next/font/google';
import './globals.css';

const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });

export const metadata: Metadata = {
  title: 'Noorullah ? Tech Logo',
  description: 'Professional technological logo for Noorullah',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${orbitron.variable} min-h-screen bg-[#0b0f16] text-white antialiased`}>{children}</body>
    </html>
  );
}
