'use client';
import React, { useState } from 'react';

export default function Header() {
  const [activeSection, setActiveSection] = useState('about');
  const [position, setPosition] = useState('0');

  const handleClick = (section: string, position: string) => {
    setActiveSection(section);
    setPosition(position);
  };

  return (
    <div className='m-auto flex max-w-7xl gap-52 px-10 py-20'>
      <header className='relative'>
        <nav className='fixed py-2'>
          <ul className={`flex min-w-36 flex-col gap-6 text-xl`}>
            <span
              style={{ top: `${position}%` }}
              className={`absolute left-0 -z-10 h-1/5 w-full rounded-md bg-accent-300 transition-all duration-300 ease-in-out`}
            ></span>
            {menu.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer px-4 duration-300 ${item.section === activeSection ? 'text-neutral-900' : 'hover:text-accent-300 dark:text-neutral-400'}`}
                onClick={() => handleClick(item.section, item.position)}
              >
                {item.section}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}

const menu = [
  { section: 'about', position: '0' },
  { section: 'experiences', position: '20' },
  { section: 'education', position: '41' },
  { section: 'projects', position: '62' },
  { section: 'contact', position: '82' },
];
