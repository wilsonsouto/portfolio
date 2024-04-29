import { Heading } from '../typography';
import { ShadowCard } from '../cards';
import Image from 'next/image';
import Link from 'next/link';
import './index.css';

interface ProjectsProps {
  project: string;
  description: string;
  href: string;
  src: string;
}

export default function Projects() {
  return (
    <>
      <Heading text='Projects' />
      <div className='flex flex-col gap-10'>
        {projects.map((item, index) => (
          <ShadowCard key={index}>
            <div className='relative'>
              <div className='absolute left-0 top-0 h-full w-full opacity-0 duration-500 hover:bg-neutral-950 hover:opacity-90'>
                <div className='absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col gap-4 px-6 py-2 text-center text-neutral-100'>
                  <h1 className='text-2xl'>{item.project}</h1>
                  <span className='max-md:hidden'>{item.description}</span>
                  <Link
                    className='mx-auto block rounded-full bg-zinc-900 p-1 px-10 hover:bg-zinc-800'
                    href={item.href}
                    target='_blank'
                  >
                    Check it out!
                  </Link>
                </div>
              </div>
              <Image
                priority={true}
                style={{ width: '1280px', height: '275px' }}
                className='bg-center object-cover'
                width={1080}
                height={720}
                src={item.src}
                alt={item.project}
              />
            </div>
          </ShadowCard>
        ))}
      </div>
    </>
  );
}

const projects: ProjectsProps[] = [
  {
    project: 'Pizzeria Donna',
    description:
      'A landing page designed to resemble a pizzeria, but in reality, it serves as a domestic violence hotline.',
    href: 'https://github.com/wilsonsouto/pizzeria-donna',
    src: '/img/background/pizzeria-donna.jpg',
  },
  {
    project: 'File Organizer',
    description: 'A simple script that organizes files based on their extensions.',
    href: 'https://github.com/wilsonsouto/file-organizer',
    src: '/img/background/file-organizer.jpg',
  },
  {
    project: 'Fake Blog',
    description:
      'Simulates a simple fake blog interface that fetches posts from the JSONPlaceholder API and allows users to add new posts.',
    href: 'https://github.com/wilsonsouto/fake-blog',
    src: '/img/background/fake-blog.jpg',
  },
];
