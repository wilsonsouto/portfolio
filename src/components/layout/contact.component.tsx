import { Heading, Paragraph } from '../typography';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import './index.css';

interface ContactProps {
  href: string;
  icon: any;
}

export default function Contact() {
  return (
    <>
      <Heading text='Contact' />
      <Paragraph>
        If you'd like to get in touch or just chat, feel free to contact me. I'm always open to new opportunities and
        conversations.
      </Paragraph>
      <ul className='flex items-center gap-4 text-2xl text-neutral-400'>
        {contact.map((item, index) => (
          <li key={index}>
            <a className='hover:text-neutral-200' target='_blank' href={item.href}>
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

const contact: ContactProps[] = [
  {
    href: 'https://github.com/wilsonsouto',
    icon: <FaGithub />,
  },
  {
    href: 'https://linkedin.com/in/wilsonsouto',
    icon: <FaLinkedin />,
  },
  {
    href: 'mailto:wilsonsouto@outlook.com.br',
    icon: <GrMail />,
  },
];
