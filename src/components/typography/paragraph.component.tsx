interface ParagraphProps {
  text: string;
}

export default function Paragraph({ text }: ParagraphProps) {
  return <p className='w-10/12 text-lg text-neutral-300'>{text}</p>;
}
