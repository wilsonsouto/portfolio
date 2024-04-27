interface ParagraphProps {
  text: string;
}

export default function Paragraph({ text }: ParagraphProps) {
  return <p className='w-10/12 text-lg dark:text-neutral-200'>{text}</p>;
}
