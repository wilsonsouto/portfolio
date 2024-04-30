import { experiencesData } from '@/utils/experiences-data';
import { Heading, Paragraph, Subtitle } from '../typography';

export default function Experiences() {
  return (
    <>
      <Heading text='Experiences' />
      {experiencesData.map((item, index) => (
        <div className='flex flex-col gap-4' key={index}>
          <Subtitle>
            {item.company} - {item.role}
          </Subtitle>
          <span className='italic text-neutral-400'>
            {item.startDate} - {item.endDate}
          </span>
          <Paragraph>{item.description}</Paragraph>
          {item.responsabilities && (
            <ul className='flex w-full list-inside list-disc flex-col gap-4 text-lg text-neutral-300'>
              <li>{item.responsabilities?.res1}</li>
              <li>{item.responsabilities?.res2}</li>
              <li>{item.responsabilities?.res3}</li>
              <li>{item.responsabilities?.res4}</li>
              <li>{item.responsabilities?.res5}</li>
            </ul>
          )}
          <Paragraph>
            <span className='font-bold text-neutral-300'>Skills: </span>
            {item.skills}
          </Paragraph>
          {index !== experiencesData.length - 1 && <hr className='border-neutral-700 text-accent-600' />}
        </div>
      ))}
    </>
  );
}
