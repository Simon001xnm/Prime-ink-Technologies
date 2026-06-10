import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingHelp from '@/components/FloatingHelp';
import MouseTracker from '@/components/MouseTracker';

export const metadata: Metadata = {
  title: 'Prime Ink Technologies | Neural Printing Systems',
  description: 'Industrial-grade toner engineered for precision and longevity via automated supply lines.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased selection:bg-primary selection:text-black')}>
        <div className="relative flex min-h-dvh flex-col bg-background">
          <MouseTracker />
          <Header />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
        </div>
        <FloatingHelp />
        <Toaster />
      </body>
    </html>
  );
}
