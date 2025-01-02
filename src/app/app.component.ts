import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '@app/core/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title: string = 'Angular Starter Kit';
}
