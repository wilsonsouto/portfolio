import { Heading, Paragraph } from '../typography';
import './index.css';

interface AboutProps {
  introduction: string;
}

export default function About() {
  return (
    <>
      <Heading text='About' />
      <Paragraph>
        Hey <span className='wave'>👋🏻</span>, my name is Wilson Souto.
      </Paragraph>
      {about.map((item, index) => (
        <Paragraph key={index}>{item.introduction}</Paragraph>
      ))}
    </>
  );
}

const about: AboutProps[] = [
  {
    introduction:
      "I'm passionate about what I do and committed to delivering the best results. With experience in both front-end and back-end development, I've been able to tackle various challenges in the field of software development.",
  },
  {
    introduction:
      "I firmly believe that continuous learning is the key to becoming an exceptional professional. Moreover, I see technology as a powerful tool for solving problems and enhancing people's quality of life. My goal is to contribute to this mission through my work.",
  },
  {
    introduction:
      "Outside of work, I'm interested in philosophy, music, and chess. Oh, and I never say no to a good cup of coffee.",
  },
];
