'use client';
import React, { useState } from 'react';
import { About, Experiences } from '@/components/layout';

interface HeaderProps {
  section: string;
  position: string;
  component?: JSX.Element;
}

export default function Header() {
  const [activeSection, setActiveSection] = useState('about');
  const [position, setPosition] = useState('0');

  const handleClick = (section: string, position: string) => {
    setActiveSection(section);
    setPosition(position);
  };

  return (
    <>
      <header className='relative'>
        <nav className='fixed py-2'>
          <span
            style={{ top: `${position}%` }}
            className={`absolute left-0 -z-10 h-1/5 w-full rounded-md bg-accent-300 transition-all duration-300 ease-in-out`}
          ></span>
          <ul className={`flex flex-col gap-6 text-xl`}>
            {header.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer px-4 duration-300 ${item.section === activeSection ? 'text-neutral-900' : 'text-neutral-300 hover:text-accent-300'}`}
                onClick={() => handleClick(item.section, item.position)}
              >
                {item.section}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <section className='flex flex-col gap-4'>
          {header.map((item) => item.section === activeSection && item.component)}
        </section>
      </main>
    </>
  );
}

const header: HeaderProps[] = [
  { section: 'about', position: '0', component: <About key={1} /> },
  { section: 'experiences', position: '20', component: <Experiences key={2} /> },
  { section: 'education', position: '41' },
  { section: 'projects', position: '62' },
  { section: 'contact', position: '82' },
];
