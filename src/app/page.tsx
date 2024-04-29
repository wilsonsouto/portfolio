'use client';
import { useState } from 'react';
import { Navbar } from '@/components/layout';
import { About, Experiences, Education, Projects, Contact } from '@/components/sections';

const arr = [
  { section: 'about', component: <About key={1} /> },
  { section: 'experiences', component: <Experiences key={2} /> },
  { section: 'education', component: <Education key={3} /> },
  { section: 'projects', component: <Projects key={4} /> },
  { section: 'contact', component: <Contact key={5} /> },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <>
      <header className='relative'>
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      </header>
      <main>
        <section className='flex w-full flex-col gap-4'>
          {arr.map((item) => item.section === activeSection && item.component)}
        </section>
      </main>
    </>
  );
}
