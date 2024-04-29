'use client';
import React, { useState, useEffect } from 'react';
import { About, Experiences, Education, Projects, Contact } from '@/components/layout';
import { Menu } from '@/components/elements';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  section: string;
  position: string;
  component?: JSX.Element;
}

export default function Header() {
  const [activeSection, setActiveSection] = useState('about');
  const [position, setPosition] = useState('0');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleClick = (section: string, position: string) => {
    setActiveSection(section);
    setPosition(position);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header className='relative'>
        {windowWidth >= 768 && (
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
        )}
        {windowWidth < 768 && (
          <nav className='fixed left-0 top-0 z-50 flex w-full items-center justify-between rounded-sm p-4 text-xl backdrop-blur-md'>
            <Link href="/" className='flex items-center text-2xl gap-2'>
              <Image alt='favicon' src='/img/elements/favicon.svg' width={35} height={35} />
              <span className='logo'>Portfolio</span>
            </Link>
            <Menu>
              {header.map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer px-4 duration-300 ${item.section === activeSection ? 'text-accent-300' : 'text-neutral-400 hover:text-neutral-200'}`}
                  onClick={() => handleClick(item.section, item.position)}
                >
                  {item.section}
                </li>
              ))}
            </Menu>
          </nav>
        )}
      </header>
      <main>
        <section className='flex w-full flex-col gap-4'>
          {header.map((item) => item.section === activeSection && item.component)}
        </section>
      </main>
    </>
  );
}

const header: HeaderProps[] = [
  { section: 'about', position: '-1', component: <About key={1} /> },
  { section: 'experiences', position: '20', component: <Experiences key={2} /> },
  { section: 'education', position: '41', component: <Education key={3} /> },
  { section: 'projects', position: '62', component: <Projects key={4} /> },
  { section: 'contact', position: '82', component: <Contact key={5} /> },
];
