interface MenuProps {
  menu: boolean;
  toggleMenu: () => void;
}

export function Menu(props: MenuProps) {
  return (
    <>
      <button onClick={props.toggleMenu}>
        <span
          className={`mx-auto my-1 block h-1 w-7 rounded-md bg-neutral-100 transition-all duration-300 ease-in-out ${
            props.menu ? '' : 'translate-y-2 rotate-45'
          }`}
        ></span>
        <span
          className={`mx-auto my-1 block h-1 w-7 rounded-md bg-neutral-100 transition-all duration-300 ease-in-out ${
            !props.menu && 'opacity-0'
          }`}
        ></span>
        <span
          className={`mx-auto my-1 block h-1 w-7 rounded-md bg-neutral-100 transition-all duration-300 ease-in-out ${
            props.menu ? '' : '-translate-y-2 -rotate-45'
          }`}
        ></span>
      </button>
    </>
  );
}
