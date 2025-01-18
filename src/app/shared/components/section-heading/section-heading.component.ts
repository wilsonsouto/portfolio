import { Component, Input } from '@angular/core';

interface Props {
  text: string;
  ariaLabel: string;
  size: 'text-xl' | 'text-2xl';
  border: boolean;
}

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [],
  templateUrl: './section-heading.component.html',
})
export class SectionHeadingComponent {
  @Input() props: Props = {
    text: '',
    ariaLabel: '',
    size: 'text-2xl',
    border: false,
  };

  addClasses() {
    const hasBorder = this.props.border
      ? 'print:border-b-[1px] print:border-black'
      : '';
    return `font-bold ${this.props.size} ${hasBorder}`;
  }
}
