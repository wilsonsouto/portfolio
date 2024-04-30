import { contactData } from '@/utils/contact-data';
import { Heading, Paragraph } from '../typography';
import './index.css';

export default function Contact() {
  return (
    <>
      <Heading text='Contact' />
      <Paragraph>
        If you'd like to get in touch or just chat, feel free to contact me. I'm always open to new opportunities and
        conversations.
      </Paragraph>
      <ul className='flex items-center gap-4 text-2xl text-neutral-400'>
        {contactData.map((item, index) => (
          <li key={index}>
            <a className='hover:text-neutral-200' target='_blank' href={item.href}>
              {<item.icon />}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
