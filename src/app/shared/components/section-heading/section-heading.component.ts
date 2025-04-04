import { Component, Input } from '@angular/core';

interface Props {
  text: string;
  ariaLabel: string;
  size: 'text-base' | 'text-xl' | 'text-2xl';
  divider: boolean;
  isPrintHeader?: boolean;
  color: boolean;
}

@Component({
    selector: 'app-section-heading',
    imports: [],
    templateUrl: './section-heading.component.html'
})
export class SectionHeadingComponent {
  @Input() props: Props = {
    text: '',
    ariaLabel: '',
    size: 'text-base',
    divider: false,
    isPrintHeader: false,
    color: false,
  };

  addClasses() {
    const hasDivider = this.props.divider
      ? 'print:border-b-[1px] print:border-black print:uppercase print:tracking-wider print:text-lg'
      : '';
    const isPrintHeader = this.props.isPrintHeader ? 'print:text-3xl' : '';
    const hasColor = this.props.color ? 'screen:text-accent' : '';
    return `font-bold ${this.props.size} ${hasDivider} ${isPrintHeader} ${hasColor}`;
  }
}
