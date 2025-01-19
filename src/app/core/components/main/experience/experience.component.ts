import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationLinkComponent } from '@app/shared/components/navigation-link/navigation-link.component';
import { SectionHeadingComponent } from '@app/shared/components/section-heading/section-heading.component';
import { TextElementComponent } from '@app/shared/components/text-element/text-element.component';
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
  display: {
    screen: boolean;
    print: boolean;
  };
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,
    SectionHeadingComponent,
    NavigationLinkComponent,
    TextElementComponent,
  ],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  experience: Props[] = data.experience.map((experience) => ({
    company: {
      name: experience.company.name,
      url: experience.company.url,
    },
    startDate: experience.startDate,
    endDate: experience.endDate,
    role: experience.role,
    responsabilities: experience.responsabilities,
    stacks: experience.stacks,
    display: {
      screen: experience.display?.screen,
      print: experience.display?.print,
    },
  }));
}
