import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DateSpanComponent } from '@app/shared/components/date-span/date-span.component';
import { NavigationLinkComponent } from '@app/shared/components/navigation-link/navigation-link.component';
import { SectionHeadingComponent } from '@app/shared/components/section-heading/section-heading.component';
import * as data from '@public/resume-data.json';

interface Props {
  institution: {
    name: string;
    url: string;
  };
  startDate: string;
  endDate: string;
  degree: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    CommonModule,
    SectionHeadingComponent,
    DateSpanComponent,
    NavigationLinkComponent,
  ],
  templateUrl: './education.component.html',
})
export class EducationComponent {
  education: Props[] = [
    {
      institution: {
        name: data.education.institution.name,
        url: data.education.institution.url,
      },
      startDate: data.education.startDate,
      endDate: data.education.endDate,
      degree: data.education.degree,
    },
  ];
}
