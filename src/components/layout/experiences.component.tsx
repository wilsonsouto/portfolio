import { Heading, Paragraph, Subtitle } from '../typography';

interface ExperiencesProps {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  responsabilities?: {
    res1: string;
    res2: string;
    res3: string;
    res4: string;
    res5: string;
  };
  skills: string;
}

export default function Experiences() {
  return (
    <>
      <Heading text='Experiences' />
      {experiences.map((item, index) => (
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
              <li>{item.responsabilities?.res4}</li>
            </ul>
          )}
          <Paragraph>
            <span className='font-bold text-neutral-300'>Skills: </span>
            {item.skills}
          </Paragraph>
          {index !== experiences.length - 1 && <hr className='border-neutral-700 text-accent-600' />}
        </div>
      ))}
    </>
  );
}

const experiences: ExperiencesProps[] = [
  {
    company: 'Intervalor',
    role: 'Systems Analyst',
    startDate: 'May 2023',
    endDate: 'Present',
    description:
      'Acting as the sole responsible for the application developed in Node.js at a credit recovery company, leading all stages of the operation and continuous improvement of micro-services, responsible for managing data from third-party team reports, and ensuring the communication and functioning of messaging services. My responsibilities include:',
    responsabilities: {
      res1: "Developing and analyzing new projects within the application for each company client, focusing on the scalability and efficiency of the implemented solutions, according to each client's needs.",
      res2: 'Implementing new solutions and improvements in the application, always aiming to enhance its functionality, performance, usability, and the use of good security practices in data handling.',
      res3: 'Ensuring that information is inserted in the database and sent to internal and external APIs, prioritizing data integrity and security.',
      res4: 'Analyzing possible bugs, issues, or any eventualities in the application or database, working together and maintaining daily contact with the Business Intelligence team to identify, resolve, and prevent future issues.',
      res5: 'Actively participating in meetings or discussions to contribute insights and innovative ideas for application enhancement, collaborating with other teams or departments within the company.',
    },
    skills:
      'Node.js · TypeScript · JavaScript · Git · Postman · MySQL · Jira · RabbitMQ · Kubernetes · Jenkins · Jaeger · Kibana · MinIO · Grafana · MicroSIP',
  },
  {
    company: 'IBM',
    role: 'Future Club Intern',
    startDate: 'August 2021',
    endDate: 'Dezember 2022',
    description:
      'Engaging with a wide range of company tools and services, allowing for the creation of innovative and impactful solutions. One standout project is Pizzeria Donna, a landing page with a pizzeria-themed design, integrated with IBM Watson Assistant. This integration enabled the simulation of reports of domestic violence, using technology to promote awareness and aid for such a crucial issue.',
    skills:
      'JavaScript · HTML · CSS · IBM Watson Assistant · IBM Cognos Analytics · IBM LinuxONE · IBM Cloud · IBM Z · User Experience (UX) · User Interface (UI) · IBM Storage',
  },
  {
    company: 'RTM',
    role: 'Telecommunications Intern',
    startDate: 'May 2021',
    endDate: 'Jul 2021',
    description:
      'Providing technical support to clients, configuring and installing routers and voice equipment, as well as monitoring and managing network changes, and liaising with service providers to restore circuits in the event of failures or interruptions.',
    skills: 'Putty · Cacti · Topdesk · SolarWinds Orion',
  },
];
