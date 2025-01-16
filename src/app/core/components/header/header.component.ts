import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationLinkComponent } from '@app/shared/components/navigation-link/navigation-link.component';
import * as data from '@app/shared/data/resume-data.json';

interface Contact {
  label: string;
  url: string;
  icon: string;
}

interface Props {
  name: string;
  description: string;
  location: {
    place: string;
    url: string;
  };
  contact: Contact[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavigationLinkComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public headerData: Props[] = [
    {
      name: data.name,
      description: data.description,
      location: {
        place: data.location.place,
        url: data.location.url,
      },
      contact: data.contact,
    },
  ];
}
