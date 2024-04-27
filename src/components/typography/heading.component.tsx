interface HeadingProps {
  text: string;
}

export default function Heading({ text }: HeadingProps) {
  return <h1 className='text-3xl font-extrabold tracking-wide'>{text}</h1>;
}
