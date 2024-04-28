import React from 'react';

interface ParagraphProps {
  children: React.ReactNode;
}

export default function Paragraph({ children }: ParagraphProps) {
  return <p className='relative text-lg text-neutral-300'>{children}</p>;
}
