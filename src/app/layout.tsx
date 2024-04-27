import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js Starter Kit',
  description: 'Start fast, build easy.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-background text-foreground dark:bg-foreground dark:text-background'>{children}</body>
    </html>
  );
}
