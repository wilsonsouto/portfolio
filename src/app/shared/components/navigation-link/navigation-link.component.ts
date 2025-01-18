import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-link',
  standalone: true,
  imports: [],
  templateUrl: './navigation-link.component.html',
})
export class NavigationLinkComponent {
  @Input() href: string | undefined = '';
  @Input() value: string | undefined = '';
}
