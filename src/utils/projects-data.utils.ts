interface ProjectsProps {
  project: string;
  description: string;
  href: string;
  src: string;
}

export const projectsData: ProjectsProps[] = [
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
      'Simulates a simple fake blog interface that fetches posts from the JSONPlaceholder API and allows users to\
      add new posts.',
    href: 'https://github.com/wilsonsouto/fake-blog',
    src: '/img/background/fake-blog.jpg',
  },
];
