import { Component, Input } from '@angular/core';

interface Props {
  text: string | undefined;
  ariaLabel: string | undefined;
  url: string | undefined;
}

@Component({
  selector: 'app-navigation-link',
  standalone: true,
  imports: [],
  templateUrl: './navigation-link.component.html',
})
export class NavigationLinkComponent {
  @Input() props: Props = { text: '', ariaLabel: '', url: '' };
}
