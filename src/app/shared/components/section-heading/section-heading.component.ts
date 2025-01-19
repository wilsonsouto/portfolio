import { Component, Input } from '@angular/core';

interface Props {
  text: string;
  ariaLabel: string;
  size: 'text-base' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl';
  divider: boolean;
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
    size: 'text-base',
    divider: false,
  };

  addClasses() {
    const hasDivider = this.props.divider
      ? 'print:border-b-[1px] print:border-black print:uppercase print:tracking-wider print:text-lg'
      : '';
    return `font-bold ${this.props.size} ${hasDivider}`;
  }
}
