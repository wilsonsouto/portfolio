interface SubtitleProps {
  children: React.ReactNode;
}

export default function Subtitle({ children }: SubtitleProps) {
  return <h3 className='text-xl font-semibold text-accent-300'>{children}</h3>;
}
