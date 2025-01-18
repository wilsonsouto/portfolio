import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Props {
  text: string;
  ariaLabel: string;
  type: 'paragraph' | 'list';
  width: 'max-w-md' | 'w-full';
}

@Component({
  selector: 'app-text-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-element.component.html',
})
export class TextElementComponent {
  @Input() props: Props = {
    text: '',
    ariaLabel: '',
    type: 'paragraph',
    width: 'w-full',
  };

  addClasses() {
    return `text-pretty text-base text-foreground/80 print:text-foreground ${this.props.width}`;
  }
}
