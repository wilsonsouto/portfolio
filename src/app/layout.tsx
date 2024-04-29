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
      <body className='m-auto flex max-w-4xl flex-col gap-20 bg-foreground p-4 text-background md:flex-row md:gap-52 md:py-20'>
        {children}
      </body>
    </html>
  );
}
