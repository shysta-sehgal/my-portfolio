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
  // Add viewport meta for dual-screen prevention
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover",
  // Additional meta tags for preventing dual screen
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'mobile-web-app-capable': 'yes',
    'format-detection': 'telephone=no',
    'samsung-app-mode': 'standalone',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Additional meta tags that can't be set in metadata */}
        <meta name="theme-color" content="#18181b" />
      </head>
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
          <div className="app-container relative">
            <Header />
            <main className="px-6">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}