import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [],
  templateUrl: './section-heading.component.html',
})
export class SectionHeadingComponent {
  @Input() heading: string = '';
}
