import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DateSpanComponent } from '@app/shared/components/date-span/date-span.component';
import { SectionTitleComponent } from '@app/shared/components/section-title/section-title.component';

interface Experience {
  company: {
    name: string;
    href: string;
  };
  startDate: string;
  endDate: string;
  role: string;
  responsabilities: string[];
  stacks: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, DateSpanComponent],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: {
        name: 'Intervalor',
        href: 'https://intervalor.com.br/',
      },
      startDate: '2023',
      endDate: 'Present',
      role: 'Software Developer',
      responsabilities: [
        'Developed AI-powered chatbots that integrate with services utilizing the OpenAI API, boosting user engagement and automating interactions.',
        'Developed and maintained scalable and high-performance RESTful APIs, improving system efficiency and reliability.',
        'Contributed to the operation and continuous optimization of microservices, ensuring seamless data flow and high efficiency in large-scale systems.',
        'Reduced RabbitMQ queue size by up to 60% with a simple, effective solution, optimizing data flow and improving operational efficiency.',
        'Administered SQL and NoSQL databases, including MySQL and Redis, to manage and store data efficiently.',
        'Utilized containerization tools like Docker to ensure efficient deployment and scalability of applications.',
        'Performed in-depth system analysis and troubleshooting to identify and resolve performance bottlenecks, ensuring optimal system operation.',
      ],
      stacks: [
        '.NET',
        'C#',
        'Object-Oriented Programming (OOP)',
        'ASP.NET Core',
        'Entity Framework (EF) Core',
        'Model-View-Controller (MVC)',
        'Microservices',
        'Event-driven',
        'Domain-Driven Design (DDD)',
        'REST APIs',
        'GraphQL',
        'RabbitMQ',
        'Elasticsearch',
        'MySQL',
        'Redis',
        'Docker',
        'Kubernetes',
        'Jenkins',
        'Git',
        'Test-Driven Development (TDD)',
        'Postman',
        'Grafana',
        'Consul'
      ],
    },
    {
      company: {
        name: 'IBM',
        href: 'https://www.ibm.com/br-pt',
      },
      startDate: '2021',
      endDate: '2022',
      role: 'Developer Intern',
      responsabilities: [
        'Developed innovative solutions using IBM Watson Assistant, IBM Cloud, and IBM Storage, enhancing system efficiency.',
        'Created clean, maintainable, and scalable software components in C# by applying object-oriented programming principles.',
        'Enhanced data management and CRUD operations by integrating SQL Server and Entity Framework into ASP.NET Core.',
        'Built and tested responsive, user-friendly web applications using Angular, TypeScript, HTML, and CSS/SASS, improving user experience and interface design.',
        'Actively participated in Agile sprint meetings, contributing to planning, execution, and code review processes.',
      ],
      stacks: [
        'IBM Watson Assistant',
        'IBM Cloud',
        'IBM Storage',
        '.NET',
        'C#',
        'Object-Oriented Programming (OOP)',
        'ASP.NET Core',
        'Entity Framework (EF) Core',
        'Model-View-Controller (MVC)',
        'SQL Server',
        'Angular',
        'TypeScript',
        'HTML',
        'CSS',
        'SASS',
        'Git',
        'Postman',
        'User Interface (UI)',
        'User Experience (UX)'
      ],
    },
  ];
}
