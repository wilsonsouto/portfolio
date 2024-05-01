import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

interface ContactProps {
  href: string;
  icon: React.ElementType;
}

export const contactData: ContactProps[] = [
  {
    href: 'https://github.com/wilsonsouto',
    icon: FaGithub,
  },
  {
    href: 'https://linkedin.com/in/wilsonsouto',
    icon: FaLinkedin,
  },
  {
    href: 'mailto:wilsonsouto@outlook.com.br',
    icon: GrMail,
  },
];
