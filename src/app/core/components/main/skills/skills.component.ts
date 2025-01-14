import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionHeadingComponent } from '@app/shared/components/section-heading/section-heading.component';

interface Props {
  topic: string;
  isVisible: boolean;
  stacks: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionHeadingComponent, CommonModule],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  skills: Props[] = [
    {
      topic: 'Languages',
      isVisible: false,
      stacks: ['C#', 'HTML', 'CSS/SASS', 'TypeScript', 'Bash (Shell)'],
    },
    {
      topic: 'Frameworks and Libraries',
      isVisible: false,
      stacks: [
        '.NET',
        'ASP.NET Core',
        'Entity Framework (EF) Core',
        'Angular',
        'Tailwind CSS',
      ],
    },
    {
      topic: 'Design Principles and Architecture',
      isVisible: false,
      stacks: [
        'SOLID',
        'Model-View-Controller (MVC)',
        'Domain-Driven Design (DDD)',
        'Microservices',
        'Event-driven Architecture (EDA)',
      ],
    },
    {
      topic: 'Integration and Messaging',
      isVisible: false,
      stacks: ['APIs (RESTful, HTTP, SOAP, GraphQL)', 'RabbitMQ'],
    },
    {
      topic: 'Data Management',
      isVisible: false,
      stacks: [
        'SQL (SQL Server, MySQL)',
        'NoSQL (MongoDB, Elasticsearch, Redis)',
      ],
    },
    {
      topic: 'DevOps and Containers',
      isVisible: false,
      stacks: ['Kubernetes', 'Jenkins', 'Docker'],
    },
    {
      topic: 'Operating Systems',
      isVisible: false,
      stacks: ['Linux (Ubuntu)', 'Windows'],
    },
    {
      topic: 'Development Tools and Methodologies',
      isVisible: false,
      stacks: [
        'Git',
        'Postman',
        'Test-Driven Development (TDD)',
        'Scrum',
        'Kanban',
      ],
    },
  ];

  toggleVisibility(index: number) {
    this.skills.forEach((skill, i) => {
      i === index
        ? (skill.isVisible = !skill.isVisible)
        : (skill.isVisible = false);
    });
  }
}
