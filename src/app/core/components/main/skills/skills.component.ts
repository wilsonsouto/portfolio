import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionTitleComponent } from '@app/shared/components/section-title/section-title.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionTitleComponent, CommonModule],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  public skills: string[] = [
    '.NET',
    'C#',
    'ASP.NET Core',
    'MVC',
    'Microservices',
    'REST APIs',
    'RabbitMQ',
    'SQL',
    'NoSQL',
    'Docker',
    'Angular',
    'TypeScript',
    'HTML',
    'CSS/SASS',
    'TailwindCSS',
  ];
}
