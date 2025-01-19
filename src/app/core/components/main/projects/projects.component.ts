import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationLinkComponent } from '@app/shared/components/navigation-link/navigation-link.component';
import { SectionHeadingComponent } from '@app/shared/components/section-heading/section-heading.component';
import { TextElementComponent } from '@app/shared/components/text-element/text-element.component';
import * as data from '@public/resume-data.json';

interface Props {
  name: string;
  url: string;
  description: string;
  stacks: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    SectionHeadingComponent,
    NavigationLinkComponent,
    TextElementComponent,
  ],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  projects: Props[] = data.projects.map((project) => ({
    name: project.name,
    url: project.url,
    description: project.description,
    stacks: project.stacks,
  }));
}
