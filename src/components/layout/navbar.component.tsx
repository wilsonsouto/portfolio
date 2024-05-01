import { Menu } from '@/components/elements';
import { navbarData } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Navbar(props: NavbarProps) {
  const [position, setPosition] = useState('0');
  const [menu, setMenu] = useState(true);

  const handleClick = (section: string, position: string) => {
    props.setActiveSection(section);
    setPosition(position);
    setMenu(!menu);
  };

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <nav className='fixed z-50 p-2 max-md:left-0 max-md:top-0 max-md:w-full max-md:p-0'>
        <span
          style={{ top: `${position}%` }}
          className={`absolute left-0 -z-10 h-1/5 w-full rounded-md bg-accent-300 transition-all duration-300 ease-in-out max-md:hidden`}
        ></span>
        <div className='fixed left-0 top-0 hidden w-full flex-row items-center justify-between gap-2 p-4 text-2xl max-md:flex max-md:backdrop-blur-md'>
          <Link href='/' className='flex gap-2'>
            <Image alt='favicon' src='/img/elements/favicon.svg' width={35} height={35} />
            <span className='logo'>Portfolio</span>
          </Link>
          <Menu menu={menu} toggleMenu={toggleMenu} />
        </div>
        <ul
          className={` ${menu ? 'max-md:right-full' : 'max-md:right-0 '} flex flex-col gap-6 text-xl max-md:fixed max-md:top-16 max-md:z-50 max-md:w-full max-md:rounded-b-md max-md:bg-neutral-700 max-md:py-4 max-md:text-end max-md:duration-300`}
        >
          {navbarData.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer px-4 duration-300  ${item.section === props.activeSection ? 'text-neutral-900 max-md:text-neutral-100' : 'text-neutral-400 hover:text-neutral-300'}`}
              onClick={() => handleClick(item.section, item.position)}
            >
              {item.section}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
