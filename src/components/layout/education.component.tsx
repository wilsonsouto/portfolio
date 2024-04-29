import { Heading, Paragraph, Subtitle } from '../typography';
import { ShadowCard } from '../cards';
import './index.css';

interface EducationProps {
  name: string;
  img: string;
  stacks?: {
    prop1: string;
    prop2: string;
    prop3: string;
    prop4: string;
    prop5: string;
    prop6: string;
    prop7?: string;
    prop8?: string;
  };
  course?: {
    prop1: string;
    prop2: string;
    prop3: string;
  };
}

export default function Education() {
  return (
    <>
      <Heading text='Education' />
      <Paragraph>
        I keep myself updated with online courses. My most recent academic experience was completing an Associate's
        degree.
      </Paragraph>
      <ShadowCard>
        <span className='absolute top-[-15px] w-44 rounded-full bg-accent-600 p-1 text-center text-neutral-100'>
          Associate's degree
        </span>
        <div className='pt-2'>
          <h3 className='font-bold'>Systems Analysis and Development</h3>
          <span>FIAP - 2022</span>
        </div>
      </ShadowCard>
      <div className='flex flex-col gap-8'>
        {skills.map((item, index) => (
          <div className='relative flex flex-col gap-4' key={index}>
            <Subtitle>{item.name}</Subtitle>
            <img className='absolute -left-10 top-1 h-6 w-6' src={item.img} alt='mouse' />
            <ul className='flex flex-col text-lg text-neutral-400'>
              {item.stacks && (
                <>
                  <li className='text-neutral-200'>{item.stacks?.prop1}</li>
                  <li className='mb-4'>{item.stacks?.prop2}</li>
                  <li className='text-neutral-200'>{item.stacks?.prop3}</li>
                  <li className='mb-4'>{item.stacks?.prop4}</li>
                  <li className='text-neutral-200'>{item.stacks?.prop5}</li>
                  <li className='mb-4'>{item.stacks?.prop6}</li>
                  {item.stacks?.prop7 && item.stacks.prop8 && (
                    <>
                      <li className='text-neutral-200'>{item.stacks?.prop7}</li>
                      <li>{item.stacks?.prop8}</li>
                    </>
                  )}
                </>
              )}
              {item.course && (
                <>
                  <li>
                    <a
                      target='_blank'
                      className='relative flex items-center gap-2 hover:text-neutral-200'
                      href={item.course.prop1}
                    >
                      <ArrowIcon />
                      Do Zero ao Fullstack
                    </a>
                  </li>
                  <li>
                    <a
                      target='_blank'
                      className='relative flex items-center gap-2 hover:text-neutral-200'
                      href={item.course.prop2}
                    >
                      <ArrowIcon />
                      C# Programação Orientada a Objetos
                    </a>
                  </li>
                  <li className='relative'>
                    <a
                      target='_blank'
                      className='relative flex items-center gap-2 hover:text-neutral-200'
                      href={item.course.prop3}
                    >
                      <ArrowIcon />
                      Web Design, UX/UI Design, HTML, CSS, JavaScript e React
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

function ArrowIcon() {
  return (
    <svg className='h-3 w-3' width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z'
        fill='currentColor'
      ></path>
    </svg>
  );
}

const skills: EducationProps[] = [
  {
    name: 'Skills',
    img: './img/elements/mouse.svg',
    stacks: {
      prop1: 'Front-end Development',
      prop2: 'HTML, CSS, SASS, JavaScript, TypeScript, TailwindCSS, React.js, Next.js',
      prop3: 'Back-end Development',
      prop4: 'Node.js, C#',
      prop5: 'Database',
      prop6: 'MySQL, MongoDB',
      prop7: 'Development Tools',
      prop8: 'Git, Postman, Jira',
    },
  },
  {
    name: 'Courses',
    img: './img/elements/book.svg',
    course: {
      prop1: 'https://lp.b7web.com.br/fullstack?utm_source=home',
      prop2: 'https://www.udemy.com/course/programacao-orientada-a-objetos-csharp/',
      prop3: 'https://www.origamid.com/',
    },
  },
  {
    name: 'Languagues',
    img: './img/elements/globe.svg',
    stacks: {
      prop1: 'Portuguese',
      prop2: 'Fluent',
      prop3: 'English',
      prop4: 'Advanced',
      prop5: 'Spanish',
      prop6: 'Basic',
    },
  },
];
