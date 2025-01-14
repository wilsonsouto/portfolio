import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationLinkComponent } from '@app/shared/components/navigation-link/navigation-link.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavigationLinkComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public title: string = 'Wilson Souto';
  public description: string =
    'Software Developer passionate about creating value by solving problems and building solutions';
  public location: { name: string; url: string }[] = [
    {
      name: 'São Paulo, SP, Brazil',
      url: 'https://www.google.com/maps/place/S%C3%A3o+Paulo',
    },
  ];
  public contactLinks: { name: string; url: string; icon: string }[] = [
    {
      name: 'Email',
      url: 'mailto:wilsonsouto@outlook.com.br',
      icon: 'fa-regular fa-envelope',
    },
    {
      name: 'Github',
      url: 'https://github.com/wilsonsouto',
      icon: 'fa-brands fa-github',
    },
    {
      name: 'Linkedin',
      url: 'https://linkedin.com/in/wilsonsouto',
      icon: 'fa-brands fa-linkedin',
    },
  ];
}
