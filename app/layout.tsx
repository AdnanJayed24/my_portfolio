import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import dynamic from 'next/dynamic';

const DynamicToaster = dynamic(() => import('@/components/ui/toaster-wrapper'), {
  ssr: false,
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Adnan',
  description: 'Full-stack software engineer specializing in React, Node.js, and modern web technologies. Experienced in building scalable applications and leading development teams.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'React', 'Node.js', 'JavaScript', 'TypeScript'],
  authors: [{ name: 'Muhammad Adnan Jayed' }],
  openGraph: {
    title: 'Muhammad Adnan Jayed - Software Engineer',
    description: 'Full-stack software engineer specializing in React, Node.js, and modern web technologies.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
          <DynamicToaster />
        </ThemeProvider>
      </body>
    </html>
  );
}