import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nyxera.cloud'),
  title: {
    default: 'Nyxera Labs',
    template: '%s | Nyxera Labs',
  },
  description: 'Nyxera Labs engineers resilient software infrastructure for high-assurance systems.',
  icons: {
    icon: [
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon.ico' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/favicon.ico'],
  },
  openGraph: {
    type: 'website',
    siteName: 'Nyxera Labs',
    url: 'https://nyxera.cloud',
    title: 'Nyxera Labs',
    description: 'Engineering the next layer of software infrastructure.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Nyxera Labs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nyxera Labs',
    description: 'Engineering the next layer of software infrastructure.',
    images: ['/og-image.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-roboto antialiased">
        <div className="min-h-screen bg-nyxera-bg bg-grid bg-scroll md:bg-fixed">{children}</div>
      </body>
    </html>
  );
}
