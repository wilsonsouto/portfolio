import { useState } from 'react';

interface MenuProps {
  children: React.ReactNode;
}

export function Menu({ children }: MenuProps) {
  const [menu, setMenu] = useState(true);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <button onClick={toggleMenu}>
        <span
          className={`mx-auto my-1 block h-1 w-7 rounded-md bg-neutral-100 transition-all duration-300 ease-in-out ${
            menu ? '' : 'translate-y-2 rotate-45'
          }`}
        ></span>
        <span
          className={`mx-auto my-1 block h-1 w-7 rounded-md bg-neutral-100 transition-all duration-300 ease-in-out ${
            !menu && 'opacity-0'
          }`}
        ></span>
        <span
          className={`mx-auto my-1 block h-1 w-7 rounded-md bg-neutral-100 transition-all duration-300 ease-in-out ${
            menu ? '' : '-translate-y-2 -rotate-45'
          }`}
        ></span>
      </button>
      <ul
        className={`fixed ${menu ? 'hidden' : 'fixed'} left-0 top-[66px] flex w-full flex-col gap-4 rounded-b-md bg-neutral-700 py-4 text-end text-xl`}
      >
        {children}
      </ul>
    </>
  );
}
