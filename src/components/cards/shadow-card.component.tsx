interface ShadowCardProps {
  children: React.ReactNode;
}

export function ShadowCard({ children }: ShadowCardProps) {
  return (
    <div className='relative mt-4 flex h-full flex-col rounded-sm bg-accent-200 p-4 text-neutral-900'>
      <div className='absolute z-[-1] mt-2 h-full w-full rounded-sm bg-neutral-950'></div>
      {children}
    </div>
  );
}
