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
      <body className='m-auto flex max-w-5xl gap-52 bg-foreground px-4 py-20 text-background'>{children}</body>
    </html>
  );
}
