import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '@app/core/components/header/header.component';
import { AboutComponent } from '@app/core/components/main/about/about.component';
import { ExperienceComponent } from '@app/core/components/main/experience/experience.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, AboutComponent, ExperienceComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
