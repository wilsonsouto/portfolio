import { Component } from '@angular/core';
import { SectionTitleComponent } from '@app/shared/components/section-title/section-title.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionTitleComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  public introduction: string =
    'Dedicated and results-oriented Software Developer with expertise in systems analysis and development. Passionate about creating value by solving problems and building solutions. Proven track record at Intervalor in delivering high-quality, efficient software that drives business success';
}
