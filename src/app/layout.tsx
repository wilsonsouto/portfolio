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
      <body className='m-auto flex max-w-3xl gap-56 bg-foreground px-4 py-20 text-background max-md:flex-col max-md:gap-20 max-md:p-4'>
        {children}
      </body>
    </html>
  );
}
