import { MarginYEnum } from '@/enums';
import { projectsData } from '@/utils/projects-data';
import Image from 'next/image';
import Link from 'next/link';
import { ShadowCard } from '../cards';
import { Heading } from '../typography';
import './index.css';

export default function Projects() {
  return (
    <>
      <Heading text='Projects' />
      <div className='flex flex-col gap-10'>
        {projectsData.map((item, index) => (
          <ShadowCard marginY={MarginYEnum.my0} key={index}>
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
