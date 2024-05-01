interface EducationProps {
  skill?: string;
  description?: string;
  course?: string;
  link?: string;
  language?: string;
  nivel?: string;
}

export const skillsData: EducationProps[] = [
  {
    skill: 'Front-end Development',
    description: 'HTML, CSS, SASS, JavaScript, TypeScript, TailwindCSS, React.js, Next.js',
  },
  {
    skill: 'Back-end Development',
    description: 'Node.js, C#',
  },
  {
    skill: 'Database',
    description: 'MySQL, MongoDB',
  },
  {
    skill: 'Development Tools',
    description: 'Git, Postman, Jira',
  },
];

export const coursesData: EducationProps[] = [
  {
    course: 'Do Zero ao Fullstack',
    link: 'https://lp.b7web.com.br/fullstack?utm_source=home',
  },
  {
    course: 'C# Programação Orientada a Objetos',
    link: 'https://www.udemy.com/course/programacao-orientada-a-objetos-csharp/',
  },
  {
    course: 'Web Design, UX/UI Design, HTML, CSS, JavaScript e React',
    link: 'https://www.origamid.com/',
  },
];

export const languagesData: EducationProps[] = [
  {
    language: 'Portuguese',
    nivel: 'Fluent',
  },
  {
    language: 'English',
    nivel: 'Advanced',
  },
  {
    language: 'Spanish',
    nivel: 'Basic',
  },
];
