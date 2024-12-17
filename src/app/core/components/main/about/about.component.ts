import { Component } from '@angular/core';
import { ExperienceComponent } from '@app/core/components/main/experience/experience.component';
import { SectionTitleComponent } from '@app/shared/components/section-title/section-title.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionTitleComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent extends ExperienceComponent {
  public introduction: string[] = [
    'Dedicated and results-oriented Software Developer with expertise in systems analysis and development. Passionate about creating value by solving problems and building solutions. Proven track record at',
    'in delivering high-quality, efficient software that drives business success.',
  ];
}
