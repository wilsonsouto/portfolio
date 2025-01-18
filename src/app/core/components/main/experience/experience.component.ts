import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DateSpanComponent } from '@app/shared/components/date-span/date-span.component';
import { NavigationLinkComponent } from '@app/shared/components/navigation-link/navigation-link.component';
import { SectionHeadingComponent } from '@app/shared/components/section-heading/section-heading.component';
import * as data from '@public/resume-data.json';

interface Props {
  company: {
    name: string;
    url: string;
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
  imports: [
    CommonModule,
    SectionHeadingComponent,
    DateSpanComponent,
    NavigationLinkComponent,
  ],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  aboutData: Props[] = data.experience.map((experience) => ({
    company: {
      name: experience.company.name,
      url: experience.company.url,
    },
    startDate: experience.startDate,
    endDate: experience.endDate,
    role: experience.role,
    responsabilities: experience.responsibilities,
    stacks: experience.stacks,
  }));
}
