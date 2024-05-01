'use client';
import { Navbar } from '@/components/layout';
import { homeData } from '@/utils';
import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <>
      <header className='relative'>
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      </header>
      <main>
        <section className='flex w-full flex-col gap-4'>
          {homeData.map((item) => {
            if (item.section === activeSection) {
              const Component = item.component;
              return <Component key={item.section} />;
            }
          })}
        </section>
      </main>
    </>
  );
}
