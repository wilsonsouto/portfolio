import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public title: string = 'Wilson Souto';
  public description: string =
    'Software Developer 🚀 creating value by solving problems and building solutions';
  public location: { href: string; name: string }[] = [
    {
      href: 'https://www.google.com/maps/place/S%C3%A3o+Paulo',
      name: 'São Paulo, SP, Brazil',
    },
  ];
  public contactLinks: { href: string; name: string; icon: string }[] = [
    {
      href: 'mailto:wilsonsouto@outlook.com.br',
      name: 'Email',
      icon: 'fa-regular fa-envelope',
    },
    {
      href: 'https://github.com/wilsonsouto',
      name: 'Github',
      icon: 'fa-brands fa-github',
    },
    {
      href: 'https://linkedin.com/in/wilsonsouto',
      name: 'Linkedin',
      icon: 'fa-brands fa-linkedin',
    },
  ];
}
