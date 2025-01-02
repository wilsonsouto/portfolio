import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-span',
  standalone: true,
  imports: [],
  templateUrl: './date-span.component.html',
})
export class DateSpanComponent {
  @Input() date: string = '';
}
