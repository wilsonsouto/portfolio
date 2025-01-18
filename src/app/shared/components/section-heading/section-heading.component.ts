import { Component, Input } from '@angular/core';

interface Props {
  text: string;
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
  @Input() heading: Props = {
    text: '',
    size: 'text-2xl',
    border: false,
  };

  addClasses() {
    const hasBorder = this.heading.border
      ? 'print:border-b-[1px] print:border-black'
      : '';
    return `font-bold ${this.heading.size} ${hasBorder}`;
  }
}
