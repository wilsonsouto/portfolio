import { coursesData, languaguesData, skillsData } from '@/utils/education-data';
import Image from 'next/image';
import React, { ReactNode } from 'react';
import { ShadowCard } from '../cards';
import { Heading, Paragraph, Subtitle } from '../typography';
import './index.css';

export default function Education() {
  return (
    <>
      <Heading text='Education' />
      <Paragraph>
        I keep myself updated with online courses. My most recent academic experience was completing an Associate&apos;s
        degree.
      </Paragraph>
      <ShadowCard>
        <span className='absolute top-[-15px] w-44 rounded-full bg-accent-600 p-1 text-center text-neutral-100'>
          Associate&apos;s degree
        </span>
        <div className='pt-2'>
          <h3 className='font-bold'>Systems Analysis and Development</h3>
          <span>FIAP - 2022</span>
        </div>
      </ShadowCard>
      <div className='flex flex-col gap-4'>
        <ListContainer name='Skills' src='/img/elements/mouse.svg'>
          {skillsData.map((item, index) => (
            <ListItem key={index}>
              <li className='text-neutral-300'>{item.skill}</li>
              <li className='text-neutral-400'>{item.description}</li>
            </ListItem>
          ))}
        </ListContainer>
        <ListContainer name='Courses' src='/img/elements/book.svg'>
          {coursesData.map((item, index) => (
            <ListItem key={index}>
              <li className='text-neutral-400'>
                <a className='hover:text-neutral-300' target='_blank' href={item.link}>
                  {item.course}
                </a>
              </li>
            </ListItem>
          ))}
        </ListContainer>
        <ListContainer name='Languages' src='/img/elements/globe.svg'>
          {languaguesData.map((item, index) => (
            <ListItem key={index}>
              <li className='text-neutral-300'>{item.language}</li>
              <li className='text-neutral-400'>{item.nivel}</li>
            </ListItem>
          ))}
        </ListContainer>
      </div>
    </>
  );
}

interface ListContainerProps {
  name: string;
  src: string;
  children: ReactNode;
}

export const ListContainer = (props: ListContainerProps) => {
  return (
    <div className='relative flex flex-col gap-2'>
      <Subtitle>{props.name}</Subtitle>
      <Image width={24} height={24} className='absolute -left-10 top-1 h-6 w-6' src={props.src} alt={props.name} />
      {props.children}
    </div>
  );
};

interface ListItemProps {
  children: React.ReactNode;
}

export const ListItem = (props: ListItemProps) => {
  return <ul className='flex flex-col text-lg'>{props.children}</ul>;
};
