import { MarginYEnum } from '@/enums';

interface ShadowCardProps {
  children: React.ReactNode;
  marginY: MarginYEnum;
}

export function ShadowCard(props: ShadowCardProps) {
  return (
    <div
      className={`${props.marginY} relative flex h-full w-[96%] flex-col rounded-sm bg-accent-200 p-4 text-neutral-900`}
    >
      <div className='absolute left-3 top-3 z-[-1] h-full w-full rounded-sm bg-neutral-950'></div>
      {props.children}
    </div>
  );
}
