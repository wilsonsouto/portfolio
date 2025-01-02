import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '@app/core/components/header/header.component';
import { AboutComponent } from '@app/core/components/main/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, AboutComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
