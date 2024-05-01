import { aboutData } from '@/utils';
import { Heading, Paragraph } from '../typography';
import './index.css';

export default function About() {
  return (
    <>
      <Heading text='About' />
      <Paragraph>
        Hey <span className='wave'>👋🏻</span>, my name is Wilson Souto.
      </Paragraph>
      {aboutData.map((item, index) => (
        <Paragraph key={index}>{item.introduction}</Paragraph>
      ))}
    </>
  );
}
