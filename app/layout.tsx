import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import { Providers } from './providers';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Shysta Sehgal",
  description: "PhD student in Biomedical Engineering",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`
          min-h-screen
          bg-gradient-to-b from-zinc-900 to-black 
          text-white 
          ${geistSans.variable} 
          ${geistMono.variable}
        `}
        suppressHydrationWarning
      >
        <Providers>
          <Header />
          <main className="px-6">{children}</main>
        </Providers>
      </body>
    </html>
  );
}