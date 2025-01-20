import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationLinkComponent } from '@app/shared/components/navigation-link/navigation-link.component';
import { SectionHeadingComponent } from '@app/shared/components/section-heading/section-heading.component';
import { TextElementComponent } from '@app/shared/components/text-element/text-element.component';
import * as data from '@public/resume-data.json';

interface Contact {
  label: string;
  type: string;
  icon?: string;
  url?: string;
  display: {
    screen: boolean;
    print: boolean;
  };
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
  imports: [
    CommonModule,
    NavigationLinkComponent,
    SectionHeadingComponent,
    TextElementComponent,
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  header: Props[] = [
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

  printWindow(item: any): string | undefined {
    const findResume = this.header
      .map((x) => x.contact)
      .flat()
      .find((contact) => contact.label.toLowerCase().includes('resume'));

    if (findResume == item) {
      window.print();
    }

    return undefined;
  }
}
