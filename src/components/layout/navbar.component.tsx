import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from '@/components/elements';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const arr = [
  { section: 'about', position: '-1' },
  { section: 'experiences', position: '20' },
  { section: 'education', position: '41' },
  { section: 'projects', position: '62' },
  { section: 'contact', position: '82' },
];

export function Navbar(props: NavbarProps) {
  const [position, setPosition] = useState('0');
  const [windowWidth, setWindowWidth] = useState(1280);

  const handleClick = (section: string, position: string) => {
    props.setActiveSection(section);
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
      {windowWidth >= 768 && (
        <nav className='fixed py-2'>
          <span
            style={{ top: `${position}%` }}
            className={`absolute left-0 -z-10 h-1/5 w-full rounded-md bg-accent-300 transition-all duration-300 ease-in-out`}
          ></span>
          <ul className={`flex flex-col gap-6 text-xl`}>
            {arr.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer px-4 duration-300 ${item.section === props.activeSection ? 'text-neutral-900' : 'text-neutral-300 hover:text-accent-300'}`}
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
          <Link href='/' className='flex items-center gap-2 text-2xl'>
            <Image alt='favicon' src='/img/elements/favicon.svg' width={35} height={35} />
            <span className='logo'>Portfolio</span>
          </Link>
          <Menu>
            {arr.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer px-4 duration-300 ${item.section === props.activeSection ? 'text-accent-300' : 'text-neutral-400 hover:text-neutral-200'}`}
                onClick={() => handleClick(item.section, item.position)}
              >
                {item.section}
              </li>
            ))}
          </Menu>
        </nav>
      )}
    </>
  );
}
