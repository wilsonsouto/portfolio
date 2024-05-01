import { contactData } from '@/utils';
import { Heading, Paragraph } from '../typography';
import './index.css';

export default function Contact() {
  return (
    <>
      <Heading text='Contact' />
      <Paragraph>
        If you&apos;d like to get in touch or just chat, feel free to contact me. I&apos;m always open to new
        opportunities and conversations.
      </Paragraph>
      <ul className='flex items-center gap-4 text-2xl'>
        {contactData.map((item, index) => (
          <li className='text-neutral-400' key={index}>
            <a className='hover:text-neutral-300' target='_blank' href={item.href}>
              {<item.icon />}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
