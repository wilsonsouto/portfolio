import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DateSpanComponent } from '@app/shared/components/date-span/date-span.component';
import { SectionTitleComponent } from '@app/shared/components/section-title/section-title.component';

interface Education {
  institution: {
    name: string;
    href: string;
  };
  startDate: string;
  endDate: string;
  degree: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, DateSpanComponent],
  templateUrl: './education.component.html',
})
export class EducationComponent {
  public educations: Education[] = [
    {
      institution: {
        name: 'FIAP',
        href: 'https://www.fiap.com.br/',
      },
      startDate: '2021',
      endDate: '2022',
      degree: " Associate's Degree in Systems Analysis and Development",
    },
  ];
}
