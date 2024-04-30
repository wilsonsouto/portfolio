import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Portfolio showcasing my professional experiences, education, personal projects, and contact information.',
  icons: '/img/elements/favicon.svg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='m-auto flex max-w-4xl flex-col gap-20 bg-foreground p-4 text-background md:flex-row md:gap-60 md:py-20'>
        {children}
      </body>
    </html>
  );
}
