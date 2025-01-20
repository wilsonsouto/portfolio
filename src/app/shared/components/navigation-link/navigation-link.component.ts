import { Component, Input } from '@angular/core';

interface Props {
  text: string | undefined;
  ariaLabel: string | undefined;
  url: string | undefined;
  bold?: boolean;
}

@Component({
  selector: 'app-navigation-link',
  standalone: true,
  imports: [],
  templateUrl: './navigation-link.component.html',
})
export class NavigationLinkComponent {
  @Input() props: Props = { text: '', ariaLabel: '', url: '', bold: false };

  addClasses() {
    const hasBold = this.props.bold ? 'font-bold' : 'font-normal';
    return `group text-base hover:underline print:underline print:hover:no-underline ${hasBold}`;
  }
}
