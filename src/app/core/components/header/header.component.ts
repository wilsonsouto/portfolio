import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationLinkComponent } from '@app/shared/components/navigation-link/navigation-link.component';
import { SectionHeadingComponent } from '@app/shared/components/section-heading/section-heading.component';
import * as data from '@public/resume-data.json';

interface Contact {
  label: string;
  url?: string;
  icon: string;
  type: string;
}

interface Props {
  name: string;
  description: string;
  location: {
    place: string;
    url: string;
  };
  contact: Contact[];
  image: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavigationLinkComponent, SectionHeadingComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public header: Props[] = [
    {
      name: data.header.name,
      description: data.header.description,
      location: {
        place: data.header.location.place,
        url: data.header.location.url,
      },
      contact: data.header.contact,
      image: data.header.image,
    },
  ];

  printResume() {
    window.print();
  }
}
